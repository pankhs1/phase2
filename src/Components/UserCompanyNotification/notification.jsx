import React,{ Component } from 'react';
import axios from 'axios';
import deepOrange from "@material-ui/core/colors/deepOrange";
import NotificationCard from './NotificationCard/NotificationCard'
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import {Link} from 'react-router-dom';
import FilterForm from '../Filter/FilterForm/FilterForm';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';
const styles={
  
    color: "#fff",
    backgroundColor: deepOrange[500]
  
};
const styless = theme => ({
  
  
    backgroundColor: theme.palette.common.white,
    color: white,
    
    fontSize: 20,
  
});
function  search(state)
  {
    console.log(state)
    return function(x)
    {
      if (state.profile==="Any" && state.CTC==="Any" && state.eligible==="Any")
      {
        return x;
      }
      else if (state.profile==="Any")
      {
        
      return (parseInt(x.CTC)<=parseInt(state.CTC));
      }
      else if (state.CTC==="Any")
      {
          return (x.profileName.toLowerCase()===state.profile.toLowerCase() )
      }
else
      return (x.profileName.toLowerCase()===state.profile.toLowerCase() && parseInt(x.CTC)<=parseInt(state.CTC));
    }
    
  }
export default class Notification extends Component
{
  constructor(props){
  super(props);
  this.state={
   a:[],isHovering: true,
   loading:true,profile:'Any',CTC:'Any',eligible:'Any'

  };
 this.apiUrl='https://5c1880f3cfe31000133b16d8.mockapi.io';

 this.handleFilters=this.handleFilters.bind(this);
  this.handleChange=this.handleChange.bind(this);
  }
 
  
  async componentDidMount() {
    const response = await axios.get(`${this.apiUrl}/CompanyDetails`);
    this.setState({
      a: response.data,
      loading:false
    });
    console.log(this.state.a);
    const { classes } = this.props;
    
  }
  handleFilters(e)
  {
   e.preventDefault();
   console.log("hii");
    const value="developer";
    this.setState(
      {
        text:value
      }
    );
    console.log(this.state.text)
  }
 handleChange(e)
 {
   
   this.setState(
     {
       [e.target.name]:e.target.value
     }
   )
  
 }
 
  render()
  {
   
    return (
<div>
      {
        this.state.loading &&
        <div style={{left:'400px',position:'fixed'}}>
        <Loader 
         type="Circles"
         left="200px"
         color="#00BFFF"
         height="500"	
         width="200"
      />   
      </div>
      }
      

      {
        !this.state.loading &&
<div style={{overflow:'hidden'}}>

      
      <div className="row">
      <div className="col-lg-10 mb-0 mt-1">
      <FormControl className="formControl ">
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Sort By 
          </InputLabel>
          <NativeSelect
            
            
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">Date Created</option>
            <option value={10}>CTC</option>
           
          </NativeSelect>
     
        </FormControl>
      </div>

      </div>
      <hr/>
      
     
      <div className="row" >
      
      <div className="col-lg-10" style={{backgroundColor:'#c3cfe2'}}>
     { this.state.a.filter(search(this.state)).map(c=>(
      
    
       
<div className="card card-shadowed m-2"  >

<div className="row">
<div className="col-lg-2">
 
  <div className="card-body">
 
  <Grid container >
          <Avatar style={styles}>{c.companyName.charAt(0)}</Avatar>
          
        </Grid>
        <Link to={{pathname:"/ShowCompanyDetails",
                    state:{a:c}
        
        }} >
        <Tooltip TransitionComponent={Zoom} title={

              <React.Fragment>
               
               <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    

    <p class="card-text mb-2" style={{fontSize:'20px'}}>{c.companyName}</p>
    <hr/>
    <p class="card-text mb-2"  style={{fontSize:'15px'}}>{c.jobDescription}</p>
    <hr/>
    <p class="card-text mb-2" style={{fontSize:'15px'}}>Applicable For {c.ApplicableFor}</p>
    
  </div>
</div>
              </React.Fragment>
            } placement="right-start" >
    <h5 className="card-title">{c.companyName}
    </h5>
    </Tooltip>
    

        </Link>
    <p className="card-text">{c.jobDescription}</p>
   
  </div>

  </div>
  <div className="col-lg-8"></div>
  <div className="col-lg-2  mt-4 pl-10">
  <h6>Profile:  {c.profileName}</h6>
  <h6>CTC:  {c.CTC} Lakh</h6>
  <h6>Eligible ?:  yes</h6>
  </div>
</div>


</div>

       
       
       

     ))
     }
      </div>
      

      <div className="col-lg-2">
        <FilterForm handleFilters={this.handleFilters} handleChange={this.handleChange} state={this.state} />
      </div>

      </div>
      
      </div>
  }
      </div>
      
    );
  }
  }





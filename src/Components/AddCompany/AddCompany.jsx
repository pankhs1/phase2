import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import '../../style.css';
import InputText from './Components/InputText/index';
import {validateAll} from 'indicative';
import Axios from 'axios';
import  config from './config'
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import AddCompanyForm from './AddCompanyForm/AddCompanyForm'
import { withStyles } from '@material-ui/core/styles';

 export default class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      companyName:'',
      companyUrl:'',
      profileName:'',
      CTC:'',
      jobDescription:'',
      ApplicableFor:'',
      isApptitude: false,
      isGd:false,
      isPi:false,
      Tonext:false,
      
      errors:{

      }
      
    };
    this.handleChange=this.handleChange.bind(this);
        this.handleRChange=this.handleRChange.bind(this);

    this.handleSubmit=this.handleSubmit.bind(this);
    this.apiUrl='https://5c1880f3cfe31000133b16d8.mockapi.io';
  }
  handleChange=(event)=>
  {
    
  
    this.setState({
       [event.target.name]:event.target.value
    });
    console.log(this.state.ApplicableFor);
   
  }
  handleRChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
   handleSubmit = async (event) => {
    event.preventDefault()
    // validating user data
    const data = this.state;
    const rules = {
      companyName: 'required|string',
      companyUrl: 'required|string',
      profileName:'required|string',
      CTC:'required|string'
      
     
    };

    const messages = {
      required: ' {{ field }} is required.'
      
    };

    try {
      await validateAll(data, rules, messages)

      try {
        const response = await Axios.post(`${this.apiUrl}/CompanyDetails`, {
          companyName: this.state.companyName,
          companyUrl: this.state.companyUrl,
          CTC:this.state.CTC,
          profileName:this.state.profileName,
          isApptitude:this.state.isApptitude,
          isGd:this.state.isGd,
          isPi:this.state.isPi,
          jobDescription:this.state.jobDescription,
          ApplicableFor:this.state.ApplicableFor
          
        })
        alert("success");
        
        this.setState({
          Tonext:true
        })
console.log(this.state);
      } catch (errors) {
        const formattedErrors = {};
        formattedErrors['email'] = errors.response.data['email'][0];
        this.setState({
          errors: formattedErrors
        });
      }
    } catch (errors) {
      const formattedErrors = {}
      errors.forEach(error => formattedErrors[error.field] = error.message)
      this.setState({
        errors: formattedErrors
      })
    }
    
  }



  render() {
    const {classes}=this.props;
    if (this.state.Tonext===true)
    {
      return<Redirect to={{pathname:'/StudentDetails',state:{s:this.state.Tonext} }}/>
    }
    return (
      <div>
      
     <AddCompanyForm state={this.state} handleChange={this.handleChange} handleRChange={this.handleRChange}
     handleSubmit={this.handleSubmit}/>
     </div>
    );
  }
}


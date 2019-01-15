import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import ApplicationForm from'./ApplicationForm/ApplicationForm';
import {Link} from 'react-router-dom';
import '../../style.css'
import { Divider} from 'semantic-ui-react'
const styles={
  
    color: "#fff",
    backgroundColor: deepOrange[500]
  
};
export default class CompanyDetails extends React.Component
{
  constructor(props){
  super(props);

  console.log(props.location.state.a);
  }
render()
{
  return (
<div className="row" style={{overflow:'hidden'}}>

<div className="col-lg-10" style={{backgroundColor:'#f5f7fa'}}>
<div className="card m-2 ">
<div className="card-body">

<span className="fa fa-star-o"></span>
<div>
<h6>
  Open
</h6>
<p>
Last Day to Apply
<br/>
  Visiting in some Days
</p>
</div>
</div>

</div>
<div className="card m-3 mr-0" >

  <div className="card-body  pt-0">
  <div className="row " style={{backgroundColor:'#c2e9fb'}}>
  <div className="col-lg-2">
  <Grid container >
          <Avatar style={styles}>N</Avatar>
          
        </Grid>
       </div>
       <div className="col-lg-10">
        <h5 className="card-title ml-2 ">{this.props.location.state.a.companyName}</h5>
        </div>
        </div>
        <p className="card-text">{this.props.location.state.a.jobDescription}</p>

  </div>


</div>
<div className="card m-3" >
<div className="row">
<div className="col-lg-2">
 
<h6  className="card-text m-2 companydetails " ><span className="fa fa-mail-forward"></span> Website</h6>
<Divider vertical></Divider>
</div>
<div className="col-lg-10">
<a>
<h6 className="card-text m-2 companydetails" > {this.props.location.state.a.companyUrl} </h6>
</a>
</div>




</div>

</div>
<div className="card m-3" >
<div className="row">
<div className="col-lg-2">

<h6 className="card-text m-2 companydetails " ><span className="fa fa-mail-forward"></span> Profile</h6>
</div>
<div className="col-lg-10">
<a>
<h6 className="card-text m-2 companydetails"> {this.props.location.state.a.profileName} </h6>
</a>
</div>




</div>

</div>
<div className="card m-3" >
<div className="row">
<div className="col-lg-2">

<h6 className="card-text m-2 companydetails" ><span className="fa fa-mail-forward"></span> CTC</h6>
</div>
<div className="col-lg-10">
<a>
<h6 className="card-text m-2 companydetails"> {this.props.location.state.a.CTC} </h6>
</a>
</div>




</div>

</div>
<div className="card m-3" >
<div className="row">
<div className="col-lg-2">

<h6 className="card-text m-2 companydetails" ><span className="fa fa-mail-forward"></span> Applicable For</h6>
</div>
<div className="col-lg-10">
<a>
<h6 className="card-text m-2 companydetails"> {this.props.location.state.a.ApplicableFor}  </h6>
</a>
</div>




</div>

</div>
<div className="card m-3" >
<div className="row">
<div className="col-lg-4">

<h6 className="card-text m-2 companydetails" ><span className="fa fa-mail-forward"></span> Eligible Branches</h6>
</div>
<div className="col-lg-10">
<a>
<h6 className="card-text m-2 companydetails"> </h6>
</a>
</div>




</div>

</div>
<div className="card m-3" >
<div className="row">
<div className="col-lg-4">

<h6 className="card-text m-2 companydetails" ><span className="fa fa-mail-forward"></span> Shortlisting Process</h6>
</div>
<div className="col-lg-10">
<a>
<h6 className="card-text m-2 companydetails">  </h6>
</a>
</div>




</div>

</div>
</div>

<div className="col-lg-2">

<ApplicationForm/>
</div>

</div>


  );
}

}

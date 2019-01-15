import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import {Link} from 'react-router-dom';
const styles={
  
    color: "#fff",
    backgroundColor: deepOrange[500]
  
};
const NotificationCard=(a)=>
((
  
  

  
 <div>
    
{
   
     a.map(c=>(
      
<div className="card m-2"  >
<div className="row">
<div className="col-lg-8">
 
  <div className="card-body">
  <Grid container >
          <Avatar style={styles}>N</Avatar>
          
        </Grid>
    <h5 className="card-title" onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}  >
          <Link to="/ShowCompanyDetails" >{c.companyName}</Link></h5>
    <p className="card-text">{c.jobDescription}</p>
    <Link to="/ShowCompanyDetails"><h1>hii</h1> </Link>
  </div>
  </div>
  <div className="col-lg-2 mt-3 pl-5">
  <h5>Profile:{c.profileName}</h5>
  <h5>CTC:{c.CTC}</h5>
  <h5>Eligible?:no</h5>
  
  </div>
</div>

</div>

      ))


}

</div>




        



));
export default NotificationCard;
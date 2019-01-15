import React from 'react';
import TextField from '@material-ui/core/TextField';
const styles=
{
  textField:
  {
    fontSize:50,
  }
}

const ApplicationForm=(props)=>
((
  
  
<div style={{overflow:'hidden'}}>
<form className="mt-4 ">
<div>
<h4>Application Form</h4>
<TextField label="Name"    disabled  defaultValue="pankaj"  className="mt-2"
style={{fontSize:'50px'}}/>
<TextField label="Branch"  defaultValue="pankaj" disabled className="mt-2"/>
<TextField label="Roll Number" disabled value="pankaj" className="mt-2"/>
<TextField label="10th Marks" disabled value="pankaj" className="mt-2"/>
<TextField label="CGPA" disabled value="pankaj" className="mt-2"/>
<TextField label="Mobile Number" disabled value="pankaj" className="mt-2"/>
<TextField label="Email ID" disabled value="pankaj" className="mt-2"/>
</div>
<div className="mt-4">
 <button style={{position:'fixed',bottom:'10px',width:'150px'}} type="button" className="btn btn-success ml-4"> Apply Now</button>
 </div>
</form>

</div>

 
));

export default ApplicationForm;
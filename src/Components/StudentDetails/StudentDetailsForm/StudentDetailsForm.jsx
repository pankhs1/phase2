import React from 'react';
import Navbar from '../../Navbar/index';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import '../../../style.css';
const StudentDetailsForm =({state,handleChange,handleMChange,tonext})=>
((

<div style={{overflow:'hidden'}}>
<Navbar tonext={tonext}/>

<div className="ml-5">
<div className="row mb-2 mt-2" style={{backgroundColor:'#eef1f5',width:'60%'}}>
<div className="col-lg-4">
<input type="checkbox"  />
</div>

<div className="col-lg-4">
Field
</div>
<div class="col-lg=2">

</div>
</div>

<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={state.name}
              
              disabled
              
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>Name &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField
disabled={state.name}
/>
</div>
</div>
<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={handleChange}
              disabled
              
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>Branch &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField

/>
</div>
</div>
<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={state.rollNumber}
              onChange={handleChange}
              name="rollNumber"
              disabled
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>Roll Number &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField
disabled={state.rollNumber}
/>
</div>
</div>
<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={state.tenth}
              onChange={handleChange}
              name="tenth"
              
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>10th Marks (%) &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField
placeholder="Enter Minimum marks Required"
disabled={!state.tenth}
onChange={handleMChange}
value={state.minTenth}
name="minTenth"
/>
</div>
</div>
<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={state.twelth}
              onChange={handleChange}
              name="twelth"
              
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>12th Marks(%) &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField
placeholder="Enter Minimum marks Required"
disabled={!state.twelth}
onChange={handleMChange}
value={state.minTwelth}
name="minTwelth"
/>
</div>
</div>
<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={state.CGPA}
              onChange={handleChange}
              name="CGPA"
              
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>Present CGPA &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField
placeholder="Enter Minimum CGPA Required"
disabled={!state.CGPA}
onChange={handleMChange}
value={state.minCGPA}
name="minCGPA"
/>
</div>
</div>
<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={state.mobileNumber}
              onChange={handleChange}
              name="mobileNumber"
              disabled
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>Mobile Number &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField
disabled={state.mobileNumber}
/>
</div>
</div>
<div className="row mt-2">
<div className="col-lg-2 ">
<formGroup>
<FormControlLabel
          control={
            <Checkbox
              checked={state.emailId}
              onChange={handleChange}
              name="emailID"
              disabled
            />
          }
          
        />

</formGroup>
</div>
<div className="col-lg-2 mt-2">
<span>Email Id &nbsp;</span>
</div>

<div className="col-lg-6">

<TextField
disabled={!state.emailID}
/>
</div>
</div>
<div className="row mb-2 mt-2" >
<div className="col-lg-8" style={{backgroundColor:'#eef1f5',width:'100%'}}>
<button aria-label="Left Align" className="btn btn-default">
<span  className="glyphicon glyphicon-check"></span>
</button>
</div>

<div className="col-lg-4 col-lg-offset-2" style={{float:'right'}}>
         <button  className="btn mr-2" >cancel</button>
        <button className="btn btn-success pl-2" >Save</button>
        
          </div>
</div>
 
</div>

</div>


));


export default StudentDetailsForm;
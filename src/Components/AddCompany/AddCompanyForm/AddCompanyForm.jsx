import React from 'react';
import Navbar from '../../Navbar/index';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import {Link} from 'react-router-dom';
import '../../../style.css';
const AddCompanyForm=({state,handleSubmit,handleChange,handleRChange})=>
(( 
   
   
   <div style={{overflow:'hidden'}}>
      <Navbar tonext={state.tonext}/>
      <h3 style={{paddingLeft:'10px',paddingTop:'15px'}}>Company Profile </h3>
      <form style={{marginTop:'20px'}}>
       <h5 style={{paddingLeft:'10px',fontWeight:'300'}}>Give Company Details here</h5>
      <div className="form-row ml-5  mb-3">
     
          <div className="form-group col-md-4 ">
                
                
                <TextField
                required
                label="company Name"
                 onChange={handleChange}
                 
                 
                  name="companyName"/>
                  {
                  state.errors['companyName'] &&
                  <div className="ml-2"> 
                  <small className="text-danger">{state.errors      ['companyName']}</small>
                  </div>
                        }
        
           </div>
          <div className="form-group col-md-4 " >
                <TextField
                required
                label="Company Url"
                  name="companyUrl"
                  onChange={handleChange}
                    
                  />
                  {
                          state.errors['companyUrl'] && 
                          <div className="ml-2">
                          <small className="text-danger">{state.errors['companyUrl']}</small>
                          </div>
                        }
        </div>
        </div>
        <div className="form-row ml-5 mb-3">
        <div  className="form-group col-md-4 " >
                     <TextField 
                     label="Visiting Date" 
                     type="Date"
                      defaultValue="2017-05-24"
                     />
        </div >
        <div  className="form-group col-md-4 ">
                 <TextField label="Last Date to Apply" 
                     type="Date"
                      defaultValue="2017-05-24"type="Date"/>
        </div>
          </div>
    
    <h5  style={{paddingLeft:'10px',fontWeight:300}} >Give Job Details here</h5>
         <div className="form-row ml-5 mb-3">
            
              <div className="form-group col-md-4">
              <TextField 
                    required
                   label="Profile name"
                      name="profileName"
                    onChange={handleChange}
                    
                />
                {
                  
                state.errors['profileName'] && 
                <div className="ml-2">
                <small className="text-danger">{state.errors['profileName']}</small>
                </div>
              }
              </div>
              <div className="form-group col-md-2 ">
            <TextField
               label="CTC"
            required
              name="CTC"
             onChange={handleChange}
             inputStyle={{fontSize:"50"}}
         />
         {
                state.errors['CTC'] && 
                <div className="ml-2">
                <small className="text-danger">{state.errors['CTC']}</small>
                </div>
              }
              </div>
              <div className="form-group col-md-4   ">
         <FormControl component="fieldset">
        <FormLabel component="legend">Applicable For</FormLabel>
        <RadioGroup
          aria-label="ApplicableFor"
          name="ApplicableFor"
          value={state.ApplicableFor}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="Training"
            control={<Radio color="primary" />}
            label="Training"
            labelPlacement="end"
            
          />
          <FormControlLabel
            value="Placement"
            control={<Radio color="primary" />}
            label="Placement"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Placement&Training"
            control={<Radio color="primary" />}
            label="Placement&Training"
            labelPlacement="end"
          />
         
        </RadioGroup>
      </FormControl>
      </div>
         </div>
         <div className="form-row ml-5 mt-0 ">
           <div className="form-group col-md-6 ">
         <TextField
           fullWidth
          label="Job Description"
          multiline
          rows="6"
          defaultValue="Default Value"
          name="jobDescription"
          margin="normal"
          onChange={handleChange}
          value={state.jobDescription}
        />
        </div>
         <div className="form-group col-md-4 ml-5 pl-5  ">
       <FormControl component="fieldset">
        <FormLabel component="legend">Selection Process</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.isApptitude}
                onChange={handleRChange('isApptitude')}
                value={state.isApptitude}
              />
            }
            label="Apptitude Test"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.isGd}
                onChange={handleRChange('isGd')}
                value={state.isGd}
              />
            }
            label="Group Discussion"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.isPi}
                onChange={handleRChange('isPi')}
                value={state.isPi}
              />
            }
            label="Personal Interview"
          />
        </FormGroup>
        
      </FormControl>
        </div>
        <div style={{float:'right',marginTop:'140px'}}>
         <button  className="btn mr-2" >cancel</button>
       
       <Link to={{pathname:"/StudentDetails"}}>
        <button className="btn btn-success pl-2" onClick={handleSubmit}>Next</button>
        </Link>
          </div>
        </div>
        
        </form>
        
        </div>
));


export default AddCompanyForm;
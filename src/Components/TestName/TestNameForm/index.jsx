import React from 'react';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
const TestNameForm=()=>
((

<div>
<div className="row m-2">
<div className="col-lg-6">
<TextField
                fullWidth
                required
                label="Test Name"
                placeholder="Unique Identification Name"
                name="testName"/>
</div>
<div className="col-lg-6">
<TextField      
                 fullWidth
                label="Test Image"
                name="testImage"/>
</div>


</div>
<div className="row m-2">
<div className="col-lg-6 ">
<TextField

                 fullWidth
                label="Description"
                placeholder="Enter Test Description"
                name="testDescription"/>
</div>
<div className="col-lg-6 col-lg-offset-4">
<TextField      
                 fullWidth
                label="Test Duration"
                name="testDuration"/>
</div>


</div>
<div className="row m-2">
 <div className="form-group col-md-4  ">
       <FormControl component="fieldset">
        
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
               
              />
            }
            label="Paid Test ?"
          />
          <FormControlLabel
            control={
              <Switch
               
              />
            }
            label="Published ?"
          />
         
        </FormGroup>
        
      </FormControl>
        </div>

</div>
<div style={{float:'left',marginTop:'140px'}}>
         <button  className="btn ml-2" >Back</button>
       
       
        <button className="btn btn-success ml-2" >Save</button>
        
          </div>

</div>


));

export default TestNameForm;
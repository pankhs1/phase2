import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
const FilterForm=(props)=>
((

<div >

<form  className="mt-5" >

<p > Filters:
       
        <i className="fa fa-search-plus mr-4" style={{fontSize:'24px'}}></i>
        
      </p>
  
<FormControl className="formControl col-lg-10 mb-5">
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Created
          </InputLabel>
          <NativeSelect
            
            
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">Last 30 Days</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
     
        </FormControl>
<FormControl className="formControl col-lg-10 mb-5">
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Due By
          </InputLabel>
          <NativeSelect
            
            
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">Any</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
     
        </FormControl>
      

      <FormControl className="formControl col-lg-10 mb-5">
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Profile
          </InputLabel>
          <NativeSelect
            value={props.state.profileName}
            onChange={props.handleChange}
            
            input={<Input name="profile" id="age-native-label-placeholder" />}
          >
            <option value="Any">Any</option>
            <option value={"Developer"}>Developer</option>
            <option value={"Tester"}>Tester</option>
            <option value={"Analyst"}>Analyst</option>
          </NativeSelect>
         
        </FormControl>



        <FormControl className="formControl col-lg-10 mb-5">
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            CTC
          </InputLabel>
          <NativeSelect
            
            value={props.state.CTC}
            onChange={props.handleChange}
            input={<Input name="CTC" id="age-native-label-placeholder" />}
          >
            <option value="Any">Any</option>
            <option value={5}>less than 5</option>
            <option value={10}>less than 10</option>
            <option value={15}>Above 10</option>
          </NativeSelect>
          
        </FormControl>



        <FormControl className="formControl col-lg-10 mb-5">
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Eligible
          </InputLabel>
          <NativeSelect
            value={props.state.eligible}
            onChange={props.handleChange}
            
            input={<Input name="eligible" id="age-native-label-placeholder" />}
          >
            <option value="Any">Any</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
            
          </NativeSelect>
          
        </FormControl>
</form>
</div>

));
export default FilterForm;
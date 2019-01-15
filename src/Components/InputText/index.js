import React from 'react';

const InputText=(props)=>
{
  return(
    <div>
 <label for={props.name}><b>{props.name}</b><b style={{color:'red'}}>*</b></label>
      <input type={props.type} className="form-control" id={props.name}  onChange={props.onChange} name={props.name}/>
      </div>
  );
}
export default InputText;
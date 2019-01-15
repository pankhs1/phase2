import React from 'react';
import { render } from 'react-dom';
import StudentDetailsForm from './StudentDetailsForm/StudentDetailsForm';
export default class StudentDetails extends React.Component
{
constructor(props)
{
super(props);
console.log(props.location.state.s)
this.state=

  {
    name:true,
    rollNumber:true,
    mobileNumber:true,
    emailId:true,
    tenth:false,
    twelth:false,
    CGPA:false,
    minTenth:null,
    minTwelth:null,
    minCGPA:null

  }
 

 this.handleChange=this.handleChange.bind(this);
 this.handleMChange=this.handleMChange.bind(this);
}
handleChange(e)
{
  console.log(e.target.name);
  let value=this.state[e.target.name]
  console.log(value)
  this.setState(
    {
      [e.target.name]:!value
    }
  )
  
  
}
handleMChange(e)
{
  this.setState(
    {
      [e.target.name]:[e.target.value]
    })
    console.log(e.target.value);
  
}
  render()
  {
    return(
      <StudentDetailsForm handleChange={this.handleChange} state={this.state} handleMChange={this.handleMChange} tonext={this.props.location.state.s}/>
    );
  }
}
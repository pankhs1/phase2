import React from 'react';
const navBar= ({tonext})=>
{
  let a="";
  let b="";
  if(tonext===true)
  {
     a="active";
  }
  else
  {
   b="active"
  }
  const msg="active";
  return (
    <div>
<ul className="nav nav-tabs active mt-20" style={{backgroundColor:'#eef1f5'}}>
  <li className="nav-item">
    <a className={`nav-link ${b}` } >Company Details</a>
  </li>
  
  <li className="nav-item">
    <a className={`nav-link ${a} `} >Student Details</a>
  </li>
</ul>
</div>
  );
}
export default navBar;
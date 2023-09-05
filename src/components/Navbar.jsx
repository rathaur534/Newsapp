import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import {PiListBold} from 'react-icons/pi';
function Navbar() {
  const { fetchnews } = useContext(MyContext);
  const [open,setOpen]=useState(false);
  const [value,setvalue]=useState("");
  function onChangeHandler(event)
  {
    setvalue(event.target.value);
  }
  function clickInputHandler()
  {          
    if(value.length===0)
       fetchnews("india");
    else{
      fetchnews(value);
      setvalue("");
    }
  } 

  function submithandler(event)
  {
        event.preventDefault();

    console.log(value);
        if(value.length===0)
        {
          fetchnews("india");
        }
        else{
          fetchnews(value);
          setvalue("");
        }

  }
  return (
    <nav>
      <div className="main-nav container flex">
        <PiListBold className='list_icon' onClick={()=>setOpen(!open)}/>
        <a href="#" className="company-logo" onClick={()=>fetchnews("India")}>
          <img src="data:image/jpeg;base64,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" alt="company-logo" />
        </a>
        <div>
          <ul className={` ${open?('open'):('nav-links')}`}>
            <li className="hover-link nav-item" onClick={()=>fetchnews("Sports")}>Sports</li>
            <li className="hover-link nav-item" onClick={()=>fetchnews("Politics")} >Politics</li>
            <li className="hover-link nav-item" onClick={()=>fetchnews("Science")} >Science</li>
            <li className="hover-link nav-item" onClick={()=>fetchnews("Finance")} >Finance</li>
            <li className="hover-link nav-item" onClick={()=>fetchnews("Technology")} >Technology</li>

          </ul>
        </div>
        <div className="search-box">
          <form onSubmit={submithandler}>
          <input type="text" className="input-news" placeholder="e.g Science" 
             value={value}
          onChange={onChangeHandler}
          />
          </form>
          <button className="search-button" onClick={clickInputHandler}>Search</button>
        
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
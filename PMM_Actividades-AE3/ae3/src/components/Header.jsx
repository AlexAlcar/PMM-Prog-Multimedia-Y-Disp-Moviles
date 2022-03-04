import React, { useState } from 'react';

const Header = ()=>{
    const [title,setTitle]=useState("Título");
    

    const handlerMouseOver=(target)=>{
        target.target.style.opacity=0.2;
    }

    const handlerMouseOut=(target)=>{
        target.target.style.opacity=1;
    }

    const handleDoubleClick=()=>{
        if(title=="Título")setTitle("Sorpresa!");
        else setTitle("Título");
    }

    return(
        <div className="header">
            <img src='logo192.png' onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut} onDoubleClick={handleDoubleClick}/>
            <h1>{title}</h1>
        </div>
    )
}

export default Header; 
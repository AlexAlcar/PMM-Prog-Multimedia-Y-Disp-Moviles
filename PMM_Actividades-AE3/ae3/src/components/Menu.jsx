import React, {useState} from 'react';


const menuItems = [{desc:'Google', link:'http://www.google.es',key:'google'},
                    {desc:'Forocoches', link:'http://www.forocoches.com',key:'roto2'},
                    {desc:'Marca', link:'http://www.marca.com',key:'marca'},
                    {desc:'Florida', link:'https://www.floridaoberta.com/login/index.php',key:'Florida'}]

const Menu = (props)=>{
    const [menu,setMenu]=useState(false);

    const handleClickMenu=()=>{
        setMenu(!menu);
    }
    const handleMouseOver=(target)=>{
        target.target.style.opacity=0.2;
    }
    const handleMouseOut=(target)=>{
        target.target.style.opacity=1;
    }
    return(
        <div className="Menu">
            <h2 onClick={handleClickMenu} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{props.titulo}</h2>
            {
                //Op ternario: Si menú es false no lo pinta
                menu?<ul>
                { 
                    menuItems.map((item)=>{return <li><a href={item.link}>{item.desc}</a></li>}) 
                }
                </ul>
                :null
            }                
            
        </div>
    )
}

export default Menu;
import { useState } from "react";
import Routing from "./Routing";
import { AiOutlineMenu,AiFillCloseCircle } from 'react-icons/ai';

const Routes = () => {
  const [open ,setOpen]=useState(close)    
     
    const route = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/portfolio', name: 'Portfolio' },
        { id: 5, path: '/contact', name: 'Contact'} 
      ]; 
     
    return (
        <div className="">

           <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
            {
           open===true?<AiFillCloseCircle/>:<AiOutlineMenu/>
            }
           </div>
           
          
    <ul className={`absolute md:static md:flex md:items-center md:justify-center text-xl lg:gap-8 md:gap-3 lg:text-2xl md:bg-transparent font-bold p-4 ${open? 'top-16':'-bottom-60'} bg-rose-500 rounded-xl`}>
    {
      route.map(route=><Routing key={route.id} route={route}>route:{route.length}</Routing>
)
    }
    </ul>
        </div>
    );
};

export default Routes;
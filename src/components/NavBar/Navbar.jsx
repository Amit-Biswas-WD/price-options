import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Filter", path: "/filter" },
        { id: 3, name: "Map", path: "/map" },
        { id: 4, name: "Reduce", path: "/reduce" },
        { id: 5, name: "Sort", path: "/sort" },
    ];
    

  return (
    <div className="">
        <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open ? <AiOutlineMenu className="text-2xl" /> : <IoCloseSharp className="text-2xl" />
            }
            
        </div>        
        <ul className="flex justify-between items-center">{
            routes.map(route => ( <Link key={route.id} route={route} ></Link> ))
        }</ul>
    </div>
  )
}

export default Navbar
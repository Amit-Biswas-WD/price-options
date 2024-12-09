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
    <div className="bg-gray-700 text-red-600 p-6">
        <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open ? <AiOutlineMenu className="text-2xl text-accent" /> : <IoCloseSharp className="text-red-700 text-2xl" />
            }
            
        </div>        
        <ul className={`md:flex absolute md:static justify-between items-center bg-gray-700 px-6 text-accent duration-1000 ${open ? "top-12" : "-top-60"}`}>{
            routes.map(route => ( <Link key={route.id} route={route} ></Link> ))
        }</ul>
    </div>
  )
}

export default Navbar
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {
  const [isActiveNavbar, setIsActiveNavbar] = useState (false)
  return (
  <>
    <header className="bg-white border-b border-gray-200  p-3 font-jost flex justify-between items-center px-4 lg:px-40">
      <div className="flex items-center gap-2">
        <button onClick={() => setIsActiveNavbar(true)} className="inline-block lg:hidden">
          <IoMdMenu size={28}/>
        </button>
        <h2 className="font-bold text-lg">Adida Cambodia</h2>
      </div>

      <ul className="hidden lg:flex items-center gap-4">
        <li>
          <NavLink to="/" clLinkssName="hover:underline decoration-secondary aria-[current=page]:text-blue-600">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="hover:underline decoration-secondary aria-[current=page]:text-blue-600">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:underline decoration-secondary aria-[current=page]:text-blue-600">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:underline decoration-secondary aria-[current=page]:text-blue-600">About</NavLink>
        </li>
      </ul>

        <div className="flex items-center gap-3">
          <button className="hover:text-yellow-600">
            <CiHeart size={28}/>
          </button>
          <button className="hover:text-yellow-600">
            <CiUser  size={28}/>
          </button>
          <button className="hover:text-yellow-600">
            <CiShoppingBasket size={28}/>
          </button>
      </div>
    </header>

    <header className={`${isActiveNavbar ? '-left-0' : '-left-full'} absolute transition-all duration-300 ease-in-out top-0 z-[999] pt-8 px-4 w-[260px] bg-primary text-white min-h-screen`}>
      <div  className="flex justify-end">
        <button onClick={() => setIsActiveNavbar(false)} className="p-2 border border-white border-dashed rounded-full hover:bg-gray-700">
          <IoIosClose size={28}/>
        </button>
      </div>

      <div className="flex flex-col mt-4">
        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+Home</a>
        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+Products</a>
        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+Contact</a>
        <a href="" className="hover:bg-gray-700 p-2 rounded-lg transition-all">+About</a>
      </div>
    </header>
  </>
  );
}

export default Header

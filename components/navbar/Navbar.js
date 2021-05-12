import Button from '../Button'
import Content from '../Content'
import NavItemList from './NavItemList'
import { Data } from "./Data";
import Logo from '../logo/Logo';
import Nav from './Nav';
import Burger from './Burger';
import React, { useState } from 'react';


const Navbar = () => {

  
const [isActive, setActive] = useState(false);

const toggleClass = () => {
  setActive(!isActive);
};




  return (
    <Nav variant="lg:bg-gray-900 bg-white" className="lg:text-white text-gray-900">
      <Content>
        <div className="lg:flex lg:justify-between lg:items-center">
        <div className="flex py-3 justify-between items-center lg:flex-row relative">
          <Logo className="text-red-400" />
          <Burger onClick={toggleClass} className="lg:hidden visible relative z-50 " />
          </div>
          <div className= {isActive ? "visible h-screen" : "invisible"}>
          <div className="lg:flex-row 
            flex-col
            flex
             items-center
              lg:visible
               lg:relative
                absolute
                 lg:bg-transparent
                  bg-new-blue
                   top-0
                    lg:w-auto
                     w-full
                      left-0
                       h-screen
                        lg:h-auto
                        border-green-500
                        border-2 
                        justify-center
                        ">
                          
            <NavItemList className="border-2 text-white border-red-500 w-1/2 text-lg lg:text-sm lg:w-full flex lg:flex-row flex-col" NavData={Data} />
            <Button variant="bg-new-green lg:mt-0 mt-10 w-1/2 lg:w-1/1 " title="login" />
            </div>
          </div>
       </div>
      </Content>
    </Nav>
  )
}

export default Navbar

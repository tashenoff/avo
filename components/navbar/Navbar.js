import Button from '../Button'
import Content from '../Content'
import NavItemList from './NavItemList'
import { Data } from "./Data";
import Logo from '../logo/Logo';
import Nav from './Nav';
import Burger from './Burger';
import React from 'react'
const Navbar = () => {
  return (
    <Nav variant="lg:bg-gray-900 bg-white" className="lg:text-white text-gray-900">
      <Content>
        <div className="flex py-3 justify-between items-center lg:flex-row">
          <Logo className="text-red-400" />
          <Burger onClick={()=>{console.log('click')}} className="lg:hidden visible "/>
          <div className="lg:flex-row hidden flex-col lg:flex items-center lg:visible lg:relative absolute lg:bg-transparent bg-new-blue top-0 lg:w-auto w-full left-0 h-screen lg:h-auto">
            <NavItemList className="flex lg:flex-row flex-col" NavData={Data} />
            <Button variant="bg-new-green" title="login" />
          </div>
        </div>
      </Content>
    </Nav>
  )
}

export default Navbar

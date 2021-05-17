import React from 'react'
import NavItem from './NavItem'
const NavItemList = ({ NavData, className }) => {

    return (
        <div className={className}>
            {NavData.map((item, index) => {
                return (
                    <NavItem className="w-full" link={item.link} label={item.label} />
                );
            })}

        </div>


    )
}

export default NavItemList

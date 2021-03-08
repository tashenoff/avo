import React from 'react'
import NavItem from './NavItem'
const NavItemList = ({ NavData, className }) => {

    return (
        <div className={className}>
            {NavData.map((item, index) => {
                return (
                    <NavItem link={item.link} label={item.label} />
                );
            })}

        </div>


    )
}

export default NavItemList

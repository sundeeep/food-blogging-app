import React from 'react'
import { navBar } from '../config/navigation.config'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material'

const NavBar = () => {
    return (
        <div className={styles.glassNavContainer}>
            {navBar.map((navItem, index) => {
                return (
                    <NavLink
                        to={navItem.link}
                        className={({isActive})=> isActive ?styles.activeNavItem :styles.navItem}
                    >
                        <IconButton>{navItem.Icon}</IconButton>
                        <p>{navItem.name}</p>
                    </NavLink>
                )
            })}
        </div>
    )
}

const styles = {
    glassNavContainer: "fixed bottom-[20px] z-10 bg-white/60 flex gap-5 px-7 py-1 rounded-full",
    navItem: "flex flex-col items-center text-blue-500 p-1 font-medium text-xs w-[70px]",
    activeNavItem: "flex flex-col items-center text-red-500 p-1 font-bold text-sm w-[70px]",
}

export default NavBar
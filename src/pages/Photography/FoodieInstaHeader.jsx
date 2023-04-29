import React from 'react'
import CameraEnhanceRoundedIcon from "@mui/icons-material/CameraEnhanceRounded";
const FoodieInstaHeader = ({OpenEditModal}) => {
    return (
        <header className={styles.headerGlassWrapper}>
            {/* TODO: Logo */}
            <div className={styles.logoContainer}>
                <p className='font-normal text-lg bg-clip-text text-transparent bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6]'>
                    Foodie
                    <span className='font-bold'> Insta</span>
                </p>
            </div>
            {/* TODO: Search Bar */}
            <div className={styles.searchWrapper}></div>
            {/* TODO: Create Button and User Profile */}
            <div className={styles.createAndUserWrapper}>
                <button onClick={OpenEditModal}
                    className={styles.createButton}>
                    <span><CameraEnhanceRoundedIcon className="text-white"/></span>
                    <p>Create</p>
                </button>

                <div className={styles.userProfileWrapper}>
                    <img className={styles.userProfileImage} src="https://media.licdn.com/dms/image/C5603AQH-leGj9lP6aQ/profile-displayphoto-shrink_400_400/0/1602593856364?e=1687996800&v=beta&t=yzvCleX0MhhC0R80XWcEwBx6Ux-XSrCImQTQU6nKdW4" alt="" />
                </div>
            </div>
        </header>
    )
}

const styles = {
    headerGlassWrapper: "fixed top-[10px] rounded-full h-[60px] w-[98vw] mx-auto bg-white/60 flex items-center justify-between px-7",
    logoContainer: "bg-white/50 px-3 py-1 rounded-full",
    searchWrapper: "",
    createAndUserWrapper: "flex gap-3 items-center justify-center",
    createButton: "flex items-center gap-2 px-3 py-1 bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] text-white font-semibold uppercase leading-lg rounded-lg",
    userProfileWrapper: "h-[40px] w-[40px] bg-white/80 p-[2px] flex items-center justify-center rounded-full cursor-pointer",
    userProfileImage:"h-full w-full object-cover rounded-full cursor-pointer",
    

}

export default FoodieInstaHeader
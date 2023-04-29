import React from 'react'
import CameraEnhanceRoundedIcon from "@mui/icons-material/CameraEnhanceRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { SIGNOUT } from '../../redux/authSlice';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const FoodieInstaHeader = ({ OpenEditModal, userDetails, dispatch, signOut }) => {
    const navigate = useNavigate();
    const handleLogOut = async () => {
        await signOut(auth);
        dispatch(SIGNOUT());
        navigate("/login", {replace:true});
    }
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

                <div className="flex items-center">
                    <div className={styles.userProfileWrapper}>
                        <img className={styles.userProfileImage} src={userDetails?.photoURL} alt="" />
                    </div>
                    <div className='group flex flex-col gap-1 items-center'>
                        <h1 className='text-black font-semibold'>{userDetails?.displayName}</h1>
                        <button onClick={handleLogOut}
                            className="text-red-600 hover:text-red-800 text-sm"><LogoutIcon className="text-red-600 group-hover:text-red-800 text-sm" />Log Out</button>
                    </div>
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
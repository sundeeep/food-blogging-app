import React from 'react'
import GoogleIcon from "@mui/icons-material/Google";
import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SIGNIN } from '../../redux/authSlice'

const LogIn = () => {
    const navigate = useNavigate();
    const userDetails = useSelector((state) => state.googleAuth.userDetails);
    const dispatch = useDispatch();
    const [user, setUser] = React.useState();

    
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            dispatch(SIGNIN(user));
            console.log("User", userDetails);
            if (userDetails.accessToken) {
                navigate("/", {replace: true})
            }
        });
        

    const signInWithGoogle = async() => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        unsubscribe();
    }

    return (
        <div className={styles.gradientContainer}>
            <button onClick={signInWithGoogle}
                className={styles.signInWithGoogleButton}>
                <GoogleIcon className='text-[#EC4899]'/>
                Sign In With Google
            </button>
        </div>
    );
}
const styles = {
    gradientContainer:
        "h-[100vh] w-[100vw] bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] flex items-center justify-center",
    signInWithGoogleButton:"flex gap-2 items-center px-5 py-3 bg-indigo-700 hover:bg-indigo-900 text-white drop-shadow-xl font-semibold uppercase text-xl",
};

export default LogIn
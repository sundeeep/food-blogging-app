import React from 'react'
import UploadWidget from '../../components/UploadWidget'
import { IconButton } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from "uuid";
import { db } from '../../config/firebase.config';
import { useSelector } from 'react-redux';
const FoodieInstaCreator = ({ CloseModal}) => {
    const [cuisineType, setCuisineType] = React.useState();
    const [mealType, setMealType] = React.useState();
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [photosArray, setPhotosArray] = React.useState([]);

    const userDetails = useSelector((state) => state.googleAuth.userDetails);

    const handleCreatePost = async () => {
        await setDoc(doc(db, "foodie-insta", uuidv4()), {
            noOfPhotos: photosArray?.length,
            photosArray: photosArray,
            postedBy: userDetails.uid,
            datePosted: new Date(Date.now()),
            cuisineType: cuisineType,
            mealType: mealType,
            postTitle: title,
            postDescription: description,
        })
    }

    return (
        <div className={styles.foodieInstaCreatorWrapper}>
            <div className="flex items-center justify-between border border-transparent border-b-2 border-b-pink-500 pb-3">
            <h1 className="text-2xl font-bold">
                Create{" "}
                <span className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6]">
                Photography
                </span>{" "}
                Post
            </h1>
            <IconButton onClick={CloseModal}>
                <CancelIcon className="text-red-900" />
            </IconButton>
            </div>
            <input type="text" onChange={(e)=>setCuisineType(e.target.value)} className={styles.textField} placeholder="Enter Cuisine"/>
            <input type="text" onChange={(e)=>setMealType(e.target.value)} className={styles.textField} placeholder="Enter Meal Type"/>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} className={styles.textField} placeholder="Enter Title"/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} className={styles.textField} placeholder="Enter Description"/>
            <UploadWidget
                buttonText="Upload Images"
                photosArray={ photosArray}
                setPhotosArray={setPhotosArray}
            />
            <button onClick={handleCreatePost}
                className="bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] text-white font-semibold uppercase leading-lg rounded-lg px-3 py-1">Submit</button>
        </div>
    );
}

const styles = {
    foodieInstaCreatorWrapper: "flex flex-col px-3 py-5 gap-3",
    textField:"border border-zinc-700 rounded-lg focus:border-pink-700 outline-none p-3"
    
}

export default FoodieInstaCreator
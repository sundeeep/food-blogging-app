import React from 'react'
import UploadWidget from '../../components/UploadWidget'
import SingleTextEditor from '../../components/SingleTextEditor'
import MultiLineTextEditor from '../../components/MultiLineTextEditor';
import { IconButton } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";
const FoodieInstaCreator = ({ CloseModal}) => {
    return (
        <div className={styles.foodieInstaCreatorWrapper}>
            <div className='flex items-center justify-between border border-transparent border-b-2 border-b-pink-500 pb-3'>
                <h1 className="text-2xl font-bold">Create <span className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6]">Photography</span> Post</h1>
                <IconButton onClick={CloseModal}
                ><CancelIcon className='text-red-900' /></IconButton>
            </div>
            <SingleTextEditor label={"Cuisine Type"} variant={"outlined"} color={"secondary"}/>
            <SingleTextEditor label={"Meal Type"} variant={"outlined"} color={"secondary"}/>
            <SingleTextEditor label={"Title"} variant={"outlined"} color={"secondary"}/>
            <MultiLineTextEditor label={"Description"} color={"secondary"} variant={"outlined"} />
            <UploadWidget />
        </div>
    );
}

const styles = {
    foodieInstaCreatorWrapper: "flex flex-col px-3 py-5 gap-3",
    
}

export default FoodieInstaCreator
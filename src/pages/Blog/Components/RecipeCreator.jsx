import React from 'react'
import UploadWidget from "../../../components/UploadWidget"
import { IconButton } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from "uuid";
import { useSelector } from 'react-redux';


const RecipeCreator = ({ CloseModal }) => {

    const [ingredients, setIngredients] = React.useState([]);
    const [cookingSteps, setCookingSteps] = React.useState([]);
    const [cuisineType, setCuisineType] = React.useState();
    const [mealType, setMealType] = React.useState();
    const [carbs, setCarbs] = React.useState();
    const [protiens, setProtiens] = React.useState();
    const [fat, setFat] = React.useState();
    const [fibre, setFibre] = React.useState();
    const [vitaminsAndMinerals, setVitaminsAndMinerals] = React.useState();
    const [water, setWater] = React.useState();
    const [photosArray, setPhotosArray] = React.useState([]);
    const [videosArray, setVideosArray] = React.useState([]);
    

    console.log(ingredients);

    const onIngredientsChange = (event) => {
        setIngredients([...ingredients, event.target.value]);
    }

    const onCookingStepsChange = (event) => {
        setCookingSteps([...cookingSteps, event.target.value]);
    };

    const userDetails = useSelector((state) => state.googleAuth.userDetails);

    const handleCreateRecipe = async () => {
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
        <div className={styles.RecipeCreatorWrapper}>
            <div className="sticky top-0 bg-white flex items-center justify-between border border-transparent border-b-2 border-b-pink-500 pb-3">
                <h1 className="text-2xl font-bold">
                    Create{" "}
                    <span className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6]">
                    Recipe
                    </span>{" "}
                    Post
                </h1>
                <IconButton onClick={CloseModal}>
                    <CancelIcon className="text-red-900" />
                </IconButton>
            </div>

            <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-xl">1. Ingredients</h1>
                <button
                onClick={() => {
                    const ingredientDiv = document.querySelector("#ingredientDiv");
                    const input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("placeholder", "Add Ingredient");
                    input.onclick = onIngredientsChange;
                    input.setAttribute(
                    "class",
                    "border border-zinc-700 rounded-lg focus:border-pink-700 outline-none p-3 w-full"
                    );
                    return ingredientDiv.appendChild(input);
                }}
                className="bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] text-white font-semibold uppercase leading-lg rounded-lg px-3 py-1"
                >
                Add Ingredient
                </button>
            </div>
            <div id="ingredientDiv" className="w-full flex flex-col gap-3">
                <input
                type="text"
                onChange={onIngredientsChange}
                className={styles.textField}
                placeholder="Add Ingredient"
                />
            </div>
            </div>

            <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-xl">2. Cooking Steps</h1>
                <button
                onClick={() => {
                    const cookingStepsDiv =
                    document.querySelector("#cookingStepsDiv");
                    const input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("placeholder", "Add Cooking Step");
                    input.onclick = onCookingStepsChange;
                    input.setAttribute(
                    "class",
                    "border border-zinc-700 rounded-lg focus:border-pink-700 outline-none p-3 w-full"
                    );
                    return cookingStepsDiv.appendChild(input);
                }}
                className="bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] text-white font-semibold uppercase leading-lg rounded-lg px-3 py-1"
                >
                Add Cooking Step
                </button>
            </div>
            <div id="cookingStepsDiv" className="w-full flex flex-col gap-3">
                <input
                type="text"
                onChange={onCookingStepsChange}
                className={styles.textField}
                placeholder="Add Cooking Step"
                />
            </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-xl">3. Cuisine & Meal Type</h1>
                <input
                type="text"
                onChange={(e) => setCuisineType(e.target.value)}
                className={styles.textField}
                placeholder="Enter Cuisine"
                />
                <input
                type="text"
                onChange={(e) => setMealType(e.target.value)}
                className={styles.textField}
                placeholder="Enter Meal Type"
                />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-xl">4. Nutrients</h1>
                <input
                type="text"
                onChange={(e) => setCarbs(e.target.value)}
                className={styles.textField}
                placeholder="Carbs"
                />
                <input
                type="text"
                onChange={(e) => setProtiens(e.target.value)}
                className={styles.textField}
                placeholder="Protiens"
                />
                <input
                type="text"
                onChange={(e) => setFat(e.target.value)}
                className={styles.textField}
                placeholder="Fat"
                />
                <input
                type="text"
                onChange={(e) => setFibre(e.target.value)}
                className={styles.textField}
                placeholder="Fibre"
                />
                <input
                type="text"
                onChange={(e) => setVitaminsAndMinerals(e.target.value)}
                className={styles.textField}
                placeholder="Vitamins & Minerals"
                />
                <input
                type="text"
                onChange={(e) => setWater(e.target.value)}
                className={styles.textField}
                placeholder="Water"
                />
            </div>
            

            <UploadWidget
                mediaArray={photosArray}
                buttonText = "Upload Photos"
            />

            <UploadWidget
                mediaArray={videosArray}
                buttonText = "Upload Videos"
            />
            <button
            onClick={handleCreateRecipe}
            className="bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] text-white font-semibold uppercase leading-lg rounded-lg px-3 py-1"
            >
            Submit
            </button>
        </div>
    );
}

const styles = {
    RecipeCreatorWrapper: "flex flex-col px-3 py-5 gap-3 h-[80vh] overflow-y-auto",
    textField:"border border-zinc-700 rounded-lg focus:border-pink-700 outline-none p-3 w-full"
    
}

export default RecipeCreator
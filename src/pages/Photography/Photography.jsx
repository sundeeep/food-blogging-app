import React from 'react'
import NavBar from '../../components/NavBar';
import FoodieInstaHeader from './FoodieInstaHeader';
import FoodieInstaHero from './FoodieInstaHero';
import FoodieInstaCreator from './FoodieInstaCreator';
import EditModal from '../../components/EditModal';
import { useDispatch, useSelector } from "react-redux";
import {
  signOut
} from "firebase/auth";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import FoodieInstaFeed from './FoodieInstaFeed';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton } from '@mui/material';
import AddModal from '../../components/AddModal';
import FoodieInstaDiplay from './FoodieInstaDiplay';

const Photography = () => {

  const [foodiePosts, setFoodiePosts] = React.useState();
  React.useEffect(() => {
    const getAllFoodiePosts = async() => {
      await getDocs(collection(db, "foodie-insta")).then((snapshot) => setFoodiePosts(snapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      })))
    }
    getAllFoodiePosts();
  }, [])
  React.useEffect(() => {
  }, [foodiePosts])

  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isAddModalOpen, setIsAddModlOpen] = React.useState(false);
  const userDetails = useSelector((state) => state.googleAuth.userDetails);
    function OpenEditModal() {
      setIsEditModalOpen(true);
    }
    function OpenAddModal() {
      setIsAddModlOpen(true);
    }
    function CloseEditModal() {
      setIsEditModalOpen(false);
  }
  function CloseAddModal() {
    setIsAddModlOpen(false);
  }
  return (
    <div className={styles.gradientContainer}>
      <FoodieInstaHeader
        OpenEditModal={OpenEditModal}
        userDetails={userDetails}
        dispatch={dispatch}
        signOut={signOut}
      />
      <div className={styles.glassContainer}>
        <FoodieInstaHero />
        <div className="flex flex-wrap items-center justify-evenly gap-3 p-5 w-[100%]">
          {foodiePosts?.map((foodiePost) => {
            return (
              <div
                key={foodiePost.id}
                className="basis-[30%] bg-white/70 text-black rounded-lg"
              >
                <div className="h-[500px] w-[100%]">
                  <img
                    className="h-[100%] w-[100%] object-cover rounded-md"
                    src={foodiePost.photosArray[0].secure_url}
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <div>
                    <h1 className="text-lg">{foodiePost.postTitle}</h1>
                    <p className="text-sm">{foodiePost.postDescription}</p>
                  </div>

                  <div className="flex gap-2 bg-white rounded-full">
                    <input
                      type="text"
                      placeholder="Comment"
                      className="flex-1 outline-none border focus:border-pink-700 p-3 rounded-full"
                    />
                    <IconButton onClick={()=>OpenAddModal(foodiePost?.id)}>
                      <CommentIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <FoodieInstaFeed foodiePosts={foodiePosts} />
      </div>
      <NavBar />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        CloseEditModal={CloseEditModal}
      >
        <FoodieInstaCreator CloseModal={CloseEditModal} />
      </EditModal>

      <AddModal isAddModalOpen={isAddModalOpen} CloseAddModal={CloseAddModal}>
        <FoodieInstaDiplay CloseModal={CloseAddModal} />
      </AddModal>
    </div>
  );
}

const styles = {
  gradientContainer:
    "relative h-[100vh] w-[100vw] bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] flex flex-col items-center justify-center",
  glassContainer: "h-[90vh] overflow-y-auto w-[98%] bg-white/50 rounded-md flex flex-col items-stretch",
};

export default Photography
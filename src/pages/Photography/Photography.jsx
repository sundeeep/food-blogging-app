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


const Photography = () => {

  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const userDetails = useSelector((state) => state.googleAuth.userDetails);
    function OpenEditModal(name) {
      setIsEditModalOpen(true);
    }
    function CloseEditModal() {
      setIsEditModalOpen(false);
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
      </div>
      <NavBar />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        CloseEditModal={CloseEditModal}
      >
        <FoodieInstaCreator CloseModal={CloseEditModal} />
      </EditModal>
    </div>
  );
}

const styles = {
  gradientContainer:
    "relative h-[100vh] w-[100vw] bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] flex flex-col items-center justify-center",
  glassContainer: "h-[90vh] w-[98%] bg-white/50 rounded-md flex flex-col items-stretch",
};

export default Photography
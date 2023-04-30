import React from 'react'
import NavBar from "../../components/NavBar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import EditModal from "../../components/EditModal";
import RecipeCreator from './Components/RecipeCreator';

const Blog = () => {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  function OpenEditModal(name) {
    setIsEditModalOpen(true);
  }
  function CloseEditModal() {
    setIsEditModalOpen(false);
  }
  return (
    <div className={styles.gradientContainer}>
      <div className="flex flex-col gap-2">
        <Header OpenEditModal={OpenEditModal} />
        <Main />
      </div>
      <NavBar />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        CloseEditModal={CloseEditModal}
      >
        <RecipeCreator CloseModal={CloseEditModal} />
      </EditModal>
    </div>
  );
}

const styles = {
  gradientContainer:
    "h-[100vh] w-[100vw] bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] flex items-center justify-center",
  
};

export default Blog
import React from 'react'
import NavBar from '../../components/NavBar';

const Home = () => {
    return (
        <div className={styles.gradientContainer}>
            <div className={styles.glassContainer}>

            </div>
            <NavBar />
        </div>
    )
}

const styles = {
    gradientContainer: "h-[100vh] w-[100vw] bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6] flex items-center justify-center",
    glassContainer: "h-[96%] w-[98%] bg-white/50 rounded-md",
};

export default Home
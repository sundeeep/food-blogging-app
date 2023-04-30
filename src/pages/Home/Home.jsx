import React from 'react'
import NavBar from '../../components/NavBar';

const Home = () => {
    return (
        <div className={styles.gradientContainer}>
            <div className={styles.glassContainer}>
                <header>
                    <div></div>
                    <div className='h-[50vh] w-[100%]'>
                        <img src="" alt="" />
                    </div>
                </header>
                <main>
                    <section>

                    </section>
                </main>
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
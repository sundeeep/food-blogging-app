import { IconButton } from '@mui/material'
import React from 'react'
import RoundaboutRightRoundedIcon from "@mui/icons-material/RoundaboutRightRounded";
const FoodieInstaHero = () => {
    return (
        <main className = {styles.heroSectionOuterWrapper}>
            <section className = {styles.heroSectionInnerWrapper}>
                <div className = {styles.heroSectionHeadingsWrapper}>
                    <h1 className={styles.heroSectionHeading}>Help you find best <span className={styles.clipTextStyling}>Foodie Feed</span> in this Digital Town</h1>
                    <h3 className={styles.heroSectionSubHeading}>EE Sala Cuppu Namde</h3>
                </div>
                <div className = {styles.heroSectionFilteringWrapper}>
                    <div></div>
                    <IconButton className = {styles.heroSectionSearchButton}>
                        <RoundaboutRightRoundedIcon className='text-white'/>
                    </IconButton>
                </div>
            </section>
        </main>
    )
}

const styles = {
    heroSectionOuterWrapper: "h-[45vh] bg-white/60 w-[100%] pt-16 pb-7",
    heroSectionInnerWrapper: "w-[80%] mx-auto",
    heroSectionHeadingsWrapper:"w-[65%] flex flex-col items-start gap-2",
    heroSectionHeading: "font-semibold text-6xl ",
    clipTextStyling:"bg-clip-text font-bold text-transparent bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6]",
    heroSectionSubHeading: "font-normal",
    heroSectionFilteringWrapper: "flex items-center justify-between border-b-4 border-white p-3",
    heroSectionSearchButton:"bg-gradient-to-br from-[#EC4899] via-[#D946EF] to-[#14B8A6]",
}

export default FoodieInstaHero
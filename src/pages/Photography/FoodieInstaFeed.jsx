import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const FoodieInstaFeed = ({ foodiePosts}) => {
    return (
        <div>
            <div></div>
            {foodiePosts?.map((post) => {
                <div className='w-[500px]'>
                    <Carousel>
                        {post?.photoArray?.map((photo, index) => {
                            return (
                                <div key={photo?.public_id}>
                                    <img src={photo?.secure_url} alt="" />
                                    <p>{index+1}</p>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            })}
        </div>
    )
}

export default FoodieInstaFeed
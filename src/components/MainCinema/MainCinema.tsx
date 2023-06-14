import React from 'react'
import './MainCinema.css'

type MainCinemaProps = {
    title: string
    desc: string
    rating?: number
    image: string
}

const MainCinema = ({ title, desc, rating = 0, image }: MainCinemaProps) => {
    return (
        <div className="cinema d-f align-center">
            <div style={{width: "410px"}}>
                <h3 className="cinema-title">{title}</h3>
                <div className={rating === 0 ? "d-n" : "cinema-rating d-f"} >
                    <div><img src="images/star.png" alt="star" /></div>
                    <div><img src={rating > 1 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
                    <div><img src={rating > 2 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
                    <div><img src={rating > 3 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
                    <div><img src={rating > 4 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
                </div>
                <p className="cinema-desc">{desc}</p>
                <div className="cinema-actions d-f">
                    <button>Watch trailer</button>
                    <button>More details</button>
                </div>
            </div>
            <div><img src={image} alt="film" /></div>
        </div>
    )
}

export default MainCinema
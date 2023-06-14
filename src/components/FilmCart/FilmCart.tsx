import React from 'react'
import './FilmCart.css'

type FilmCartProps = {
    id: number
    image: string
    title: string
    genre: string
    year: number
    rating: number
    handleFilmId: (id: number) => void 
}


const FilmCart = ({id, image, title, genre, year, rating, handleFilmId}: FilmCartProps) => {
    return (
        <div className='film-cart d-f jc-sb' style={{ background: `url("${image}")` }} onClick={()=>handleFilmId(id)}>
            <div>
                <div className="film-cart-title">{title}</div>
                <div className="film-cart-genre">{genre} | {year}</div>
            </div>
            <div className={rating === 0 ? "d-n" : "film-cart-rating d-f"} >
                <div><img src="images/star.png" alt="star" /></div>
                <div><img src={rating > 1 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
                <div><img src={rating > 2 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
                <div><img src={rating > 3 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
                <div><img src={rating > 4 ? "images/star.png" : "images/star-outline.png"} alt="star" /></div>
            </div>
        </div>
    )
}

export default FilmCart
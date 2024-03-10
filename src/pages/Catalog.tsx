import React from 'react'
import './Catalog.css'
import { MoviesArr } from '../components/MoviesArr/MoviesArr'
import FilmCart from '../components/FilmCart/FilmCart'

const Catalog = () => {

    const [filmId, setFilmId] = React.useState(0)

    const handleFilmId = (id: number) => {
        setFilmId(id)
    }

    return (
        <main>
            <div className="cinemania-main">
                <h2 className="cinemania-main-title">Let's Make Your Own Cinema</h2>
                <p className="cinemania-main-desc">
                    Is a guide to creating a personalized movie theater experience.
                    You'll need a projector, screen, and speakers. Decorate your space,
                    choose your films, and stock up on snacks for the full experience.
                </p>
                <button>Get started</button>
            </div>
            <div className="catalog-search">
                <form action="" className="catalog-search-fm d-f">
                    <input type="text" name='searchQuery' placeholder='Search' />
                    <button type='button'><img src="images/search.png" alt="search" /></button>
                </form>
            </div>
            <div className="catalog-box d-f">
                {
                    MoviesArr.map((movie) => (
                        <FilmCart
                            id={movie.id}
                            image={movie.image}
                            title={movie.title}
                            genre={movie.genre}
                            year={movie.year}
                            rating={movie.rating}
                            handleFilmId={handleFilmId}
                        />
                    ))
                }
            </div>
            <div className="catalog-pages">
                <div className="catalog-pages-content d-f">
                    <button><img src="images/previous.png" alt="previous"/></button>
                    <div className="catalog-pages-item pages-item__active">01</div>
                    <div className="catalog-pages-item">02</div>
                    <div className="catalog-pages-item">03</div>
                    <div className="catalog-pages-item">...</div>                    
                    <div className="catalog-pages-item">24</div>
                    <button><img src="images/next.png" alt="next"/></button>
                </div>

            </div>

        </main>
    )
}

export default Catalog
import React from 'react'
import './Library.css'
import { MoviesArr } from '../components/MoviesArr/MoviesArr'
import FilmCart from '../components/FilmCart/FilmCart'

const Library = () => {
    const [filmId, setFilmId] = React.useState(0)
    const [moreFilms, setMoreFilms] = React.useState(false)

    const handleFilmId = (id: number) => {
        setFilmId(id)
    }

    const handleMoreFilms = () => {
        setMoreFilms((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <div className="cinemania-main library-main">
                <h2 className="cinemania-main-title">Create Your Dream Cinema</h2>
                <p className="cinemania-main-desc">
                    Is a guide to designing a personalized movie theater experience with the right equipment,
                    customized decor, and favorite films. This guide helps you bring the cinema experience
                    into your own home with cozy seating, dim lighting, and movie theater snacks.
                </p>
            </div>
            <div className="library-select">
                <form action="" className='library-select-fm'>
                    <select name="genre">
                        <option value="all">Genre</option>
                        <option value="romance">Romance</option>
                        <option value="detective">Detective</option>
                        <option value="thriller">Thriller</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                    </select>
                </form>
            </div>
            <div className="catalog-box d-f">
                {
                    moreFilms ?
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
                        :
                        MoviesArr.slice(0, 9).map((movie) => (
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
            <div className="library-action">
                <button onClick={handleMoreFilms}>{moreFilms ? "Show Less" : "Load more"}</button>
            </div>

        </main>
    )
}

export default Library
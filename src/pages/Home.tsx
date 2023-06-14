import React from 'react'
import './Home.css'
import FilmCart from '../components/FilmCart/FilmCart'
import MainCinema from '../components/MainCinema/MainCinema'
import { HomeMoviesArr} from '../components/MoviesArr/MoviesArr'

const Home = () => {

    const [filmId, setFilmId] = React.useState(0)

    const handleFilmId = (id: number) => {
        setFilmId(id)
    }

    return (
        <main>
            {filmId === 0 ?
                <div className="cinemania-main">
                    <h2 className="cinemania-main-title">Let's Make Your Own Cinema</h2>
                    <p className="cinemania-main-desc">
                        Is a guide to creating a personalized movie theater experience.
                        You'll need a projector, screen, and speakers. Decorate your space,
                        choose your films, and stock up on snacks for the full experience.
                    </p>
                    <button>Get started</button>
                </div>

                : filmId === 1 ?
                    <MainCinema
                        title='Ghosted'
                        rating={5}
                        desc="Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes 
                            the shocking discovery that she's a secret agent."
                        image='images/main-film1.png'
                    />
                    : filmId === 2 ?
                        <MainCinema
                            title='Quantumania'
                            rating={3}
                            desc="Super-Hero find themselves exploring the Quantum Realm, interacting with strange new creatures 
                                and embarking on an adventure that will push them beyond the limits of what they thought possible."
                            image='images/main-film2.png'
                        />
                        : filmId === 3 ?
                            <MainCinema
                                title='Evil dead rise'
                                rating={4}
                                desc="Evil Dead Rise is a 2023 American supernatural horror film written and directed by Lee Cronin. 
                                    It is the fifth installment of the Evil Dead film series. The film stars Lily Sullivan and Alyssa Sutherland 
                                    as two estranged sisters trying to survive and save their family from deadites. Morgan Davies, 
                                    Gabrielle Echols, and Nell Fisher (in her film debut) appear in supporting roles."
                                image='images/main-film3.png'
                            />
                            : <div className='d-n'></div>
            }

            <div className="cinemania-trends">
                <div className='d-f jc-sb'>
                    <h3 className="cinemania-trends-title">Weekly trends</h3>
                    <button className='cinemania-trends-action'>See all</button>
                </div>
                <div className="cinemania-trends-box d-f">
                    {
                        HomeMoviesArr. map((movie) => (
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
            </div>
            <div className="cinemania-upcoming">
                <h2 className="cinemania-upcoming-title">Upcoming this month</h2>
                <div className="cinemania-upcoming-box d-f jc-sb">
                    <div><img src="images/upcoming-film.png" alt="upcoming-film" /></div>
                    <div>
                        <h3 className="upcoming-info-title">The lost city</h3>
                        <div className="upcoming-info-box d-f">
                            <div className="upcoming-info-item d-f">
                                <div className="info-item-title">Release date</div>
                                <div className="info-item-content">03.03.2023</div>
                            </div>
                            <div className="upcoming-info-item d-f">
                                <div className="info-item-title">Vote / Votes</div>
                                <div className="info-item-content d-f">
                                    <div className='item-content-value'>7.3</div>
                                    <div>/</div>
                                    <div className='item-content-value'>12.60</div>
                                </div>
                            </div>
                            <div className="upcoming-info-item d-f">
                                <div className="info-item-title">Popularity</div>
                                <div className="info-item-content">99.9</div>
                            </div>
                            <div className="upcoming-info-item d-f">
                                <div className="info-item-title">Genre</div>
                                <div className="info-item-content">Comedy</div>
                            </div>
                        </div>
                        <div className="upcoming-info-desc">
                            <div className="info-desc-title">About</div>
                            <p className="info-desc-content">
                                Reclusive author Loretta Sage writes about exotic places in her popular adventure novels
                                that feature a handsome cover model named Alan. While on tour promoting her
                                new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes
                                she can lead him to an ancient city's lost treasure from her latest story.
                                Determined to prove he can be a hero in real life and not just on the pages of her books,
                                Alan sets off to rescue her.
                            </p>
                        </div>
                        <button>Add to my library</button>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Home
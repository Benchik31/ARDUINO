import React from 'react'
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function Movies(props) {
    return (
        <section className="movies">
            <SearchForm changeShort={props.changeShort} onSubmit={props.searchClick} />
            <MoviesCardList savedCards={props.savedCards} MoreVisible={props.MoreVisible} onClick={props.onClick} moreClick={props.moreClick} cards={props.cards} buttonClass={props.buttonClass}/>
            <Preloader />
        </section>);
}

export default Movies;
import React from 'react'
import search from '../../images/find.png'

function SearchForm(props) {
    let wordMean = ''
    if (props.buttonClass === 'element__saved'){
        wordMean='wordSaved';
    } else{
        wordMean='word'
    }
    
    const [word, setWord] = React.useState(localStorage.getItem(wordMean));
    const [isShort, setShort] = React.useState(false);
    function handleSubmit (e){
        //console.log('word', word)
        props.onSubmit(word, isShort)
        localStorage.setItem("word", word)
    }
    function handleWord(e) {
        setWord(e.target.value);
    }
    function handleCheckbox() {
        setShort(!isShort);
    }
    return (
        <div>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input value={word} onChange={handleWord} className="form__input" placeholder="Фильм" required></input>
                <button className="form__button"><img alt="поиск" src={search}></img></button>
            </form>
            <div className="switch__box">
                <input onChange={handleCheckbox} className="switch" type="checkbox" value="Короткометражки" ></input>
                <label className="switch__text">Короткометражки</label>
            </div>
        </div>

    );
}

export default SearchForm;
import React from 'react'
//import api from '../utils/api.js'

function AboutProject(props) {


    return (
        <section className="about">
            <h2 className="about__header">О проекте</h2>
            <div className="about__text-wrap">
                <h2 className="about__text-header">Цель проекта</h2>
                <p className="about__text-parag">Конструирование и программирование устройства на базе Arduino для отслеживания местоположения устройства</p>
                <h2 className="about__text-header">Назначение разработки</h2>
                <p className="about__text-parag">Сконструированное устройство следует использовать как маячок, который транслирует текущее местоположение (широта / долгота) на сервер. </p>
                <h2 className="about__text-header">Требования к составу и параметрам технических средств</h2>
                <p className="about__text-parag">Минимальными требованиями к сконструированному устройству являются наличие и корректная работа датчика определения местоположения и модуль, предоставляющий выход в интернет для дальнейшей отправки координат на сервер.</p>
                <h2 className="about__text-header">Планы на будущее</h2>
                <p className="about__text-parag">В последующих моделях устройства следует реализовать функционал взаимодействия с кнопкой «sos», при нажатии на которую, на экране наблюдателя появляется надпись «SOS».</p>
            </div>
        </section>
    );
}

export default AboutProject;
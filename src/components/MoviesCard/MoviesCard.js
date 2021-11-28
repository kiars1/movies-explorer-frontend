import React from "react";
import img1 from "../../images/1-min.png";
import img2 from "../../images/2-min.png";
import img3 from "../../images/3-min.png";
import img4 from "../../images/4-min.png";
import img5 from "../../images/5-min.png";
import img6 from "../../images/6-min.png";
import img7 from "../../images/7-min.png";
import img8 from "../../images/8-min.png";
import img9 from "../../images/9-min.png";
import img10 from "../../images/10-min.png";
import img11 from "../../images/11-min.png";
import img12 from "../../images/12-min.png";

function MoviesCard() {
  return (
    <>
      {" "}
      {/* Данные скобки и карточки сделаны только для удобства проверки в дальнейшем будут удалёны*/}
      <li className="movies-card">
        <img src={img1} className="movies-card__image" alt=""/>
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img2} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Киноальманах «100 лет дизайна»</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__delete"></button>
      </li>
      <li className="movies-card">
        <img src={img3} className="movies-card__image" alt=""/>
        <p className="movies-card__title">В погоне за Бенкси</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
      </li>
      <li className="movies-card">
        <img src={img4} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Баския: Взрыв реальности</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img5} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Бег это свобода</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img6} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Книготорговцы</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img7} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Когда я думаю о Германии ночью</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img8} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Gimme Danger: История Игги и The Stooges</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img9} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Дженис: Маленькая девочка грустит</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img10} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Соберись перед прыжком</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img11} className="movies-card__image" alt=""/>
        <p className="movies-card__title">Пи Джей Харви: A dog called money</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
      <li className="movies-card">
        <img src={img12} className="movies-card__image" alt=""/>
        <p className="movies-card__title">По волнам: Искусство звука в кино</p>
        <p className="movies-card__time">1ч 15м</p>
        <button className="movies-card__save">Сохранить</button>
        <button className="movies-card__delete"></button>
        <button className="movies-card__liked"></button>
      </li>
    </>
  );
}

export default MoviesCard;

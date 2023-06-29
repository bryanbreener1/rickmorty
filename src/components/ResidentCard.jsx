import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import '../components/styles/residentCard.css'
const ResidentCard = ({ url }) => {
  const [resident, getApiResident] = useFetch(url);
  useEffect(() => {
    getApiResident();
  }, []);
  console.log(resident);
  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__img" src={resident?.image} alt="" />
        <div className="resident__status">
          <span className={`resident__circle ${resident?.status}`}></span>
          <span className="resident__status-value">{resident?.status}</span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{resident?.name}</h3>
        <hr className="resident__hr" />
        <ul className="resident__list">
          <li className="resident__item">
            <span className="resident__label">SPECIE </span>
            <span className="resident__value">{resident?.species}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">ORIGIN </span>
            <span className="resident__value">{resident?.origin.name}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">EPPISODES WHERE APPEAR</span>
            <span className="resident__value">{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;

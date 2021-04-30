import React from "react";
import { ExternalLink } from "react-external-link";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <ExternalLink href={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Project Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </ExternalLink>
      </li>
    </>
  );
}

export default CardItem;

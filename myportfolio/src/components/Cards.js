import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import sloth from "../public/images/icon.png";
import space from "../public/images/space-shooter.png";
import rose from "../public/images/gildedrose.png";
import acebook from "../public/images/acebook.png";
import fruits from "../public/images/fruitslistview.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some of my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={sloth}
              text="Sloth - A mobile app to gamify step counting and encourage users to stretch their legs!"
              label="JavaScript and React Native"
              path="https://github.com/ddottyler/Sloth-makers-group-project"
            />
            <CardItem
              src={space}
              text="A simple locally run 2 player pygame application that I built while learning python"
              label="Python and Pygame"
              path="https://github.com/ddottyler/Pygame-space-shooter"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={rose}
              text="My take on a famous Kata to practice OO design and TDD skills within the framework of a tech test"
              label="JavaScript"
              path="https://github.com/ddottyler/GildedRose-Refactoring-Kata"
            />
            <CardItem
              src={acebook}
              text="A Ruby on Rails team project to build a Facebook clone with CI/CD"
              label="Ruby on Rails"
              path="https://github.com/ddottyler/acebook-makers-group-project"
            />
            <CardItem
              src={fruits}
              text="A simple dictionary app I built whilst learning the basics of Swift"
              label="Swift"
              path="https://github.com/ddottyler/Swift_Fruit"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

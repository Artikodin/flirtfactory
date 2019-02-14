import React from "react";

import { DrawerLayout, AboutLayout, About } from "./element";

/* eslint-disable */

const AboutDrawerContent = () => (
  <DrawerLayout id="Drawer-layout">
    <div className="line line__top" />
    <div className="line line__bottom" />
    <div className="line line__right" />
    <div className="line line__left" />
    <div id="marquee">
      About About About About About About About About About About About About
      About About About About About About About About About About About About
      About About About About About About About About About About About About
      About About About About About About About About About About About About
      About About About About About About About About About About About About
      About About About About About About About About About About About About
      About About About About About About About About About About About About
      About About About About About About About About About About About About
      About About About About About About About About About
    </div>
    <AboutLayout id="About-layout">
      <About id="About">
        <h2 id="About-title">About</h2>
        <div id="About-text">
          <p>
            La Flirt Factory est une expérience imaginée, créée et développée
            par Audren Mauplot, Alix Chabagny, Bastien Lepecheur, Fany Thourain
            et Artium Wasse dans le cadre d'un projet à l'école des Gobelins.
          </p>
          <p>
            Tous utilisateurs de sites de rencontres, nous nous sommes
            questionné aussi bien sur notre vision des relations que sur nos
            propres méthodes de séduction.
          </p>
          <p>
            Cette expérience a pour volonté d'interroger sur les questions
            suivantes : A quoi ressemblait le flirt avant ? Qu’est devenue la
            séduction aujourd’hui ? Et à quoi ressemblera-t-elle dans le futur ?
          </p>
        </div>
      </About>
    </AboutLayout>
  </DrawerLayout>
);

export default AboutDrawerContent;

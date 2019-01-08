import React from "react";
import PropTypes from "prop-types";

import { DrawerHeader } from "../index";
import { DrawerLayout, MainContent, MainContentLayout } from "./element";

const DrawerContent = ({ children }) => (
  <DrawerLayout id="Drawer-layout">
    <div>{children}</div>
    <DrawerHeader />
    <MainContentLayout id="MainContentLayout">
      <MainContent id="MainContent">
        <h2 id="MainContent-date">-52 - 476</h2>
        <h1 id="MainContent-title">Antiquité</h1>
        <div id="MainContent-text">
          <p>
            Les orgies représentées dans les tableaux de l’Antiquité Grecque
            sont exactement l’état d’esprit de l’époque.
            <strong>La sexualité était totalement débridée !</strong>
          </p>
          <p>
            <strong>
              Les hommes dominaient totalement la relation amoureuse, au
              détriment des femmes.
            </strong>
            Il était courant d/'avoir des partenaires multiples, ainsi ils
            pouvaient coucher avec toutes femmes non-mariées (coucher avec une
            femme mariée était considéré comme une offense). Les Romains ont une
            morale sexuelle simple : à condition de ne s'attaquer ni aux femmes
            ni aux enfants des citoyens, tout est permis !La sexualité était
            totalement débridée !
          </p>
          <p>
            Les Romains découvrent la séduction avec des femmes affranchies, des
            esclaves ou des étrangères: seules représentantes de la gent
            féminine qui pouvaient se refuser à eux.
          </p>
        </div>
        <div id="MainContent-gallery">
          <figure className="ContentImg">
            <img src="../assets/img/epoques/Antiquite.jpg" alt="Antiquité" />
            <figcaption>Antiquité</figcaption>
          </figure>
          <figure className="ContentImg">
            <img src="../assets/img/epoques/Antiquite2.jpg" alt="Antiquité" />
            <figcaption>Antiquité</figcaption>
          </figure>
        </div>
      </MainContent>
    </MainContentLayout>
  </DrawerLayout>
);

DrawerContent.propTypes = {
  children: PropTypes.node
};

DrawerContent.defaultProps = {
  children: ""
};

export default DrawerContent;

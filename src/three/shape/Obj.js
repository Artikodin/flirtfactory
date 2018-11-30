/* eslint-disable */

import { Component } from "react";
import PropTypes from "prop-types";

import { Context } from "./Scene";
import OBJLoader from "../OBJLoader"

import * as THREE from "three"

export default class Obj extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    console.log("create loader")
    var loader = new THREE.OBJLoader();
    loader.load(
      // resource URL
      './public/buildings.obj',
      // called when resource is loaded
      function ( object ) {

        scene.add( object );

      },
      // called when loading is in progresses
      function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // called when loading has errors
      function ( error ) {

        console.log( 'An error happened' );

      }
    );
  }

  componentDidMount() {
    this.context.addToScene(this.mesh);
  }

  render() {
    return null;
  }
}

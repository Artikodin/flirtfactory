/* eslint-disable */

import React, { Component } from "react";

import * as THREE from "three";
import OBJLoader from "../OBJLoader";

export default class Test extends Component {
  constructor(props) {
    super(props);
    console.log("test");
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var loader = new OBJLoader();

    loader.load(
      // resource URL
      "./assets/3d/buildings.obj",
      // called when resource is loaded
      function ( object ) {

        console.log(object)
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

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    var animate = function() {
      requestAnimationFrame(animate);

    function onMouseDown () {
      raycaster.setFromCamera( mouse, camera );
      // calculate objects intersecting the picking ray
      var intersects = raycaster.intersectObjects(scene.children);
      for ( var i = 0; i < intersects.length; i++ ) {
        console.log(intersects[i].object.name)
        switch (intersects[i].object.name) {
          case "Flacon":
            flacon = intersects[i].object;
            break;
          case "Révolution":
            flacon = intersects[i].object;
            break;
        // if (intersects[i].object.name === "Flacon") {
          // intersects[i].object.rotation.z = -1.5;
        }
      }
    }

      renderer.render(scene, camera);
    };

    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener( 'mousemove', onMouseMove, false );
    window.addEventListener( 'mousedown', onMouseDown, false );

    function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
  }


  render() {
    return null;
  }
}

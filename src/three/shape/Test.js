/* eslint-disable */

import React, { Component } from "react";

import * as THREE from "three";
window.THREE = THREE;

require('three/examples/js/controls/OrbitControls.js');

import OBJLoader from "../OBJLoader";
import GLTFLoader from "../GLTFLoader";

export default class Test extends Component {
  constructor(props) {
    super(props);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );

    /* HELPERS */
    // var axes = new THREE.AxisHelper(2);
    // scene.add(axes);
    // var gridXZ = new THREE.GridHelper(10, 1, 0xffffff);
    // scene.add(gridXZ);
    // var axesHelper = new THREE.AxesHelper( 5 );
    // scene.add( axesHelper );

    var controls = new THREE.OrbitControls( camera );

    camera.position.x = 15;
    camera.position.y  = 7;
    camera.position.z = -15;

    var renderer = new THREE.WebGLRenderer({ antialias: true }  );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0xa8a8a8, 1);
    document.body.appendChild(renderer.domElement);

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.intensity = 1;
    directionalLight.position.x = 0;
    directionalLight.position.y = 10;
    directionalLight.position.z = 15;
    scene.add( directionalLight );

    var flacon; 

    var loader = new THREE.GLTFLoader();

    // Load a glTF resource
    loader.load(
      "./assets/3d/machine.glb",
      function ( gltf ) {
        // gltf.animations; // Array<THREE.AnimationClip>
        // gltf.scene; // THREE.Scene
        // gltf.scenes; // Array<THREE.Scene>
        // gltf.cameras; // Array<THREE.Camera>
        // gltf.asset; // Object
        gltf.scene.scale.x = 0.02;
        gltf.scene.scale.y = 0.02;
        gltf.scene.scale.z = 0.02;
        scene.add( gltf.scene );
        animate();
      },
      // called while loading is progressing
      function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      // called when loading has errors
      function ( error ) {
        console.log( 'An error happened' );
      }
    );

    loader.load(
      "./assets/3d/flacon.glb",
      function ( gltf ) {
        var obj = gltf.scene.children[0];
        obj.scale.x = 0.02;
        obj.scale.y = 0.02;
        obj.scale.z = 0.02;
        obj.position.set(0, 7, 8.5)
        scene.add(obj);
        animate();
      }
    );

    loader.load(
      "./assets/3d/ballon.glb",
      function ( gltf ) {
        var obj = gltf.scene.children[0];
        obj.scale.x = 0.02;
        obj.scale.y = 0.02;
        obj.scale.z = 0.02;
        obj.position.set(0, 7, 10)
        scene.add(obj);
        animate();
      }
    );

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    function onMouseMove( event ) {
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

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

    var animate = function() {
      if (flacon && flacon.rotation.z > -1.5) {
        flacon.rotation.z -= 0.02;
      }

      requestAnimationFrame(animate);
      controls.update()
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

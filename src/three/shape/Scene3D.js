/* eslint-disable */
import React, { Component } from "react";
import { DisplayText } from "./Points";

import * as THREE from "three";

import OBJLoader from "../OBJLoader";
import GLTFLoader from "../GLTFLoader";

window.THREE = THREE;

require("three/examples/js/controls/OrbitControls.js");

export default class Scene3D extends Component {
  state = {
    showPoint: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let scene;
    let camera;
    let aspect;
    let light;
    let controls;
    let renderer;
    let raycaster;
    let mouse;
    let mixer;
    let clock;
    let loader;
    const gltfStore = {};
    let rotateThing;
    const d = 15; // distance between object and camera

    init();

    function init() {
      scene = new THREE.Scene();

      aspect = window.innerWidth / window.innerHeight;
      camera = new THREE.OrthographicCamera(
        -d * aspect,
        d * aspect,
        d,
        -d,
        1,
        1000
      );

      camera.position.set(20, 20, -20); // all components equal
      camera.lookAt(scene.position); // or the origin

      controls = new THREE.OrbitControls(camera);

      /* HELPERS */
      const axes = new THREE.AxisHelper(2);
      scene.add(axes);
      const gridXZ = new THREE.GridHelper(10, 1, 0xffffff);
      scene.add(gridXZ);
      const axesHelper = new THREE.AxesHelper(5);
      scene.add(axesHelper);
      const cameraHelper = new THREE.CameraHelper(camera);
      scene.add(cameraHelper);

      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();

      clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xc3e5f0, 1);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setPixelRatio(window.devicePixelRatio);
      document.body.appendChild(renderer.domElement);

      const light = new THREE.DirectionalLight(0xffffff, 0.5);
      light.intensity = 1;
      light.position.x = 12;
      light.position.y = 10;
      light.position.z = 0;
      scene.add(light);

      const lightHelper = new THREE.DirectionalLightHelper(light, 5);
      scene.add(lightHelper);

      const geometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
      const material = new THREE.MeshBasicMaterial({
        color: 0xc3e5f0,
        side: THREE.DoubleSide
      });
      const floor = new THREE.Mesh(geometry, material);
      floor.rotation.x = Math.PI / 2;
      scene.add(floor);

      loadItems();
    }

    function loadItems() {
      loader = new THREE.GLTFLoader();

      // Load a glTF resource
      loader.load(
        "./assets/3d/machine.glb",
        gltf => {
          // gltf.animations; // Array<THREE.AnimationClip>
          // gltf.scene; // THREE.Scene
          // gltf.scenes; // Array<THREE.Scene>
          // gltf.cameras; // Array<THREE.Camera>
          // gltf.asset; // Object
          console.log(gltf);
          gltf.scene.scale.x = 0.02;
          gltf.scene.scale.y = 0.02;
          gltf.scene.scale.z = 0.02;
          scene.add(gltf.scene);
          animate();
        },
        // called while loading is progressing
        xhr => {
          console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
        },
        // called when loading has errors
        error => {
          console.log("An error happened");
        }
      );

      loader.load("./assets/3d/flacon.glb", gltf => {
        const obj = gltf.scene.children[0];
        obj.scale.x = 0.02;
        obj.scale.y = 0.02;
        obj.scale.z = 0.02;
        obj.position.set(0, 7, 8.5);
        scene.add(obj);
      });

      // loader.load("./assets/3d/ballon.glb", gltf => {
      //   const obj = gltf.scene.children[0];
      //   obj.scale.x = 0.02;
      //   obj.scale.y = 0.02;
      //   obj.scale.z = 0.02;
      //   obj.position.set(0, 7, 10);
      //   scene.add(obj);
      // });

      loader.load("./assets/3d/fleche.glb", gltf => {
        gltf.scene.scale.x = 0.02;
        gltf.scene.scale.y = 0.02;
        gltf.scene.scale.z = 0.02;
        scene.add(gltf.scene);

        // const animations = gltf.animations;
        mixer = new THREE.AnimationMixer(gltf.scene);
        mixer.clipAction(gltf.animations[0]).play();
      });
    }

    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    console.log("outside", this);

    const onMouseDown = () => {
      raycaster.setFromCamera(mouse, camera);
      // calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children);
      for (let i = 0; i < intersects.length; i++) {
        switch (intersects[i].object.name) {
          case "Flacon":
            rotateThing = intersects[i].object;
            break;
          case "Révolution":
            rotateThing = intersects[i].object;
            break;
          default:
            break;
        }
      }
    };

    function onWindowResize() {
      aspect = window.innerWidth / window.innerHeight;
      camera.left = -d * aspect;
      camera.right = d * aspect;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      mixer.update(clock.getDelta());

      if (rotateThing && rotateThing.rotation.z > -1.5) {
        rotateThing.rotation.z -= 0.05;
        if (rotateThing && rotateThing.rotation.z < -1.5) {
          this.displayPoint();
        }
      }
      controls.update();
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", onWindowResize, false);
    window.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("mousedown", onMouseDown, false);
  }

  displayPoint = () => {
    const { showPoint } = this.state;
    this.setState({
      showPoint: !showPoint
    });
  };

  render() {
    const { showPoint } = this.state;
    return <React.Fragment>{showPoint && <DisplayText />}</React.Fragment>;
  }
}

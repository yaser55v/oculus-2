/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NosTeam (https://sketchfab.com/NosTeam)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/oculus-quest-2-c6a1c2623d224a1bbb81a38915f7e898
title: Oculus quest 2
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import gsap from "gsap";

const ModelOculus = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/oculus2.glb");
  gsap.registerPlugin(ScrollTrigger);

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  useEffect(() => {
    camera.position.set(0, 4, 4);
    let fov = camera.fov;

    fov = (1400 * 17) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width:48em`,
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile } = context.conditions;

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#oculus-model",
            start: "top+=50 top",
            endTrigger: "#feature",
            end: "top top",
            scrub: 1,
          },
        });

        t1.fromTo(camera.position, { y: 0.2, x: -0 }, { y: 0, x: 0 })
          .to(scene.rotation, { y: 4.05 })
          .to(scene.rotation, { x: 1.5 });
        /*   .to(scene.rotation, { y: 4.05 })
          .to(scene.rotation, { x: 1.5 })
          .to(scene.rotation, { y: 4.05 })
          .to(scene.rotation, { x: 1.5 })
          .to(scene.rotation, { z: 5 }, "key1")
          .to(camera.position, { z: 3 }, "key1")
         .to(scene.rotation, { y: 0, z: 0 }, "key2")
          .to(camera.position, { z: 6, x: isDesktop ? -1 : 0 }, "key2")
          .to(scene.rotation, { z: 0, y: 6.3 }, "key3")
          .to(camera.position, { x: isDesktop ? 0.8 : 0, y: 0 }, "key3"); */

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
        };
      }
    );
    // eslint-disable-next-line
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 4, 0, 0]} scale={0.33}>
      <spotLight
          args={["#e681d8", 1.5, 7]}
          position={[8, 1, -6]}
          castShadow
        />
        <group rotation={[Math.PI / 4, -0.9, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Controllers_Controllers_0.geometry}
              material={materials.Controllers}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Controllers001_Controllers_0.geometry}
              material={materials.Controllers}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Oculus_Headset_Headset_0.geometry}
              material={materials.Headset}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Oculus_Headset_Headset_0_1.geometry}
              material={materials.Headset}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Oculus_Headset_Headset_0_2.geometry}
              material={materials.Headset}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oculus2.glb");

export default ModelOculus;

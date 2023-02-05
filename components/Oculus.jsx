import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ModelOculus from "../Models/OculusScene";
import Model from "../Models/Scene";
import { Loader } from "../Models/OculusScene";

const Oculus = () => {
  return (
    <section
      id="oculus-model"
      className="w-screen h-screen top-0 z-10 bg-transparent fixed"
    >
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <Suspense fallback={<Loader />}>
          {/* <Model  /> */}
          <ModelOculus />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </section>
  );
};
export default Oculus;

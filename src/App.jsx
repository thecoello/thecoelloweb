import { Canvas } from "@react-three/fiber"
import Model from "./model"
import { AccumulativeShadows, ContactShadows, Environment, Lightformer, MeshTransmissionMaterial, OrbitControls, RandomizedLight, SoftShadows, Text } from "@react-three/drei"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from "leva"
import { useRef } from "react"
import { DirectionalLight } from "three"


function App() {



  return (
    <>

      <div className="w-screen h-screen">
        <Canvas>

        <Environment environmentIntensity={1} backgroundBlurriness={1} preset="city" >            <Lightformer intensity={1} rotation-z={-Math.PI / 2} position={[0, 0, -1]} scale={[5, 5, 5]} />
        </Environment>

          <Model />

          <directionalLight intensity={1} position={[0, -5, 3]}/>

        </Canvas>
      </div>

    </>
  )
}

export default App

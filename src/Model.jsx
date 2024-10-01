import React, { useRef } from 'react'
import { AccumulativeShadows, Lightformer, MeshTransmissionMaterial, RandomizedLight, Text, useGLTF } from '@react-three/drei'
import gsap, { Linear } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useControls } from 'leva'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

function Model(props) {
    const keyRef = useRef(null)

    const { nodes, materials } = useGLTF('./model/key.glb')

    useGSAP(() => {
        const tl = new gsap.timeline()
        tl.fromTo(keyRef.current.rotation, 4, { x: 1, y: 2, z: 0 }, { x: Math.PI / 2, y: 0, z: 0 })
        tl.fromTo(keyRef.current.scale, 4, { x: 0, y: 0, z: 0 }, { x: 5, y: 5, z: 5, delay: -4 })
        tl.to(keyRef.current.rotation,10,{z: Math.PI * 2, repeat: -1, ease: Linear.easeNone, delay: -4})

    })

    return (
        <group {...props} dispose={null}>
          <mesh ref={keyRef} castShadow receiveShadow geometry={nodes.Text.geometry} scale={0}>              
            <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.36} backside={true}/>

            </mesh>


        </group>
    )
}

useGLTF.preload('./model/key.glb')

export default Model
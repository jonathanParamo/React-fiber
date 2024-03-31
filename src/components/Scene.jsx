import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment, ScrollControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 65,
        position: [0, 0, 8.3]
      }}
    >
      <ScrollControls
        pages={6}
        damping={0.25}
      >
        <Model />
      </ScrollControls>
      <mesh>
        <ambientLight intensity={1.6} />
        <Environment
          files={"../../public/models/abandoned_tiled_room_1k.hdr"}
        />
      </mesh>

    </Canvas>
  )
}
import { Environment, Plane } from '@react-three/drei'

export default function BackgroundBG() {
  return (
    <>
      <Environment
        preset='dawn'
        near={1}
        far={1000}
        resolution={512}
      ></Environment>
      <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.75, 0]} scale={20}>
        <shadowMaterial opacity={0.4} />
      </Plane>
    </>
  )
}

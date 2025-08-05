import { Text3D, Center, Float } from '@react-three/drei'
import Lights from './Lights'
import BackgroundBG from './BackgroundBG'

export default function Scene(props) {
  return (
    <>
    <Center>
      <Float>
        <Text3D
          curveSegments={16}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.06}
          height={0.3}
          lineHeight={0.5}
          letterSpacing={-0.02}
          scale={0.5}
          font='/Dancing.json'
          castShadow
        >
          Happy Birthday :)
          <meshPhysicalMaterial color='#ff7eb9' roughness={0.1} metalness={1} />
        </Text3D>
      </Float>
    </Center>
        <Lights />
        <BackgroundBG />
</>
  )
}

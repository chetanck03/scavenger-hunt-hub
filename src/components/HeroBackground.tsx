import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, shape }: { position: [number, number, number]; shape: "sphere" | "box" | "torus" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  const shapeComponents = {
    sphere: <Sphere args={[0.5, 32, 32]} />,
    box: <Box args={[0.8, 0.8, 0.8]} />,
    torus: <Torus args={[0.4, 0.2, 16, 32]} />,
  };

  return (
    <mesh ref={meshRef} position={position}>
      {shapeComponents[shape]}
      <meshStandardMaterial
        color="hsl(var(--primary))"
        emissive="hsl(var(--primary))"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingShape position={[-3, 0, 0]} shape="sphere" />
      <FloatingShape position={[3, 0, -2]} shape="box" />
      <FloatingShape position={[0, 2, -3]} shape="torus" />
      <FloatingShape position={[-2, -2, -1]} shape="box" />
      <FloatingShape position={[2, -1, 0]} shape="sphere" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroBackground;

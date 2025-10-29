import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus, Octahedron, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ 
  position, 
  shape, 
  color = "hsl(180, 100%, 50%)",
  emissiveIntensity = 0.4,
  scale = 1
}: { 
  position: [number, number, number]; 
  shape: "sphere" | "box" | "torus" | "octahedron";
  color?: string;
  emissiveIntensity?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.6 + position[2]) * 0.2;
    }
  });

  const shapeComponents = {
    sphere: <Sphere args={[0.4 * scale, 32, 32]} />,
    box: <Box args={[0.6 * scale, 0.6 * scale, 0.6 * scale]} />,
    torus: <Torus args={[0.3 * scale, 0.15 * scale, 16, 32]} />,
    octahedron: <Octahedron args={[0.5 * scale]} />,
  };

  return (
    <mesh ref={meshRef} position={position}>
      {shapeComponents[shape]}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.rotation.x += 0.001;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="hsl(180, 100%, 50%)"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="hsl(180, 100%, 50%)" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="hsl(280, 100%, 65%)" />
      
      <Stars radius={50} depth={50} count={200} factor={2} saturation={0.5} fade />
      <ParticleField />
      
      {/* Primary Shapes */}
      <FloatingShape position={[-4, 0, -2]} shape="sphere" color="hsl(180, 100%, 50%)" scale={1.2} />
      <FloatingShape position={[4, 1, -3]} shape="octahedron" color="hsl(280, 100%, 65%)" scale={1} />
      <FloatingShape position={[0, 3, -4]} shape="torus" color="hsl(320, 100%, 60%)" scale={0.8} />
      <FloatingShape position={[-3, -2, -1]} shape="box" color="hsl(200, 100%, 60%)" scale={0.9} />
      <FloatingShape position={[3, -1, 1]} shape="sphere" color="hsl(260, 100%, 70%)" scale={0.7} />
      
      {/* Secondary Shapes */}
      <FloatingShape position={[-6, 2, 0]} shape="torus" color="hsl(180, 80%, 60%)" scale={0.6} emissiveIntensity={0.2} />
      <FloatingShape position={[6, -3, -2]} shape="octahedron" color="hsl(300, 90%, 70%)" scale={0.5} emissiveIntensity={0.3} />
      <FloatingShape position={[0, -4, 2]} shape="box" color="hsl(240, 100%, 75%)" scale={0.4} emissiveIntensity={0.2} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 opacity-25">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroBackground;

"use client";
import Cuadrado from "../../components/canvasThreePuro";
import { Canvas } from "@react-three/fiber";

export default function Home() {

  return (
    <main className="flex min-h-screen min-w-screen h-screen w-screen bg-slate-600">
      <Canvas shadows>
        <Cuadrado />
      </Canvas>
    </main>
  );
}

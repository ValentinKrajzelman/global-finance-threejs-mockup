"use client"
import React from 'react'
import Link from "next/link";

import { useFrame } from '@react-three/fiber';

import Cuadrado from '@/components/canvasThreePuro';

const Inicio = () => {
  return (
    <div>
      <Link href="/asdf"> asdf
      </Link>
      <Cuadrado/>
    </div>
  )
}

export default Inicio
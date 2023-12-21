"use client"
import React from 'react'
import Link from "next/link";

import { useFrame } from '@react-three/fiber';

const Inicio = () => {
  return (
    <div>
      <Link href="/asdf"> asdf
      </Link>
      <Link href="/asdf2"> asdf2
      </Link>
      <Link href="/asdf3"> asdf3
      </Link>
      <Link href="/asdf4"> asdf4
      </Link>
    </div>
  )
}

export default Inicio
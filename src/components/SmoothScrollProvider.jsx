'use client'
import { ReactLenis } from 'lenis/react'

function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrollProvider

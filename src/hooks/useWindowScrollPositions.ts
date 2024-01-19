import { useEffect, useState } from 'react'

export const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

  useEffect(() => {
    function updatePosition() {
      setPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      })
    }

    window.addEventListener('scroll', updatePosition, true)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition, true)
  }, [])

  return scrollPosition
}

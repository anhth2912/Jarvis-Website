import { useState, useEffect, RefObject } from 'react'

export const useWindowSizeOfElement = (contentRef: RefObject<HTMLElement>) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: contentRef.current?.offsetWidth ?? 0, height: contentRef.current?.offsetHeight ?? 0 })
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

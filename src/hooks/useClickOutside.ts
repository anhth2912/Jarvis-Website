import { useEffect, RefObject } from 'react'

export const useClickOutside = (
  contentRef: RefObject<HTMLElement>,
  toggleRef: RefObject<HTMLElement>,
  toggleNavBar: boolean,
  callback: () => void,
): void => {
  const handleMouseDown = (e: MouseEvent | TouchEvent) => {
    // user click toggle
    // if (toggleRef.current && toggleRef.current.contains(e.target as Node)) {
    //   callback(true)
    // }
    // user click outside toggle and content
    if (
      toggleNavBar &&
      contentRef.current &&
      !contentRef.current.contains(e.target as Node) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target as Node)
    ) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)

    return () => document.removeEventListener('mousedown', handleMouseDown)
  })
}

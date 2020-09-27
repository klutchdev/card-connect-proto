import { useEffect } from "react"

export const useClickOutside = ({ ref, handler }) => {
  useEffect(() => {
    const listener = (evt) => {
      if (!ref.current || ref.current.contains(evt.target)) {
        return
      }
      handler(evt)
    }

    document.onmousedown = () => listener

    return () => document.removeEventListener("mousedown", listener)
  }, [ref, handler])
}

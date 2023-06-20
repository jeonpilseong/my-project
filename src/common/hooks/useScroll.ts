import { useEffect, useRef } from 'react'

export const useScroll = () => {
  const scrollRef = useRef<any>(null)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    setTimeout(() => {
      window.scrollTo({ top: scrollRef.current?.offsetTop })
    }, 0)
  }, [])

  return { scrollRef }
}

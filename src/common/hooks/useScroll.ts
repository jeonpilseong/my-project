import { useEffect, useRef } from 'react'

export const useScroll = () => {
  const scrollRef = useRef<any>(null)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: scrollRef.current?.offsetTop })
  }, [])

  return { scrollRef }
}

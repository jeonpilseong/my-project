import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

import MarketWrite from '@/components/features/market/write/MarketWrite.container'
import { isEditMarketState } from '@/common/stores'

export default function MarketWritePage() {
  const [, setIsEditMarket] = useRecoilState(isEditMarketState)

  useEffect(() => {
    setIsEditMarket(false)
  }, [])
  return <MarketWrite />
}

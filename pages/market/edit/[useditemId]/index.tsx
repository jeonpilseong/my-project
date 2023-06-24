import { isEditMarketState } from '@/common/stores'
import MarketWrite from '@/components/features/market/write/MarketWrite.container'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

export default function MarketEditPage() {
  const [, setIsEditMarket] = useRecoilState(isEditMarketState)

  useEffect(() => {
    setIsEditMarket(true)
  }, [])
  return <MarketWrite />
}

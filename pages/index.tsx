import MarketList from '@/components/features/market/list/MarketList.container'
import BestProduct from '@/components/features/market/list/bestProduct/BestProduct.container'

export default function Home() {
  return (
    <>
      <BestProduct />
      <MarketList />
    </>
  )
}

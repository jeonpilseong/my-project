import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'

import { globalStyles } from '@/common/styles/globalStyles'
import ApolloSetting from '@/components/common/apollo/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}

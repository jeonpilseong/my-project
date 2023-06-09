import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'

import { globalStyles } from '@/common/styles/globalStyles'
import ApolloSetting from '@/components/common/apollo/index'
import Layout from '@/components/common/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}

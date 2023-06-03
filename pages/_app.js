import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'

import { globalStyles } from '../src/common/styles/globalStyles'
import ApolloSetting from '../src/components/common/apollo/index'

export default function App({ Component, pageProps }) {
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

import { Global } from '@emotion/react'

import { globalStyles } from '../src/common/styles/globalStyles'
import ApolloSetting from '../src/components/common/apollo/index'

export default function App({ Component, pageProps }) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </>
    </ApolloSetting>
  )
}

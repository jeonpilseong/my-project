import { Global } from '@emotion/react'

import { globalStyles } from '../src/common/styles/globalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

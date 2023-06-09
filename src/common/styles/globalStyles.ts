import { css } from '@emotion/react'

export const breakPoints = {
  MOBILE: '(max-width: 767px)',
  TABLET: '(min-width: 768px) and (max-width: 1023px)',
  PC: '(min-width: 1024px)',
}

export const globalStyles = css`
  :root {
    // **** color
    --gray-1: #7e7872;
    --gray-2: #a8a8a8;
    --gray-3: #bdbdbd;
    --gray-4: #d9d9d9;
    --error-red: #f54040;
    --blue-1: #0072e1;
    --blue-2: #67a6ff;
    --blue-3: #e6f4ff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular', sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
  }
`

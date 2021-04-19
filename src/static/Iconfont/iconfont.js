import {createGlobalStyle} from 'styled-components'

export const GlobalStyleIconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1618721406576'); /* IE9 */
  src: url('./iconfont.eot?t=1618721406576#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1618721406576') format('woff'),
  url('./iconfont.ttf?t=1618721406576') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1618721406576#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`



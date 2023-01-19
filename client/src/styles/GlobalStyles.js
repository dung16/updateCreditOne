import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
const customStyles = css({
    'input ,textarea':{
        ...tw`rounded-[3px] px-4 py-2`,
        '&:focus':{
            outline:'none'
        }
    }
})
  
const GlobalStyles = () => (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  )
  
export default GlobalStyles
  
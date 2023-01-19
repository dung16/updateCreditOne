/** @jsxImportSource @emotion/react */
import tw,{css} from 'twin.macro'
import PropTypes from "prop-types";

function Input(props) {
const {
    type='text',
    value,
    fullWidth,
    color='primary',
    ...other
}=props;
    const colorTheme={
        primary:tw`bg-blue-700 text-white hover:(bg-blue-500)`
    } 
  return (
    <input
        type={type}
        css={[
            tw`text-sm `,
            fullWidth && tw`w-full`,
            colorTheme[color], 
            css`
                &[type=submit]{
                    cursor: pointer;
                }
            `
        ]}
        value={value}
        {...other}
    />
  )
}
Input.propTypes={

  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
    /**
     *    * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     *     @default text
     */
    type:PropTypes.string,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
    fullWidth:PropTypes.bool
}

export default Input

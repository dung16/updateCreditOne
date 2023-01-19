/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";
import * as React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { component, children,
    
  variant = "text",
  
  
  ...other } = props;
  const defaultElement = other.href || other.to ? "a" : "button";
  const Root = component ?? defaultElement;
  const rootProps = other;
  return (
    <Root
      css={[
        tw`relative inline-flex items-center box-border whitespace-nowrap select-none 
        // Remove the margin in Safari
        outline-0
        p-0 // Remove the padding in Firefox
        m-0  // Remove the margin in Safari
        cursor-pointer text-inherit
        align-middle
        `,
        css`
          -webkit-tap-highlight-color: transparent;
          background-color: transparent;
        `,
      ]}

      {...rootProps}
    >
      {children}
    </Root>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(["contained", "outlined", "text"]),
    PropTypes.string,
  ]),
};
export default Button;

/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
function Layout({ children }) {
  return <div css={tw`p-2`}>{children}</div>;
}

export default Layout;

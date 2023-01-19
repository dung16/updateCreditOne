/** @jsxImportSource @emotion/react */

import Layout from "layout/Layout";
import React from "react";
import AddList from "./AddList";
import styles from "./styles";
function Home() {
  return (
    <Layout>
      <div css={styles.mainBoard}>
      <AddList />
      </div>
    </Layout>
  );
}

export default Home;

// @flow

import React from "react"
import Header from "../components/Header"
import SlamojiGrid from "../components/SlamojiGrid"

export default function Home() {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <Header />
        <SlamojiGrid />
      </div>
    </div>
  )
}

const styles = {
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerContainer: {
    margin: 64,
    maxWidth: 960,
  },
  slamojiContainer: {
    marginTop: 64,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}

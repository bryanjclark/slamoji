import React from "react"

import SlamojiTile from "../components/SlamojiTile"
import allSlamoji from "../data/slamoji-data.js"

export default function PageNotFound() {
  const pandaSlamoji = allSlamoji.filter(x => x.filename.includes("panda"))[0]

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        {/* <Header /> */}
        <SlamojiTile slamoji={pandaSlamoji} />
        <p>Looks like that page doesn't exist.</p>
        <p>
          Head back <a href={"https://slamoji.com"}>home</a>
        </p>
      </div>
    </div>
  )
}

const styles = {
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
  },
  innerContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
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

// @flow

import React, { useState } from "react"

import SlamojiTile from "../components/SlamojiTile"
import allSlamoji from "../data/slamoji-data.js"

export default function SlamojiGrid() {
  const [searchTerm, setSearchTerm] = useState("")

  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  const filteredSlamoji =
    searchTerm.length > 0
      ? allSlamoji.filter(x => x.filename.includes(lowerCaseSearchTerm))
      : allSlamoji

  return (
    <div style={styles.container}>
      <input
        style={styles.searchBar}
        type={"text"}
        placeholder={"Search"}
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div style={styles.gridContainer}>
        {filteredSlamoji.map(slamoji => (
          <SlamojiTile key={slamoji.filename} slamoji={slamoji} />
        ))}
        {filteredSlamoji.length === 0 && (
          <div style={styles.noResults}>No results</div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  searchBar: {
    backgroundColor: "#00000011",
    border: "none",
    borderRadius: 4,
    padding: 16,
    marginTop: 32,
    fontSize: 16,
    fontFamily: "Inconsolata",
  },
  noResults: {
    color: "#21242C64",
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
  },
}

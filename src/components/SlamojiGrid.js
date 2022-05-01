// @flow

import React, { useState } from "react"

import SlamojiTile from "../components/SlamojiTile"
import allSlamoji from "../data/slamoji-data.js"
import type { Slamoji } from "../data/slamoji-data.js"

export default function SlamojiGrid() {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const cleanSearchTerm = searchTerm
    .toLowerCase()
    .replace(/[^a-z,-]/gi, "")
    .trim()
  const filteredSlamoji: Array<Slamoji> =
    searchTerm.length > 0
      ? allSlamoji.filter(x => x.filename.includes(cleanSearchTerm))
      : allSlamoji

  return (
    <div style={styles.container}>
      <input
        style={styles.searchBar}
        class={"searchBar"}
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
    border: "none",
    borderRadius: 4,
    padding: 16,
    marginTop: 32,
    fontSize: 16,
    fontFamily: "Inconsolata",
  },
  noResults: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.64,
  },
}

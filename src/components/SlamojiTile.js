// @flow

import React, { useState } from "react"

import type { Slamoji } from "../data/slamoji-data.js"

type Props = {|
  slamoji: Slamoji,
|}

function SlamojiTile(props: Props) {
  const [hover, setHover] = useState(false)

  const { slamoji } = props
  const filenameNoExtension = slamoji.filename.split(".")[0]
  const displayedName = ":" + filenameNoExtension + ":"
  const src = "/slamoji-images/" + slamoji.filename

  let containerStyle = styles.container
  if (hover) {
    containerStyle = { ...containerStyle, ...styles.hover }
  }

  // function onDragStart(event) {
  // const uri = window.location.origin + src
  // event.dataTransfer.setData("image/gif", uri)
  // const img = event.target.querySelector("img")
  // event.dataTransfer.setDragImage(img, 16, 8)
  // event.dataTransfer.setData("image/gif", img.src)
  // event.dataTransfer.setData("image/png", img.src)
  // event.dataTransfer.setData("text/uri-list", img.src)
  // console.log(img.src)
  // }

  return (
    <a style={styles.containerLink} href={src} download>
      <div
        style={containerStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        // onDragStart={onDragStart}
        // draggable={true}
      >
        <img
          style={styles.img}
          src={src}
          id={displayedName}
          alt={slamoji.alt}
          // draggable={false}
        />
        <div style={styles.label}>{displayedName}</div>
      </div>
    </a>
  )
}

const styles = {
  container: {
    width: 192,
    height: 128,
    display: "flex",
    flexDirection: "column",
    flexGrow: 0,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    cursor: "point",
  },
  hover: {
    backgroundColor: "#F7F8FA",
    borderRadius: 5,
  },
  img: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: 16,
    color: "#21242C64",
    marginTop: 16,
    cursor: "inherit",
  },
  containerLink: {
    textDecoration: "none",
  },
}

export default SlamojiTile

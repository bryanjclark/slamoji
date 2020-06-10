// @flow

import React from "react"

const NavLink = ({ text, url }) => {
  return (
    <a style={styles.navLink} href={url}>
      {text}
    </a>
  )
}

export default function Header() {
  return (
    <div style={styles.container}>
      <div style={styles.topContainer}>
        <div style={styles.title}>
          <a style={styles.titleLink} href={"https://slamoji.com"}>
            Slamoji
          </a>
        </div>
        {true ? (
          <div style={styles.navContainer}>
            <NavLink
              text={"Made by @bryanjclark"}
              url={"https://twitter.com/bryanjclark"}
            />
          </div>
        ) : null}
      </div>
      <div style={styles.subtitle}>
        Your friendly neighborhood Slack emoji clearinghouse. (Click an emoji to
        download it.)
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
  },
  titleLink: {
    color: "#21242C",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 16,
  },
  navLink: {
    color: "#1865F2",
    fontWeight: 700,
    fontSize: 14,
    marginLeft: 58,
    marginTop: 29,
  },
}

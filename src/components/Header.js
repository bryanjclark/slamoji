// @flow

import React from "react"

const NavLink = ({ text, url, newTab, isDownload }) => {
  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : null
  const isDownloadProps = isDownload ? { download: true } : null
  // $FlowFixMe
  const spreadProps = { ...newTabProps, ...isDownloadProps }
  return (
    <a style={styles.navLink} href={url} class={"link"} {...spreadProps}>
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
              text={"Download All"}
              url={"/slamoji-images.zip"}
              newTab={false}
              isDownload={true}
            />
            <NavLink
              text={"View on GitHub"}
              url={"https://github.com/bryanjclark/slamoji"}
              newTab
              isDownload={false}
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
    textDecoration: "none",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 16,
  },
  navLink: {
    fontWeight: 700,
    fontSize: 14,
    marginLeft: 58,
    marginTop: 29,
  },
}

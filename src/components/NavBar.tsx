import { useState } from "react"
import { Navbar, Tab, Tabs } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const sections = [
  "all",
  "arts",
  "automobiles",
  "books",
  "business",
  "fashion",
  "food",
  "health",
  "insider",
  "magazine",
  "movies",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "travel",
  "us",
  "world",
]

export const NavBar = () => {

  const [clicked, setClicked] = useState("")
  const navigate = useNavigate()

  const tabs = sections.map((section, index) => {
    return (
      <Tab key={index} style={{ fontSize: "8px" }} eventKey={section} title={section}></Tab>
    )
  })

  return (
    <Navbar
      fixed="top"
      bg="secondary"
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        color: "white",
        padding: "0",
        borderBottom: "1px solid black",
      }}
    >
      <h1>NEW YORK TIMES SEARCH</h1>
      <Tabs
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
        id="tabs"
        activeKey={clicked}
        defaultActiveKey="home"
        onSelect={(eventKey) => {
          if (eventKey) {
            setClicked(eventKey)
            navigate(`/${eventKey}`)
          }
        }}
      >
        {tabs}
      </Tabs>
    </Navbar>
  )
}

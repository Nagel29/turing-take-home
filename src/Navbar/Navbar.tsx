import { useState } from "react"
import { Navbar, Tab, Tabs } from "react-bootstrap"

const sections = [
  "arts",
  "automobiles",
  "books",
  "business",
  "fashion",
  "food",
  "health",
  "home",
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

export const NavBar = ({
  getArticles,
}: {
  getArticles: (section: string) => void
}) => {
  const [clicked, setClicked] = useState("home")

  const tabs = sections.map((section, index) => {
    return <Tab style={{fontSize: '8px'}} eventKey={section} title={section}></Tab>
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
        padding: '0',
        borderBottom: "1px solid black",
      }}
    >
      <h1>NEW YORK TIMES SEARCH</h1>
      <Tabs
        style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%'}}
        id="tabs"
        activeKey={clicked}
        defaultActiveKey="home"
        onSelect={(eventKey) => {
          if (eventKey) {
            setClicked(eventKey)
            getArticles(eventKey)
          }
        }}
      >
        {tabs}
      </Tabs>
    </Navbar>
  )
}

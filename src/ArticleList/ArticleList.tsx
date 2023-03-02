import { CleanedArticle } from "../interfaces"
import { ArticleCard } from "../ArticleCard/ArticleCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const ArticleList = ({
  getArticles,
  articles,
  getDetails,
}: {
  getArticles: (section: string) => void
  articles: CleanedArticle[]
  getDetails: (article: CleanedArticle) => void
}) => {
  const section = useParams()

  useEffect(() => {
    if (section.section) {
      getArticles(section.section)
   
  }
},[section.section])


const articleCards = articles.map((article, index) => (
  <Col key={index} md={true} style={{ margin: "3%", width: "auto" }}>
    <ArticleCard
      key={index}
      articleData={article}
      getDetails={getDetails}
    />
  </Col>
))

let currentRow: JSX.Element[] = []

const rows = articleCards.reduce((acc: JSX.Element[], card, index) => {
  currentRow.push(card)
  if ((index + 1) % 3 === 0) {
    acc.push(
      <Row key={index} style={{ display: "flex", justifyContent: "center" }}>
        {currentRow}
      </Row>
    )
    currentRow = []
  }
  return acc
}, [])



  return <Container style={{ paddingTop: "8%" }}>{rows}</Container>
}

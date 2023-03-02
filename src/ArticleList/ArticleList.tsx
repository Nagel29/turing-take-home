import { CleanedArticle } from '../interfaces'
import { ArticleCard } from '../ArticleCard/ArticleCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ArticleList = ({articles}:{articles: CleanedArticle[]}) => {
  const articleCards = articles.map((article, index) => <Col md={true} style={{margin: '3%', width: 'auto'}}><ArticleCard key={index} articleData={article}/></Col>)
  
  let currentRow: JSX.Element[] = []

  const rows = articleCards.reduce((acc: JSX.Element[], card, index) => {
    currentRow.push(card)
    if ((index + 1) % 3 === 0) {
      acc.push(<Row style={{display: 'flex', justifyContent: 'center'}}>{currentRow}</Row>)
      currentRow = []
    }
    return acc
  },[])
    
  return(
    <Container style={{paddingTop: '8%'}}>
        {rows}
    </Container>
  )
}
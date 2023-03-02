import { CleanedArticle } from "../interfaces"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom'

export const ArticleCard = ({articleData, getDetails}:{articleData: CleanedArticle, getDetails: (article: CleanedArticle) => void}) => {

  const navigate = useNavigate()
  const section = useParams()

  return (
    <Card className='h-100' style={{maxWidth: '350px'}}>
      <Card.Img className='img-fluid' src={articleData.images[1]}/>
      <Card.Body>
        <Card.Title style={{height: 'auto'}} className='fs-6'>
          {articleData.title}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{articleData.byline}</ListGroup.Item>
        <ListGroup.Item>{articleData.publishedDate}</ListGroup.Item>
        <Button variant="primary" onClick={() => {
          getDetails(articleData)
          navigate(`/${section.section}/${articleData.title.split(" ").join("-")}`)
          }}>See More Details</Button>
      </ListGroup>
    </Card>
  )
}
import { CleanedArticle } from "../interfaces"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

export const ArticleCard = ({articleData}:{articleData: CleanedArticle}) => {
  return (
    <Card style={{maxWidth: '300px', margin: '5%'}}>
      <Card.Img className='img-fluid' src={articleData.images[1]}/>
      <Card.Body>
        <Card.Title>
          {articleData.title}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{articleData.byline}</ListGroup.Item>
        <ListGroup.Item>{articleData.publishedDate}</ListGroup.Item>
        <Button variant="primary">See More Details</Button>
      </ListGroup>
    </Card>
  )
}
import { CleanedArticle } from "../interfaces"
import './ArticleCard.css'

export const ArticleCard = ({articleData}:{articleData: CleanedArticle}) => {
  return (
    <div className='card-container'>
      <img src={articleData.images[2]}/>
      <p>{articleData.title}</p>
      <p>{articleData.byline}</p>
      
    </div>
  )
}
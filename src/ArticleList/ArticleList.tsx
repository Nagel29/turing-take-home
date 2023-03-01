import './ArticleList.css'
import { CleanedArticle } from '../interfaces'
import { ArticleCard } from '../ArticleCard/ArticleCard'

export const ArticleList = ({articles}:{articles: CleanedArticle[]}) => {
  const articleCards = articles.map((article, index) => <ArticleCard key={index} articleData={article}/>)
  
  return(
    <div className='article-list'>
      {articleCards}
    </div>
  )
}
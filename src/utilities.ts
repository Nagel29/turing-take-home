import { Article } from "./interfaces"

const checkForMedia = (article: Article) => {
  if (article.multimedia) {
    return [article.multimedia[0].url, article.multimedia[1].url, article.multimedia[2].url]
  } else {
    return []
  }
}

export const cleanArticles = (articles: Article[]) => {
  const filteredGoodData = articles.filter(article => article.abstract && article.title)
  return filteredGoodData.map(article => {
    return {
      abstract: article.abstract,
      byline: article.byline,
      images: checkForMedia(article),
      publishedDate: article['published_date'],
      title: article.title,
      url: article.url,
    }
  })
}
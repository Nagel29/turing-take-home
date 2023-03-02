import React, { useState, useEffect } from "react"
import { NavBar } from "./NavBar/NavBar"
import { ArticleList } from "./ArticleList/ArticleList"
import { Details } from "./Details/Details"
import { fetchArticles } from "./apiCalls"
import { cleanArticles } from "./utilities"
import { CleanedArticle } from "./interfaces"

const App = () => {
  const [articles, setArticles] = useState<CleanedArticle[]>([])

  const getArticles = async (section: string) => {
    const response = await fetchArticles(section)
    setArticles(cleanArticles(response.results))
  }

  useEffect(() => {
    getArticles('home')
  },[])

  return (
    <div className='bg-dark'>
      <NavBar getArticles={getArticles}/>
      <ArticleList articles={articles}/>
      {/* <Details /> */}
    </div>
  )
}

export default App

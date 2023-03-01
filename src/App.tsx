import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Navbar } from "./Navbar/Navbar"
import { ArticleList } from "./ArticleList/ArticleList"
import { Details } from "./Details/Details"
import { fetchArticles } from "./apiCalls"
import { cleanArticles } from "./utilities"
import { CleanedArticle } from "./interfaces"

const App = () => {
  const [articles, setArticles] = useState<CleanedArticle[]>([])

  const getArticles = async (section: string) => {
    const response = await fetchArticles(section)
    console.log(response.results)
    setArticles(cleanArticles(response.results))
  }



  return (
    <div className='App'>
      <Navbar getArticles={getArticles}/>
      <ArticleList articles={articles}/>
      {/* <Details /> */}
    </div>
  )
}

export default App

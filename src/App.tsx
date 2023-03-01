import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Navbar } from "./Navbar/Navbar"
import { ArticleList } from "./ArticleList/ArticleList"
import { Details } from "./Details/Details"
import { fetchArticles } from "./apiCalls"

const App = () => {
  const [articles, setArticles] = useState([])

  const getArticles = async (section: string) => {
    const response = await fetchArticles(section)
    setArticles(response.results)
  }

  return (
    <div className='App'>
      <Navbar getArticles={getArticles}/>
      <ArticleList />
      <Details />
    </div>
  )
}

export default App

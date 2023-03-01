import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Banner } from "./Banner/Banner"
import { ArticleList } from "./ArticleList/ArticleList"
import { Details } from "./Details/Details"
import { fetchArticles } from "./apiCalls"

const App = () => {
  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    const response = await fetchArticles()
    console.log(response)
    setArticles(response.results)
  }

  useEffect(() => {
    getArticles()
  },[])

  return (
    <div>
      <Banner />
      <ArticleList />
      <Details />
    </div>
  )
}

export default App

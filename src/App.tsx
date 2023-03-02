import React, { useState, useEffect } from "react"
import { NavBar } from "./NavBar/NavBar"
import { ArticleList } from "./ArticleList/ArticleList"
import { Details } from "./Details/Details"
import { fetchArticles } from "./apiCalls"
import { cleanArticles } from "./utilities"
import { CleanedArticle } from "./interfaces"
import { Route, Routes } from "react-router-dom"
import { Landing } from "./components/Landing"

const App = () => {
  const [articles, setArticles] = useState<CleanedArticle[]>([])
  const [detailArticle, setDetailArticle] = useState<
    CleanedArticle | undefined
  >()

  const getArticles = async (section: string) => {
    const response = await fetchArticles(section)
    setArticles(cleanArticles(response.results))
  }

  const getDetails = (article: CleanedArticle) => {
    setDetailArticle(article)
  }

  return (
    <div className="bg-dark">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/:section"
          element={
            <ArticleList getDetails={getDetails} getArticles={getArticles} articles={articles}/>
          }
        ></Route>
        <Route
          path="/:section/:article"
          element={<Details detailArticle={detailArticle} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App

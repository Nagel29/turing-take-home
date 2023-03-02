import React, { useState, useEffect } from "react"
import { NavBar } from "./components/NavBar"
import { ArticleList } from "./components/ArticleList"
import { Details } from "./components/Details"
import { fetchArticles } from "./utilities/apiCalls"
import { cleanArticles } from "./utilities/utilities"
import { CleanedArticle } from "./utilities/interfaces"
import { Route, Routes } from "react-router-dom"
import { Landing } from "./components/Landing"

const App = () => {
  const [articles, setArticles] = useState<CleanedArticle[]>([])
  const [detailArticle, setDetailArticle] = useState<
    CleanedArticle | undefined
  >()

  const getArticles = async (section: string) => {
    if (section === 'all') {
      section = 'home'
    }
    const response = await fetchArticles(section)
    setArticles(cleanArticles(response.results))
  }

  const getDetails = (article: CleanedArticle) => {
    setDetailArticle(article)
  }

  return (
    <div className="bg-light">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/:section"
          element={
            <ArticleList
              getDetails={getDetails}
              getArticles={getArticles}
              articles={articles}
            />
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

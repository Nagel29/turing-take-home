import './Navbar.css'
import { useState } from 'react'

const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies','obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'travel', 'us', 'world']

export const Navbar = ({ getArticles }: {getArticles: (section: string) => void}) => {
  const [clicked, setClicked] = useState('')

  const buttons = sections.map((section, index) => {
    return (<button key={index} className={`button-section ${clicked === section ? 'clicked' : ''}`} onClick={() => {
      setClicked(section)
      getArticles(section)
    }}>{section}</button>)
  })

  return (
    <nav className='nav'>
      <h1>NEW YORK TIMES SEARCH</h1>
      {buttons}
    </nav>
  )
}

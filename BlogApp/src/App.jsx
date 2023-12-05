// import { useState } from 'react'
import './App.css'
import Card from './ArticleCard/card'
import YourArticles from './data/your-articles.json'
import MissedArticles from './data/missed-articles.json'
import ArticleRow from './ArticleRow'

function App() {

  const yourArticles = YourArticles.map ((article, index) => {
    return (
      <div className='' key={index}>
        <Card
          article={article}
          articleType="your"
        />
      </div>
    )
  });

  const missedArticles = MissedArticles.map ((article, index) => {
    return (
      <div className='' key={index}>
        <Card
          article={article}
          articleType="missed"
        />
      </div>
    )
  });

  return (
    <div>
      <ArticleRow rowName='For you'/>
      <div>
        {yourArticles}
      </div>
      <div>
      <ArticleRow rowName='In case you missed it'/>
        {missedArticles}
      </div>
    </div>
  )

}

export default App

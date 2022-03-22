import { Layout } from 'antd'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, HomePage, CryptoCurrencies, News } from '../src/components'

const App = () => {

  return (
    <div className="app">
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' exact element={<HomePage />}></Route>
              <Route path='/cryptocurrencies' exact element={<CryptoCurrencies />}></Route>
              <Route path='/news' exact element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default App
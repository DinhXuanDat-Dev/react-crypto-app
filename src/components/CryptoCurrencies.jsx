import { Card, Col, Input, Row } from 'antd'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoApi'
import "../../src/App.css"

const CryptoCurrencies = ( {simplified} ) => {
  
  const count = simplified ? 10 : 100

  const {data: cryptoList , isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  const [ searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {

    setCryptos(cryptoList?.data?.coins);
    const filterData = cryptoList?.data?.coins.filter((coin) =>coin.name.toLowerCase().includes(searchTerm))

    setCryptos(filterData)
  },[cryptoList, searchTerm])

  
  if(isFetching) return 'Loading list data...'

  console.log(crypto);


  return (
    <>
     <div className="search-crypto">
       <Input placeholder="Search Crypto Currency" onChange= {(e) => setSearchTerm(e.target.value.toLowerCase())}></Input>
     </div>
     <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} alt="crypto-icon" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CryptoCurrencies
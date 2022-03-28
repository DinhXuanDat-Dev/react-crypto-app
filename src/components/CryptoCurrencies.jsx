import { Card, Col, Input, Row } from 'antd'
import millify from 'millify'
import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoApi'
import "../../src/App.css"

const CryptoCurrencies = ({ simplified }) => {

  const count = simplified ? 10 : 100

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')

  let filterTimeout = useRef();

  // useEffect(() => {
  //   const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm))

  //   setCryptos(filterData)

  //   console.log('searchTerm', searchTerm);

  // }, [cryptoList, searchTerm])

  //debounce search
  const handleFilterCurrency = query => {
    clearTimeout(filterTimeout)
    if (!query) return setCryptos(cryptoList?.data?.coins)
    filterTimeout = setTimeout(() => {
      console.log('====>', query)
      setCryptos(cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(query)))
    }, 500)
  }

  if (isFetching) return 'Loading list data...'

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto Currency"
            // onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            onChange={(e) => handleFilterCurrency(e.target.value.toLowerCase())}
          ></Input>
        </div>
      )}

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
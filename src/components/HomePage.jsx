import React, { useEffect } from 'react'
import { Col, Row, Typography, Statistic } from 'antd'
import  { useGetCryptosQuery } from '../services/CryptoApi'

const { Title } = Typography

const HomePage = () => {
  const {data , isFetching} = useGetCryptosQuery(10);
  const globalStat = data?.data?.stats;
  console.log(data);
  console.log(globalStat);


  if(isFetching) return 'Loading data...'

  return (
    <>
      <Title className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies"></Statistic>
        </Col>
      </Row>
    </>
  )
}

export default HomePage
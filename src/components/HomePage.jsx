import React from 'react'
import { Col, Row, Typography, Statistic } from 'antd'

const { Title } = Typography

const HomePage = () => {
  return (
    <>
      <Title level="2" className="heading">Global Crypto Stats</Title>
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
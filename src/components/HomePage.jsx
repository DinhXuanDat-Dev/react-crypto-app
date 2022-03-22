import React from 'react'
import CountUp from 'react-countup';
import { Col, Row, Typography } from 'antd'
import  { useGetCryptosQuery } from '../services/CryptoApi'
import CryptoCurrencies from './CryptoCurrencies';

const { Title } = Typography

const HomePage = () => {
  const {data , isFetching} = useGetCryptosQuery(10);
  const globalStat = data?.data?.stats
  
  if(isFetching) return 'Loading data...'
  
  return (
    <>
      <Title className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Typography> Total CryptoCurrencies <br/>
            <CountUp 
              end={globalStat.total}
              duration={2}
              separator="."
            />
          </Typography>
        </Col>
        <Col span={12}>
          <Typography> Total Exchanges <br/>
            <CountUp
              end={globalStat.totalExchanges}
              duration={2}
              separator="."
            />
          </Typography>
        </Col>
        <Col span={12}>
          <Typography> Total Market Cap <br/>
            <CountUp
              end={globalStat.totalMarketCap}
              duration={2}
              separator="."
            />
          </Typography>
        </Col>
        <Col span={12}>
          <Typography> Total 24h Volume <br/>
            <CountUp
              end={globalStat.total24hVolume}
              duration={2}
              separator="."
            />
          </Typography>
        </Col>
        <Col span={12}>
          <Typography> Total Markets <br/>
            <CountUp
              end={globalStat.totalMarkets}
              duration={2}
              separator="."
            />
          </Typography>
        </Col>
      </Row>

      <CryptoCurrencies/>
    </>
  )
}

export default HomePage
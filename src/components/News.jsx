import React from 'react'
import moment from 'moment'

import {useGetCryptoNewsQuery} from '../services/CryptoApiNews'

const News = (simplified) => {

  const { data } = useGetCryptoNewsQuery({ newsCategory: 'CryptoCurrency', count: simplified ? 6 : 12})

  if (!data) return 'Loading...';

  console.log('dataNews', data)

  const newsList = data?.value

  console.log('newsList', newsList);
  console.log('newsList', newsList);

  return (
    <div>
      <h1>News</h1>
      <div className="contaner">
        {newsList.map((item, index) => (
          <div key={index}>
            <figure >
              <img src={item.image.thumbnail.contentUrl} alt="news" />
              <figcaption>{item.description}</figcaption>
            </figure>
            <p>{moment(item.datePublished).startOf().fromNow()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
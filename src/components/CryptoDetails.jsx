import React from 'react'

import { useGetCryptoDetailsQuery } from '../services/CryptoApi'

export const CryptoDetails = () => {

    const { data, isFetching } = useGetCryptoDetailsQuery('razxDUgYGNAdQ')
    
    if(isFetching) return 'Loading...'
    
    console.log(data);

    return (
        <div>CryptoDetails</div>
    )
}

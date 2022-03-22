import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '71083e1203msh137d42e95822f00p116e0djsna448133d6e70'
}

console.log('cryptoApiHeaders', cryptoApiHeaders);

const cryptoApiUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseURL: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        // getCryptos: builder.query({
        //     query: () => createRequest('/coin/')
        // })
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    })
});

console.log('cryptoApi', cryptoApi);

export const {
    useGetCryptosQuery,
} = cryptoApi




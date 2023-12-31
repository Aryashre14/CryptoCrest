import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '347fd1e910mshb3fc6492c4b3fa2p166bb4jsn82a62c823dfc',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl='https://bing-news-search1.p.rapidapi.com/news';

  const createRequest=(url)=>({url,Headers:cryptoNewsHeaders});

  export const  cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
  });


  export const {useGetCryptoNewsQuery}=cryptoNewsApi;


import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";

import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer:{
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    }
});
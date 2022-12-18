import React from 'react'
import {createRoot} from 'react-dom/client';
import {ApolloClient,ApolloProvider,InMemoryCache,createHttpLink} from "@apollo/client"
import {App} from "./App"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "./Context"
import {setContext} from "@apollo/client/link/context"
import { Context } from './Context';

const httpLink=createHttpLink({
    uri:"https://petgram-server-elviscruz45.vercel.app/graphql",
})

const authLink = setContext((_, { headers }) => {
    const token = window.sessionStorage.getItem("token")
    return {
        headers: {
            ...headers,
        authorization: token ? `Bearer ${token}` : "",
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})


// const client= new ApolloClient({
//     uri:"https://petgram-server-elviscruz45.vercel.app/graphql",
//     cache: new InMemoryCache()
// })


const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<Provider>
<ApolloProvider client={client}>
<BrowserRouter>
<App/>
</BrowserRouter>
</ApolloProvider>
</Provider>
);


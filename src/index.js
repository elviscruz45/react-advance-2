import React from 'react'
import {createRoot} from 'react-dom/client';
import {ApolloClient,ApolloProvider,InMemoryCache} from "@apollo/client"
import {App} from "./App"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "./Context"

const client= new ApolloClient({
    uri:"https://petgram-server-elviscruz45.vercel.app/graphql",
    cache: new InMemoryCache()
})


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


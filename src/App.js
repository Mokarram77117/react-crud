import {
  ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache
} from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AllUsers from "./components/pages/AllUsers";
import Create from "./components/pages/Create";
import Home from "./components/pages/Home";
import Read from "./components/pages/Read";
import Update from "./components/pages/Update";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// });

const link = from([
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/read" element={<Read />} />
          <Route path= "/update/*" element={<Update/>} /> 
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;

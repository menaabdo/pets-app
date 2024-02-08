import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./components/SearchForm";
import Details from "./components/Details";
import NotFound from "./components/notfound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MyRouts from "./routes/Roter";

const queryClient = new QueryClient();
function App() {
  return (
    <>
 <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <MyRouts/>
      </QueryClientProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

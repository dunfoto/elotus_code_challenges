import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "pages/Movies";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
    mutations: {
      onError: (error) => {
        throw error;
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

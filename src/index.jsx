import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

ReactDOM.render(
   <React.StrictMode>
     {/* <QueryClientProvider client={queryClient}> */}
      <App />
    {/* </QueryClientProvider>, */}
   </React.StrictMode>,
  document.getElementById("root"),
);

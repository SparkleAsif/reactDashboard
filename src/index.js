import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Advertising from "./components/Advertising/Advertising";
import Calender from "./components/Calender/Calender";
import Statistics from "./components/Statistics/Statistics";
import Payments from "./components/Payments/Payments";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

const router =createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<Dashboard/>
      },
      {
        path: "advertising",
        element:<Advertising/>
      },
      {
        path: "calender",
        element:<Calender />
      },
      {
        path:"Statistics",
        element:<Statistics/>
      },
      {
        path:"payments",
        element:<Payments/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <Provider store={store}>

      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  
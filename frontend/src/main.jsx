import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GlobalStyle from './styles/global'
import App from './app'
import Home from './routes/home/home'
import Form from './routes/form/form'
import ErrorPage from './routes/error/errorPage'
import Table from './routes/tableView/tableView'
import Update from './routes/update/update'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Form />,
      },
      {
        path: "list",
        element: <Table />,
      },
      {
        path: "list/:id",
        element: <Update />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode >,
)

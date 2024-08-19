/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FirstPage from './Pages/FirstPage.jsx'
import SecondPage from './Pages/SecondPage.jsx'
import ThirdPage from './Pages/ThirdPage.jsx'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />
  },
  {
    path: "PixPage",
    element: <SecondPage />
  },
  {
    path: "CreditPage",
    element: <ThirdPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

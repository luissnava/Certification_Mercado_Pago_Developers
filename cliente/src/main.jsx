import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './components/App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaymentFailure from "./components/PaymentFailure"
import PaymentSuccess from "./components/PaymentSuccess"
import PaymentPendding from "./components/PaymentPendding"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <h3>Error</h3>
    },
    {
        path: "/success",
        element: <PaymentSuccess/>
    },
    {
        path: "/pending",
        element: <PaymentPendding />
    },
    {
        path: "/failure",
        element: <PaymentFailure />
    }
])
ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
)

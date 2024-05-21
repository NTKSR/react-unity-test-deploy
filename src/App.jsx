import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom"
import Home from "./routes/Home";
import Game from "./routes/Game";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/game",
      element: <Game />,
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App

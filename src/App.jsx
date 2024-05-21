import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./routes/Home";
import Game from "./routes/Game";


function App() {
  // initialize a browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // other pages....
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

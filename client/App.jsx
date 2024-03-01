import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './src/containers/Header/header.jsx'
import Home from './src/pages/Home/home.jsx'
import SignIn from './src/pages/SignIn/sign-in.jsx'
import User from './src/pages/User/user.jsx'


const router = createBrowserRouter([
  {
    element: <Header />,
    errorElement: <h1>ERROR 404</h1>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'user',
        element: <User />
      }
    ]
  }
])


function App() {
  return (

  <RouterProvider router={router} />


  )
}

export default App
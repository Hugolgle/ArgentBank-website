import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './containers/Header/header.jsx'
import Home from './pages/Home/home.jsx'
import SignIn from './pages/SignIn/sign-in.jsx'
import User from './pages/User/user.jsx'

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
  return <RouterProvider router={router} />
}

export default App
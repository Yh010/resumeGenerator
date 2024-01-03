/* import { useState } from 'react' */
import './App.css'
import resumelogo from './assets/resume-maker.jpg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './components/Footer';
import GeneratorButton from './components/GeneratorButton';

function AppLayout() {

  return (
    <>
      
      <h1>Resume Generator for NIT Rourkela</h1>
      <img src={resumelogo} className="resume-logo" alt="resume logo" />
      
      <GeneratorButton />
      <br></br>
      <Footer/> 
    </>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/footer",
      element: <Footer />,
    }
  ]
}]);

const App = () => <RouterProvider router={router} />

export default App

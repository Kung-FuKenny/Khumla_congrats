import  React  from 'react'
import {Routes, Route} from 'react-router-dom'
import lottie from 'lottie-web';
import Home from './routes/Home'
import animation from './confetti.json'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App

import './App.css';
import Home from './components/Home.jsx';
import {Routes, Route} from 'react-router-dom';
import Quiz from './components/Quiz.jsx';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
  )
}

export default App;

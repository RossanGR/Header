import './App.css'
import Header from './components/Header'
import Perfume from './components/Perfume'
import Card from './components/Card'

export default function App() {
  return (
    <div className='d-flex justify-content-center mt-5 align-items-center'>
      <Perfume></Perfume>
      <Card></Card>
    </div>
  )
}

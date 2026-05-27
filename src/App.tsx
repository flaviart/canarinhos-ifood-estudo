import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CanarinhosPage from './pages/CanarinhosPage'
import CardsPage from './pages/CardsPage'
import ComoColecionarPage from './pages/ComoColecionarPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/canarinhos" element={<CanarinhosPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/como-colecionar" element={<ComoColecionarPage />} />
      </Route>
    </Routes>
  )
}

export default App

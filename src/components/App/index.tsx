import { Routes, Route } from 'react-router-dom';

import HomeView from '../../views/Home'
import PokemonView from '../../views/Pokemon';
import SearchView from '../../views/Search';
// import Header from '../Header';

import '../../assets/styles/app.scss'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/pokemon/:id" element={<PokemonView />} />
        <Route path="/search/:term" element={<SearchView />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App

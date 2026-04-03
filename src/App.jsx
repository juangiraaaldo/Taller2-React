import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/components/Header';
import { Content } from './layout/components/Content';
import { Footer } from './layout/components/Footer';
import { Articles } from './articles/components/Articles';
import { Props } from './props/pages/Props';

function App() {

  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/props' element={<Props/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import ComprarProduto from './components/ComprarProduto'
import Container from './components/Container'
import DisponibilidadeProduto from './components/DisponibilidadeProduto'
import Header from './components/Header'
import MaisSobreProduto from './components/MaisSobreProduto'
import ProdutoDemonstracao from './components/ProdutoDemonstracao'
import InfoProduto from './components/InfoProduto'

function App() {

  const [trocarOrdem, setTrocarOrdem] = useState(false)

  const funcaoTrocarOrdem = () => setTrocarOrdem(prev => !prev)

  console.log(trocarOrdem);
  

  return (
    <div className='h-full w-full flex justify-center'>
      <Container>
        <Header />
        <ProdutoDemonstracao />
        <MaisSobreProduto />
        <InfoProduto onSwitch={funcaoTrocarOrdem} />
        {trocarOrdem ? (
          <>
            <ComprarProduto />
            <DisponibilidadeProduto />
          </>
        ) : (
          <>
            <DisponibilidadeProduto />
            <ComprarProduto />

          </>
        )}
      </Container>
    </div>
  )
}

export default App

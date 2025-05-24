import React from 'react'
import { useData } from '../Context/DataContext'
import DateRange from "./DateRange"
import { Meses } from './Meses'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();
  React.useEffect(() => {
    if(location.pathname === '/') {
      setTitle('Resumo');
      document.title = "Fintech | Resumo";
    } else if (location.pathname === '/vendas') {
      setTitle('Vendas');
      document.title = "Fintech | Vendas";
    }
  }, [location])

  return (
    <header className="mb">
      <div className='daterange mb'>
        <h1 className='title box bg-3'>{title}</h1>
        <DateRange />
      </div>
      <Meses />
    </header>
  )
}

export default Header
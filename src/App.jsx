
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Nav from './compenets/Nav'
import Home from './page/Home'
import Natinfo from './page/Natinfo'
import { useEffect } from 'react'


function App() {

  const [darkmode, setdarkmode] = useState(false);
  const [data, setData] = useState('');
  const [item, setItem] = useState('');
  const [seletindex,setSeletIndex] = useState('');



  const fetchData = (item) => {
    if(item){
      fetch(`https://restcountries.com/v3.1/name/${item}`)
      .then(response => response.json())
      .then(json => {
          setData(json);
      })
    }else{
      fetch('https://restcountries.com/v3.1/all?fields=name,flags,translations,continents,capital,population,subregion,cca2,languages')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const ondarkmode = () => {
    setdarkmode(!darkmode);
  }
  const onserch = (item) => {
    setItem(item);
    fetchData(item);
  }
  const onSeletIndex=(item)=>{
    setSeletIndex(item);
  }

  return (
    <body className={darkmode ? 'App-dark' : 'App-white'}>
      <BrowserRouter>
        <Nav ondarkmode={ondarkmode}></Nav>
        <Routes>
          <Route path='/' element={<Home data={data} onserch={onserch} onSeletIndex={onSeletIndex} />}></Route>
          <Route path='/natinfo' element={<Natinfo data={data} seletindex={seletindex} />}></Route>
        </Routes>
      </BrowserRouter>
    </body>


  )
}

export default App

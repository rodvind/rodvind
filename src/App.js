// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga'
import { NavHeader } from './components/NavHeader'
import { Jumbo } from './components/Jumbo'
import { About } from './pages/About'
import { Resume } from './pages/Resume';
import { Footer } from './components/Footer';
import { Tools } from './pages/Tools'
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { CounterContext } from './data/CounterContext'
import axios from 'axios'

const history = createBrowserHistory()
const key = history.location
console.log(key)
// history.listen(location => {
//   ReactGA.set({ page: location.pathname })
//   ReactGA.pageview(location.pathname)
// })

// let count = localStorage.getItem('on-load-counter') || 0
// count++
// localStorage.setItem('on-load-counter', count)

// const data = {
//   'siteUrl': 'https://rodvind.io'
// }

const App = () => {
  const [count, setCount] = useState('')

  useEffect(() => {
    const data = JSON.stringify({ "siteUrl": "https://rodvind.io" })
    const updateCount = async () => {
      const req = await axios({
        method: 'GET',
        url: process.env.REACT_APP_API_URL
      })
      console.log('getCount:', req.data[0].visits)
      setCount(req.data[0].visits)
      const res = await axios({
        method: 'POST',
        url: process.env.REACT_APP_API_URL,
        data
      })
      console.log(res)
    }

    // const getCount = async () => {
    //   const req = await axios.get('https://wgec6trvc4.execute-api.us-east-1.amazonaws.com/Prod/')
    //   console.log('getCount:', req.data[0].visits)
    //   setCount(req.data[0].visits)
    // }
    
    // axios.request({
    //   method: 'POST',
    //   url: 'https://wgec6trvc4.execute-api.us-east-1.amazonaws.com/Prod/',
    //   headers: {'Content-Type': 'application/json'},
    //   data,
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    
    // getCount()
    updateCount()
    
    // setCount()

    // const options = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: '{ "siteUrl": "https://rodvind.io" }'
    // }
    // fetch(`https://wgec6trvc4.execute-api.us-east-1.amazonaws.com/Prod/`,options)
    //   .then(response => console.log(response.json()))
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error))
    
  }, [])

  // localStorage.setItem('on_load_counter', count)
  
  
  // window.onload = event => {
    
  // }
  
  return (
    <div>
      <CounterContext.Provider>
        <NavHeader />
        <Jumbo count={count} />
        <About />
        <Resume />
        
        <Footer />
      </CounterContext.Provider>
    </div> 
  );
}

export default App;

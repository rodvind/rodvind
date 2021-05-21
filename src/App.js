import 'bootstrap/dist/css/bootstrap.min.css';
import { NavHeader } from './components/NavHeader'
import { Jumbo } from './components/Jumbo'
import { About } from './pages/About'
import { Resume } from './pages/Resume';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {
  const [count, setCount] = useState('')

  useEffect(() => {
    const data = JSON.stringify({ "siteUrl": "https://rodvind.io" })
    const updateCount = async () => {
      const req = await axios({
        method: 'GET',
        url: process.env.REACT_APP_API_URL
      })
      
      setCount(req.data[0].visits)
      const res = await axios({
        method: 'POST',
        url: process.env.REACT_APP_API_URL,
        data
      })
    }

    updateCount() 
  }, [])

  return (
    <div>
      <NavHeader />
      <Jumbo count={count} />
      <About />
      <Resume />
      <Footer />
    </div> 
  );
}

export default App;

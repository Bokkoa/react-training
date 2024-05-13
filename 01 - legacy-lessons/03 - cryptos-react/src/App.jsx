import { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import CryptoImage from './img/cryptos-img.png'
import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`


const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color:#FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 35px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [currencies, setCurrencies ] = useState({})
  const [ result, setResult ] = useState({})
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if( Object.keys(currencies).length ){

       const checkCryptoPrice = async () => {

          setLoading(true);
          // cleaning result object
          setResult({});

          const { currency, crypto } = currencies;

          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`

          const response = await fetch(url);
          const result = await response.json();

          // dynamic property name ej. (result.DISPLAY.USD.XRP)
          console.log(result.DISPLAY[crypto][currency]);
          setResult(result.DISPLAY[crypto][currency]);

          setLoading(false);

       }

       checkCryptoPrice();

    }
  }, [currencies])
  

  return (
    <Container>
      <Image 
        src={CryptoImage}
        alt="Cryptocurrencies"
      />
      <div>
        <Heading>Check cryptocurrencies price instantly</Heading>
        <Form setCurrencies={setCurrencies} />
        {/* result not empty */}
        {loading && <Spinner />}
        {result.PRICE && <Result  result={result}/>}
      </div>
    </Container>
  );
}

export default App

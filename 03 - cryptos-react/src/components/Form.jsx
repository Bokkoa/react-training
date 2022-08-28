
import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { currencies } from "../data/currencies";
import useSelectCurrency from "../hooks/useSelectCurrency"
import Error from "./Error";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = ({ setCurrencies }) => {

    const [ cryptos, setCryptos ] = useState([]);
    const [ error, setError ] = useState(false);

    // positional naming
    const [ currency, SelectCurrency ] = useSelectCurrency('Choose your currency', currencies);
    const [ crypto, SelectCrypto ] = useSelectCurrency('Choose your crypto', cryptos);


    useEffect(() => {

        const consultApi = async () => {

            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const response = await fetch( url );
            const result = await response.json();


            const arrayCryptos = result.Data.map( crypto => {

                return {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                    
                };

            });

            setCryptos(arrayCryptos);

        }

        consultApi();

    }, [])


    const handleSubmit =  (e) => {
        e.preventDefault();

        if([currency, crypto].includes('')){
            console.log("ERROR");
            setError(true);
            return;
        }

        setError(false);

        setCurrencies({
            currency,
            crypto
        })

    }

    return (
        <>
            {error && <Error>All fields are required</Error>}

            <form
                onSubmit={handleSubmit}
                >
                <SelectCurrency />
                <SelectCrypto />
                <InputSubmit type="submit" value="Check price" />

            </form>
        </>
    )
}

export default Form
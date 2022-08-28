
import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { currencies } from "../data/currencies";
import useSelectCurrency from "../hooks/useSelectCurrency"

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

const Form = () => {

    const [ cryptos, setCryptos ] = useState([]);

    // positional naming
    const [ currency, SelectCurrency ] = useSelectCurrency('Choose your currency', currencies);
    const [ crypto, SelectCrypto ] = useSelectCurrency('Choose your crypto', cryptos);


    useEffect(() => {

        const consultApi = async () => {

            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`;

            const response = await fetch( url );
            const result = await response.json();

            console.log(result.Data);

            const arrayCryptos = result.Data.map( crypto => {

                return {
                    id: crypto.Name,
                    name: crypto.FullName
                    
                };

            });


            setCryptos(arrayCryptos);

        }

        consultApi();

    }, [])

    return (
        <form
            onSubmit={handleSubmit}
        >
            <SelectCurrency />
            <SelectCrypto />
            <InputSubmit type="submit" value="Check price" />

        </form>
    )
}

export default Form
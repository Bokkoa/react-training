import styled from "@emotion/styled"

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 30px;
`

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    } 
`

const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Image = styled.img`
    display: block;
    width: 120px;
`

const Result = ({result}) => {

 const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result;
  return (
    <Container>
        <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto" />
        <div>
            <Price>Price: {PRICE}</Price>
            <Text>Highest price in the day: {HIGHDAY}</Text>
            <Text>Lowest price in the day: {LOWDAY}</Text>
            <Text>Variation from the last 24 hours: {CHANGEPCT24HOUR}</Text>
            <Text>Last update: {LASTUPDATE}</Text>
        </div>
    </Container>
  )
}

export default Result
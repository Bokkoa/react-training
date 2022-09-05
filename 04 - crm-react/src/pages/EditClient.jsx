import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Form from "../components/Form"

const EditClient = () => {

  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {

    const getClientApi = async () => {

      try {

        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url);

        const result = await response.json();

        setClient(result);

      } catch (err) {
        console.log(err);
      }

      setLoading(!loading)

    }

    getClientApi();
  }, [])


  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Edit Client</h1>

      <p className='mt-3'>Fill the fields to edit a client</p>

      {client?.name ? (
        <Form
        client={client}
        loading={loading}
        />
      ) : ( <h1>Invalid client id</h1>)}
    </>
  )
}

export default EditClient
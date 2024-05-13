import { useEffect, useState } from "react"
import Client from "../components/Client"

const Home = () => {

  const [clients, setClients ] = useState([])

  useEffect( () => {

    const getClientsApi = async () => {
      try{

        const url = import.meta.env.VITE_API_URL;

        const response = await fetch(url);

        const result = await response.json();

        setClients(result);

      }catch( err ){
        console.log(err);
      }

    }

    getClientsApi();

  }, [])


  const handleDelete = async (id) => {
    const confirmation = confirm('Do you want to delete this client?')

    if( confirmation ){
      try{
        const url = `${import.meta.env.VITE_API_URL}/clients/${id}`

        const response = await fetch(url, {
          method:'DELETE'
        });

        await response.json();

        // update from state is better than completely reload
        // for performance
        const arrayClients = clients.filter( client => client.id !== id )
        setClients(arrayClients);

      }catch( err ){
        console.log(err);
      }
    }
  }

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clients</h1>

      <p className='mt-3'>Manage your clients</p>

      <table className="w-full mt-5 table-auto shadow bg-white">

        <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Company</th>
              <th className="p-2">Actions</th>
            </tr>
        </thead>

        <tbody>
          {clients.map( client => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>


      </table>

    </>
  )
}

export default Home
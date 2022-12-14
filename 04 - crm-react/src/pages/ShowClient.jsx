
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const ShowClient = () => {

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
        loading ? (<Spinner />) : 
        
        Object.keys(client).length === 0 ? <p>Theres not results</p> : (

            <div>
                

                    <>
                        <h1 className='font-black text-4xl text-blue-900'>See client: {client.name}</h1>
                        <p className='mt-3'>Client details</p>

                        {client.name && (<p className='text-4xl text-gray-700 mt-10'>
                            <span className=' uppercase font-bold'> Client: { }  </span>
                            {client.name}
                        </p>)}

                        {client.email && (<p className='text-2xl text-gray-600 mt-4'>
                            <span className=' uppercase font-bold text-gray-800'> Email:  </span>
                            {client.email}
                        </p>)}

                        {client.phone &&
                            (
                                <p className='text-2xl text-gray-600 mt-4'>
                                    <span className=' uppercase font-bold text-gray-800'> Phone:  </span>
                                    {client.phone}
                                </p>)
                        }

                        {client.company &&
                            (<p className='text-2xl text-gray-600 mt-4'>
                                <span className=' uppercase font-bold text-gray-800'> Company:  </span>
                                {client.company}
                            </p>)
                        }

                        {client.notes &&
                            (<p className='text-2xl text-gray-600 mt-4'>
                                <span className=' uppercase font-bold text-gray-800'> Notes:  </span>
                                {client.notes}
                            </p>)
                        }
                    </>

            </div>
        )
    )
}

export default ShowClient
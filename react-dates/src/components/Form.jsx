import { useState, useEffect } from 'react'

const Form = ({patients, setPatients}) => {
  
  const [ name, setName ] = useState('');
  const [ owner, setOwner ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ entryDate, setEntryDate ] = useState('');
  const [ symptoms, setSymptoms ] = useState('');


  const [error, setError] = useState(false);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Form validation

    if([name, owner, email, entryDate, symptoms].includes('') ){
      
      // console.log('There is at least an empty field');
      setError(true);
      return;

    }

    setError( false );
    // create patient object

    const patientObject = {
      name, 
      owner, 
      email, 
      entryDate, 
      symptoms,
      id: generateId(),
    }
    setPatients( [...patients, patientObject]);

    // clean form
    setName('');
    setOwner('');
    setEmail('');
    setEntryDate('');
    setSymptoms('');

  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patients Follow-up</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Add patients and {''}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

        {/* ERROR VALIDATION ALERT  */}
        {/* SEE CHILDREN PATTERN */}
        {error && ( <Error><p>All fields must be filled</p></Error> )}

        <div className="mb-5">
            <label  htmlFor="petName" className="block text-gray-700 uppercase font-bold">
                Pet name
            </label>
            <input
              id="petName"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Pet name"
              value={name}
              onChange={ (e) => setName(e.target.value) }
            />
        </div>

        <div className="mb-5">
            <label  htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                Owner name
            </label>
            <input
              id="owner"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Owner name"
              value={owner}
              onChange={ (e) => setOwner(e.target.value) }
            />
        </div>

        <div className="mb-5">
            <label  htmlFor="email" className="block text-gray-700 uppercase font-bold">
               Email
            </label>
            <input
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="email" 
              placeholder="Contact Email"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
        </div>

        <div className="mb-5">
            <label  htmlFor="entry" className="block text-gray-700 uppercase font-bold">
               Patient entry date
            </label>
            <input
              id="entry"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="date" 
              value={entryDate}
              onChange={ (e) => setEntryDate(e.target.value) }
            />
        </div>

        <div className="mb-5">
            <label  htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
               Symptoms
            </label>
            <textarea 
              id="symptoms"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Symptoms description"
              value={symptoms}
              onChange={ (e) => setSymptoms(e.target.value) }
            />
        </div>

        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                     hover:bg-indigo-700 cursor-pointer transition-all"
          value="Add patient"
        />


      </form>
    </div>
  )
}

export default Form
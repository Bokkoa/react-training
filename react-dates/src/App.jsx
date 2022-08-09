import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient ] = useState({});

  const deletePatient = (id) => {
    console.log('deleting patient', id);
    const updatedPatients = patients.filter( p => p.id !== id);
    setPatients(updatedPatients);
  }

  // executed once
  useEffect(() => {

    const getLS = () => {
      
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];

      setPatients(patientsLS);

    }

    getLS();

  }, [])
  

  useEffect(() => {

    console.log('Component ready or patients mutation');
    localStorage.setItem('patients', JSON.stringify(patients));

  }, [patients])
  

  return (
    <div className="container mx-auto mt-2">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          setPatient={setPatient} 
          patients={patients}
          deletePatient={deletePatient}
         />
      </div>
    </div>
  )

}

export default App

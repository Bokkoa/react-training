import Patient from "./Patient"

const PatientList = ({patients}) => {


  console.log(patients && patients.length);

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">    
      {patients && patients.length ? (
        <>
             <h2 className="font-black text-3xl text-center">Patient List</h2>
              <p className="text-xl mb-10 text-center">
                Manage your {''}
                <span className="text-indigo-600 font-bold ">Patients and Dates</span>
              </p>

              {patients.map( (patient) => 
                <Patient 
                    key={patient.id} 
                    patient={patient} 
                />
              )}
            
        </>
      ) : (
        <>
            <h2 className="font-black text-3xl text-center">There's no patients</h2>
            <p className="text-xl mb-10 text-center">
              Add some patients {''}
              <span className="text-indigo-600 font-bold "> and them will be show here.</span>
            </p>
        </>
      )}  

    </div>
   
  )
}

export default PatientList

import { Formik, Form as FormikForm, Field } from "formik"
import { useNavigate } from "react-router-dom";

import * as Yup from 'yup'
import Alert from "./Alert";
import Spinner from './Spinner'



const Form = ({ client, loading }) => {

  const navigate = useNavigate();

  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name too short')
      .max(20, 'Name too long')
      .required('Name must be send'),
    company: Yup.string()
      .required('Company name is required'),
    email: Yup.string()
      .email('Email must have a valid format')
      .required('Email required'),
    phone: Yup.number()
      .positive('Invalid format')
      .integer('Invalid format')
      .typeError('Phone must be only numbers'),
    notes: Yup.string()
  });

  const handleSubmit = async (values) => {

    try {

      let response;

      if( client.id ){

              // EDIT CLIENT ROW
              const url = `${import.meta.env.VITE_API_URL}/${client.id}`

              response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

      }else {
        
        // NEW CLIENT ROW
        const url = `${import.meta.env.VITE_API_URL}/clients`

        response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
      }

      const result = await response.json();
      console.log(result)
      navigate('/clients');

    } catch (error) {

      console.log(error);

    }

  }

  return (

    loading ? <Spinner /> : (
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <h1 className="text-gray-600 font-bold 
        uppercase text-xl text-center ">{client?.name ? 'Edit Client' : 'Add Client'}</h1>

        <Formik
          initialValues={{
            name: client?.name ?? '',
            company: client?.company ?? '',
            email: client?.email ?? '',
            phone: client?.phone ?? '',
            notes: client?.notes ?? ''  // short elvis null safety
          }}

          // enable the use of props as initialValues
          enableReinitialize={true}

          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}

          validationSchema={newClientSchema}
        >
          {({ errors, touched }) => {
            return (
              <FormikForm className="mt-10">
                <div className="mb-4">
                  <label
                    className="text-gray-800"
                    htmlFor="name"
                  >Name: </label>
                  <Field
                    id='name'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder="Must have client name"
                    name="name"
                  />

                  {errors.name && touched.name ? (
                    <Alert>
                      {errors.name}
                    </Alert>

                  ) : null}
                </div>


                <div className="mb-4">
                  <label
                    className="text-gray-800"
                    htmlFor="company"
                  >Company: </label>
                  <Field
                    id='company'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder="Client company name"
                    name="company"
                  />

                  {errors.company && touched.company ? (
                    <Alert>
                      {errors.company}
                    </Alert>

                  ) : null}
                </div>


                <div className="mb-4">
                  <label
                    className="text-gray-800"
                    htmlFor="email"
                  >Email: </label>
                  <Field
                    id='email'
                    type='email'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder="Client email"
                    name="email"
                  />

                  {errors.email && touched.email ? (
                    <Alert>
                      {errors.email}
                    </Alert>

                  ) : null}
                </div>


                <div className="mb-4">
                  <label
                    className="text-gray-800"
                    htmlFor="phone"
                  >Phone: </label>
                  <Field
                    id='phone'
                    type='tel'
                    className='mt-2 block w-full p-3 bg-gray-50'
                    placeholder="Client phone"
                    name="phone"
                  />
                  {errors.phone && touched.phone ? (
                    <Alert>
                      {errors.phone}
                    </Alert>

                  ) : null}
                </div>

                <div className="mb-4">
                  <label
                    className="text-gray-800"
                    htmlFor="notes"
                  >Observations: </label>
                  <Field
                    as='textarea'
                    id='notes'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50 h-40'
                    placeholder="Observations"
                    name="notes"
                  />
                  {errors.notes && touched.notes ? (
                    <Alert>
                      {errors.notes}
                    </Alert>

                  ) : null}
                </div>

                <input
                  type="submit"
                  value={client?.name ? 'Edit Client' : 'Add Client'}
                  className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer"
                />
              </FormikForm>

            )
          }}

        </Formik>

      </div>
    )
  )
}


Form.defaultProps = {
  client: {},
  loading: false,
}

export default Form
import { useForm } from 'react-hook-form'
import Error from './Error'
import { DraftPatient } from './types'
import { usePatientStore } from '../store/store'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function PatientForm() {
  const addPatient= usePatientStore(state => state.addPatient)
  const activeId= usePatientStore(state => state.activeId)
  const patients= usePatientStore(state => state.patients)
  const updatePatient= usePatientStore(state => state.updatePatient)
  
  const { register, handleSubmit, setValue , formState:{errors}, reset } = useForm<DraftPatient>()

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter( patient => patient.id === activeId)[0]
      setValue('name', activePatient.name)
      setValue('caretaker', activePatient.caretaker)
      setValue('email', activePatient.email)
      setValue('date', activePatient.date)
      setValue('symptoms', activePatient.symptoms)
    }
  }, [activeId])

  const registerPatient = (data: DraftPatient) => {

    if (activeId) {
      updatePatient(data)
      toast('Patient has been updated successfully!',{
        type: 'success'
      })
    } else {
      addPatient(data)
      toast.success('Patient has been registered successfully!')
    }

    
    reset()
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Add Patients and {''}
            <span className="text-indigo-600 font-bold">Manage them</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerPatient)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                      Patient
                  </label>
                  <input  
                      id="name"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Patient Name" 
                      {...register('name',{
                        required: 'The patient name is obligatory'
                      })}
                  />
                  {errors.name && (
                    <Error>{errors.name?.message}</Error>
                  )}          
              </div>

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Owner 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Owner Name" 
                    {...register('caretaker',{
                        required: 'The owner is obligatory'
                      })}
                />
                {errors.caretaker && (
                    <Error>{errors.caretaker?.message}</Error>
                  )}     
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className="w-full p-3  border border-gray-100"  
                  type="email" 
                  placeholder="Email" 
                  {...register("email", {
                    required: "The Email is obligatory",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email does not valid!'
                    }
                  })} 
              />
              {errors.email && (
                    <Error>{errors.email?.message}</Error>
                  )} 
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Discharged Date
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date" 
                    {...register('date',{
                        required: 'The date is obligatory'
                      })}
                />
                {errors.date && (
                    <Error>{errors.date?.message}</Error>
                  )}  
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Symtoms 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Patient Symtoms" 
                    {...register('symptoms',{
                        required: 'The symptoms are obligatory'
                      })}
                />
                {errors.symptoms && (
                    <Error>{errors.symptoms?.message}</Error>
                  )} 
            </div>

            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value='Save Patient'
            />
        </form> 
    </div>
  )
}
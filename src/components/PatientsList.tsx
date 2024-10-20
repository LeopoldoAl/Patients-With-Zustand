import { usePatientStore } from "../store/store"
import PatientsDtails from "./PatientsDtails"

export default function PatientsList() {
  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
          Manage yours {''}
          <span className="text-indigo-600 font-bold">Pacients and Dates</span>
          </p>
          {patients.map( patient => (
            <PatientsDtails
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ): (
          <>
            <h2 className="font-black text-3xl text-center">No patients</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Start adding patients {''}
              <span className="text-indigo-600 font-bold">and will appear in this place</span>
            </p>
          </>
      )}
    </div>
  )
}

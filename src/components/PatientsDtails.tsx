import { usePatientStore } from "../store/store"
import PatientDetailItem from "./PatientDetailItem"
import { Patient } from "./types"

type PatientsDtailsProps = {
    patient: Patient
}

export default function PatientsDtails({patient}: PatientsDtailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient)

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id} />
        <PatientDetailItem label="Name" data={patient.name} />
        <PatientDetailItem label="Owner" data={patient.caretaker} />
        <PatientDetailItem label="Email" data={patient.email} />
        <PatientDetailItem label="Discharged Date" data={patient.date.toString()} />
        <PatientDetailItem label="Symptoms" data={patient.symptoms} />

        <div className=" flex justify-between mt-10">
          <button
            type='button'
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          >
            Edit
          </button>
          <button
            type='button'
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={() => deletePatient(patient.id)}
          >
            Delete
          </button>
        </div>
    </div>
  )
}

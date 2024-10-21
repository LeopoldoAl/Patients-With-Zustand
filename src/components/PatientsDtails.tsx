import PatientDetailItem from "./PatientDetailItem"
import { Patient } from "./types"

type PatientsDtailsProps = {
    patient: Patient
}

export default function PatientsDtails({patient}: PatientsDtailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id} />
        <PatientDetailItem label="Name" data={patient.name} />
        <PatientDetailItem label="Owner" data={patient.caretaker} />
        <PatientDetailItem label="Email" data={patient.email} />
        <PatientDetailItem label="Discharged Date" data={patient.date.toString()} />
        <PatientDetailItem label="Symptoms" data={patient.symptoms} />
    </div>
  )
}

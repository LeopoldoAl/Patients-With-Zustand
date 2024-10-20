import { Patient } from "./types"

type PatientsDtailsProps = {
    patient: Patient
}

export default function PatientsDtails({patient}: PatientsDtailsProps) {
  return (
    <div>
        {patient.name}
    </div>
  )
}

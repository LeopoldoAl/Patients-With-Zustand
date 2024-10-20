import { create } from "zustand";
import { DraftPatient, Patient } from "../components/types";

type PatientState = {
    patients: Patient[],
    addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    addPatient: (data) => {
       set((state) => ({
        patients: [...state.patients, data]
       }))
    }
}))

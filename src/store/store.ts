import { create } from "zustand";
import { Patient } from "../components/types";

type PatientState = {
    patients: Patient[]
}

export const usePatientStore = create<PatientState>(() => ({
    patients: []
}))

import { createContext } from "react"

export const initialValues = {
    toaster: { type: '', message: '', show: false },
    pageLoading: false,
    portfolioModal: {
        show: false,
        modalContent: {},
    }
}

export const CommonContext = createContext()
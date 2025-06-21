import { initialValues } from "./CommonContext"

export const CommonReducer = (state, action) => {
    switch (action.type) {
        case 'enableToaster': {
            return {
                ...state, toaster: action.payload
            }
        }
        case 'enablePageLoader': {
            return {
                ...state, pageLoading: true
            }
        }
        case 'disablePageLoader': {
            return {
                ...state, pageLoading: false
            }
        }
        case 'setPortfolioModal': {
            return {
                ...state, portfolioModal: action.payload
            }
        }
        case 'closePortfolioModal': {
            return {
                ...state, portfolioModal: initialValues.portfolioModal
            }
        }
        default:
            break;
    }
}
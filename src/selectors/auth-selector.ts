// Type
import { RootState } from 'store'


export const getErrorsFormAuth = (state: RootState) => state.auth.errors
export const getIsAuth = (state: RootState) => state.auth.isAuth
export const getLoadingFormAuth = (state: RootState) => state.auth.loadingForm

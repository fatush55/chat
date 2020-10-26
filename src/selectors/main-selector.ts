// Type
import { RootState } from 'store'


export const getMessages = (store: RootState) => store.main.messages
export const getCardsUser = (store: RootState) => store.main.cardsUser

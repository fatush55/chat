import formatDistanceToNow from "date-fns/formatDistanceToNow"
import ruLocation from "date-fns/locale/ru"
// Type 
import { DateType } from 'types/main-type'


export const useTime = (props : DateType) => {
    
    return formatDistanceToNow(new Date(props.year, props.month, props.day, props.hours, props.minutes, props.second),{addSuffix: true, locale: ruLocation})
}

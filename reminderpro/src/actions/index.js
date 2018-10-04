import { ADD_REMIDER, DELETE_REMINDER , CLEAR_REMINDERS} from '../constants';
import { GREAT_COURSE } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMIDER,
    text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

export const getGreatCourse = (text) => {
  const action = {
    type: GREAT_COURSE,
    text
  }
  console.log('action in getGreatCourse', action);
  return action;
}

export const deleteReminder = (id) => {
   const action = {
     type: DELETE_REMINDER,
     id
   }
   console.log('deleting in action', action);
   return action;
 }

 export const clearReminders = () => {
   return {
     type: CLEAR_REMINDERS
   }
 }

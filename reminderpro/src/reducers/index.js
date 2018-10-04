import { ADD_REMIDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';
import { GREAT_COURSE } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate

  }
}

const greatCourse = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id != id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  let greatCourse = null;

  state = read_cookie('reminders');


  switch(action.type){
    case ADD_REMIDER:
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders);
      return reminders;
    case GREAT_COURSE:
      greatCourse = [...state, greatCourse(action)];
      console.log('great course', greatCourse);
      return greatCourse;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;

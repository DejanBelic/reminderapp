import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from "../Components/Constants";

// Action creator.
export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  return action;
}

export const deleteReminder = id => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleteing in actions', action)
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
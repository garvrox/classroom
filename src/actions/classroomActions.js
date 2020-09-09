import axios from 'axios'
import { studentDetails } from 'constants/endpoints'

export const fetchStudentsRequest = () => {
  return {
    type: 'FETCH_STUDENTS_REQUEST'
  }
}

export const fetchStudentsSuccess = students => {
  return {
    type: 'FETCH_STUDENTS_SUCCESS',
    payload: students
  }
}

export const fetchStudentsFailure = error => {
  return {
    type: 'FETCH_STUDENTS_FAILURE',
    payload: error
  }
}

export const fetchStudents = () => {
  return dispatch => {
    dispatch(fetchStudentsRequest())
    axios
      .get(studentDetails)
      .then(res => {
        const students = res.data
        dispatch(fetchStudentsSuccess(students))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchStudentsFailure(errorMsg))
      })
  }
}

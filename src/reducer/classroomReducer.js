const initialState = {
  error: false,
  loading: false,
  classRoom: []
}

const parseStudents = students => {
  const result = {}
  students.forEach(item => {
    if (!result[item.class]) {
      result[item.class] = {}
    }
    if (!result[item.class][item.section]) {
      result[item.class][item.section] = []
    }
    result[item.class][item.section].push(item)
  })
  const output = []
  for (var key in result) {
    let sections = []
    for (var sectionKey in result[key]) {
      sections.push({ section: sectionKey, students: result[key][sectionKey] })
    }
    output.push({
      class: key,
      sections: sections.sort((a, b) => {
        return a.section.charCodeAt(0) - b.section.charCodeAt(0)
      })
    })
  }
  return output
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false
      }
    case 'FETCH_STUDENTS_SUCCESS':
      return {
        ...state,
        classRoom: parseStudents(action.payload),
        loading: false,
        error: false
      }
    case 'FETCH_STUDENTS_FAILURE':
      return {
        ...state,
        students: [],
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default reducer

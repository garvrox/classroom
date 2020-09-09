import config from 'config/application.json'
const { production = {}, development = {} } = config
const endPoints =
  process.env.NODE_ENV !== 'production' ? development : production

export const studentDetails = `${endPoints.studentManagement}students`

import React from 'react'
import './style.css'

const ClassStudent = ({
  students,
  setShowPane = () => {},
  setPaneData = () => {}
}) => {
  const onClickHandler = obj => {
    setShowPane(true)
    setPaneData(obj)
  }
  return (
    <div>
      <ul className='student_wrap'>
        {students.map(({ name, age, gender, sports = [] }, index) => {
          return (
            <li
              onClick={() => {
                onClickHandler({ name, age, gender, sports })
              }}
              className='student_content'
              key={`student_${index}`}
            >
              {name}
              <div className='tooltip'>
                <div>
                  <label>Name: </label>
                  <span>{name}</span>
                </div>
                <div>
                  <label>Age: </label>
                  <span>{age} Years</span>
                </div>
                <div>
                  <label>Gender: </label>
                  <span>{gender === 'F' ? 'Female' : 'Male'}</span>
                </div>
                <div>
                  <label>Sports: </label>
                  <span>{sports.join(', ')}</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ClassStudent

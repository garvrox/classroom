import React, { useState } from 'react'
import ClassStudent from 'components/ClassStudent'

const ClassSection = ({
  sections,
  setShowPane = () => {},
  setPaneData = () => {}
}) => {
  const [showStudents, setShowStudents] = useState(false)
  const onClickHandler = index => {
    setShowStudents(index)
    setShowPane(false)
  }
  return (
    <ul className='section_wrap'>
      {sections.map(({ section, students = [] }, index) => {
        return (
          <li key={`section_${index}`}>
            <div
              className='section_heading'
              onClick={() => {
                onClickHandler(index)
              }}
            >
              Section {section}
            </div>
            {students.length > 0 && showStudents === index && (
              <ClassStudent
                setShowPane={setShowPane}
                setPaneData={setPaneData}
                students={students}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default ClassSection

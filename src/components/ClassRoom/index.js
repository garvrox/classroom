import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchStudents } from 'actions/classroomActions'
import ClassSection from 'components/ClassSection'
import './style.css'

const ClassRoom = ({
  fetchStudents = () => {},
  loading,
  error,
  classRoom = []
}) => {
  const [showSection, setShowSection] = useState(false)
  const [showPane, setShowPane] = useState(false)
  const [paneData, setPaneData] = useState({})

  useEffect(() => {
    fetchStudents()
  }, [])

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <Fragment>
      <h2>Class Room</h2>
      <ul>
        {classRoom.map(({ class: cls, sections }, index) => {
          return (
            <li key={`class_${index}`}>
              <div
                className='class_heading'
                onClick={() => {
                  setShowSection(index)
                }}
              >
                Class {cls}
              </div>
              {sections.length > 0 && showSection === index && (
                <ClassSection
                  setShowPane={setShowPane}
                  setPaneData={setPaneData}
                  sections={sections}
                />
              )}
            </li>
          )
        })}
      </ul>
      {showPane && (
        <div className='right-pane'>
          <div className='close-pane' onClick={() => setShowPane(false)}>
            X
          </div>
          <div>
            <label>Name: </label>
            <span>{paneData.name}</span>
          </div>
          <div>
            <label>Age: </label>
            <span>{paneData.age} Years</span>
          </div>
          <div>
            <label>Gender: </label>
            <span>{paneData.gender === 'F' ? 'Female' : 'Male'}</span>
          </div>
          <div>
            <label>Sports: </label>
            <span>{paneData.sports.join(', ')}</span>
          </div>
        </div>
      )}
    </Fragment>
  )
}

const mapStateToProps = ({ classRoom, loading, error }) => ({
  classRoom,
  loading,
  error
})

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassRoom)

import React, { useState } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CRow,
  CFormSelect,
} from '@coreui/react'

const Template = () => {
  const [requestType, setRequestType] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      requestType,
      createdBy,
      templateStatus: 'DRAFT',
    }
    try {
      const response = await axios.post('http://localhost:8080/api/request/create', payload)
      console.log('Response:', response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <div>
        <CCard className="mb-4">
          <CCardHeader>Create Template</CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow className="mb-3">
                <CFormLabel htmlFor="requestType" className="col-sm-2 col-form-label">
                  Request Type
                </CFormLabel>
                <CCol sm={10}>
                  <CFormSelect
                    id="requestType"
                    aria-label="Default select example"
                    options={[
                      { label: 'Select Request type' },
                      { label: 'Type-1', value: 'REQ_TYPE_1' },
                      { label: 'Type-2', value: 'REQ_TYPE_2' },
                      { label: 'Type-3', value: 'REQ_TYPE_3', disabled: true },
                    ]}
                    onChange={(event) => setRequestType(event.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="createdBy" className="col-sm-2 col-form-label">
                  Created By
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput 
                  type="input" 
                  id="createdBy" 
                  placeholder="Created By"
                  onChange={(event) => setCreatedBy(event.target.value)}
                  />
                </CCol>
              </CRow>
              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <CCol sm={10}>
                  <CFormCheck
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    label="First radio"
                    defaultChecked
                  />
                  <CFormCheck
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                    label="Second radio"
                  />
                  <CFormCheck
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                    label="Third disabled radio"
                    disabled
                  />
                </CCol>
              </fieldset>
              <CRow className="mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
                </div>
              </CRow>
              <CButton color="primary" type="submit">
                Create
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default Template

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'

const TemplateListing = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/request/list')
        if (response.data.status === 'SUCCESS') {
          setItems(response.data.data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const columns = [
    {
      key: 'templateId',
      label: 'Template ID',
      _props: { scope: 'col' },
    },
    {
      key: 'requestType',
      label: 'Request Type',
      _props: { scope: 'col' },
    },
    {
      key: 'createdBy',
      label: 'Created By',
      _props: { scope: 'col' },
    },
    {
      key: 'creationDate',
      label: 'Creation Date',
      _props: { scope: 'col' },
    },
    {
      key: 'templateStatus',
      label: 'Template Status',
      _props: { scope: 'col' },
    },
    {
      key: 'enabled',
      label: 'Is Enabled',
      _props: { scope: 'col' },
    },
  ]
  // const items = [
  //   {
  //     templateId: 1,
  //     requestType: 'Type-1',
  //     createdBy: 'Somebody',
  //     creationDate: '12-01-2024',
  //     templateStatus: 'Active',
  //     enabled: 'Enabled',
  //     _cellProps: { id: { scope: 'row' } },
  //   },
  //   {
  //     templateId: 2,
  //     requestType: 'Type-2',
  //     createdBy: 'Somebody',
  //     creationDate: '12-01-2024',
  //     templateStatus: 'Active',
  //     enabled: 'Enabled',
  //     _cellProps: { id: { scope: 'row' } },
  //   },
  //   {
  //     templateId: 3,
  //     requestType: 'Type-3',
  //     createdBy: 'Somebody',
  //     creationDate: '12-01-2024',
  //     templateStatus: 'Active',
  //     enabled: 'Enabled',
  //     _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
  //   },
  // ]

  return (
    <>
      <div>
        <CCard className="mb-4">
          <CCardHeader>All Templates</CCardHeader>
          <CCardBody>
            {/* <CTable columns={columns} items={items} /> */}
            <CTable>
              <CTableHead>
                <CTableRow>
                  {columns.map((column) => (
                    <CTableHeaderCell key={column.key} {...column._props}>
                      {column.label}
                    </CTableHeaderCell>
                  ))}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {items.map((item) => (
                  <CTableRow key={item.templateId}>
                    {columns.map((column) => (
                      <CTableDataCell key={column.key} {...item._cellProps?.[column.key]}>
                        <>{column.key === 'enabled' ? (item[column.key] ? 'Enabled' : 'Disabled') : item[column.key]}</>
                      </CTableDataCell>
                    ))}
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default TemplateListing;
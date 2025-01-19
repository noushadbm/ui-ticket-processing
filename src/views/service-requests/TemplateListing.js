import React from 'react';
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
    const columns = [
      {
        key: 'templateId',
        label: 'Template ID',
        _props: { scope: 'col' },
      },
      {
        key: 'requestType',
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
    const items = [
      {
        templateId: 1,
        requestType: 'Type-1',
        createdBy: 'Somebody',
        creationDate: '12-01-2024',
        templateStatus: 'Active',
        enabled: 'Enabled',
        _cellProps: { id: { scope: 'row' } },
      },
      {
        templateId: 2,
        requestType: 'Type-2',
        createdBy: 'Somebody',
        creationDate: '12-01-2024',
        templateStatus: 'Active',
        enabled: 'Enabled',
        _cellProps: { id: { scope: 'row' } },
      },
      {
        templateId: 3,
        requestType: 'Type-3',
        createdBy: 'Somebody',
        creationDate: '12-01-2024',
        templateStatus: 'Active',
        enabled: 'Enabled',
        _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
      },
    ]
  
    return (
      <>
        <div>
          <CCard className="mb-4">
            <CCardHeader>All Templates</CCardHeader>
            <CCardBody>
              <CTable columns={columns} items={items} />
            </CCardBody>
          </CCard>
        </div>
      </>
    ) 
  }

export default TemplateListing;
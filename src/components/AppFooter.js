import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">2025 RayshanLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Created by NoushadBM</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

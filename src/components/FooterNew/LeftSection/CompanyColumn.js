import React from 'react'

import FooterListColumn from './Column'
import { company } from 'src/constants/urls'

const CompanyColumn = () => (
  <FooterListColumn
    header='company'
    listItems={[
      {
        name: 'overview',
        navProps: { to: company.team, completed: true },
      },
      {
        name: 'jobs',
        navProps: { to: company.jobs, completed: true },
      },
      {
        name: 'contact',
        navProps: { to: company.contact, crossDomain: true },
      },
    ]}
  />
)

export default CompanyColumn

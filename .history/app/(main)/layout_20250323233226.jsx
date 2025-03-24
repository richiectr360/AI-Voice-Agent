import React from 'react'
import AppHeader from './_components/AppHeader';

function DashboardLayout({ children }) {
  return (
    <div className='p-10 mt-20 md:px-20 lg:px-32 xl:px-48'>
        <AppHeader />
      {children}
    </div>
  )
}

export default DashboardLayout;

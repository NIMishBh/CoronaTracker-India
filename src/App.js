import React from 'react';
import Dashboard from './containers/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageLayout from './layout/PageLayout';

function App() {
  return (
    <>
      <CssBaseline />
      <PageLayout>
        <Dashboard />
      </PageLayout>
    </>
  )
}

export default App

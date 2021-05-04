import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DataTable } from 'app/components/DataTable';
import { PageWrapper } from 'app/components/PageWrapper';
import { AddNewModal } from 'app/components/AddNewModal';
import { NavBar } from 'app/components/NavBar';

export const EmployeesPage = () => {
  return (
    <>
      <Helmet>
        <title>Employee page</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <DataTable />
        <AddNewModal />
      </PageWrapper>
    </>
  );
};

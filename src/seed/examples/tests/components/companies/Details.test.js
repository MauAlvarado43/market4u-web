/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/companies/Details';

test('examples/components/companies/Details', () => {
  mockGql.useDetail({"company": data.GQL_COMPANY});
  mockGql.useDelete({"deleteCompany": data.GQL_COMPANY});
  render(<Details />);
  expect(screen).toBeDefined()
});
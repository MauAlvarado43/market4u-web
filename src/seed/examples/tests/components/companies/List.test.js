/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/companies/List';

test('examples/components/companies/List', () => {
  mockGql.usePagination({"companyPagination": data.GQL_COMPANY_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});
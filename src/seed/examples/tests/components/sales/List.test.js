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
import List from 'seed/examples/components/sales/List';

test('examples/components/sales/List', () => {
  mockGql.usePagination({"salePagination": data.GQL_SALE_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});
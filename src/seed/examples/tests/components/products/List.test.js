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
import List from 'seed/examples/components/products/List';

test('examples/components/products/List', () => {
  mockGql.usePagination({"productPagination": data.GQL_PRODUCT_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});
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
import Details from 'seed/examples/components/sales/Details';

test('examples/components/sales/Details', () => {
  mockGql.useDetail({"sale": data.GQL_SALE});
  mockGql.useDelete({"deleteSale": data.GQL_SALE});
  render(<Details />);
  expect(screen).toBeDefined()
});
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
import Details from 'seed/examples/components/products/Details';

test('examples/components/products/Details', () => {
  mockGql.useDetail({"product": data.GQL_PRODUCT});
  mockGql.useDelete({"deleteProduct": data.GQL_PRODUCT});
  render(<Details />);
  expect(screen).toBeDefined()
});
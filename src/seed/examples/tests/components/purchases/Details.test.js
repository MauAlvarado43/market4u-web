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
import Details from 'seed/examples/components/purchases/Details';

test('examples/components/purchases/Details', () => {
  mockGql.useDetail({"purchase": data.GQL_PURCHASE});
  mockGql.useDelete({"deletePurchase": data.GQL_PURCHASE});
  render(<Details />);
  expect(screen).toBeDefined()
});
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
import Details from 'seed/examples/components/carts/Details';

test('examples/components/carts/Details', () => {
  mockGql.useDetail({"cart": data.GQL_CART});
  mockGql.useDelete({"deleteCart": data.GQL_CART});
  render(<Details />);
  expect(screen).toBeDefined()
});
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
import Details from 'seed/examples/components/payments/Details';

test('examples/components/payments/Details', () => {
  mockGql.useDetail({"payment": data.GQL_PAYMENT});
  mockGql.useDelete({"deletePayment": data.GQL_PAYMENT});
  render(<Details />);
  expect(screen).toBeDefined()
});
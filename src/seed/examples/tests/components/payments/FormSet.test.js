/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/payments/FormSet';

test('examples/components/payments/FormSet', () => {
  mockGql.useDetail({"payment": data.GQL_PAYMENT});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSet({"setPayment": data.GQL_PAYMENT});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
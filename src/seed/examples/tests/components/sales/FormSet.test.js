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
import FormSet from 'seed/examples/components/sales/FormSet';

test('examples/components/sales/FormSet', () => {
  mockGql.useDetail({"sale": data.GQL_SALE});
  mockGql.useQuery({"products": data.GQL_PRODUCTS});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSet({"setSale": data.GQL_SALE});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
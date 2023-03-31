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
import FormSave from 'seed/examples/components/sales/FormSave';

test('examples/components/sales/FormSave', () => {
  mockGql.useQuery({"products": data.GQL_PRODUCTS});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSave({"saveSale": data.GQL_SALE});
  render(<FormSave />);
  expect(screen).toBeDefined();
});
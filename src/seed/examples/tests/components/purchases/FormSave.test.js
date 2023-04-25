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
import FormSave from 'seed/examples/components/purchases/FormSave';

test('examples/components/purchases/FormSave', () => {
  mockGql.useQuery({"shippings": data.GQL_SHIPPINGS});
  mockGql.useSave({"savePurchase": data.GQL_PURCHASE});
  render(<FormSave />);
  expect(screen).toBeDefined();
});
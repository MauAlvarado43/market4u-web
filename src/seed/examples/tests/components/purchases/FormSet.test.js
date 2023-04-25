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
import FormSet from 'seed/examples/components/purchases/FormSet';

test('examples/components/purchases/FormSet', () => {
  mockGql.useDetail({"purchase": data.GQL_PURCHASE});
  mockGql.useQuery({"shippings": data.GQL_SHIPPINGS});
  mockGql.useSet({"setPurchase": data.GQL_PURCHASE});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
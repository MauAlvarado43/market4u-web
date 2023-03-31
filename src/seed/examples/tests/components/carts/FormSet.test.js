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
import FormSet from 'seed/examples/components/carts/FormSet';

test('examples/components/carts/FormSet', () => {
  mockGql.useDetail({"cart": data.GQL_CART});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useQuery({"payments": data.GQL_PAYMENTS});
  mockGql.useSet({"setCart": data.GQL_CART});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
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
import FormSet from 'seed/examples/components/products/FormSet';

test('examples/components/products/FormSet', () => {
  mockGql.useDetail({"product": data.GQL_PRODUCT});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useQuery({"sales": data.GQL_SALES});
  mockGql.useQuery({"categories": data.GQL_CATEGORIES});
  mockGql.useSet({"setProduct": data.GQL_PRODUCT});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
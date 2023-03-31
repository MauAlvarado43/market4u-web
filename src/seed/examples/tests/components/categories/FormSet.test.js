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
import FormSet from 'seed/examples/components/categories/FormSet';

test('examples/components/categories/FormSet', () => {
  mockGql.useDetail({"category": data.GQL_CATEGORY});
  mockGql.useSet({"setCategory": data.GQL_CATEGORY});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
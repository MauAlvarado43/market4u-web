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
import FormSet from 'seed/examples/components/variants/FormSet';

test('examples/components/variants/FormSet', () => {
  mockGql.useDetail({"variant": data.GQL_VARIANT});
  mockGql.useQuery({"products": data.GQL_PRODUCTS});
  mockGql.useSet({"setVariant": data.GQL_VARIANT});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
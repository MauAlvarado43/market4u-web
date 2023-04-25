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
import Details from 'seed/examples/components/variants/Details';

test('examples/components/variants/Details', () => {
  mockGql.useDetail({"variant": data.GQL_VARIANT});
  mockGql.useDelete({"deleteVariant": data.GQL_VARIANT});
  render(<Details />);
  expect(screen).toBeDefined()
});
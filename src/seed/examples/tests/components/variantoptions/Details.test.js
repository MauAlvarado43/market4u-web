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
import Details from 'seed/examples/components/variantoptions/Details';

test('examples/components/variantoptions/Details', () => {
  mockGql.useDetail({"variantoption": data.GQL_VARIANTOPTION});
  mockGql.useDelete({"deleteVariantoption": data.GQL_VARIANTOPTION});
  render(<Details />);
  expect(screen).toBeDefined()
});
/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/variantoptions/List';

test('examples/components/variantoptions/List', () => {
  mockGql.usePagination({"variantoptionPagination": data.GQL_VARIANTOPTION_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});
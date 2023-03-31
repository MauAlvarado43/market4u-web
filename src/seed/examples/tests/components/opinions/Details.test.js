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
import Details from 'seed/examples/components/opinions/Details';

test('examples/components/opinions/Details', () => {
  mockGql.useDetail({"opinion": data.GQL_OPINION});
  mockGql.useDelete({"deleteOpinion": data.GQL_OPINION});
  render(<Details />);
  expect(screen).toBeDefined()
});
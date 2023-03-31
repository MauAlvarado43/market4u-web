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
import FormSet from 'seed/examples/components/companies/FormSet';

test('examples/components/companies/FormSet', () => {
  mockGql.useDetail({"company": data.GQL_COMPANY});
  mockGql.useSet({"setCompany": data.GQL_COMPANY});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
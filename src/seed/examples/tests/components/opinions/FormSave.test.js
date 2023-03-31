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
import FormSave from 'seed/examples/components/opinions/FormSave';

test('examples/components/opinions/FormSave', () => {
  mockGql.useQuery({"products": data.GQL_PRODUCTS});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSave({"saveOpinion": data.GQL_OPINION});
  render(<FormSave />);
  expect(screen).toBeDefined();
});
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
import FormSave from 'seed/examples/components/variantoptions/FormSave';

test('examples/components/variantoptions/FormSave', () => {
  mockGql.useQuery({"variants": data.GQL_VARIANTS});
  mockGql.useSave({"saveVariantoption": data.GQL_VARIANTOPTION});
  render(<FormSave />);
  expect(screen).toBeDefined();
});
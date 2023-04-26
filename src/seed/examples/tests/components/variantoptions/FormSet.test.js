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
import FormSet from 'seed/examples/components/variantoptions/FormSet';

test('examples/components/variantoptions/FormSet', () => {
  mockGql.useDetail({"variantoption": data.GQL_VARIANTOPTION});
  mockGql.useQuery({"variants": data.GQL_VARIANTS});
  mockGql.useSet({"setVariantoption": data.GQL_VARIANTOPTION});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
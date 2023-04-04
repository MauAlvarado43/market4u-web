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
import Details from 'seed/examples/components/shippings/Details';

test('examples/components/shippings/Details', () => {
  mockGql.useDetail({"shipping": data.GQL_SHIPPING});
  mockGql.useDelete({"deleteShipping": data.GQL_SHIPPING});
  render(<Details />);
  expect(screen).toBeDefined()
});
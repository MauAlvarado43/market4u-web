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
import FormSet from 'seed/examples/components/shippings/FormSet';

test('examples/components/shippings/FormSet', () => {
  mockGql.useDetail({"shipping": data.GQL_SHIPPING});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useQuery({"carts": data.GQL_CARTS});
  mockGql.useSet({"setShipping": data.GQL_SHIPPING});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
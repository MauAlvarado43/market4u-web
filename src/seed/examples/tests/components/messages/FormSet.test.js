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
import FormSet from 'seed/examples/components/messages/FormSet';

test('examples/components/messages/FormSet', () => {
  mockGql.useDetail({"message": data.GQL_MESSAGE});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSet({"setMessage": data.GQL_MESSAGE});
  render(<FormSet />);
  expect(screen).toBeDefined();
});
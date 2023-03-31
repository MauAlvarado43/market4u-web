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
import Details from 'seed/examples/components/messages/Details';

test('examples/components/messages/Details', () => {
  mockGql.useDetail({"message": data.GQL_MESSAGE});
  mockGql.useDelete({"deleteMessage": data.GQL_MESSAGE});
  render(<Details />);
  expect(screen).toBeDefined()
});
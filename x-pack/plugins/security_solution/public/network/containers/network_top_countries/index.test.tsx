/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { act, renderHook } from '@testing-library/react-hooks';
import { TestProviders } from '../../../common/mock';
import { useNetworkTopCountries } from '.';
import { NetworkType } from '../../store/model';
import { FlowTargetSourceDest } from '../../../../common/search_strategy';

describe('useNetworkTopCountries', () => {
  it('skip = true will cancel any running request', () => {
    const abortSpy = jest.spyOn(AbortController.prototype, 'abort');
    const localProps = {
      docValueFields: [],
      flowTarget: FlowTargetSourceDest.source,
      startDate: '2020-07-07T08:20:18.966Z',
      endDate: '2020-07-08T08:20:18.966Z',
      indexNames: ['cool'],
      type: NetworkType.page,
      skip: false,
    };
    const { rerender } = renderHook(() => useNetworkTopCountries(localProps), {
      wrapper: TestProviders,
    });
    localProps.skip = true;
    act(() => rerender());
    expect(abortSpy).toHaveBeenCalledTimes(4);
  });
});

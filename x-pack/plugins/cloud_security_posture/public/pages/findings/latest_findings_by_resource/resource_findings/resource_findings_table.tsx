/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React from 'react';
import { EuiEmptyPrompt, EuiBasicTable, CriteriaWithPagination, Pagination } from '@elastic/eui';
import { extractErrorMessage } from '../../../../../common/utils/helpers';
import * as TEXT from '../../translations';
import type { ResourceFindingsResult } from './use_resource_findings';
import { getFindingsColumns } from '../../layout/findings_layout';
import type { CspFinding } from '../../types';

interface Props extends ResourceFindingsResult {
  pagination: Pagination;
  setTableOptions(options: CriteriaWithPagination<CspFinding>): void;
}

const columns = getFindingsColumns();

const ResourceFindingsTableComponent = ({
  error,
  data,
  loading,
  pagination,
  setTableOptions,
}: Props) => {
  if (!loading && !data?.page.length)
    return <EuiEmptyPrompt iconType="logoKibana" title={<h2>{TEXT.NO_FINDINGS}</h2>} />;

  return (
    <EuiBasicTable
      loading={loading}
      error={error ? extractErrorMessage(error) : undefined}
      items={data?.page || []}
      columns={columns}
      onChange={setTableOptions}
      pagination={pagination}
    />
  );
};

export const ResourceFindingsTable = React.memo(ResourceFindingsTableComponent);

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { css } from '@emotion/react';

import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n-react';
import { EuiButton, EuiEmptyPrompt, EuiEmptyPromptProps } from '@elastic/eui';

import { DataViewIllustration } from '../assets';
import { DocumentationLink } from './documentation_link';

export interface Props {
  canCreateNewDataView: boolean;
  onClickCreate?: () => void;
  dataViewsDocLink?: string;
  emptyPromptColor?: EuiEmptyPromptProps['color'];
}

const createDataViewText = i18n.translate('sharedUXComponents.noDataViewsPrompt.addDataViewText', {
  defaultMessage: 'Create data view',
});

// Using raw value because it is content dependent
const MAX_WIDTH = 830;

/**
 * A presentational component that is shown in cases when there are no data views created yet.
 */
export const NoDataViews = ({
  onClickCreate,
  canCreateNewDataView,
  dataViewsDocLink,
  emptyPromptColor = 'plain',
}: Props) => {
  const createNewButton = canCreateNewDataView && (
    <EuiButton
      onClick={onClickCreate}
      iconType="plusInCircle"
      fill={true}
      data-test-subj="createDataViewButtonFlyout"
    >
      {createDataViewText}
    </EuiButton>
  );

  const title = canCreateNewDataView ? (
    <h2>
      <FormattedMessage
        id="sharedUXComponents.noDataViewsPrompt.youHaveData"
        defaultMessage="You have data in Elasticsearch."
      />
      <br />
      <FormattedMessage
        id="sharedUXComponents.noDataViewsPrompt.nowCreate"
        defaultMessage="Now, create a data view."
      />
    </h2>
  ) : (
    <h2>
      <FormattedMessage
        id="sharedUXComponents.noDataViewsPrompt.noPermission.title"
        defaultMessage="You need permission to create data views"
      />
    </h2>
  );

  const body = canCreateNewDataView ? (
    <p>
      <FormattedMessage
        id="sharedUXComponents.noDataViewsPrompt.dataViewExplanation"
        defaultMessage="Data views identify the Elasticsearch data you want to explore. You can point data views to one or more data streams, indices, and index aliases, such as your log data from yesterday, or all indices that contain your log data."
      />
    </p>
  ) : (
    <p>
      <FormattedMessage
        id="sharedUXComponents.noDataViewsPrompt.noPermission.dataViewExplanation"
        defaultMessage="Data views identify the Elasticsearch data that you want to explore. To create data views, ask your administrator for the required permissions."
      />
    </p>
  );

  return (
    <EuiEmptyPrompt
      data-test-subj="noDataViewsPrompt"
      layout="horizontal"
      css={css`
        max-width: ${MAX_WIDTH}px !important; // Necessary to override EuiEmptyPrompt to fit content
        flex-grow: 0;
      `}
      color={emptyPromptColor}
      icon={<DataViewIllustration />}
      title={title}
      body={body}
      actions={createNewButton}
      footer={dataViewsDocLink && <DocumentationLink href={dataViewsDocLink} />}
    />
  );
};

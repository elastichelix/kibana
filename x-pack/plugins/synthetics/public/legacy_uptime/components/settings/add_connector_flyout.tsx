/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useMemo, useState } from 'react';
import { FormattedMessage } from '@kbn/i18n-react';
import { useDispatch } from 'react-redux';
import { EuiButtonEmpty } from '@elastic/eui';
import { TriggersAndActionsUIPublicPluginStart } from '@kbn/triggers-actions-ui-plugin/public';
import { useKibana } from '@kbn/kibana-react-plugin/public';
import { useFetcher } from '@kbn/observability-plugin/public';
import { getConnectorsAction } from '../../state/alerts/alerts';
import { fetchActionTypes } from '../../state/api/alerts';

import { ActionTypeId } from './types';

interface Props {
  focusInput: () => void;
  isDisabled: boolean;
}

interface KibanaDeps {
  triggersActionsUi: TriggersAndActionsUIPublicPluginStart;
}

export const ALLOWED_ACTION_TYPES: ActionTypeId[] = [
  '.slack',
  '.pagerduty',
  '.server-log',
  '.index',
  '.teams',
  '.servicenow',
  '.jira',
  '.webhook',
  '.email',
];

export const AddConnectorFlyout = ({ focusInput, isDisabled }: Props) => {
  const [addFlyoutVisible, setAddFlyoutVisibility] = useState<boolean>(false);
  const {
    services: {
      application,
      triggersActionsUi: { getAddConnectorFlyout },
    },
  } = useKibana<KibanaDeps>();

  const canEdit: boolean = !!application?.capabilities.actions.save;

  const dispatch = useDispatch();

  const { data: actionTypes } = useFetcher(() => fetchActionTypes(), []);

  const ConnectorAddFlyout = useMemo(
    () =>
      getAddConnectorFlyout({
        consumer: 'uptime',
        onClose: () => {
          dispatch(getConnectorsAction.get());
          setAddFlyoutVisibility(false);
          focusInput();
        },
        actionTypes: (actionTypes ?? []).filter((actionType) =>
          ALLOWED_ACTION_TYPES.includes(actionType.id as ActionTypeId)
        ),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actionTypes]
  );

  return (
    <>
      {addFlyoutVisible ? ConnectorAddFlyout : null}
      <EuiButtonEmpty
        data-test-subj="createConnectorButton"
        onClick={() => setAddFlyoutVisibility(true)}
        size="s"
        isDisabled={isDisabled || !canEdit}
      >
        <FormattedMessage
          id="xpack.synthetics.alerts.settings.addConnector"
          defaultMessage="Add connector"
        />
      </EuiButtonEmpty>
    </>
  );
};

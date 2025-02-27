/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiButton,
  EuiButtonEmpty,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiAccordion,
  EuiAccordionProps,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import deepMerge from 'deepmerge';
import styled from 'styled-components';

import { pickBy, isEmpty, map } from 'lodash';
import { convertECSMappingToObject } from '../../../common/schemas/common/utils';
import { UseField, Form, FormData, useForm, useFormData, FIELD_TYPES } from '../../shared_imports';
import { AgentsTableField } from './agents_table_field';
import { LiveQueryQueryField } from './live_query_query_field';
import { useKibana } from '../../common/lib/kibana';
import { ResultTabs } from '../../routes/saved_queries/edit/tabs';
import { queryFieldValidation } from '../../common/validations';
import { fieldValidators } from '../../shared_imports';
import { SavedQueryFlyout } from '../../saved_queries';
import { useErrorToast } from '../../common/hooks/use_error_toast';
import { ECSMappingEditorField } from '../../packs/queries/lazy_ecs_mapping_editor_field';
import { SavedQueriesDropdown } from '../../saved_queries/saved_queries_dropdown';

const FORM_ID = 'liveQueryForm';

const StyledEuiAccordion = styled(EuiAccordion)`
  ${({ isDisabled }: { isDisabled?: boolean }) => isDisabled && 'display: none;'}
  .euiAccordion__button {
    color: ${({ theme }) => theme.eui.euiColorPrimary};
  }
`;

export const MAX_QUERY_LENGTH = 2000;

const GhostFormField = () => <></>;

type FormType = 'simple' | 'steps';

interface LiveQueryFormProps {
  defaultValue?: Partial<FormData>;
  onSuccess?: () => void;
  queryField?: boolean;
  ecsMappingField?: boolean;
  formType?: FormType;
  enabled?: boolean;
  hideAgentsField?: boolean;
  addToTimeline?: (payload: { query: [string, string]; isIcon?: true }) => React.ReactElement;
}

const LiveQueryFormComponent: React.FC<LiveQueryFormProps> = ({
  defaultValue,
  onSuccess,
  queryField = true,
  ecsMappingField = true,
  formType = 'steps',
  enabled = true,
  hideAgentsField = false,
  addToTimeline,
}) => {
  const permissions = useKibana().services.application.capabilities.osquery;
  const { http } = useKibana().services;
  const [advancedContentState, setAdvancedContentState] =
    useState<EuiAccordionProps['forceState']>('closed');
  const [showSavedQueryFlyout, setShowSavedQueryFlyout] = useState(false);
  const setErrorToast = useErrorToast();

  const handleShowSaveQueryFlout = useCallback(() => setShowSavedQueryFlyout(true), []);
  const handleCloseSaveQueryFlout = useCallback(() => setShowSavedQueryFlyout(false), []);

  const { data, isLoading, mutateAsync, isError, isSuccess } = useMutation(
    (payload: Record<string, unknown>) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      http.post<any>('/internal/osquery/action', {
        body: JSON.stringify(payload),
      }),
    {
      onSuccess: () => {
        setErrorToast();
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: (error) => {
        setErrorToast(error);
      },
    }
  );

  const formSchema = {
    agentSelection: {
      defaultValue: {
        agents: [],
        allAgentsSelected: false,
        platformsSelected: [],
        policiesSelected: [],
      },
      type: FIELD_TYPES.JSON,
      validations: [],
    },
    savedQueryId: {
      type: FIELD_TYPES.TEXT,
      validations: [],
    },
    query: {
      type: FIELD_TYPES.TEXT,
      validations: [
        {
          validator: fieldValidators.maxLengthField({
            length: MAX_QUERY_LENGTH,
            message: i18n.translate('xpack.osquery.liveQuery.queryForm.largeQueryError', {
              defaultMessage: 'Query is too large (max {maxLength} characters)',
              values: { maxLength: MAX_QUERY_LENGTH },
            }),
          }),
        },
        { validator: queryFieldValidation },
      ],
    },
    ecs_mapping: {
      defaultValue: [],
      type: FIELD_TYPES.JSON,
      validations: [],
    },
  };

  const { form } = useForm({
    id: FORM_ID,
    schema: formSchema,
    onSubmit: async (formData, isValid) => {
      if (isValid) {
        try {
          await mutateAsync(pickBy(formData, (value) => !isEmpty(value)));
          // eslint-disable-next-line no-empty
        } catch (e) {}
      }
    },
    options: {
      stripEmptyFields: false,
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    serializer: ({ savedQueryId, ecs_mapping, ...formData }) =>
      pickBy(
        {
          ...formData,
          saved_query_id: savedQueryId,
          ecs_mapping: convertECSMappingToObject(ecs_mapping),
        },
        (value) => !isEmpty(value)
      ),
    defaultValue: deepMerge(
      {
        agentSelection: {
          agents: [],
          allAgentsSelected: false,
          platformsSelected: [],
          policiesSelected: [],
        },
        query: '',
        savedQueryId: null,
        ecs_mapping: [],
      },
      defaultValue ?? {}
    ),
  });

  const { updateFieldValues, setFieldValue, submit, isSubmitting } = form;

  const actionId = useMemo(() => data?.actions[0].action_id, [data?.actions]);
  const agentIds = useMemo(() => data?.actions[0].agents, [data?.actions]);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [{ agentSelection, ecs_mapping, query, savedQueryId }] = useFormData({
    form,
    watch: ['agentSelection', 'ecs_mapping', 'query', 'savedQueryId'],
  });

  const agentSelected = useMemo(
    () =>
      agentSelection &&
      !!(
        agentSelection.allAgentsSelected ||
        agentSelection.agents?.length ||
        agentSelection.platformsSelected?.length ||
        agentSelection.policiesSelected?.length
      ),
    [agentSelection]
  );

  const queryValueProvided = useMemo(() => !!query?.length, [query]);

  const queryStatus = useMemo(() => {
    if (isError || !form.getFields().query?.isValid) return 'danger';
    if (isLoading) return 'loading';
    if (isSuccess) return 'complete';

    return 'incomplete';
  }, [isError, isLoading, isSuccess, form]);

  const resultsStatus = useMemo(
    () => (queryStatus === 'complete' ? 'incomplete' : 'disabled'),
    [queryStatus]
  );

  const handleSavedQueryChange = useCallback(
    (savedQuery) => {
      if (savedQuery) {
        updateFieldValues({
          query: savedQuery.query,
          savedQueryId: savedQuery.savedQueryId,
          ecs_mapping: savedQuery.ecs_mapping
            ? map(savedQuery.ecs_mapping, (value, key) => ({
                key,
                result: {
                  type: Object.keys(value)[0],
                  value: Object.values(value)[0],
                },
              }))
            : [],
        });

        if (!isEmpty(savedQuery.ecs_mapping)) {
          setAdvancedContentState('open');
        }
      } else {
        setFieldValue('savedQueryId', null);
      }
    },
    [setFieldValue, updateFieldValues]
  );

  const commands = useMemo(
    () => [
      {
        name: 'submitOnCmdEnter',
        bindKey: { win: 'ctrl+enter', mac: 'cmd+enter' },
        exec: () => submit(),
      },
    ],
    [submit]
  );

  const queryComponentProps = useMemo(
    () => ({
      commands,
    }),
    [commands]
  );

  const flyoutFormDefaultValue = useMemo(
    () => ({ savedQueryId, query, ecs_mapping }),
    [savedQueryId, ecs_mapping, query]
  );

  const handleToggle = useCallback((isOpen) => {
    const newState = isOpen ? 'open' : 'closed';
    setAdvancedContentState(newState);
  }, []);

  const ecsFieldProps = useMemo(
    () => ({
      isDisabled: !permissions.writeLiveQueries,
    }),
    [permissions.writeLiveQueries]
  );

  const isSavedQueryDisabled = useMemo(
    () => !permissions.runSavedQueries || !permissions.readSavedQueries,
    [permissions.readSavedQueries, permissions.runSavedQueries]
  );

  const queryFieldStepContent = useMemo(
    () => (
      <>
        {queryField ? (
          <>
            {!isSavedQueryDisabled && (
              <>
                <SavedQueriesDropdown
                  disabled={isSavedQueryDisabled}
                  onChange={handleSavedQueryChange}
                />
                <EuiSpacer />
              </>
            )}
            <UseField
              path="query"
              component={LiveQueryQueryField}
              componentProps={queryComponentProps}
            />
          </>
        ) : (
          <>
            <UseField path="savedQueryId" component={GhostFormField} />
            <UseField path="query" component={GhostFormField} />
          </>
        )}
        {ecsMappingField ? (
          <>
            <EuiSpacer size="m" />
            <StyledEuiAccordion
              id="advanced"
              forceState={advancedContentState}
              onToggle={handleToggle}
              buttonContent="Advanced"
            >
              <EuiSpacer size="xs" />
              <ECSMappingEditorField euiFieldProps={ecsFieldProps} />
            </StyledEuiAccordion>
          </>
        ) : (
          <UseField path="ecs_mapping" component={GhostFormField} />
        )}
        <EuiSpacer />
        <EuiFlexGroup justifyContent="flexEnd">
          {formType === 'steps' && (
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                disabled={
                  !permissions.writeSavedQueries ||
                  !agentSelected ||
                  !queryValueProvided ||
                  resultsStatus === 'disabled'
                }
                onClick={handleShowSaveQueryFlout}
              >
                <FormattedMessage
                  id="xpack.osquery.liveQueryForm.form.saveForLaterButtonLabel"
                  defaultMessage="Save for later"
                />
              </EuiButtonEmpty>
            </EuiFlexItem>
          )}
          <EuiFlexItem grow={false}>
            <EuiButton
              id="submit-button"
              disabled={!enabled || !agentSelected || !queryValueProvided || isSubmitting}
              onClick={submit}
            >
              <FormattedMessage
                id="xpack.osquery.liveQueryForm.form.submitButtonLabel"
                defaultMessage="Submit"
              />
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    ),
    [
      queryField,
      queryComponentProps,
      permissions.writeSavedQueries,
      handleSavedQueryChange,
      ecsMappingField,
      advancedContentState,
      handleToggle,
      ecsFieldProps,
      formType,
      agentSelected,
      queryValueProvided,
      resultsStatus,
      handleShowSaveQueryFlout,
      enabled,
      isSubmitting,
      submit,
      isSavedQueryDisabled,
    ]
  );

  const resultsStepContent = useMemo(
    () =>
      actionId ? (
        <ResultTabs
          actionId={actionId}
          endDate={data?.actions[0].expiration}
          agentIds={agentIds}
          addToTimeline={addToTimeline}
        />
      ) : null,
    [actionId, agentIds, data?.actions, addToTimeline]
  );

  useEffect(() => {
    if (defaultValue) {
      updateFieldValues({
        agentSelection: defaultValue.agentSelection,
        query: defaultValue.query,
        savedQueryId: defaultValue.savedQueryId,
        ecs_mapping: defaultValue.ecs_mapping
          ? map(defaultValue.ecs_mapping, (value, key) => ({
              key,
              result: {
                type: Object.keys(value)[0],
                value: Object.values(value)[0],
              },
            }))
          : undefined,
      });
    }
  }, [defaultValue, updateFieldValues]);

  return (
    <>
      <Form form={form}>
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <UseField
              path="agentSelection"
              component={!hideAgentsField ? AgentsTableField : GhostFormField}
            />
          </EuiFlexItem>
          <EuiFlexItem>{queryFieldStepContent}</EuiFlexItem>
          <EuiFlexItem>{resultsStepContent}</EuiFlexItem>
        </EuiFlexGroup>
        <UseField path="savedQueryId" component={GhostFormField} />
      </Form>
      {showSavedQueryFlyout ? (
        <SavedQueryFlyout
          isExternal={!!addToTimeline}
          onClose={handleCloseSaveQueryFlout}
          defaultValue={flyoutFormDefaultValue}
        />
      ) : null}
    </>
  );
};

export const LiveQueryForm = React.memo(LiveQueryFormComponent);

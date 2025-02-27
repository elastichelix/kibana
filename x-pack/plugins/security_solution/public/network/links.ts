/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';
import { NETWORK_PATH, SecurityPageName } from '../../common/constants';
import { NETWORK } from '../app/translations';
import { LinkItem } from '../common/links/types';

export const links: LinkItem = {
  id: SecurityPageName.network,
  title: NETWORK,
  path: NETWORK_PATH,
  globalNavEnabled: true,
  globalSearchKeywords: [
    i18n.translate('xpack.securitySolution.appLinks.network', {
      defaultMessage: 'Network',
    }),
  ],
  globalNavOrder: 9003,
  links: [
    {
      id: SecurityPageName.networkDns,
      title: i18n.translate('xpack.securitySolution.appLinks.network.dns', {
        defaultMessage: 'DNS',
      }),
      path: `${NETWORK_PATH}/dns`,
    },
    {
      id: SecurityPageName.networkHttp,
      title: i18n.translate('xpack.securitySolution.appLinks.network.http', {
        defaultMessage: 'HTTP',
      }),
      path: `${NETWORK_PATH}/http`,
    },
    {
      id: SecurityPageName.networkTls,
      title: i18n.translate('xpack.securitySolution.appLinks.network.tls', {
        defaultMessage: 'TLS',
      }),
      path: `${NETWORK_PATH}/tls`,
    },
    {
      id: SecurityPageName.networkExternalAlerts,
      title: i18n.translate('xpack.securitySolution.appLinks.network.externalAlerts', {
        defaultMessage: 'External Alerts',
      }),
      path: `${NETWORK_PATH}/external-alerts`,
    },
    {
      id: SecurityPageName.networkAnomalies,
      title: i18n.translate('xpack.securitySolution.appLinks.hosts.anomalies', {
        defaultMessage: 'Anomalies',
      }),
      path: `${NETWORK_PATH}/anomalies`,
      licenseType: 'gold',
    },
  ],
};

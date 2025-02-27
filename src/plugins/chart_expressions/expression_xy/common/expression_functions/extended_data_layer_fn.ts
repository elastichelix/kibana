/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { validateAccessor } from '@kbn/visualizations-plugin/common/utils';
import { ExtendedDataLayerArgs, ExtendedDataLayerFn } from '../types';
import { EXTENDED_DATA_LAYER, LayerTypes } from '../constants';
import { getAccessors } from '../helpers';

export const extendedDataLayerFn: ExtendedDataLayerFn['fn'] = async (data, args, context) => {
  const table = args.table ?? data;
  const accessors = getAccessors<string, ExtendedDataLayerArgs>(args, table);

  validateAccessor(accessors.xAccessor, table.columns);
  validateAccessor(accessors.splitAccessor, table.columns);
  accessors.accessors.forEach((accessor) => validateAccessor(accessor, table.columns));

  return {
    type: EXTENDED_DATA_LAYER,
    ...args,
    layerType: LayerTypes.DATA,
    ...accessors,
    table,
  };
};

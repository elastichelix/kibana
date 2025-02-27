/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import {
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiText,
  EuiTitle,
  IconType,
} from '@elastic/eui';
import React from 'react';
import styled from 'styled-components';
import { SecurityPageName } from '../../app/types';
import {
  SecuritySolutionLinkAnchor,
  withSecuritySolutionLink,
} from '../../common/components/links';

interface LandingLinksImagesProps {
  items: NavItem[];
}

export interface NavItem {
  id: SecurityPageName;
  label: string;
  icon: IconType;
  description: string;
  path?: string;
}

const Link = styled.a`
  color: inherit;
`;

const SecuritySolutionLink = withSecuritySolutionLink(Link);

const Description = styled(EuiFlexItem)`
  max-width: 22em;
`;

const StyledEuiTitle = styled(EuiTitle)`
  margin-top: ${({ theme }) => theme.eui.paddingSizes.m};
  margin-bottom: ${({ theme }) => theme.eui.paddingSizes.xs};
`;

export const LandingLinksIcons: React.FC<LandingLinksImagesProps> = ({ items }) => (
  <EuiFlexGrid columns={3} gutterSize="xl">
    {items.map(({ label, description, path, id, icon }) => (
      <EuiFlexItem key={id} data-test-subj="LandingItem">
        <EuiFlexGroup
          direction="column"
          alignItems="flexStart"
          gutterSize="none"
          responsive={false}
        >
          <EuiFlexItem grow={false}>
            <SecuritySolutionLink tabIndex={-1} deepLinkId={id} path={path}>
              <EuiIcon aria-hidden="true" size="xl" type={icon} role="presentation" />
            </SecuritySolutionLink>
          </EuiFlexItem>
          <EuiFlexItem>
            <StyledEuiTitle size="xxs">
              <SecuritySolutionLinkAnchor deepLinkId={id} path={path}>
                <h2>{label}</h2>
              </SecuritySolutionLinkAnchor>
            </StyledEuiTitle>
          </EuiFlexItem>
          <Description>
            <EuiText size="s" color="text">
              {description}
            </EuiText>
          </Description>
        </EuiFlexGroup>
      </EuiFlexItem>
    ))}
  </EuiFlexGrid>
);

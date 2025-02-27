/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export function generateAgentDocs(timestamp: number, policyId: string) {
  return [
    {
      access_api_key_id: 'w4zJBHwBfQcM6aSYIRjO',
      action_seq_no: [-1],
      active: true,
      agent: {
        id: '963b081e-60d1-482c-befd-a5815fa8290f',
        version: '8.0.0',
      },
      enrolled_at: timestamp,
      local_metadata: {
        elastic: {
          agent: {
            'build.original':
              '8.0.0-SNAPSHOT (build: 0ee910f4df6653dc9557090946b392533621c2a3 at 2021-09-15 04:59:01 +0000 UTC)',
            id: '963b081e-60d1-482c-befd-a5815fa8290f',
            log_level: 'info',
            snapshot: true,
            upgradeable: false,
            version: '8.0.0',
          },
        },
        host: {
          architecture: 'x86_64',
          hostname: 'cf83e321af8a',
          id: 'e57bde2886b8bb9f91f9143c3b123e98',
          ip: ['127.0.0.1/8', '172.17.0.2/16'],
          mac: ['02:42:ac:11:00:02'],
          name: 'cf83e321af8a',
        },
        os: {
          family: 'redhat',
          full: 'CentOS Linux Core(7 (Core))',
          kernel: '5.10.47-linuxkit',
          name: 'CentOS Linux',
          platform: 'centos',
          version: '7 (Core)',
        },
      },
      policy_id: policyId,
      type: 'PERMANENT',
      default_api_key: 'x4zJBHwBfQcM6aSYYxiY:hhIFN3vSTGWFft7z0MbAhQ',
      policy_output_permissions_hash:
        'cf54971b4d01d194757802052525463fe2f52ffaaf37755c9ab94fdd43c76e9c',
      default_api_key_id: 'x4zJBHwBfQcM6aSYYxiY',
      policy_revision_idx: 1,
      policy_coordinator_idx: 1,
      updated_at: timestamp,
      last_checkin_status: 'online',
      last_checkin: timestamp,
    },
    {
      access_api_key_id: 'w4zJBHwBfQcM6aSYIRjO',
      action_seq_no: [-1],
      active: true,
      agent: {
        id: '3838df35-a095-4af4-8fce-0b6d78793f2e',
        version: '8.0.0',
      },
      enrolled_at: timestamp,
      local_metadata: {
        elastic: {
          agent: {
            'build.original':
              '8.0.0-SNAPSHOT (build: 0ee910f4df6653dc9557090946b392533621c2a3 at 2021-09-15 04:59:01 +0000 UTC)',
            id: '3838df35-a095-4af4-8fce-0b6d78793f2e',
            log_level: 'info',
            snapshot: true,
            upgradeable: false,
            version: '8.0.0',
          },
        },
        host: {
          architecture: 'x86_64',
          hostname: 'cf83e321af8a',
          id: 'e57bde2886b8bb9f91f9143c3b123e98',
          ip: ['127.0.0.1/8', '172.17.0.2/16'],
          mac: ['02:42:ac:11:00:02'],
          name: 'cf83e321af8a',
        },
        os: {
          family: 'Windows',
          full: 'Windows Server 2016',
          kernel: '5.10.47-linuxkit',
          name: 'windows 10.0',
          platform: 'Windows',
          version: '10.0',
        },
      },
      policy_id: policyId,
      type: 'PERMANENT',
      default_api_key: 'x4zJBHwBfQcM6aSYYxiY:hhIFN3vSTGWFft7z0MbAhQ',
      policy_output_permissions_hash:
        'cf54971b4d01d194757802052525463fe2f52ffaaf37755c9ab94fdd43c76e9c',
      default_api_key_id: 'x4zJBHwBfQcM6aSYYxiY',
      policy_revision_idx: 1,
      policy_coordinator_idx: 1,
      updated_at: timestamp,
      last_checkin_status: 'online',
      last_checkin: timestamp,
    },
  ];
}

export function generateMetadataDocs(timestamp: number) {
  return [
    {
      '@timestamp': timestamp,
      agent: {
        id: '963b081e-60d1-482c-befd-a5815fa8290f',
        version: '6.6.1',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '11488bae-880b-4e7b-8d28-aac2aa9de816',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'Default',
            id: 'C2A9093E-E289-4C0A-AA44-8C32A414FA7A',
            status: 'failure',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d14',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        architecture: 'x86',
        hostname: 'cadmann-4.example.com',
        name: 'cadmann-4.example.com',
        id: '1fb3e58f-6ab0-4406-9d2a-91911207a712',
        ip: ['10.192.213.130', '10.70.28.129'],
        mac: ['a9-71-6a-cc-93-85', 'f7-31-84-d3-21-68', '2-95-12-39-ca-71'],
        os: {
          full: 'Windows 10',
          name: 'windows 10.0',
          platform: 'Windows',
          family: 'Windows',
          version: '10.0',
          Ext: {
            variant: 'Windows Pro',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: 'b3412d6f-b022-4448-8fee-21cc936ea86b',
        version: '6.0.0',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '92ac1ce0-e1f7-409e-8af6-f17e97b1fc71',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'Default',
            id: 'C2A9093E-E289-4C0A-AA44-8C32A414FA7A',
            status: 'success',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d15',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        architecture: 'x86_64',
        hostname: 'thurlow-9.example.com',
        name: 'thurlow-9.example.com',
        id: '2f735e3d-be14-483b-9822-bad06e9045ca',
        ip: ['10.46.229.234'],
        mac: ['30-8c-45-55-69-b8', 'e5-36-7e-8f-a3-84', '39-a1-37-20-18-74'],
        os: {
          full: 'Windows Server 2016',
          name: 'windows 10.0',
          platform: 'Windows',
          family: 'Windows',
          version: '10.0',
          Ext: {
            variant: 'Windows Server',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: '3838df35-a095-4af4-8fce-0b6d78793f2e',
        version: '6.8.0',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '023fa40c-411d-4188-a941-4147bfadd095',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'Default',
            id: '00000000-0000-0000-0000-000000000000',
            status: 'failure',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d16',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        hostname: 'rezzani-7.example.com',
        name: 'rezzani-7.example.com',
        id: 'fc0ff548-feba-41b6-8367-65e8790d0eaf',
        ip: ['10.101.149.26', '2606:a000:ffc0:39:11ef:37b9:3371:578c'],
        mac: ['e2-6d-f9-0-46-2e'],
        os: {
          full: 'Windows 10',
          name: 'windows 10.0',
          platform: 'Windows',
          family: 'Windows',
          version: '10.0',
          Ext: {
            variant: 'Windows Pro',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: '963b081e-60d1-482c-befd-a5815fa8290f',
        version: '6.6.1',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '11488bae-880b-4e7b-8d28-aac2aa9de816',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'Default',
            id: 'C2A9093E-E289-4C0A-AA44-8C32A414FA7A',
            status: 'failure',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d18',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        architecture: 'x86',
        hostname: 'cadmann-4.example.com',
        name: 'cadmann-4.example.com',
        id: '1fb3e58f-6ab0-4406-9d2a-91911207a712',
        ip: ['10.192.213.130', '10.70.28.129'],
        mac: ['a9-71-6a-cc-93-85', 'f7-31-84-d3-21-68', '2-95-12-39-ca-71'],
        os: {
          full: 'Windows Server 2016',
          name: 'windows 10.0',
          platform: 'Windows',
          family: 'Windows',
          version: '10.0',
          Ext: {
            variant: 'Windows Server 2016',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: 'b3412d6f-b022-4448-8fee-21cc936ea86b',
        version: '6.0.0',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '92ac1ce0-e1f7-409e-8af6-f17e97b1fc71',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'Default',
            id: 'C2A9093E-E289-4C0A-AA44-8C32A414FA7A',
            status: 'success',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d19',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        hostname: 'thurlow-9.example.com',
        name: 'thurlow-9.example.com',
        id: '2f735e3d-be14-483b-9822-bad06e9045ca',
        ip: ['10.46.229.234'],
        mac: ['30-8c-45-55-69-b8', 'e5-36-7e-8f-a3-84', '39-a1-37-20-18-74'],
        os: {
          full: 'Windows Server 2012',
          name: 'windows 6.2',
          platform: 'Windows',
          family: 'Windows',
          version: '6.2',
          Ext: {
            variant: 'Windows Server 2012',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: '3838df35-a095-4af4-8fce-0b6d78793f2e',
        version: '6.8.0',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '023fa40c-411d-4188-a941-4147bfadd095',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'With Eventing',
            id: '00000000-0000-0000-0000-000000000000',
            status: 'failure',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d39',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        architecture: 'x86',
        hostname: 'rezzani-7.example.com',
        name: 'rezzani-7.example.com',
        id: 'fc0ff548-feba-41b6-8367-65e8790d0eaf',
        ip: ['10.101.149.26', '2606:a000:ffc0:39:11ef:37b9:3371:578c'],
        mac: ['e2-6d-f9-0-46-2e'],
        os: {
          full: 'Windows Server 2012',
          name: 'windows 6.2',
          platform: 'Windows',
          family: 'Windows',
          version: '6.2',
          Ext: {
            variant: 'Windows Server 2012',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: '963b081e-60d1-482c-befd-a5815fa8290f',
        version: '6.6.1',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '11488bae-880b-4e7b-8d28-aac2aa9de816',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'With Eventing',
            id: '00000000-0000-0000-0000-000000000000',
            status: 'failure',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d31',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        hostname: 'cadmann-4.example.com',
        name: 'cadmann-4.example.com',
        id: '1fb3e58f-6ab0-4406-9d2a-91911207a712',
        ip: ['10.192.213.130', '10.70.28.129'],
        mac: ['a9-71-6a-cc-93-85', 'f7-31-84-d3-21-68', '2-95-12-39-ca-71'],
        os: {
          full: 'Windows Server 2012R2',
          name: 'windows 6.3',
          platform: 'Windows',
          family: 'Windows',
          version: '6.3',
          Ext: {
            variant: 'Windows Server 2012 R2',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: 'b3412d6f-b022-4448-8fee-21cc936ea86b',
        version: '6.0.0',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '92ac1ce0-e1f7-409e-8af6-f17e97b1fc71',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'Default',
            id: 'C2A9093E-E289-4C0A-AA44-8C32A414FA7A',
            status: 'success',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d23',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        hostname: 'thurlow-9.example.com',
        name: 'thurlow-9.example.com',
        id: '2f735e3d-be14-483b-9822-bad06e9045ca',
        ip: ['10.46.229.234'],
        mac: ['30-8c-45-55-69-b8', 'e5-36-7e-8f-a3-84', '39-a1-37-20-18-74'],
        os: {
          full: 'Windows Server 2012R2',
          name: 'windows 6.3',
          platform: 'Windows',
          family: 'Windows',
          version: '6.3',
          Ext: {
            variant: 'Windows Server 2012 R2',
          },
        },
      },
    },
    {
      '@timestamp': timestamp,
      agent: {
        id: '3838df35-a095-4af4-8fce-0b6d78793f2e',
        version: '6.8.0',
        name: 'Elastic Endpoint',
      },
      elastic: {
        agent: {
          id: '023fa40c-411d-4188-a941-4147bfadd095',
        },
      },
      Endpoint: {
        status: 'enrolled',
        policy: {
          applied: {
            name: 'With Eventing',
            id: '00000000-0000-0000-0000-000000000000',
            status: 'success',
          },
        },
      },
      event: {
        created: timestamp,
        id: '32f5fda2-48e4-4fae-b89e-a18038294d35',
        kind: 'metric',
        category: ['host'],
        type: ['info'],
        module: 'endpoint',
        action: 'endpoint_metadata',
        dataset: 'endpoint.metadata',
      },
      host: {
        architecture: 'x86',
        hostname: 'rezzani-7.example.com',
        name: 'rezzani-7.example.com',
        id: 'fc0ff548-feba-41b6-8367-65e8790d0eaf',
        ip: ['10.101.149.26', '2606:a000:ffc0:39:11ef:37b9:3371:578c'],
        mac: ['e2-6d-f9-0-46-2e'],
        os: {
          full: 'Windows Server 2012',
          name: 'windows 6.2',
          version: '6.2',
          platform: 'Windows',
          family: 'Windows',
          Ext: {
            variant: 'Windows Server 2012',
          },
        },
      },
    },
  ];
}

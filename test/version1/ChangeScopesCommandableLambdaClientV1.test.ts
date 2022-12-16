const fs = require('fs')

import { YamlConfigReader } from 'pip-services3-components-nodex';
import { ChangeScopesClientFixtureV1 } from './ChangeScopesClientFixtureV1';
import { ChangeScopesCommandableLambdaClientV1 } from '../../src/version1/ChangeScopesCommandableLambdaClientV1';
import { ConfigParams } from 'pip-services3-commons-nodex';

suite('ChangeScopesCommandableLambdaClient', ()=> {
    let path = './config/test_connections.yml';
    let config = new ConfigParams();

    if (fs.existsSync(path))
        config = YamlConfigReader.readConfig(null, './config/test_connections.yml', null);

    let lambdaConfig = config.getSection('lambda');
    
    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: ChangeScopesCommandableLambdaClientV1;
    let fixture: ChangeScopesClientFixtureV1;

    setup(async () => {
        client = new ChangeScopesCommandableLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new ChangeScopesClientFixtureV1(client);

        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
    });

    test('Get and Change', async () => {
        await fixture.testGetAndChange();
    });

});
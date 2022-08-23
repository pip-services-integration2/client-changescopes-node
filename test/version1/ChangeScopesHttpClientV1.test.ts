import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ChangeScopesMemoryPersistence } from 'service-changescopes-node';
import { ChangeScopesController } from 'service-changescopes-node';
import { ChangeScopesHttpServiceV1 } from 'service-changescopes-node';
import { ChangeScopesHttpClientV1 } from '../../src/version1/ChangeScopesHttpClientV1';
import { ChangeScopesClientFixtureV1 } from './ChangeScopesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ChangeScopesHttpClientV1', ()=> {
    let service: ChangeScopesHttpServiceV1;
    let client: ChangeScopesHttpClientV1;
    let fixture: ChangeScopesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ChangeScopesMemoryPersistence();
        let controller = new ChangeScopesController();

        service = new ChangeScopesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-changescopes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-changescopes', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-changescopes', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ChangeScopesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ChangeScopesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('Get and Change', async () => {
        await fixture.testGetAndChange();
    });

});

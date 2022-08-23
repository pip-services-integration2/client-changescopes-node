import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ChangeScopesMemoryPersistence } from 'service-changescopes-node';
import { ChangeScopesController } from 'service-changescopes-node';
import { ChangeScopesDirectClientV1 } from '../../src/version1/ChangeScopesDirectClientV1';
import { ChangeScopesClientFixtureV1 } from './ChangeScopesClientFixtureV1';

suite('ChangeScopesDirectClientV1', ()=> {
    let client: ChangeScopesDirectClientV1;
    let fixture: ChangeScopesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ChangeScopesMemoryPersistence();
        let controller = new ChangeScopesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-changescopes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-changescopes', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ChangeScopesDirectClientV1();
        client.setReferences(references);

        fixture = new ChangeScopesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('Get and Change', async () => {
        await fixture.testGetAndChange();
    });

});

import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { ChangeScopeV1 } from './ChangeScopeV1';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';

export class ChangeScopesHttpClientV1 extends CommandableHttpClient implements IChangeScopesClientV1 {

    constructor(config?: any) {
        super('v1/change_scopes');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');

        try {
            return await this.callCommand(
                'get_scope_by_id',
                correlationId,
                {
                    id: id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async changeScope(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope');

        try {
            return await this.callCommand(
                'change_scope',
                correlationId,
                {
                    id: id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope_element');

        try {
            return await this.callCommand(
                'change_scope_element',
                correlationId,
                {
                    id: id,
                    element: element
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.delete_scope_by_id');

        try {
            return await this.callCommand(
                'delete_scope_by_id',
                correlationId,
                {
                    id: id
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}

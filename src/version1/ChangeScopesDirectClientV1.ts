import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IChangeScopesClientV1 } from './IChangeScopesClientV1';
//import { IChangeScopesController } from 'service-changescopes-node';
import { ChangeScopeV1 } from './ChangeScopeV1';

export class ChangeScopesDirectClientV1 extends DirectClient<any> implements IChangeScopesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-changescopes", "controller", "*", "*", "*"))
    }

    public async getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');
        
        try {
            let res = await this._controller.getScopeById(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async changeScope(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope');

        try {
            let res = await this._controller.changeScope(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope_element');
        
        try {
            let res = await this._controller.changeScopeElement(correlationId, id, element);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        let timing = this.instrument(correlationId, 'change_scopes.delete_scope_by_id');

        try {
            let res = await this._controller.deleteScopeById(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }   
}
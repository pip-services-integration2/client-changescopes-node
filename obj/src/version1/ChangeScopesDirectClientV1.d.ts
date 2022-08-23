import { DirectClient } from 'pip-services3-rpc-nodex';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';
import { ChangeScopeV1 } from './ChangeScopeV1';
export declare class ChangeScopesDirectClientV1 extends DirectClient<any> implements IChangeScopesClientV1 {
    constructor();
    getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScope(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;
    deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}

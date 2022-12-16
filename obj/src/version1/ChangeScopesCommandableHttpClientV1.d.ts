import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { ChangeScopeV1 } from './ChangeScopeV1';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';
export declare class ChangeScopesCommandableHttpClientV1 extends CommandableHttpClient implements IChangeScopesClientV1 {
    constructor(config?: any);
    getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScope(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;
    deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}

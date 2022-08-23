import { CommandableLambdaClient } from 'pip-services3-aws-nodex';
import { ChangeScopeV1 } from './ChangeScopeV1';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';
export declare class ChangeScopesLambdaClientV1 extends CommandableLambdaClient implements IChangeScopesClientV1 {
    constructor(config?: any);
    getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScope(correlationId: string, id: string): Promise<ChangeScopeV1>;
    changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;
    deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}

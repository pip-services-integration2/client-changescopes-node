import { ChangeScopeV1 } from './ChangeScopeV1';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';

export class ChangeScopesNullClientV1 implements IChangeScopesClientV1 {
    constructor(config?: any) {}
        

    public async getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        return <ChangeScopeV1>{ id: id, change_time: new Date(0), elements: {} };
    }

    public async changeScope(correlationId: string, id: string): Promise<ChangeScopeV1> {
        return <ChangeScopeV1>{ id: id, change_time: new Date(), elements: {} };
    }

    public async changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1> {
        return <ChangeScopeV1>{ id: id, change_time: new Date(), elements: {} };
    }

    public async deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1> {
        return null;
    }
}

import { ConfigParams } from 'pip-services3-commons-nodex';

import { ChangeScopeV1 } from './ChangeScopeV1';

export interface IChangeScopesClientV1 {
    getScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;

    changeScope(correlationId: string, id: string): Promise<ChangeScopeV1>;

    changeScopeElement(correlationId: string, id: string, element: string): Promise<ChangeScopeV1>;

    deleteScopeById(correlationId: string, id: string): Promise<ChangeScopeV1>;
}

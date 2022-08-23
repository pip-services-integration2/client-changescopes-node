const assert = require('chai').assert;

import { IChangeScopesClientV1 } from '../../src/version1/IChangeScopesClientV1';

export class ChangeScopesClientFixtureV1 {
    private _client: IChangeScopesClientV1;
    
    constructor(client: IChangeScopesClientV1) {
        this._client = client;
    }

    public async testGetAndChange() {
        let scope = await this._client.changeScope(null, '123');

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.isEmpty(scope.elements);

        scope = await this._client.changeScopeElement(null, '123', 'key1');

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1']);

        scope = await this._client.changeScopeElement(null, '123', 'key2');

        assert.isObject(scope);
        assert.equal('123', scope.id);
        assert.hasAllKeys(scope.elements, ['key1', 'key2']);

        scope = await this._client.deleteScopeById(null, '123');

        assert.isObject(scope);
        assert.equal('123', scope.id);

        scope = await this._client.getScopeById(null, '123');

        assert.isObject(scope);
        assert.equal('123', scope.id);
    }
}

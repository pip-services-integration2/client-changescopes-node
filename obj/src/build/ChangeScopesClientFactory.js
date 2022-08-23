"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const ChangeScopesNullClientV1_1 = require("../version1/ChangeScopesNullClientV1");
const ChangeScopesDirectClientV1_1 = require("../version1/ChangeScopesDirectClientV1");
const ChangeScopesHttpClientV1_1 = require("../version1/ChangeScopesHttpClientV1");
const ChangeScopesLambdaClientV1_1 = require("../version1/ChangeScopesLambdaClientV1");
class ChangeScopesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(ChangeScopesClientFactory.NullClientV1Descriptor, ChangeScopesNullClientV1_1.ChangeScopesNullClientV1);
        this.registerAsType(ChangeScopesClientFactory.DirectClientV1Descriptor, ChangeScopesDirectClientV1_1.ChangeScopesDirectClientV1);
        this.registerAsType(ChangeScopesClientFactory.HttpClientV1Descriptor, ChangeScopesHttpClientV1_1.ChangeScopesHttpClientV1);
        this.registerAsType(ChangeScopesClientFactory.LambdaClientV1Descriptor, ChangeScopesLambdaClientV1_1.ChangeScopesLambdaClientV1);
    }
}
exports.ChangeScopesClientFactory = ChangeScopesClientFactory;
ChangeScopesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'factory', 'default', 'default', '1.0');
ChangeScopesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'null', 'default', '1.0');
ChangeScopesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'direct', 'default', '1.0');
ChangeScopesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'http', 'default', '1.0');
ChangeScopesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ChangeScopesClientFactory.js.map
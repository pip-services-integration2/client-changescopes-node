"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const ChangeScopesNullClientV1_1 = require("../version1/ChangeScopesNullClientV1");
const ChangeScopesDirectClientV1_1 = require("../version1/ChangeScopesDirectClientV1");
const ChangeScopesCommandableHttpClientV1_1 = require("../version1/ChangeScopesCommandableHttpClientV1");
const ChangeScopesCommandableLambdaClientV1_1 = require("../version1/ChangeScopesCommandableLambdaClientV1");
class ChangeScopesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(ChangeScopesClientFactory.NullClientV1Descriptor, ChangeScopesNullClientV1_1.ChangeScopesNullClientV1);
        this.registerAsType(ChangeScopesClientFactory.DirectClientV1Descriptor, ChangeScopesDirectClientV1_1.ChangeScopesDirectClientV1);
        this.registerAsType(ChangeScopesClientFactory.CmdHttpClientV1Descriptor, ChangeScopesCommandableHttpClientV1_1.ChangeScopesCommandableHttpClientV1);
        this.registerAsType(ChangeScopesClientFactory.CmdLambdaClientV1Descriptor, ChangeScopesCommandableLambdaClientV1_1.ChangeScopesCommandableLambdaClientV1);
    }
}
exports.ChangeScopesClientFactory = ChangeScopesClientFactory;
ChangeScopesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'factory', 'default', 'default', '1.0');
ChangeScopesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'null', 'default', '1.0');
ChangeScopesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'direct', 'default', '1.0');
ChangeScopesClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'commandable-http', 'default', '1.0');
ChangeScopesClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-changescopes', 'client', 'commandable-lambda', 'default', '1.0');
//# sourceMappingURL=ChangeScopesClientFactory.js.map
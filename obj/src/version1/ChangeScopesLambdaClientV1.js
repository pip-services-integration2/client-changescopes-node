"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeScopesLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class ChangeScopesLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('change_scopes');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getScopeById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');
            try {
                return yield this.callCommand('get_scope_by_id', correlationId, {
                    id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    changeScope(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');
            try {
                return yield this.callCommand('change_scope', correlationId, {
                    id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    changeScopeElement(correlationId, id, element) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');
            try {
                return yield this.callCommand('change_scope_element', correlationId, {
                    id: id,
                    element: element
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteScopeById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'change_scopes.delete_scope_by_id');
            try {
                return yield this.callCommand('delete_scope_by_id', correlationId, {
                    id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.ChangeScopesLambdaClientV1 = ChangeScopesLambdaClientV1;
//# sourceMappingURL=ChangeScopesLambdaClientV1.js.map
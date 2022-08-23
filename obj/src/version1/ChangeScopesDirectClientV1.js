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
exports.ChangeScopesDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class ChangeScopesDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-changescopes", "controller", "*", "*", "*"));
    }
    getScopeById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');
            try {
                return yield this._controller.getScopeById(correlationId, id);
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
            let timing = this.instrument(correlationId, 'change_scopes.change_scope');
            try {
                return yield this._controller.changeScope(correlationId, id);
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
            let timing = this.instrument(correlationId, 'change_scopes.change_scope_element');
            try {
                return yield this._controller.changeScopeElement(correlationId, id, element);
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
                return yield this._controller.deleteScopeById(correlationId, id);
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
exports.ChangeScopesDirectClientV1 = ChangeScopesDirectClientV1;
//# sourceMappingURL=ChangeScopesDirectClientV1.js.map
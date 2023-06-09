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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var response_1 = __importDefault(require("../helpers/response"));
var users_1 = __importDefault(require("../models/users"));
var usersListAllController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, users_1["default"].listAllUsersModel()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, response_1["default"].success(res, 200, result)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, response_1["default"].error(res, 500, error_1)];
            case 3: return [2 /*return*/];
        }
    });
}); };
var userByIdController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!id.match(/^[0-9]+$/))
                    return [2 /*return*/, response_1["default"].error(res, 400, 'Id Invalid!')];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users_1["default"].userByIdModel(Number(id))];
            case 2:
                result = _a.sent();
                return [2 /*return*/, response_1["default"].success(res, 200, result)];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, response_1["default"].error(res, 500, error_2)];
            case 4: return [2 /*return*/];
        }
    });
}); };
var createUsersController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, email, fullname, emailPattern, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                email = body.email, fullname = body.fullname;
                emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!email || !fullname)
                    return [2 /*return*/, response_1["default"].error(res, 400, 'Need Input Email & Fullname')];
                if (!emailPattern.test(email))
                    return [2 /*return*/, response_1["default"].error(res, 400, 'Format Email is Invalid!')];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users_1["default"].createUserModel(body)];
            case 2:
                _a.sent();
                return [2 /*return*/, response_1["default"].success(res, 200, {
                        message: 'Create users is successed!'
                    })];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, response_1["default"].error(res, 500, error_3)];
            case 4: return [2 /*return*/];
        }
    });
}); };
var editUsersController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, params, id, email, fullname, emailPattern, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body, params = req.params;
                id = params.id;
                email = body.email, fullname = body.fullname;
                emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!id.match(/^[0-9]+$/))
                    return [2 /*return*/, response_1["default"].error(res, 400, 'Id Invalid!')];
                if (!email || !fullname)
                    return [2 /*return*/, response_1["default"].error(res, 400, 'Need Input Email & Fullname')];
                if (!emailPattern.test(email))
                    return [2 /*return*/, response_1["default"].error(res, 400, 'Format Email is Invalid!')];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users_1["default"].editUsersModel(Number(id), body)
                    // use not unit testing
                    // if(result.affectedRows ===  0) return response.error(res, 400, 'User Not Found')
                ];
            case 2:
                result = _a.sent();
                // use not unit testing
                // if(result.affectedRows ===  0) return response.error(res, 400, 'User Not Found')
                return [2 /*return*/, response_1["default"].success(res, 200, {
                        message: 'Edit User is Successfull'
                    })];
            case 3:
                error_4 = _a.sent();
                return [2 /*return*/, response_1["default"].error(res, 500, error_4)];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteUsersByIdController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params;
                id = params.id;
                if (!id.match(/^[0-9]+$/))
                    return [2 /*return*/, response_1["default"].error(res, 400, 'Id Invalid!')];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, users_1["default"].deleteuserModel(Number(id))
                    // use not unit testing
                    // if(result.affectedRows === 0) return response.error(res, 400, 'User Not Found!')
                ];
            case 2:
                result = _a.sent();
                // use not unit testing
                // if(result.affectedRows === 0) return response.error(res, 400, 'User Not Found!')
                return [2 /*return*/, response_1["default"].success(res, 200, {
                        message: 'Delete User is Successfull'
                    })];
            case 3:
                error_5 = _a.sent();
                return [2 /*return*/, response_1["default"].error(res, 500, error_5)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports["default"] = {
    usersListAllController: usersListAllController,
    userByIdController: userByIdController,
    createUsersController: createUsersController,
    editUsersController: editUsersController,
    deleteUsersByIdController: deleteUsersByIdController
};
//# sourceMappingURL=users.js.map
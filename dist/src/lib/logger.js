"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var winston_1 = __importDefault(require("winston"));
var levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};
var level = function () {
    var env = process.env.NODE_ENV || 'development';
    var isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};
var colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
};
winston_1["default"].addColors(colors);
var format = winston_1["default"].format.combine(winston_1["default"].format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston_1["default"].format.colorize({ all: true }), winston_1["default"].format.printf(function (info) { return "".concat(info.timestamp, " ").concat(info.level, ": ").concat(info.message); }));
var transports = [
    new winston_1["default"].transports.Console(),
    new winston_1["default"].transports.File({
        filename: 'logs/error.log',
        level: 'error'
    }),
    new winston_1["default"].transports.File({ filename: 'logs/all.log' }),
];
var Logger = winston_1["default"].createLogger({
    level: level(),
    levels: levels,
    format: format,
    transports: transports
});
exports["default"] = Logger;
//# sourceMappingURL=logger.js.map
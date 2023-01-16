"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
//Routes
const User_1 = __importDefault(require("./route/User"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
        this.plugin();
    }
    plugin() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
    }
    routes() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use("/api/v1/users", User_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Running on +", port);
});

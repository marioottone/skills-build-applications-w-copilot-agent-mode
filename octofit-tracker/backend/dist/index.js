"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.json({ message: 'OctoFit Tracker API' });
});
app.listen(PORT, () => {
    const codespaceName = process.env.CODESPACE_NAME;
    const baseUrl = codespaceName
        ? `https://${codespaceName}-${PORT}.app.github.dev`
        : `http://localhost:${PORT}`;
    console.log(`Server running at ${baseUrl}`);
});
exports.default = app;

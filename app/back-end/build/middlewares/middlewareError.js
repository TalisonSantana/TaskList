"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, req, res, _next) => {
    if (err.code) {
        return res.status(err.code).json({ message: err.message });
    }
    if (err.message === 'invalid token' || err.message === 'jwt malformed') {
        return res.status(401).json({ message: 'Token must be a valid token' });
    }
    return res.status(500).json({ message: 'internal server error' });
};
exports.default = errorMiddleware;
//# sourceMappingURL=middlewareError.js.map
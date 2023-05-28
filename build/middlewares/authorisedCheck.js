"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorisedCheck = void 0;
const unauthorised_user_1 = require("../errors/unauthorised-user");
const authorisedCheck = (req, res, next) => {
    if (!req.currentUser) {
        throw new unauthorised_user_1.UnAuthorisedError();
    }
    next();
};
exports.authorisedCheck = authorisedCheck;

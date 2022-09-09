"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postingVASN = void 0;
var express_1 = __importDefault(require("express"));
var controller_1 = require("../controller");
var router = express_1.default.Router();
exports.postingVASN = router;
router.get('/postasn', controller_1.asnPosting); //done
//# sourceMappingURL=route.js.map
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
        while (_) try {
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asnPosting = void 0;
var promises_1 = require("node:fs/promises");
var fs_1 = __importDefault(require("fs"));
var oracledb_1 = __importDefault(require("oracledb"));
var db_1 = require("../db");
var xmlbuilder_1 = __importDefault(require("xmlbuilder"));
var date_and_time_1 = __importDefault(require("date-and-time"));
var asnPosting = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var xmlFile, xmlDir, xmlDir_1, xmlDir_1_1, xmlDirent, e_1_1, connection, dir, files, dir_1, dir_1_1, dirent, e_2_1, vou_sid, vou_no_1, root, vouchers, fileFlag, countStack, dateNow_1, _loop_1, files_1, files_1_1, e_3_1, xml, err_1;
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 45, , 46]);
                xmlFile = [];
                return [4 /*yield*/, (0, promises_1.opendir)(process.env.READASNFILEPATH + '/xml')];
            case 1:
                xmlDir = _f.sent();
                _f.label = 2;
            case 2:
                _f.trys.push([2, 7, 8, 13]);
                xmlDir_1 = __asyncValues(xmlDir);
                _f.label = 3;
            case 3: return [4 /*yield*/, xmlDir_1.next()];
            case 4:
                if (!(xmlDir_1_1 = _f.sent(), !xmlDir_1_1.done)) return [3 /*break*/, 6];
                xmlDirent = xmlDir_1_1.value;
                xmlFile.push(xmlDirent);
                _f.label = 5;
            case 5: return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 13];
            case 7:
                e_1_1 = _f.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 13];
            case 8:
                _f.trys.push([8, , 11, 12]);
                if (!(xmlDir_1_1 && !xmlDir_1_1.done && (_a = xmlDir_1.return))) return [3 /*break*/, 10];
                return [4 /*yield*/, _a.call(xmlDir_1)];
            case 9:
                _f.sent();
                _f.label = 10;
            case 10: return [3 /*break*/, 12];
            case 11:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 12: return [7 /*endfinally*/];
            case 13:
                if (!(xmlFile.length == 0)) return [3 /*break*/, 43];
                return [4 /*yield*/, (0, db_1.get_oracle_connection)()];
            case 14:
                connection = _f.sent();
                if (!connection) return [3 /*break*/, 41];
                return [4 /*yield*/, (0, promises_1.opendir)(process.env.READASNFILEPATH + '')];
            case 15:
                dir = _f.sent();
                files = [];
                _f.label = 16;
            case 16:
                _f.trys.push([16, 21, 22, 27]);
                dir_1 = __asyncValues(dir);
                _f.label = 17;
            case 17: return [4 /*yield*/, dir_1.next()];
            case 18:
                if (!(dir_1_1 = _f.sent(), !dir_1_1.done)) return [3 /*break*/, 20];
                dirent = dir_1_1.value;
                if ((dirent.name != ".") && (dirent.name != "..") && (dirent.name != "index.php") && (dirent.name != "SENT") && (dirent.name != "logs") && (dirent.name != "New folder") && (dirent.name != "xml") && (dirent.name != "errorsfiles")) {
                    files.push(dirent.name); // put in array.
                }
                _f.label = 19;
            case 19: return [3 /*break*/, 17];
            case 20: return [3 /*break*/, 27];
            case 21:
                e_2_1 = _f.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 27];
            case 22:
                _f.trys.push([22, , 25, 26]);
                if (!(dir_1_1 && !dir_1_1.done && (_b = dir_1.return))) return [3 /*break*/, 24];
                return [4 /*yield*/, _b.call(dir_1)];
            case 23:
                _f.sent();
                _f.label = 24;
            case 24: return [3 /*break*/, 26];
            case 25:
                if (e_2) throw e_2.error;
                return [7 /*endfinally*/];
            case 26: return [7 /*endfinally*/];
            case 27:
                vou_sid = void 0;
                root = xmlbuilder_1.default.create('DOCUMENT', { encoding: 'utf-8' });
                vouchers = root.ele('VOUCHERS');
                fileFlag = true;
                countStack = 0;
                dateNow_1 = date_and_time_1.default.format((new Date()), 'MM-DD-YYYY hh:m:ss A');
                ;
                _f.label = 28;
            case 28:
                _f.trys.push([28, 34, 35, 40]);
                _loop_1 = function () {
                    var fileObject, dataJson, purchase_order_header, purchase_order__array_items, item_array, itemFlag, purchase_order__array_items_1, purchase_order__array_items_1_1, array_items, item_get, result_item, b, e_4_1, fetchMaxVouNo, fetchMax, _g, _h, sql, result, sql_store, result_store, voucher, vou_comments, vou_comment, vou_items, count, item_array_1, item_array_1_1, array_items, qty, cost, resultit, ext_cost, vou_item, inventory, e_5_1, txt, appendF, txt, appendF, error_1;
                    return __generator(this, function (_j) {
                        switch (_j.label) {
                            case 0:
                                fileObject = files_1_1.value;
                                _j.label = 1;
                            case 1:
                                _j.trys.push([1, 46, , 47]);
                                return [4 /*yield*/, asnFileOpen(fileObject)];
                            case 2:
                                dataJson = _j.sent();
                                purchase_order_header = dataJson.ShippedSalesHeader;
                                purchase_order__array_items = dataJson.shipmentDetails;
                                item_array = [];
                                itemFlag = false;
                                _j.label = 3;
                            case 3:
                                _j.trys.push([3, 9, 10, 15]);
                                purchase_order__array_items_1 = (e_4 = void 0, __asyncValues(purchase_order__array_items));
                                _j.label = 4;
                            case 4: return [4 /*yield*/, purchase_order__array_items_1.next()];
                            case 5:
                                if (!(purchase_order__array_items_1_1 = _j.sent(), !purchase_order__array_items_1_1.done)) return [3 /*break*/, 8];
                                array_items = purchase_order__array_items_1_1.value;
                                item_get = "select QTY_PER_CASE,cost,to_char(item_sid) item_sid,alu,local_upc,vend_code,dcs_code,to_char(style_sid) style_sid from invn_sbs where alu = '" + array_items.ItemNo + "'";
                                return [4 /*yield*/, connection.execute(item_get, {}, { outFormat: oracledb_1.default.OUT_FORMAT_OBJECT
                                    })];
                            case 6:
                                result_item = _j.sent();
                                if ((result_item.rows).length > 0) {
                                    b = {
                                        "ITEM_SID": result_item.rows[0]['ITEM_SID'],
                                        "QTY_PER_CASE": (result_item.rows[0]['QTY_PER_CASE'] == null) ? 0 : result_item.rows[0]['QTY_PER_CASE'],
                                        "ALU": result_item.rows[0]['ALU'],
                                        "LOCAL_UPC": result_item.rows[0]['LOCAL_UPC'],
                                        "VEND_CODE": result_item.rows[0]['VEND_CODE'],
                                        "DCS_CODE": result_item.rows[0]['DCS_CODE'],
                                        "STYLE_SID": result_item.rows[0]['STYLE_SID'],
                                        "QUANTITY": array_items.Quantity,
                                        "UNITPRICE": array_items.UnitPrice,
                                        "LOTNO": array_items['lots/batchNo'],
                                        "EXPIRYDATE": array_items.ExpirationDate
                                    };
                                    item_array.push(b);
                                    itemFlag = true;
                                }
                                else {
                                    itemFlag = false;
                                    item_array = [];
                                    return [3 /*break*/, 8];
                                }
                                _j.label = 7;
                            case 7: return [3 /*break*/, 4];
                            case 8: return [3 /*break*/, 15];
                            case 9:
                                e_4_1 = _j.sent();
                                e_4 = { error: e_4_1 };
                                return [3 /*break*/, 15];
                            case 10:
                                _j.trys.push([10, , 13, 14]);
                                if (!(purchase_order__array_items_1_1 && !purchase_order__array_items_1_1.done && (_d = purchase_order__array_items_1.return))) return [3 /*break*/, 12];
                                return [4 /*yield*/, _d.call(purchase_order__array_items_1)];
                            case 11:
                                _j.sent();
                                _j.label = 12;
                            case 12: return [3 /*break*/, 14];
                            case 13:
                                if (e_4) throw e_4.error;
                                return [7 /*endfinally*/];
                            case 14: return [7 /*endfinally*/];
                            case 15:
                                if (!(purchase_order_header && purchase_order__array_items && itemFlag)) return [3 /*break*/, 43];
                                if (!(vou_sid == null && vou_no_1 == null)) return [3 /*break*/, 21];
                                fetchMaxVouNo = "select to_char(max(vou_sid)) vou_sid,max(vou_no) vou_no from voucher where vou_class = 2";
                                return [4 /*yield*/, connection.execute(fetchMaxVouNo, {}, { outFormat: oracledb_1.default.OUT_FORMAT_OBJECT
                                    })];
                            case 16:
                                fetchMax = _j.sent();
                                if (!((fetchMax.rows).length > 0 && fetchMax.rows[0]['VOU_NO'] != null && fetchMax.rows[0]['VOU_SID'] != null)) return [3 /*break*/, 18];
                                vou_no_1 = parseInt(fetchMax.rows[0]['VOU_NO']) + 1;
                                _g = parseInt(fetchMax.rows[0]['VOU_SID']);
                                return [4 /*yield*/, getRandomIntInclusive(6000, 99999)];
                            case 17:
                                vou_sid = _g + (_j.sent());
                                return [3 /*break*/, 20];
                            case 18: return [4 /*yield*/, getRandomIntInclusive(6000000000000000000, 9999999999999999999)];
                            case 19:
                                vou_sid = _j.sent();
                                vou_no_1 = parseInt(((vou_no_1) == null) ? 0 : vou_no_1) + 1;
                                _j.label = 20;
                            case 20: return [3 /*break*/, 23];
                            case 21:
                                vou_no_1 = parseInt(vou_no_1) + 1;
                                _h = parseInt(vou_sid);
                                return [4 /*yield*/, getRandomIntInclusive(6000, 99999)];
                            case 22:
                                vou_sid = _h + (_j.sent());
                                _j.label = 23;
                            case 23:
                                if (!(vou_sid && vou_no_1)) return [3 /*break*/, 42];
                                sql = "select * from voucher where note = '" + purchase_order_header.InvoiceNo + "'";
                                return [4 /*yield*/, connection.execute(sql, {}, { outFormat: oracledb_1.default.OUT_FORMAT_OBJECT
                                    })];
                            case 24:
                                result = _j.sent();
                                if (!((result.rows).length == 0)) return [3 /*break*/, 40];
                                sql_store = "select store_code, store_name, SBS_no from store where store_no= " + purchase_order_header.StoreCode + " and sbs_no = " + process.env.RP_SBS_NO + " and active = 1";
                                return [4 /*yield*/, connection.execute(sql_store, {}, { outFormat: oracledb_1.default.OUT_FORMAT_OBJECT
                                    })];
                            case 25:
                                result_store = _j.sent();
                                if (!((result_store.rows).length > 0)) return [3 /*break*/, 38];
                                voucher = vouchers.ele('VOUCHER');
                                voucher.att('vou_sid', vou_sid);
                                voucher.att('sbs_no', process.env.RP_SBS_NO);
                                voucher.att('store_no', result_store.rows[0]['STORE_NO']);
                                voucher.att('vou_no', vou_no_1);
                                voucher.att('vou_type', 0);
                                voucher.att('vou_class', 2);
                                voucher.att('vend_code', '1001');
                                voucher.att('payee_code', '');
                                voucher.att('vend_acct_no', '');
                                voucher.att('workstation', '');
                                voucher.att('orig_store_no', '');
                                voucher.att('orig_station', '');
                                voucher.att('status', '');
                                voucher.att('proc_status', '');
                                voucher.att('po_no', '');
                                voucher.att('to_no', '');
                                voucher.att('pkg_no', '');
                                voucher.att('shipment_no', '');
                                voucher.att('cost_handling_code', '');
                                voucher.att('update_price_flag', '');
                                voucher.att('use_vat', '');
                                voucher.att('disc_perc', '');
                                voucher.att('disc_amt', '');
                                voucher.att('tax_perc_incl', '');
                                voucher.att('tax_amt_incl', '');
                                voucher.att('tax_perc_excl', '');
                                voucher.att('tax_amt_excl', '');
                                voucher.att('created_date', '2022-03-15T00:00:00');
                                voucher.att('modified_date', '2022-03-15T00:00:00+05:00');
                                voucher.att('post_date', '2022-03-15T00:00:00');
                                voucher.att('arrived_date', '');
                                voucher.att('cust_fld', '');
                                voucher.att('ref_vou_sid', '');
                                voucher.att('audited', '');
                                voucher.att('cms', '1');
                                voucher.att('verified', '1');
                                voucher.att('purch_clear_amt', '');
                                voucher.att('cms_post_date', '2022-03-15T00:00:00');
                                voucher.att('review_date', '');
                                voucher.att('review_note', '');
                                voucher.att('approv_date', '2022-03-15T00:00:00');
                                voucher.att('ws_seq_no', '');
                                voucher.att('held', '0');
                                voucher.att('active', '1');
                                voucher.att('rate', '');
                                voucher.att('controller', '1');
                                voucher.att('orig_controller', '0');
                                voucher.att('slip_flag', '');
                                voucher.att('approv_notes', 'OK');
                                voucher.att('approv_status', '2');
                                voucher.att('pending_override', '');
                                voucher.att('tracking_no', '');
                                voucher.att('vend_name', '');
                                voucher.att('contract_date', '');
                                voucher.att('asn_no', '');
                                voucher.att('subloc_code', '');
                                voucher.att('subloc_id', '');
                                voucher.att('resolv_status', '');
                                voucher.att('resolv_sid', '');
                                voucher.att('note', purchase_order_header.InvoiceNo);
                                voucher.att('no_of_pkgs', '');
                                voucher.att('empl_sbs_no', process.env.RP_SBS_NO);
                                voucher.att('empl_name', 'SYSADMIN');
                                voucher.att('tax_area_name', '');
                                voucher.att('season_code', '');
                                voucher.att('reviewby_sbs_no', process.env.RP_SBS_NO);
                                voucher.att('reviewby_empl_name', 'SYSADMIN');
                                voucher.att('approvby_sbs_no', process.env.RP_SBS_NO);
                                voucher.att('approvby_empl_name', 'SYSADMIN');
                                voucher.att('slip_sid', '');
                                voucher.att('slip_sbs_no', '');
                                voucher.att('slip_store_no', '');
                                voucher.att('ref_vou_no', '');
                                voucher.att('ref_vou_created_date', '');
                                voucher.att('carrier_name', '');
                                voucher.att('createdby_sbs_no', process.env.RP_SBS_NO);
                                voucher.att('createdby_empl_name', '');
                                voucher.att('modifiedby_sbs_no', process.env.RP_SBS_NO);
                                voucher.att('modifiedby_empl_name', 'SYSADMIN');
                                voucher.att('trans_reason', '');
                                voucher.att('doc_reason_type', '');
                                voucher.att('doc_reason_code', '');
                                // voucher invoice 
                                voucher.ele('VEND_INVOICE');
                                vou_comments = voucher.ele('VOU_COMMENTS');
                                vou_comment = vou_comments.ele('VOU_COMMENT');
                                vou_comment.att('comment_no', '1');
                                vou_comment.att('comments', purchase_order_header.InvoiceNo);
                                // voucher fee
                                voucher.ele('VOU_FEES');
                                //voucher terms
                                voucher.ele('VOU_TERMS');
                                //  voucher approvals
                                voucher.ele('VOU_APPROVALS');
                                // / voucher pakages
                                voucher.ele('VOU_PACKAGES');
                                vou_items = voucher.ele('VOU_ITEMS');
                                count = 1;
                                _j.label = 26;
                            case 26:
                                _j.trys.push([26, 31, 32, 37]);
                                item_array_1 = (e_5 = void 0, __asyncValues(item_array));
                                _j.label = 27;
                            case 27: return [4 /*yield*/, item_array_1.next()];
                            case 28:
                                if (!(item_array_1_1 = _j.sent(), !item_array_1_1.done)) return [3 /*break*/, 30];
                                array_items = item_array_1_1.value;
                                qty = 0;
                                cost = 0;
                                resultit = array_items;
                                if (resultit['QTY_PER_CASE'] > 0) {
                                    qty = resultit['QUANTITY'] * resultit['QTY_PER_CASE'];
                                    cost = resultit['UNITPRICE'] / resultit['QTY_PER_CASE'];
                                }
                                else {
                                    qty = resultit['QUANTITY'];
                                    cost = resultit['UNITPRICE'];
                                }
                                ext_cost = cost * qty;
                                vou_item = vou_items.ele('VOU_ITEM');
                                vou_item.att('item_pos', count);
                                vou_item.att('item_sid', resultit['ITEM_SID']);
                                vou_item.att('qty', qty);
                                vou_item.att('orig_qty', qty);
                                vou_item.att('price', '');
                                vou_item.att('cost', cost);
                                vou_item.att('ext_cost', ext_cost);
                                vou_item.att('fc_cost', '');
                                vou_item.att('tax_code', '');
                                vou_item.att('tax_perc', '');
                                vou_item.att('tax_code2', '');
                                vou_item.att('tax_amt_excl', '');
                                vou_item.att('tax_amt_incl', '');
                                vou_item.att('shipping_amt', '');
                                vou_item.att('disc_amt', '');
                                vou_item.att('carton_no', '');
                                vou_item.att('carton_status', '');
                                vou_item.att('cust_fld', '');
                                vou_item.att('scan_upc', '');
                                vou_item.att('serial_no', '');
                                vou_item.att('lot_number', resultit['LOTNO']);
                                vou_item.att('udf_value1', '');
                                vou_item.att('udf_value2', '');
                                vou_item.att('udf_value3', '');
                                vou_item.att('udf_value4', '');
                                vou_item.att('orig_cost', cost);
                                vou_item.att('item_note1', '');
                                vou_item.att('item_note2', '');
                                vou_item.att('item_note3', '');
                                vou_item.att('item_note4', '');
                                vou_item.att('item_note5', '');
                                vou_item.att('item_note6', '');
                                vou_item.att('item_note7', '');
                                vou_item.att('item_note8', '');
                                vou_item.att('item_note9', '');
                                vou_item.att('item_note10', '');
                                vou_item.att('spread_fee_amt', '');
                                vou_item.att('alt_upc', '');
                                vou_item.att('alt_alu', '');
                                vou_item.att('alt_cost', '');
                                vou_item.att('alt_vend_code', '');
                                vou_item.att('from_asn', 0);
                                vou_item.att('subloc_code', '');
                                vou_item.att('subloc_id', '');
                                vou_item.att('sn_qty', '');
                                vou_item.att('sn_active', '');
                                vou_item.att('sn_received', '');
                                vou_item.att('sn_received', '');
                                vou_item.att('sn_sold', '');
                                vou_item.att('sn_transferred', '');
                                vou_item.att('sn_so_reserved', '');
                                vou_item.att('sn_returned', '');
                                vou_item.att('sn_returned_to_vnd', '');
                                vou_item.att('sn_adjusted', '');
                                vou_item.att('currency_name', '');
                                vou_item.att('tax_area2_name', '');
                                vou_item.att('lot_expiry_date', resultit['EXPIRYDATE']);
                                inventory = vou_item.ele('INVN_BASE_ITEM');
                                inventory.att('item_sid', resultit['ITEM_SID']);
                                inventory.att('upc', resultit['LOCAL_UPC']);
                                inventory.att('alu', resultit['ALU']);
                                inventory.att('style_sid', resultit['STYLE_SID']);
                                inventory.att('dcs_code', resultit['DCS_CODE']);
                                inventory.att('vend_code', resultit['VEND_CODE']);
                                inventory.att('scale_no', '');
                                inventory.att('description1', '');
                                inventory.att('description2', '');
                                inventory.att('description3', '');
                                inventory.att('description4', '');
                                inventory.att('attr', '');
                                inventory.att('siz', '');
                                inventory.att('use_qty_decimals', '');
                                inventory.att('flag', '');
                                inventory.att('ext_flag', '');
                                inventory.att('item_no', '');
                                inventory.att('udf3_value', '');
                                inventory.att('udf4_value', '');
                                inventory.att('udf5_value', '');
                                inventory.att('udf6_value', '');
                                inventory.att('aux1_value', '');
                                inventory.att('aux2_value', '');
                                inventory.att('aux3_value', '');
                                inventory.att('aux4_value', '');
                                inventory.att('aux5_value', '');
                                inventory.att('aux6_value', '');
                                inventory.att('aux7_value', '');
                                inventory.att('aux8_value', '');
                                inventory.up;
                                count += 1;
                                _j.label = 29;
                            case 29: return [3 /*break*/, 27];
                            case 30: return [3 /*break*/, 37];
                            case 31:
                                e_5_1 = _j.sent();
                                e_5 = { error: e_5_1 };
                                return [3 /*break*/, 37];
                            case 32:
                                _j.trys.push([32, , 35, 36]);
                                if (!(item_array_1_1 && !item_array_1_1.done && (_e = item_array_1.return))) return [3 /*break*/, 34];
                                return [4 /*yield*/, _e.call(item_array_1)];
                            case 33:
                                _j.sent();
                                _j.label = 34;
                            case 34: return [3 /*break*/, 36];
                            case 35:
                                if (e_5) throw e_5.error;
                                return [7 /*endfinally*/];
                            case 36: return [7 /*endfinally*/];
                            case 37:
                                if (fileFlag == true) {
                                    fs_1.default.copyFile(process.env.READASNFILEPATH + '/' + fileObject, process.env.ASNSENTFFILEPATH + '/' + fileObject, function (err) {
                                        if (err) {
                                            console.log("Error Found:", err);
                                        }
                                        else {
                                            var txt = "{ASN posting start Time at '" + dateNow_1 + "'} \n " + vou_no_1 + " against " + process.env.READASNFILEPATH + "/" + fileObject + " \n {ASN posting start Time at '" + dateNow_1 + "'}";
                                            var appendF = appendFileWrote(process.env.AXNPASSEDFILEPATH, txt);
                                            // Get the current filenames
                                            // after the function
                                            fs_1.default.unlinkSync(process.env.READASNFILEPATH + '/' + fileObject);
                                        }
                                    });
                                }
                                else {
                                    //  implement failed message
                                }
                                return [3 /*break*/, 39];
                            case 38:
                                //  store no found
                                console.log("store not found");
                                _j.label = 39;
                            case 39: return [3 /*break*/, 42];
                            case 40:
                                console.log("Invoice already posted!!");
                                txt = "{ASN posting start Time at '" + dateNow_1 + "'} \n " + result.rows[0]['VOU_NO'] + " against " + process.env.READASNFILEPATH + "/" + fileObject + " \n {ASN posting start Time at '" + dateNow_1 + "'}";
                                return [4 /*yield*/, appendFileWrote(process.env.AXNPASSEDFILEPATH, txt)];
                            case 41:
                                appendF = _j.sent();
                                _j.label = 42;
                            case 42: return [3 /*break*/, 45];
                            case 43:
                                console.log(process.env.READASNFILEPATH + '/' + fileObject + " : Error");
                                txt = "{ASN posting start Time at '" + dateNow_1 + "'} \n " + process.env.READASNFILEPATH + "/" + fileObject + " \n {ASN posting start Time at '" + dateNow_1 + "'}";
                                return [4 /*yield*/, appendFileWrote(process.env.AXNFAILEDFILEPATH, txt)];
                            case 44:
                                appendF = _j.sent();
                                _j.label = 45;
                            case 45: return [3 /*break*/, 47];
                            case 46:
                                error_1 = _j.sent();
                                return [3 /*break*/, 47];
                            case 47: return [2 /*return*/];
                        }
                    });
                };
                files_1 = __asyncValues(files);
                _f.label = 29;
            case 29: return [4 /*yield*/, files_1.next()];
            case 30:
                if (!(files_1_1 = _f.sent(), !files_1_1.done)) return [3 /*break*/, 33];
                return [5 /*yield**/, _loop_1()];
            case 31:
                _f.sent();
                _f.label = 32;
            case 32: return [3 /*break*/, 29];
            case 33: return [3 /*break*/, 40];
            case 34:
                e_3_1 = _f.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 40];
            case 35:
                _f.trys.push([35, , 38, 39]);
                if (!(files_1_1 && !files_1_1.done && (_c = files_1.return))) return [3 /*break*/, 37];
                return [4 /*yield*/, _c.call(files_1)];
            case 36:
                _f.sent();
                _f.label = 37;
            case 37: return [3 /*break*/, 39];
            case 38:
                if (e_3) throw e_3.error;
                return [7 /*endfinally*/];
            case 39: return [7 /*endfinally*/];
            case 40:
                xml = root.end({ pretty: true });
                // console.log(xml);
                try {
                    if (!fs_1.default.existsSync(process.env.AXNXMLFILEPATH + '/VOUCHER.xml')) {
                        fs_1.default.writeFile(process.env.AXNXMLFILEPATH + "/VOUCHER.xml", xml, {
                            encoding: "utf8",
                            flag: "w",
                            mode: 438
                        }, function (err) {
                            if (err)
                                console.log(err);
                            else {
                                console.log("File written successfully\n");
                                var txt = "{ASN posting end Time at '" + dateNow_1 + "'}";
                                var appendF = appendFileWrote(process.env.AXNPASSEDFILEPATH, txt);
                            }
                        });
                        //file exists
                    }
                    else {
                    }
                }
                catch (err) {
                    console.error(err);
                }
                return [3 /*break*/, 42];
            case 41:
                res.status(403).json({ "status": 0, "message": "Db connection , not found!" });
                _f.label = 42;
            case 42: return [3 /*break*/, 44];
            case 43:
                res.status(404).json({ "status": 2, "message": "Xml file already exist please clear those !" });
                _f.label = 44;
            case 44: return [3 /*break*/, 46];
            case 45:
                err_1 = _f.sent();
                console.error(err_1);
                return [3 /*break*/, 46];
            case 46: return [2 /*return*/];
        }
    });
}); };
exports.asnPosting = asnPosting;
// execute files funtion
function asnFileOpen(fileObject) {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, promises_1.readFile)(process.env.READASNFILEPATH + '/' + fileObject, { encoding: 'utf8' })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, JSON.parse(data)];
                case 2:
                    err_2 = _a.sent();
                    return [2 /*return*/, err_2];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getRandomIntInclusive(min, max) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return [2 /*return*/, Math.floor(Math.random() * (max - min + 1) + min)]; // The maximum is inclusive and the minimum is inclusive
        });
    });
}
function appendFileWrote(filePath, txt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                fs_1.default.appendFile(filePath, txt, function (err) {
                    if (err) {
                    }
                    else {
                    }
                });
            }
            catch (err) {
                return [2 /*return*/, err];
            }
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=asngenerateviaxml.js.map
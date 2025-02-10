"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var api = (0, express_1.default)();
var h = 1234;
api.use(express_1.default.json());
if (process.env.NODE_ENV === 'development') {
    var corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    };
    api.use((0, cors_1.default)(corsOptions));
}
mongoose_1.default.connect('mongodb://localhost:27017/booksdb')
    .then(function () { return console.log('MongoDB connected'); })
    .catch(function (err) { return console.error('MongoDB connection error:', err); });
api.use('/api', require('./routes/bookRoutes'));
if (process.env.NODE_ENV === 'production') {
    api.use(express_1.default.static(path_1.default.resolve(__dirname, '../../client/build')));
    api.get('*', function (req, res) {
        res.sendFile(path_1.default.resolve(__dirname, '../../client/build', 'index.html'));
    });
}
api.listen(h, function () {
    console.log("ToimiikoS at http://localhost:".concat(h));
});

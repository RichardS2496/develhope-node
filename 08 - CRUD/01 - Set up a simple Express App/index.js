"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("express-async-errors");
var morgan_1 = require("morgan");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
var planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
app.get("/api/planets", function (req, res) {
    res.status(200).json(planets);
});
app.get("/api/planets/:id", function (req, res) {
    var id = req.params.id;
    var planet = planets.find(function (p) {
        p.id === Number(id);
    });
    res.status(200).json(planet);
});
app.post("/api/planets", function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name;
    var newPlanet = { id: id, name: name };
    planets = __spreadArray(__spreadArray([], planets, true), [newPlanet], false);
    res.status(201).json({ message: "The planet was added", planet: newPlanet });
});
app.listen(port, function () {
    console.log("The server is running on http://localhost:".concat(port));
});

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_repository_1 = require("./product.repository");
var static_datasource_1 = require("./static.datasource");
var cart_model_1 = require("./cart.model");
var order_model_1 = require("./order.model");
var order_repository_1 = require("./order.repository");
var rest_datasource_1 = require("./rest.datasource");
var http_1 = require("@angular/http");
var auth_service_1 = require("./auth.service");
var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            providers: [product_repository_1.ProductRepository, cart_model_1.Cart, order_model_1.Order, order_repository_1.OrderRepository,
                { provide: static_datasource_1.StaticDataSource, useClass: rest_datasource_1.RestDataSource },
                rest_datasource_1.RestDataSource, auth_service_1.AuthService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ModelModule);
    return ModelModule;
}());
exports.ModelModule = ModelModule;

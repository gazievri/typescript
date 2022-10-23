"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
exports.user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
// <button onClick="myClickHandler">Click Me!</button>
function myClickHandler(event) {
    this.disabled = true;
}

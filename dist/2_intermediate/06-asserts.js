"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDisplayName = void 0;
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error('User has no displayName field');
}
exports.assertDisplayName = assertDisplayName;
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}

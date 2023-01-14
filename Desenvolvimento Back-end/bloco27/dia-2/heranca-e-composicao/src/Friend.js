"use strict";
exports.__esModule = true;
exports.SocialMediaAccount2 = exports.Friend = void 0;
var Friend = /** @class */ (function () {
    function Friend() {
    }
    Friend.prototype.getNickname = function () {
        return this.nickname;
    };
    Friend.prototype.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    return Friend;
}());
exports.Friend = Friend;
var SocialMediaAccount2 = /** @class */ (function () {
    function SocialMediaAccount2() {
        this.friends = new Array();
    }
    SocialMediaAccount2.prototype.addFriend = function (friend) {
        this.friends.push(friend);
    };
    SocialMediaAccount2.prototype.printFriends = function () {
        this.friends.map(function (friend) { return console.log(friend); });
    };
    return SocialMediaAccount2;
}());
exports.SocialMediaAccount2 = SocialMediaAccount2;

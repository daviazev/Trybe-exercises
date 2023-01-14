"use strict";
exports.__esModule = true;
var Profile = /** @class */ (function () {
    function Profile() {
    }
    Profile.prototype.setName = function (name) {
        this.name = name;
    };
    Profile.prototype.setEmail = function (email) {
        this.email = email;
    };
    Profile.prototype.toString = function () {
        return "name - [".concat(this.name, "] - email - [").concat(this.email, "]");
    };
    return Profile;
}());
var SocialMediaAccount = /** @class */ (function () {
    function SocialMediaAccount() {
        // Cria nossa composição com o perfil
        this.profile = new Profile();
    }
    SocialMediaAccount.prototype.editProfile = function (name, email) {
        this.profile.setName(name);
        this.profile.setEmail(email);
    };
    SocialMediaAccount.prototype.printProfile = function () {
        console.log(this.profile.toString());
    };
    return SocialMediaAccount;
}());
exports["default"] = SocialMediaAccount;

import {App} from "../../App";
import {LoginCtrl} from "./LoginCtrl";
import {LogoutCtrl} from "./LogoutCtrl";

const module:ng.IModule = App.module("app.auth", []);

module.controller("Login", LoginCtrl);
module.controller("Logout", LogoutCtrl);

module.config(($stateProvider:ng.ui.IStateProvider) => {
  $stateProvider.state("login", {
    url: "/login",
    views: {
      application: {
        templateUrl: "src/module/auth/view/login.html",
        controller: LoginCtrl,
        controllerAs: "controller"
      }
    }
  }).state("logout", {
    url: "/logout",
    views: {
      application: {
        templateUrl: "src/module/auth/view/logout.html",
        controller: LogoutCtrl,
        controllerAs: "controller"
      }
    }
  });
});

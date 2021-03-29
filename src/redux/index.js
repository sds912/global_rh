import {toggleApp } from "./actions";
import store from "./store";

window.store = store;
window.addArticle = toggleApp;
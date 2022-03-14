// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("semantic-ui-sass")
//= require jquery-ui
//= require jquery
//= require jquery_ujs
//= require_tree .
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
// import $ from "../../../../../.rvm/gems/ruby-3.0.2/gems/jquery-rails-4.4.0/vendor/assets/javascripts/jquery";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import './layouts/navigation'



Rails.start()
Turbolinks.start()
ActiveStorage.start()

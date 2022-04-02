// ==UserScript==
// @name         Label OCI Console
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  To err is human
// @author       vissree
// @match        https://*.cloud.oracle.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function () {
  "use strict";

  // Modify the tenancy names as needed
  const tenancies = {
    personal: new Set(["replace_with_personal_tenancy_name"]),
    prod: new Set([
      "replace_with_prod_tenancy_name_1",
      "replace_with_prod_tenancy_name_2",
    ]),
    stage: new Set([
      "replace_with_stage_tenancy_name_1",
      "replace_with_stage_tenancy_name_2"
    ]),
    dev: new Set([
      "replace_with_dev_tenancy_name_1",
      "replace_with_dev_tenancy_name_2"
    ]),
  };

  // Generic function to wait until the required element is loaded
  const waitForElem = function (selector, callback) {
    if ($(selector).length) {
      callback();
    } else {
      setTimeout(function () {
        waitForElem(selector, callback);
      }, 100);
    }
  };

  const bannerCSSProps = {
    height: "30px",
    padding: "12px 5px",
    "line-height": "24px",
    color: "black",
    "font-size": "24px",
    "background-color": "yellow", // Set the default for unknown tenancies to yellow
  };

  const bannerColors = {
    prod: "red",
    stage: "orange",
    dev: "yellow",
    personal: "green",
  };

  const tenancyElemSelector = "[href$='/tenancy']";
  const headerCompartmentSelector = "[id=console-header-container]";

  waitForElem(tenancyElemSelector, function () {
    let tenancyElem = $(tenancyElemSelector).get(0);
    if (tenancyElem) {
      let tenancy = tenancyElem.text.split(" ")[1]; // Tenancy: name

      // set the banner color depending on the tenancy
      for (const kind in tenancies) {
        if (tenancies[kind].has(tenancy)) {
          bannerCSSProps["background-color"] = bannerColors[kind];
          break;
        }
      }

      // create the banner object
      let banner = $("<div></div>");
      banner.css(bannerCSSProps);
      banner.text(tenancy);

      // add to the header compartment
      $(headerCompartmentSelector).prepend(banner);
    }
  });
})();

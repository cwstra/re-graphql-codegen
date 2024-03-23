// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as WrapperMjs from "./wrapper.mjs";
import * as OptionPlus$GraphqlCodegenOperations from "./OptionPlus.mjs";

function filePathMatchesPatterns(prim0, prim1) {
  return WrapperMjs.testPattern(prim0, prim1);
}

var WatchPatterns = {
  filePathMatchesPatterns: filePathMatchesPatterns
};

function getGeneratesEntry(prim) {
  return WrapperMjs.getGeneratesEntry(prim);
}

function getWatchedPatterns(prim) {
  return WrapperMjs.getWatchedPatterns(prim);
}

var CodegenConfig = {
  getGeneratesEntry: getGeneratesEntry,
  getWatchedPatterns: getWatchedPatterns
};

function getCodegenConfig(prim) {
  return WrapperMjs.getCodegenConfig(prim);
}

async function getConfig(configFilePath) {
  var match = OptionPlus$GraphqlCodegenOperations.getOrPanic(await WrapperMjs.getCodegenConfig(configFilePath), "Codegen config not found");
  var mainConfig = match[1];
  var generatesEntry = OptionPlus$GraphqlCodegenOperations.getOrPanic(WrapperMjs.getGeneratesEntry(mainConfig), "Missing ppxGenerates property in codegen config");
  return [
          {
            mainConfig: mainConfig,
            generatesEntry: generatesEntry
          },
          match[0],
          WrapperMjs.getWatchedPatterns(mainConfig)
        ];
}

function runBase(prim0, prim1) {
  return WrapperMjs.runBase(prim0, prim1 !== undefined ? Caml_option.valFromOption(prim1) : undefined);
}

function runDocument(prim0, prim1, prim2) {
  return WrapperMjs.runDocument(prim0, prim1, prim2);
}

export {
  WatchPatterns ,
  CodegenConfig ,
  getCodegenConfig ,
  getConfig ,
  runBase ,
  runDocument ,
}
/* ./wrapper.mjs Not a pure module */

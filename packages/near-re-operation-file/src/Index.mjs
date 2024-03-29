// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Path = require("path");
var Graphql = require("graphql");
var Process = require("process");
var CorePlus = require("@re-graphql-codegen/core-plus/src/CorePlus.mjs");
var AST$Graphql = require("@re-graphql-codegen/graphql/src/AST.mjs");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Schema$Graphql = require("@re-graphql-codegen/graphql/src/Schema.mjs");
var Caml_exceptions = require("rescript/lib/js/caml_exceptions.js");
var Caml_splice_call = require("rescript/lib/js/caml_splice_call.js");

var SchemaTypesSource = {};

var Unknown_type = /* @__PURE__ */Caml_exceptions.create("Index-GraphqlCodegenOperations.FragmentRegistry.Unknown_type");

var Duplicate_names = /* @__PURE__ */Caml_exceptions.create("Index-GraphqlCodegenOperations.FragmentRegistry.Duplicate_names");

function build(param, param$1, schemaObject) {
  var generateFilePath = param.generateFilePath;
  var getFragmentImports = function (possibleTypes, name) {
    var shared = {
      TAG: "Document",
      _0: name
    };
    var len = possibleTypes.length;
    if (len !== 1) {
      if (len !== 0) {
        return [shared].concat(possibleTypes.map(function (concreteType) {
                        return {
                                TAG: "AbstractTypeImpl",
                                name: name,
                                concreteType: concreteType
                              };
                      }));
      } else {
        return [shared];
      }
    } else {
      return [
              shared,
              {
                TAG: "ConcreteType",
                _0: name
              }
            ];
    }
  };
  var match = CorePlus.$$Array.reduce(param$1.documents, [
        [],
        {}
      ], (function (param, $$document) {
          var fragments = CorePlus.$$Array.filterMap($$document.document.definitions, (function (d) {
                  if (d.kind !== "FragmentDefinition") {
                    return ;
                  }
                  var loc = d.loc;
                  if (loc === undefined) {
                    return ;
                  }
                  var variableDefinitions = d.variableDefinitions;
                  if (variableDefinitions === undefined) {
                    return ;
                  }
                  var directives = d.directives;
                  if (directives !== undefined) {
                    return {
                            kind: "FragmentDefinition",
                            loc: loc,
                            name: d.name,
                            variableDefinitions: variableDefinitions,
                            typeCondition: d.typeCondition,
                            directives: directives,
                            selectionSet: d.selectionSet
                          };
                  }
                  
                }));
          return CorePlus.$$Array.reduce(fragments, [
                      param[0],
                      param[1]
                    ], (function (param, fragment) {
                        var registry = param[1];
                        var typeName = AST$Graphql.NameNode.value(AST$Graphql.NamedTypeNode.name(AST$Graphql.FragmentDefinitionNode.typeCondition(fragment)));
                        var fragmentName = AST$Graphql.NameNode.value(AST$Graphql.FragmentDefinitionNode.name(fragment));
                        var match = CorePlus.$$Option.map(Schema$Graphql.getType(schemaObject, typeName), Schema$Graphql.Named.parse);
                        var possibleTypes;
                        if (match !== undefined) {
                          switch (match.TAG) {
                            case "Object" :
                                possibleTypes = [Schema$Graphql.$$Object.name(match._0)];
                                break;
                            case "Interface" :
                                possibleTypes = Schema$Graphql.getPossibleTypes(schemaObject, Schema$Graphql.Interface.toAbstract(match._0)).map(Schema$Graphql.$$Object.name);
                                break;
                            case "Union" :
                                possibleTypes = Schema$Graphql.getPossibleTypes(schemaObject, Schema$Graphql.Union.toAbstract(match._0)).map(Schema$Graphql.$$Object.name);
                                break;
                            case "Scalar" :
                            case "Enum" :
                                possibleTypes = [];
                                break;
                            case "InputObject" :
                                throw {
                                      RE_EXN_ID: "Match_failure",
                                      _1: [
                                        "Index.res",
                                        85,
                                        28
                                      ],
                                      Error: new Error()
                                    };
                            
                          }
                        } else {
                          throw {
                                RE_EXN_ID: Unknown_type,
                                _1: "Fragment " + fragmentName + " is set on non-existing type \"" + typeName + "\"",
                                Error: new Error()
                              };
                        }
                        var filePath = generateFilePath($$document.location);
                        var imports = getFragmentImports(possibleTypes, fragmentName);
                        return [
                                param[0].concat(CorePlus.$$Option.mapOr(CorePlus.$$Option.filter(registry[fragmentName], (function (f) {
                                                return Graphql.print(f.node) !== Graphql.print(fragment);
                                              })), [], (function (param) {
                                            return [fragmentName];
                                          }))),
                                CorePlus.Dict.put(registry, fragmentName, {
                                      filePath: filePath,
                                      onType: AST$Graphql.NameNode.value(AST$Graphql.NamedTypeNode.name(AST$Graphql.FragmentDefinitionNode.typeCondition(fragment))),
                                      node: fragment,
                                      imports: imports
                                    })
                              ];
                      }));
        }));
  var duplicates = match[0];
  if (duplicates.length !== 0) {
    throw {
          RE_EXN_ID: Duplicate_names,
          _1: duplicates,
          Error: new Error()
        };
  }
  return match[1];
}

var FragmentRegistry = {
  Unknown_type: Unknown_type,
  Duplicate_names: Duplicate_names,
  build: build
};

function extractExternalFragmentsInUse(documentNode, registry) {
  var ignored = new Set(CorePlus.$$Array.filterMap(documentNode.definitions, (function (d) {
              if (d.kind === "FragmentDefinition") {
                return AST$Graphql.NameNode.value(d.name);
              }
              
            })));
  var extract = function (selections, result, level) {
    switch (selections.kind) {
      case "Field" :
          return CorePlus.$$Option.mapOr(selections.selectionSet, result, (function (s) {
                        return CorePlus.$$Array.reduce(s.selections, result, (function (acc, s) {
                                      return extract(s, acc, level);
                                    }));
                      }));
      case "FragmentSpread" :
          var fragmentName = AST$Graphql.NameNode.value(selections.name);
          var match = ignored.has(fragmentName);
          var match$1 = result[fragmentName];
          if (match) {
            return result;
          }
          if (match$1 !== undefined && level >= match$1) {
            return result;
          }
          var updated = CorePlus.Dict.put(result, fragmentName, level);
          return CorePlus.$$Option.mapOr(registry[fragmentName], updated, (function (r) {
                        return CorePlus.$$Array.reduce(AST$Graphql.SelectionSetNode.selections(AST$Graphql.FragmentDefinitionNode.selectionSet(r.node)), updated, (function (acc, s) {
                                      return extract(s, acc, level + 1 | 0);
                                    }));
                      }));
      case "InlineFragment" :
          return CorePlus.$$Array.reduce(AST$Graphql.SelectionSetNode.selections(selections.selectionSet), result, (function (acc, s) {
                        return extract(s, acc, level);
                      }));
      
    }
  };
  return CorePlus.$$Array.reduce(documentNode.definitions, {}, (function (acc, d) {
                var tmp;
                switch (d.kind) {
                  case "OperationDefinition" :
                  case "FragmentDefinition" :
                      tmp = AST$Graphql.SelectionSetNode.selections(d.selectionSet);
                      break;
                  default:
                    tmp = [];
                }
                return CorePlus.$$Array.reduce(tmp, acc, (function (acc, s) {
                              return extract(s, acc, 0);
                            }));
              }));
}

function buildFragmentResolver(collectorOptions, presetOptions, schemaObject, dedupeFragments) {
  var registry = build(collectorOptions, presetOptions, schemaObject);
  var typesImport = collectorOptions.typesImport;
  var baseDir = collectorOptions.baseDir;
  var baseOutputDir = presetOptions.baseOutputDir;
  return function (generatedFilePath, documentFileContent) {
    var match = CorePlus.$$Array.reduce(Object.entries(extractExternalFragmentsInUse(documentFileContent, registry)), [
          [],
          {}
        ], (function (acc, param) {
            var level = param[1];
            var fragmentName = param[0];
            return CorePlus.$$Option.mapOr(registry[fragmentName], acc, (function (fragment) {
                          var fragmentFileImports = acc[1];
                          var tmp = false;
                          if (fragment.filePath !== generatedFilePath) {
                            var tmp$1 = true;
                            if (level !== 0) {
                              var tmp$2 = false;
                              if (dedupeFragments) {
                                var match = documentFileContent.definitions[0];
                                var tmp$3;
                                if (match !== undefined) {
                                  switch (match.kind) {
                                    case "OperationDefinition" :
                                    case "FragmentDefinition" :
                                        tmp$3 = true;
                                        break;
                                    default:
                                      tmp$3 = false;
                                  }
                                } else {
                                  tmp$3 = false;
                                }
                                tmp$2 = tmp$3;
                              }
                              tmp$1 = tmp$2;
                            }
                            tmp = tmp$1;
                          }
                          return [
                                  acc[0].concat([{
                                          name: fragmentName,
                                          onType: fragment.onType,
                                          node: fragment.node,
                                          isExternal: true,
                                          level: level
                                        }]),
                                  tmp ? CorePlus.Dict.update(fragmentFileImports, fragment.filePath, (function (__x) {
                                            return CorePlus.$$Option.mapOr(__x, fragment.imports, (function (a) {
                                                          return fragment.imports.concat(a);
                                                        }));
                                          })) : fragmentFileImports
                                ];
                        }));
          }));
    return [
            match[0],
            Object.entries(match[1]).map(function (param) {
                  return {
                          baseDir: baseDir,
                          baseOutputDir: baseOutputDir,
                          outputPath: generatedFilePath,
                          importSource: {
                            path: param[0],
                            identifiers: param[1]
                          },
                          typesImport: typesImport
                        };
                })
          ];
  };
}

function needsScalarImport(definitions, schema) {
  var hasFieldSelection = function (s) {
    switch (s.kind) {
      case "Field" :
          var selectionSet = s.selectionSet;
          if (AST$Graphql.NameNode.value(s.name).startsWith("__")) {
            return false;
          } else if (selectionSet !== undefined) {
            return AST$Graphql.SelectionSetNode.selections(selectionSet).some(hasFieldSelection);
          } else {
            return true;
          }
      case "FragmentSpread" :
          return false;
      case "InlineFragment" :
          return AST$Graphql.SelectionSetNode.selections(s.selectionSet).some(hasFieldSelection);
      
    }
  };
  return definitions.flatMap(function (d) {
                switch (d.kind) {
                  case "OperationDefinition" :
                  case "FragmentDefinition" :
                      return AST$Graphql.SelectionSetNode.selections(d.selectionSet);
                  default:
                    return [];
                }
              }).some(hasFieldSelection);
}

function resolveDocumentImports(presetOptions, schemaObject, importResolverOptions, dedupeFragmentsOpt) {
  var dedupeFragments = dedupeFragmentsOpt !== undefined ? dedupeFragmentsOpt : false;
  var resolveFragments = buildFragmentResolver(importResolverOptions, presetOptions, schemaObject, dedupeFragments);
  var generateFilePath = importResolverOptions.generateFilePath;
  return CorePlus.Result.traverse(presetOptions.documents, (function (documentFile) {
                return CorePlus.Result.map({
                            TAG: "Ok",
                            _0: documentFile.location
                          }, (function (documentLocation) {
                              var generatedFilePath = generateFilePath(documentLocation);
                              resolveFragments(generatedFilePath, documentFile.document);
                            }));
              }));
}

var $$default = {
  buildGeneratesSection: (async function (options) {
      var schema = CorePlus.$$Option.getOr(options.schemaAst, Graphql.buildASTSchema(options.schema, options.config));
      CorePlus.$$Option.getOr(options.presetConfig.cwd, Process.cwd());
      var extension = CorePlus.$$Option.getOr(options.presetConfig.extension, ".generated.res");
      var generateFilePath = function ($$location) {
        var parsedLocation = Path.parse($$location);
        return Caml_splice_call.spliceApply(Path.join, [[
                        [parsedLocation.dir],
                        CorePlus.$$Option.toArray(undefined),
                        [parsedLocation.name.concat(extension)]
                      ].flat()]);
      };
      return options.documents.map(function ($$document) {
                  return {
                          filename: generateFilePath($$document.location),
                          plugins: options.plugins,
                          schema: options.schema,
                          schemaAst: Caml_option.some(schema),
                          documents: [$$document],
                          config: options.config,
                          pluginMap: options.pluginMap,
                          pluginContext: options.pluginContext
                        };
                });
    })
};

exports.SchemaTypesSource = SchemaTypesSource;
exports.FragmentRegistry = FragmentRegistry;
exports.extractExternalFragmentsInUse = extractExternalFragmentsInUse;
exports.buildFragmentResolver = buildFragmentResolver;
exports.needsScalarImport = needsScalarImport;
exports.resolveDocumentImports = resolveDocumentImports;
exports.default = $$default;
exports.__esModule = true;
/* path Not a pure module */

// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CorePlus from "@re-graphql-codegen/core-plus/src/CorePlus.mjs";
import * as AST$Graphql from "@re-graphql-codegen/graphql/src/AST.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Schema$Graphql from "@re-graphql-codegen/graphql/src/Schema.mjs";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";

var Unknown_field = /* @__PURE__ */Caml_exceptions.create("Helpers-GraphqlCodegen.Unknown_field");

function getFieldType(baseType, fieldName) {
  var fields;
  fields = baseType.TAG === "Object" ? Schema$Graphql.$$Object.getFields(baseType._0) : Schema$Graphql.Interface.getFields(baseType._0);
  var f = fields[fieldName];
  if (f !== undefined) {
    return Schema$Graphql.Field.type_(Caml_option.valFromOption(f));
  }
  var tmp;
  tmp = baseType.TAG === "Object" ? Schema$Graphql.$$Object.name(baseType._0) : Schema$Graphql.Interface.name(baseType._0);
  throw {
        RE_EXN_ID: Unknown_field,
        _1: tmp,
        _2: fieldName,
        Error: new Error()
      };
}

var keywords = [
  "await",
  "open",
  "true",
  "false",
  "let",
  "and",
  "rec",
  "as",
  "exception",
  "assert",
  "lazy",
  "if",
  "else",
  "for",
  "in",
  "while",
  "switch",
  "when",
  "external",
  "type",
  "private",
  "constraint",
  "mutable",
  "include",
  "module",
  "try"
];

function sanitizeFieldName(original, fields) {
  if (!keywords.includes(original)) {
    return [
            original,
            undefined
          ];
  }
  var _fieldName = original;
  while(true) {
    var fieldName = _fieldName;
    var newName = fieldName + "_";
    var match = fields[newName];
    if (match === undefined) {
      return [
              newName,
              original
            ];
    }
    _fieldName = newName;
    continue ;
  };
}

var Cyclic_topology = /* @__PURE__ */Caml_exceptions.create("Helpers-GraphqlCodegen.Cyclic_topology");

var Empty_argument = /* @__PURE__ */Caml_exceptions.create("Helpers-GraphqlCodegen.Empty_argument");

function topologicalSort(input, mapSingle, mapCycle) {
  var removeHandledDependencies = function (node, names) {
    return {
            name: node.name,
            node: node.node,
            dependsOn: node.dependsOn.filter(function (dependency) {
                  return !names.includes(dependency);
                })
          };
  };
  var handleCycle = mapCycle !== undefined ? (function (param) {
        var _collected = [];
        var _border = [param[0]];
        var _untouched = param[1];
        var _dependencies = [];
        while(true) {
          var dependencies = _dependencies;
          var untouched = _untouched;
          var border = _border;
          var collected = _collected;
          var newDepNames = CorePlus.$$Array.uniqBy(border.flatMap(function (b) {
                    return b.dependsOn;
                  }), (function (v) {
                  return v;
                }));
          if (newDepNames.length === 0) {
            return [
                    mapCycle(collected.concat(border)),
                    untouched,
                    dependencies
                  ];
          }
          var remove = (function(newDepNames){
          return function remove(__x) {
            return removeHandledDependencies(__x, newDepNames);
          }
          }(newDepNames));
          var newCollected = collected.concat(border.map(remove));
          var match = CorePlus.Either.partitionMap(untouched.map(remove), (function(newDepNames){
              return function (n) {
                if (newDepNames.includes(n.name)) {
                  return {
                          TAG: "Left",
                          _0: n
                        };
                } else {
                  return {
                          TAG: "Right",
                          _0: n
                        };
                }
              }
              }(newDepNames)));
          _dependencies = dependencies.concat(newDepNames);
          _untouched = match[1];
          _border = match[0];
          _collected = newCollected;
          continue ;
        };
      }) : (function (param) {
        throw {
              RE_EXN_ID: Cyclic_topology,
              Error: new Error()
            };
      });
  var rateNode = function (n) {
    return n.dependsOn.length - (
            n.dependsOn.includes(n.name) ? 0.5 : 0.0
          );
  };
  if (input.length !== 0) {
    var _unsortedFragments = input;
    var _sortedFragmentsOpt;
    while(true) {
      var sortedFragmentsOpt = _sortedFragmentsOpt;
      var unsortedFragments = _unsortedFragments;
      var sortedFragments = sortedFragmentsOpt !== undefined ? sortedFragmentsOpt : [];
      unsortedFragments.sort(function (f1, f2) {
            return CorePlus.Ordering.compare(rateNode(f1), rateNode(f2));
          });
      var match = CorePlus.$$Array.takeDropWhile(unsortedFragments, (function (f) {
              return f.dependsOn.length === 0;
            }));
      var independent = match[0];
      if (independent.length !== 0) {
        var dependent = match[1];
        if (dependent.length === 0) {
          return sortedFragments.concat(independent.map(mapSingle));
        }
        _sortedFragmentsOpt = sortedFragments.concat(independent.map(mapSingle));
        _unsortedFragments = dependent.map((function(independent){
            return function (__x) {
              return removeHandledDependencies(__x, independent.map(function (i) {
                              return i.name;
                            }));
            }
            }(independent)));
        continue ;
      }
      var match$1 = handleCycle(CorePlus.$$Option.getOrExn(CorePlus.$$Array.headTail(match[1]), {
                RE_EXN_ID: Empty_argument
              }));
      var handledDeps = match$1[2];
      var remainingDependents = match$1[1];
      var newSortedFragments = sortedFragments.concat([match$1[0]]);
      if (remainingDependents.length === 0) {
        return newSortedFragments;
      }
      _sortedFragmentsOpt = newSortedFragments;
      _unsortedFragments = remainingDependents.map((function(handledDeps){
          return function (__x) {
            return removeHandledDependencies(__x, handledDeps);
          }
          }(handledDeps)));
      continue ;
    };
  } else {
    return [];
  }
}

function sortFragmentsTopologically(definitions) {
  var extractDependsFromSelections = function (_selections, _fragmentNamesOpt) {
    while(true) {
      var fragmentNamesOpt = _fragmentNamesOpt;
      var selections = _selections;
      var fragmentNames = fragmentNamesOpt !== undefined ? fragmentNamesOpt : [];
      var newFragmentNames = CorePlus.$$Array.filterMap(selections, (function (s) {
              switch (s.kind) {
                case "FragmentSpread" :
                    return AST$Graphql.NameNode.value(s.name);
                case "Field" :
                case "InlineFragment" :
                    return ;
                
              }
            }));
      var nestedSelections = selections.flatMap(function (s) {
            switch (s.kind) {
              case "Field" :
                  var selectionSet = s.selectionSet;
                  if (selectionSet !== undefined) {
                    return AST$Graphql.SelectionSetNode.selections(selectionSet);
                  } else {
                    return [];
                  }
              case "FragmentSpread" :
                  return [];
              case "InlineFragment" :
                  return AST$Graphql.SelectionSetNode.selections(s.selectionSet);
              
            }
          });
      if (nestedSelections.length === 0) {
        return fragmentNames;
      }
      _fragmentNamesOpt = fragmentNames.concat(newFragmentNames);
      _selections = nestedSelections;
      continue ;
    };
  };
  var withDepends = definitions.map(function (node) {
        return {
                name: AST$Graphql.NameNode.value(AST$Graphql.FragmentDefinitionNode.name(node)),
                node: node,
                dependsOn: extractDependsFromSelections(AST$Graphql.SelectionSetNode.selections(AST$Graphql.FragmentDefinitionNode.selectionSet(node)), undefined)
              };
      });
  return topologicalSort(withDepends, (function (f) {
                return f.node;
              }), undefined);
}

function sortInputObjectsTopologically(definitions) {
  var withDepends = definitions.map(function (node) {
        return {
                name: Schema$Graphql.InputObject.name(node),
                node: node,
                dependsOn: CorePlus.$$Array.uniqBy(CorePlus.$$Array.filterMap(Object.values(Schema$Graphql.InputObject.getFields(node)), (function (field) {
                            var _f = Schema$Graphql.InputField.type_(field);
                            while(true) {
                              var f = _f;
                              var io = Schema$Graphql.Input.parse(f);
                              switch (io.TAG) {
                                case "Scalar" :
                                case "Enum" :
                                    return ;
                                case "InputObject" :
                                    return Schema$Graphql.InputObject.name(io._0);
                                case "List" :
                                    _f = Schema$Graphql.List.ofType(io._0);
                                    continue ;
                                case "NonNull" :
                                    var io$1 = Schema$Graphql.Input.parse_nn(Schema$Graphql.NonNull.ofType(io._0));
                                    switch (io$1.TAG) {
                                      case "Scalar" :
                                      case "Enum" :
                                          return ;
                                      case "InputObject" :
                                          return Schema$Graphql.InputObject.name(io$1._0);
                                      case "List" :
                                          _f = Schema$Graphql.List.ofType(io$1._0);
                                          continue ;
                                      
                                    }
                                
                              }
                            };
                          })), (function (t) {
                        return t;
                      }))
              };
      });
  return topologicalSort(withDepends, (function (f) {
                return {
                        TAG: "NonRec",
                        _0: f.node
                      };
              }), (function (fs) {
                return {
                        TAG: "Rec",
                        _0: fs.map(function (f) {
                              return f.node;
                            })
                      };
              }));
}

export {
  Unknown_field ,
  getFieldType ,
  keywords ,
  sanitizeFieldName ,
  Cyclic_topology ,
  Empty_argument ,
  topologicalSort ,
  sortFragmentsTopologically ,
  sortInputObjectsTopologically ,
}
/* CorePlus Not a pure module */

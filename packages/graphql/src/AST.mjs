// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Graphql_facadeMjs from "./graphql_facade.mjs";

function loc(param) {
  return param.loc;
}

function value(param) {
  return param.value;
}

var NameNode = {
  loc: loc,
  value: value
};

function loc$1(param) {
  return param.loc;
}

function name(param) {
  return param.name;
}

var VariableNode = {
  loc: loc$1,
  name: name
};

function loc$2(param) {
  return param.loc;
}

function value$1(param) {
  return param.value;
}

var IntValueNode = {
  loc: loc$2,
  value: value$1
};

function loc$3(param) {
  return param.loc;
}

function value$2(param) {
  return param.value;
}

var FloatValueNode = {
  loc: loc$3,
  value: value$2
};

function loc$4(param) {
  return param.loc;
}

function value$3(param) {
  return param.value;
}

function block(param) {
  return param.block;
}

var StringValueNode = {
  loc: loc$4,
  value: value$3,
  block: block
};

function loc$5(param) {
  return param.loc;
}

function value$4(param) {
  return param.value;
}

var BooleanValueNode = {
  loc: loc$5,
  value: value$4
};

function loc$6(param) {
  return param.loc;
}

var NullValueNode = {
  loc: loc$6
};

function loc$7(param) {
  return param.loc;
}

function value$5(param) {
  return param.value;
}

var EnumValueNode = {
  loc: loc$7,
  value: value$5
};

var ValueNode = {};

function loc$8(param) {
  return param.loc;
}

function name$1(param) {
  return param.name;
}

var NamedTypeNode = {
  loc: loc$8,
  name: name$1
};

var TypeNode = {};

function loc$9(param) {
  return param.loc;
}

function name$2(param) {
  return param.name;
}

function value$6(param) {
  return param.value;
}

var ArgumentNode = {
  loc: loc$9,
  name: name$2,
  value: value$6
};

function loc$10(param) {
  return param.loc;
}

function name$3(param) {
  return param.name;
}

function $$arguments(param) {
  return param.arguments;
}

var DirectiveNode = {
  loc: loc$10,
  name: name$3,
  $$arguments: $$arguments
};

function loc$11(param) {
  return param.loc;
}

function variable(param) {
  return param.variable;
}

function type_(param) {
  return param.type;
}

function defaultValue(param) {
  return param.defaultValue;
}

function directives(param) {
  return param.directives;
}

var VariableDefinitionNode = {
  loc: loc$11,
  variable: variable,
  type_: type_,
  defaultValue: defaultValue,
  directives: directives
};

function loc$12(param) {
  return param.loc;
}

function selections(param) {
  return param.selections;
}

var SelectionSetNode = {
  loc: loc$12,
  selections: selections
};

function loc$13(param) {
  return param.loc;
}

function operation(param) {
  return param.operation;
}

function type_$1(param) {
  return param.type;
}

var OperationTypeDefinitionNode = {
  loc: loc$13,
  operation: operation,
  type_: type_$1
};

function loc$14(param) {
  return param.loc;
}

function description(param) {
  return param.description;
}

function name$4(param) {
  return param.name;
}

function type_$2(param) {
  return param.type;
}

function defaultValue$1(param) {
  return param.defaultValue;
}

function directives$1(param) {
  return param.directives;
}

var InputValueDefinitionNode = {
  loc: loc$14,
  description: description,
  name: name$4,
  type_: type_$2,
  defaultValue: defaultValue$1,
  directives: directives$1
};

function loc$15(param) {
  return param.loc;
}

function description$1(param) {
  return param.description;
}

function name$5(param) {
  return param.name;
}

function $$arguments$1(param) {
  return param.arguments;
}

function type_$3(param) {
  return param.type;
}

function directives$2(param) {
  return param.directives;
}

var FieldDefinitionNode = {
  loc: loc$15,
  description: description$1,
  name: name$5,
  $$arguments: $$arguments$1,
  type_: type_$3,
  directives: directives$2
};

function loc$16(param) {
  return param.loc;
}

function description$2(param) {
  return param.description;
}

function name$6(param) {
  return param.name;
}

function directives$3(param) {
  return param.directives;
}

var EnumValueDefinitionNode = {
  loc: loc$16,
  description: description$2,
  name: name$6,
  directives: directives$3
};

function loc$17(param) {
  return param.loc;
}

function operation$1(param) {
  return param.operation;
}

function name$7(param) {
  return param.name;
}

function variableDefinitions(param) {
  return param.variableDefinitions;
}

function directives$4(param) {
  return param.directives;
}

function selectionSet(param) {
  return param.selectionSet;
}

var OperationDefinitionNode = {
  loc: loc$17,
  operation: operation$1,
  name: name$7,
  variableDefinitions: variableDefinitions,
  directives: directives$4,
  selectionSet: selectionSet
};

function loc$18(param) {
  return param.loc;
}

function name$8(param) {
  return param.name;
}

function variableDefinitions$1(param) {
  return param.variableDefinitions;
}

function typeCondition(param) {
  return param.typeCondition;
}

function directives$5(param) {
  return param.directives;
}

function selectionSet$1(param) {
  return param.selectionSet;
}

var FragmentDefinitionNode = {
  loc: loc$18,
  name: name$8,
  variableDefinitions: variableDefinitions$1,
  typeCondition: typeCondition,
  directives: directives$5,
  selectionSet: selectionSet$1
};

var ExecutableDefinitionNode = {};

function loc$19(param) {
  return param.loc;
}

function directives$6(param) {
  return param.directives;
}

function operationTypes(param) {
  return param.operationTypes;
}

var SchemaDefinitionNode = {
  loc: loc$19,
  directives: directives$6,
  operationTypes: operationTypes
};

function loc$20(param) {
  return param.loc;
}

function description$3(param) {
  return param.description;
}

function name$9(param) {
  return param.name;
}

function directives$7(param) {
  return param.directives;
}

var ScalarTypeDefinitionNode = {
  loc: loc$20,
  description: description$3,
  name: name$9,
  directives: directives$7
};

function loc$21(param) {
  return param.loc;
}

function description$4(param) {
  return param.description;
}

function name$10(param) {
  return param.name;
}

function interfaces(param) {
  return param.interfaces;
}

function directives$8(param) {
  return param.directives;
}

function fields(param) {
  return param.fields;
}

var ObjectTypeDefinitionNode = {
  loc: loc$21,
  description: description$4,
  name: name$10,
  interfaces: interfaces,
  directives: directives$8,
  fields: fields
};

function loc$22(param) {
  return param.loc;
}

function description$5(param) {
  return param.description;
}

function name$11(param) {
  return param.name;
}

function directives$9(param) {
  return param.directives;
}

function fields$1(param) {
  return param.fields;
}

var InterfaceTypeDefinitionNode = {
  loc: loc$22,
  description: description$5,
  name: name$11,
  directives: directives$9,
  fields: fields$1
};

function loc$23(param) {
  return param.loc;
}

function description$6(param) {
  return param.description;
}

function name$12(param) {
  return param.name;
}

function directives$10(param) {
  return param.directives;
}

function types(param) {
  return param.types;
}

var UnionTypeDefinitionNode = {
  loc: loc$23,
  description: description$6,
  name: name$12,
  directives: directives$10,
  types: types
};

function loc$24(param) {
  return param.loc;
}

function description$7(param) {
  return param.description;
}

function name$13(param) {
  return param.name;
}

function directives$11(param) {
  return param.directives;
}

function values(param) {
  return param.values;
}

var EnumTypeDefinitionNode = {
  loc: loc$24,
  description: description$7,
  name: name$13,
  directives: directives$11,
  values: values
};

function loc$25(param) {
  return param.loc;
}

function description$8(param) {
  return param.description;
}

function name$14(param) {
  return param.name;
}

function directives$12(param) {
  return param.directives;
}

function fields$2(param) {
  return param.fields;
}

var InputObjectTypeDefinitionNode = {
  loc: loc$25,
  description: description$8,
  name: name$14,
  directives: directives$12,
  fields: fields$2
};

var TypeDefinitionNode = {};

function loc$26(param) {
  return param.loc;
}

function description$9(param) {
  return param.description;
}

function name$15(param) {
  return param.name;
}

function $$arguments$2(param) {
  return param.arguments;
}

function repeatable(param) {
  return param.repeatable;
}

function locations(param) {
  return param.locations;
}

var DirectiveDefinitionNode = {
  loc: loc$26,
  description: description$9,
  name: name$15,
  $$arguments: $$arguments$2,
  repeatable: repeatable,
  locations: locations
};

var TypeSystemDefinitionNode = {};

function loc$27(param) {
  return param.loc;
}

function directives$13(param) {
  return param.directives;
}

function operationTypes$1(param) {
  return param.operationTypes;
}

var SchemaExtensionNode = {
  loc: loc$27,
  directives: directives$13,
  operationTypes: operationTypes$1
};

function loc$28(param) {
  return param.loc;
}

function name$16(param) {
  return param.name;
}

function directives$14(param) {
  return param.directives;
}

var ScalarTypeExtensionNode = {
  loc: loc$28,
  name: name$16,
  directives: directives$14
};

function loc$29(param) {
  return param.loc;
}

function name$17(param) {
  return param.name;
}

function interfaces$1(param) {
  return param.interfaces;
}

function directives$15(param) {
  return param.directives;
}

function fields$3(param) {
  return param.fields;
}

var ObjectTypeExtensionNode = {
  loc: loc$29,
  name: name$17,
  interfaces: interfaces$1,
  directives: directives$15,
  fields: fields$3
};

function loc$30(param) {
  return param.loc;
}

function name$18(param) {
  return param.name;
}

function directives$16(param) {
  return param.directives;
}

function fields$4(param) {
  return param.fields;
}

var InterfaceTypeExtensionNode = {
  loc: loc$30,
  name: name$18,
  directives: directives$16,
  fields: fields$4
};

function loc$31(param) {
  return param.loc;
}

function name$19(param) {
  return param.name;
}

function directives$17(param) {
  return param.directives;
}

function types$1(param) {
  return param.types;
}

var UnionTypeExtensionNode = {
  loc: loc$31,
  name: name$19,
  directives: directives$17,
  types: types$1
};

function loc$32(param) {
  return param.loc;
}

function name$20(param) {
  return param.name;
}

function directives$18(param) {
  return param.directives;
}

function values$1(param) {
  return param.values;
}

var EnumTypeExtensionNode = {
  loc: loc$32,
  name: name$20,
  directives: directives$18,
  values: values$1
};

function loc$33(param) {
  return param.loc;
}

function name$21(param) {
  return param.name;
}

function directives$19(param) {
  return param.directives;
}

function fields$5(param) {
  return param.fields;
}

var InputObjectTypeExtensionNode = {
  loc: loc$33,
  name: name$21,
  directives: directives$19,
  fields: fields$5
};

var TypeExtensionNode = {};

var TypeSystemExtensionNode = {};

var DefinitionNode = {};

var DocumentNode = {};

function addTypenameToDocument(prim) {
  return Graphql_facadeMjs.addTypenameToDocument(prim);
}

function addTypenameToFragment(prim) {
  return Graphql_facadeMjs.addTypenameToDocument(prim);
}

export {
  NameNode ,
  VariableNode ,
  IntValueNode ,
  FloatValueNode ,
  StringValueNode ,
  BooleanValueNode ,
  NullValueNode ,
  EnumValueNode ,
  ValueNode ,
  NamedTypeNode ,
  TypeNode ,
  ArgumentNode ,
  DirectiveNode ,
  VariableDefinitionNode ,
  SelectionSetNode ,
  OperationTypeDefinitionNode ,
  InputValueDefinitionNode ,
  FieldDefinitionNode ,
  EnumValueDefinitionNode ,
  OperationDefinitionNode ,
  FragmentDefinitionNode ,
  ExecutableDefinitionNode ,
  SchemaDefinitionNode ,
  ScalarTypeDefinitionNode ,
  ObjectTypeDefinitionNode ,
  InterfaceTypeDefinitionNode ,
  UnionTypeDefinitionNode ,
  EnumTypeDefinitionNode ,
  InputObjectTypeDefinitionNode ,
  TypeDefinitionNode ,
  DirectiveDefinitionNode ,
  TypeSystemDefinitionNode ,
  SchemaExtensionNode ,
  ScalarTypeExtensionNode ,
  ObjectTypeExtensionNode ,
  InterfaceTypeExtensionNode ,
  UnionTypeExtensionNode ,
  EnumTypeExtensionNode ,
  InputObjectTypeExtensionNode ,
  TypeExtensionNode ,
  TypeSystemExtensionNode ,
  DefinitionNode ,
  DocumentNode ,
  addTypenameToDocument ,
  addTypenameToFragment ,
}
/* ./graphql_facade.mjs Not a pure module */

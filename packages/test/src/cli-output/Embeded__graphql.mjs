// Generated by ReScript, PLEASE EDIT WITH CARE


var MissionInfo = {
  $$document: "\n      fragment MissionInfo on CapsuleMission {\n        flight\n        name\n        __typename\n      }\n    "
};

var Capsule = {
  $$document: "\n      query Capsule($id: ID!) {\n        capsule(id: $id) {\n          id\n          landings\n          missions {\n            ...MissionInfo\n            __typename\n          }\n          original_launch\n          reuse_count\n          status\n          type\n          __typename\n        }\n      }\n    "
};

var M1 = {
  MissionInfo: MissionInfo,
  Capsule: Capsule
};

export {
  M1 ,
}
/* No side effect */
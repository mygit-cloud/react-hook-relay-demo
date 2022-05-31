/**
 * @generated SignedSource<<defb87f33c5f3b9f84db1822bf1129c8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type ProjectListQuery$variables = {|
  id: string,
|};
export type ProjectListQuery$data = {|
  +project: ?{|
    +id: string,
    +leader: string,
  |},
|};
export type ProjectListQuery = {|
  variables: ProjectListQuery$variables,
  response: ProjectListQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Project",
    "kind": "LinkedField",
    "name": "project",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "leader",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProjectListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "adc9c7b02b17450b0a60a0ae9101725f",
    "id": null,
    "metadata": {},
    "name": "ProjectListQuery",
    "operationKind": "query",
    "text": "query ProjectListQuery(\n  $id: ID!\n) {\n  project(id: $id) {\n    id\n    leader\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "7dcec76194234da3bf83a5e3152e2750";

module.exports = ((node/*: any*/)/*: Query<
  ProjectListQuery$variables,
  ProjectListQuery$data,
>*/);

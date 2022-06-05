/**
 * @generated SignedSource<<fecf33620346da63c473ffa3b40b1e92>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type createProjectInput = {|
  content: string,
  leader: string,
  startDate: string,
  engineer?: ?string,
  clientMutationId?: ?string,
|};
export type CreateProjectMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: createProjectInput,
|};
export type CreateProjectMutation$data = {|
  +createProject: ?{|
    +project: ?{|
      +id: string,
      +leader: string,
    |},
  |},
|};
export type CreateProjectMutation = {|
  variables: CreateProjectMutation$variables,
  response: CreateProjectMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "createProjectPayload",
        "kind": "LinkedField",
        "name": "createProject",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "createProjectPayload",
        "kind": "LinkedField",
        "name": "createProject",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "project",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "ProjectEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "408c98992c56cbd96ed58e5ed94da8ac",
    "id": null,
    "metadata": {},
    "name": "CreateProjectMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProjectMutation(\n  $input: createProjectInput!\n) {\n  createProject(input: $input) {\n    project {\n      id\n      leader\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "92d633ea9c0fc786b184fe7f55cd3c30";

module.exports = ((node/*: any*/)/*: Mutation<
  CreateProjectMutation$variables,
  CreateProjectMutation$data,
>*/);

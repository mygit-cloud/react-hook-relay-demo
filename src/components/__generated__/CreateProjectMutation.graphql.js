/**
 * @generated SignedSource<<b8143e2b3e16591979de876d98e6d2cd>>
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
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "createProjectPayload",
    "kind": "LinkedField",
    "name": "createProject",
    "plural": false,
    "selections": [
      {
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
    "name": "CreateProjectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateProjectMutation",
    "selections": (v1/*: any*/)
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

(node/*: any*/).hash = "fdf00b85d1bd299b98a6492d70ea13bf";

module.exports = ((node/*: any*/)/*: Mutation<
  CreateProjectMutation$variables,
  CreateProjectMutation$data,
>*/);

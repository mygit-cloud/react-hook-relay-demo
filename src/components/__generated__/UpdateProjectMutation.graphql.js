/**
 * @generated SignedSource<<90d57ce7f1ae5e09ef628d3af5583dd8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type updateProjectInput = {|
  id: string,
  content?: ?string,
  leader?: ?string,
  startDate?: ?string,
  engineer?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateProjectMutation$variables = {|
  input: updateProjectInput,
|};
export type UpdateProjectMutation$data = {|
  +updateProject: ?{|
    +project: ?{|
      +id: string,
      +leader: string,
    |},
  |},
|};
export type UpdateProjectMutation = {|
  variables: UpdateProjectMutation$variables,
  response: UpdateProjectMutation$data,
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
    "concreteType": "updateProjectPayload",
    "kind": "LinkedField",
    "name": "updateProject",
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
    "name": "UpdateProjectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateProjectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "de60dea949ce9874270cc83e0b60ca1b",
    "id": null,
    "metadata": {},
    "name": "UpdateProjectMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProjectMutation(\n  $input: updateProjectInput!\n) {\n  updateProject(input: $input) {\n    project {\n      id\n      leader\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "49f3cd51b2da46a34cd668f02709e6f0";

module.exports = ((node/*: any*/)/*: Mutation<
  UpdateProjectMutation$variables,
  UpdateProjectMutation$data,
>*/);

/**
 * @generated SignedSource<<09c2cad0d845eb1a7a77e7d9d33da60d>>
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
      +content: string,
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
            "name": "content",
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
    "cacheID": "903b06f81ff76cbf70d2e8cfe14aaa7e",
    "id": null,
    "metadata": {},
    "name": "CreateProjectMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProjectMutation(\n  $input: createProjectInput!\n) {\n  createProject(input: $input) {\n    project {\n      id\n      content\n      leader\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "12f201ea3a2b67d39e83bc53cca1b78a";

module.exports = ((node/*: any*/)/*: Mutation<
  CreateProjectMutation$variables,
  CreateProjectMutation$data,
>*/);

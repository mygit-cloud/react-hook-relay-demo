/**
 * @generated SignedSource<<5d127c3dce34546dedec628631e56023>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type deleteProjectInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteProjectMutation$variables = {|
  input: deleteProjectInput,
|};
export type DeleteProjectMutation$data = {|
  +deleteProject: ?{|
    +project: ?{|
      +id: string,
    |},
  |},
|};
export type DeleteProjectMutation = {|
  variables: DeleteProjectMutation$variables,
  response: DeleteProjectMutation$data,
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "deleteProjectPayload",
        "kind": "LinkedField",
        "name": "deleteProject",
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
              (v2/*: any*/)
            ],
            "storageKey": null
          }
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
    "name": "DeleteProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "deleteProjectPayload",
        "kind": "LinkedField",
        "name": "deleteProject",
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteRecord",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2b9e98cde4f1f49cd17e19eac11d6e4f",
    "id": null,
    "metadata": {},
    "name": "DeleteProjectMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteProjectMutation(\n  $input: deleteProjectInput!\n) {\n  deleteProject(input: $input) {\n    project {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "debc48d2eae4c8bf89c471a8e78dc48b";

module.exports = ((node/*: any*/)/*: Mutation<
  DeleteProjectMutation$variables,
  DeleteProjectMutation$data,
>*/);

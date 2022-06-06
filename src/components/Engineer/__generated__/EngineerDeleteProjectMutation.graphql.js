/**
 * @generated SignedSource<<55199fe156d0fcf5172db14234f65233>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
type EngineerProject_proj$fragmentType = any;
export type updateEngineerInput = {|
  id: string,
  name?: ?string,
  department?: ?string,
  projects?: ?$ReadOnlyArray<?string>,
  clientMutationId?: ?string,
|};
export type EngineerDeleteProjectMutation$variables = {|
  input: updateEngineerInput,
|};
export type EngineerDeleteProjectMutation$data = {|
  +updateEngineer: ?{|
    +engineer: ?{|
      +id: string,
      +name: string,
      +projects: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +$fragmentSpreads: EngineerProject_proj$fragmentType,
          |},
        |}>,
      |},
    |},
  |},
|};
export type EngineerDeleteProjectMutation = {|
  variables: EngineerDeleteProjectMutation$variables,
  response: EngineerDeleteProjectMutation$data,
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EngineerDeleteProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateEngineerPayload",
        "kind": "LinkedField",
        "name": "updateEngineer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Engineer",
            "kind": "LinkedField",
            "name": "engineer",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ProjectConnection",
                "kind": "LinkedField",
                "name": "projects",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProjectEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Project",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "EngineerProject_proj"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
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
    "name": "EngineerDeleteProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "updateEngineerPayload",
        "kind": "LinkedField",
        "name": "updateEngineer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Engineer",
            "kind": "LinkedField",
            "name": "engineer",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ProjectConnection",
                "kind": "LinkedField",
                "name": "projects",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProjectEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Project",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "leader",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "content",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
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
    "cacheID": "35aca975e885b4f05a44a726d26a82b8",
    "id": null,
    "metadata": {},
    "name": "EngineerDeleteProjectMutation",
    "operationKind": "mutation",
    "text": "mutation EngineerDeleteProjectMutation(\n  $input: updateEngineerInput!\n) {\n  updateEngineer(input: $input) {\n    engineer {\n      id\n      name\n      projects {\n        edges {\n          node {\n            id\n            ...EngineerProject_proj\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment EngineerProject_proj on Project {\n  id\n  leader\n  content\n}\n"
  }
};
})();

(node/*: any*/).hash = "15eb83cfa91b7ebf5210b41ff01b2241";

module.exports = ((node/*: any*/)/*: Mutation<
  EngineerDeleteProjectMutation$variables,
  EngineerDeleteProjectMutation$data,
>*/);

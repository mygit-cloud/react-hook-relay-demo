/**
 * @generated SignedSource<<cecf238254847a26afbe683a101ec115>>
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
export type EngineerChangeProjectMutation$variables = {|
  input: updateEngineerInput,
|};
export type EngineerChangeProjectMutation$data = {|
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
export type EngineerChangeProjectMutation = {|
  variables: EngineerChangeProjectMutation$variables,
  response: EngineerChangeProjectMutation$data,
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
    "name": "EngineerChangeProjectMutation",
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
    "name": "EngineerChangeProjectMutation",
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
    "cacheID": "c52219191e627369c910f19de209ae6a",
    "id": null,
    "metadata": {},
    "name": "EngineerChangeProjectMutation",
    "operationKind": "mutation",
    "text": "mutation EngineerChangeProjectMutation(\n  $input: updateEngineerInput!\n) {\n  updateEngineer(input: $input) {\n    engineer {\n      id\n      name\n      projects {\n        edges {\n          node {\n            id\n            ...EngineerProject_proj\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment EngineerProject_proj on Project {\n  id\n  leader\n  content\n}\n"
  }
};
})();

(node/*: any*/).hash = "7708bf114d3d4f0d60f96813449a3942";

module.exports = ((node/*: any*/)/*: Mutation<
  EngineerChangeProjectMutation$variables,
  EngineerChangeProjectMutation$data,
>*/);

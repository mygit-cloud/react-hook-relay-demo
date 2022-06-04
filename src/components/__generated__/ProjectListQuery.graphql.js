/**
 * @generated SignedSource<<8771203325e1c30c3a0a9af77ad517fb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type ProjectList_projects$fragmentType = any;
export type ProjectListQuery$variables = {||};
export type ProjectListQuery$data = {|
  +projects: ?{|
    +$fragmentSpreads: ProjectList_projects$fragmentType,
  |},
|};
export type ProjectListQuery = {|
  variables: ProjectListQuery$variables,
  response: ProjectListQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ProjectConnection",
        "kind": "LinkedField",
        "name": "projects",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProjectList_projects"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProjectListQuery",
    "selections": [
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8fe156285e695f9c029907d0b62bcead",
    "id": null,
    "metadata": {},
    "name": "ProjectListQuery",
    "operationKind": "query",
    "text": "query ProjectListQuery {\n  projects {\n    ...ProjectList_projects\n  }\n}\n\nfragment ProjectList_projects on ProjectConnection {\n  edges {\n    node {\n      id\n      ...Project_proj\n    }\n  }\n}\n\nfragment Project_proj on Project {\n  id\n  leader\n}\n"
  }
};

(node/*: any*/).hash = "f45f80388e3268d96c20a9895dae994d";

module.exports = ((node/*: any*/)/*: Query<
  ProjectListQuery$variables,
  ProjectListQuery$data,
>*/);

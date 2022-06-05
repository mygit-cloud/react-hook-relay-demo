/**
 * @generated SignedSource<<512e3903bb0f61857b7a662575615e32>>
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
  +$fragmentSpreads: ProjectList_projects$fragmentType,
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
        "args": null,
        "kind": "FragmentSpread",
        "name": "ProjectList_projects"
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
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 3
          }
        ],
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
        "storageKey": "projects(first:3)"
      }
    ]
  },
  "params": {
    "cacheID": "48fca8dbb781be7d388752088f342396",
    "id": null,
    "metadata": {},
    "name": "ProjectListQuery",
    "operationKind": "query",
    "text": "query ProjectListQuery {\n  ...ProjectList_projects\n}\n\nfragment ProjectList_projects on Query {\n  projects(first: 3) {\n    edges {\n      node {\n        id\n        ...Project_proj\n      }\n    }\n  }\n}\n\nfragment Project_proj on Project {\n  id\n  leader\n}\n"
  }
};

(node/*: any*/).hash = "af559d8fd74879e931e194423638e326";

module.exports = ((node/*: any*/)/*: Query<
  ProjectListQuery$variables,
  ProjectListQuery$data,
>*/);

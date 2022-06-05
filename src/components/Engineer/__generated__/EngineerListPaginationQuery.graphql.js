/**
 * @generated SignedSource<<58aa82e0c44a851aaac713c7df1e0a5a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
type EngineerList_engineers$fragmentType = any;
export type EngineerListPaginationQuery$variables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type EngineerListPaginationQuery$data = {|
  +$fragmentSpreads: EngineerList_engineers$fragmentType,
|};
export type EngineerListPaginationQuery = {|
  variables: EngineerListPaginationQuery$variables,
  response: EngineerListPaginationQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EngineerListPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EngineerList_engineers"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EngineerListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EngineerConnection",
        "kind": "LinkedField",
        "name": "engineers",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EngineerEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Engineer",
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
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "department",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "EngineerPageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "EngineerList_engineers_engineers",
        "kind": "LinkedHandle",
        "name": "engineers"
      }
    ]
  },
  "params": {
    "cacheID": "d39b586aa4b95db0d0bf62ffa88fbd1d",
    "id": null,
    "metadata": {},
    "name": "EngineerListPaginationQuery",
    "operationKind": "query",
    "text": "query EngineerListPaginationQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...EngineerList_engineers\n}\n\nfragment EngineerList_engineers on Query {\n  engineers(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...Engineer_engi\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Engineer_engi on Engineer {\n  id\n  name\n  department\n}\n"
  }
};
})();

(node/*: any*/).hash = "2eac250871aad3affca1a82269747822";

module.exports = ((node/*: any*/)/*: Query<
  EngineerListPaginationQuery$variables,
  EngineerListPaginationQuery$data,
>*/);

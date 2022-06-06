/**
 * @generated SignedSource<<775a53399c2924b04bc00772e3668c08>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type EngineerList_engineers$fragmentType = any;
type ProjectList_projects$fragmentType = any;
export type AppPageQuery$variables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type AppPageQuery$data = {|
  +$fragmentSpreads: ProjectList_projects$fragmentType & EngineerList_engineers$fragmentType,
|};
export type AppPageQuery = {|
  variables: AppPageQuery$variables,
  response: AppPageQuery$data,
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
  "name": "leader",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v6 = [
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
v7 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ProjectList_projects"
      },
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
    "name": "AppPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ProjectPageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "ProjectList_projects_projects",
        "kind": "LinkedHandle",
        "name": "projects"
      },
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
                  (v2/*: any*/),
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
                              (v3/*: any*/),
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
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
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
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          (v7/*: any*/)
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
    "cacheID": "3be2c2ff57102b7a7735432aa50f7a6e",
    "id": null,
    "metadata": {},
    "name": "AppPageQuery",
    "operationKind": "query",
    "text": "query AppPageQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...ProjectList_projects\n  ...EngineerList_engineers\n}\n\nfragment EngineerList_engineers on Query {\n  engineers(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...Engineer_engi\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment EngineerProject_proj on Project {\n  id\n  leader\n  content\n}\n\nfragment Engineer_engi on Engineer {\n  id\n  name\n  department\n  projects {\n    edges {\n      node {\n        id\n        ...EngineerProject_proj\n      }\n    }\n  }\n}\n\nfragment ProjectList_projects on Query {\n  projects(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...Project_proj\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Project_proj on Project {\n  id\n  leader\n}\n"
  }
};
})();

(node/*: any*/).hash = "b44810767aba569bd87fe4a31aa51ae4";

module.exports = ((node/*: any*/)/*: Query<
  AppPageQuery$variables,
  AppPageQuery$data,
>*/);

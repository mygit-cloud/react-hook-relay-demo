/**
 * @generated SignedSource<<86c4b34c13b28f2f5510e2119e888d59>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type ProjectListQuery$variables = {||};
export type ProjectListQuery$data = {|
  +projects: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +leader: string,
      |},
    |}>,
  |},
|};
export type ProjectListQuery = {|
  variables: ProjectListQuery$variables,
  response: ProjectListQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProjectListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b8ec05c2fae0dfa2383e64f39f91416c",
    "id": null,
    "metadata": {},
    "name": "ProjectListQuery",
    "operationKind": "query",
    "text": "query ProjectListQuery {\n  projects {\n    edges {\n      node {\n        id\n        leader\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "736a6277c95baf7ff9e468b5e311ac51";

module.exports = ((node/*: any*/)/*: Query<
  ProjectListQuery$variables,
  ProjectListQuery$data,
>*/);

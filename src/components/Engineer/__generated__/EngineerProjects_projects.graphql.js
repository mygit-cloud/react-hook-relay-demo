/**
 * @generated SignedSource<<4c5d2d45d9b523250b98d8eb93a45777>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
type EngineerProject_proj$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type EngineerProjects_projects$fragmentType: FragmentType;
type EngineerProjectsPaginationQuery$variables = any;
export type EngineerProjects_projects$data = {|
  +projects: ?{|
    +__id: string,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentSpreads: EngineerProject_proj$fragmentType,
      |},
    |}>,
  |},
  +id: string,
  +$fragmentType: EngineerProjects_projects$fragmentType,
|};
export type EngineerProjects_projects$key = {
  +$data?: EngineerProjects_projects$data,
  +$fragmentSpreads: EngineerProjects_projects$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = [
  "projects"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./EngineerProjectsPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "EngineerProjects_projects",
  "selections": [
    {
      "alias": "projects",
      "args": null,
      "concreteType": "ProjectConnection",
      "kind": "LinkedField",
      "name": "__EngineerProjects_projects_projects_connection",
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
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "EngineerProject_proj"
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
          "concreteType": "ProjectPageInfo",
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
    (v1/*: any*/)
  ],
  "type": "Engineer",
  "abstractKey": null
};
})();

(node/*: any*/).hash = "be841c5b6a23daa415b3b4a7a100f97c";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  EngineerProjects_projects$fragmentType,
  EngineerProjects_projects$data,
  EngineerProjectsPaginationQuery$variables,
>*/);

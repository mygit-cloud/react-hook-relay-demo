/**
 * @generated SignedSource<<bea1debe8bc26d10fc2e9d928c64e4d6>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type Project_proj$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type ProjectList_projects$fragmentType: FragmentType;
export type ProjectList_projects$data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentSpreads: Project_proj$fragmentType,
    |},
  |}>,
  +$fragmentType: ProjectList_projects$fragmentType,
|};
export type ProjectList_projects$key = {
  +$data?: ProjectList_projects$data,
  +$fragmentSpreads: ProjectList_projects$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProjectList_projects",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "Project_proj"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ProjectConnection",
  "abstractKey": null
};

(node/*: any*/).hash = "7f662e79ae34758cdc6d48f71ecb1a0e";

module.exports = ((node/*: any*/)/*: Fragment<
  ProjectList_projects$fragmentType,
  ProjectList_projects$data,
>*/);

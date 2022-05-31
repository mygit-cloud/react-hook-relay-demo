/**
 * @generated SignedSource<<ba02f3e3f9bba4b1e0a6f916b357b91c>>
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

(node/*: any*/).hash = "b7bef462d3e444eb53696eea579b6c55";

module.exports = ((node/*: any*/)/*: Fragment<
  ProjectList_projects$fragmentType,
  ProjectList_projects$data,
>*/);

/**
 * @generated SignedSource<<23853aebc223f3a3d4890c2d0d7d4da6>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type EngineerProject_proj$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type Engineer_engi$fragmentType: FragmentType;
export type Engineer_engi$data = {|
  +id: string,
  +name: string,
  +department: string,
  +projects: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentSpreads: EngineerProject_proj$fragmentType,
      |},
    |}>,
  |},
  +$fragmentType: Engineer_engi$fragmentType,
|};
export type Engineer_engi$key = {
  +$data?: Engineer_engi$data,
  +$fragmentSpreads: Engineer_engi$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Engineer_engi",
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
  "type": "Engineer",
  "abstractKey": null
};

(node/*: any*/).hash = "5ceb712412fcc724d96e5fd225915a03";

module.exports = ((node/*: any*/)/*: Fragment<
  Engineer_engi$fragmentType,
  Engineer_engi$data,
>*/);

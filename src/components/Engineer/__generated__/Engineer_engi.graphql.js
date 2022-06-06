/**
 * @generated SignedSource<<01e6afc07fdd469c7415d3d738fc97cc>>
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
        +id: string,
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

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Engineer_engi",
  "selections": [
    (v0/*: any*/),
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
                (v0/*: any*/),
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
})();

(node/*: any*/).hash = "12cc48554ffaec9deeab00817703c211";

module.exports = ((node/*: any*/)/*: Fragment<
  Engineer_engi$fragmentType,
  Engineer_engi$data,
>*/);

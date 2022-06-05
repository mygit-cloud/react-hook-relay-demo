/**
 * @generated SignedSource<<a3344fff8427f28238f2c0af7d39e01d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type Engineer_engi$fragmentType: FragmentType;
export type Engineer_engi$data = {|
  +id: string,
  +name: string,
  +department: string,
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
    }
  ],
  "type": "Engineer",
  "abstractKey": null
};

(node/*: any*/).hash = "d99fd25718d56bd4d0377d8b2b750921";

module.exports = ((node/*: any*/)/*: Fragment<
  Engineer_engi$fragmentType,
  Engineer_engi$data,
>*/);

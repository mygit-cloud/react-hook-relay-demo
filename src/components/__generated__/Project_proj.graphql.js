/**
 * @generated SignedSource<<b08dc01af9dd6ae4ef440893f9da6542>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type Project_proj$fragmentType: FragmentType;
export type Project_proj$data = {|
  +id: string,
  +leader: string,
  +$fragmentType: Project_proj$fragmentType,
|};
export type Project_proj$key = {
  +$data?: Project_proj$data,
  +$fragmentSpreads: Project_proj$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Project_proj",
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
  "type": "Project",
  "abstractKey": null
};

(node/*: any*/).hash = "50d38eb86488ec048b4bd138ee5b5508";

module.exports = ((node/*: any*/)/*: Fragment<
  Project_proj$fragmentType,
  Project_proj$data,
>*/);

/**
 * @generated SignedSource<<e630f1aa819f1cdad65685580ff25c2d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type EngineerProject_proj$fragmentType: FragmentType;
export type EngineerProject_proj$data = {|
  +id: string,
  +leader: string,
  +content: string,
  +$fragmentType: EngineerProject_proj$fragmentType,
|};
export type EngineerProject_proj$key = {
  +$data?: EngineerProject_proj$data,
  +$fragmentSpreads: EngineerProject_proj$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EngineerProject_proj",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "Project",
  "abstractKey": null
};

(node/*: any*/).hash = "23a01302cca3490573d85b0ca27ce235";

module.exports = ((node/*: any*/)/*: Fragment<
  EngineerProject_proj$fragmentType,
  EngineerProject_proj$data,
>*/);

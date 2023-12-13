/**
 * NOTE
 *
 * The following definitions are copied from ajv library
 *
 * https://ajv.js.org/
 * https://www.npmjs.com/package/ajv
 *
 * path: 'node-modules/ajv/dist/compile/rules'
 */

declare const _jsonTypes: readonly [
  "string",
  "number",
  "integer",
  "boolean",
  "null",
  "object",
  "array"
];
export type JSONType = (typeof _jsonTypes)[number];

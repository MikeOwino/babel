/* @minVersion 7.13.10 */
/* @onlyBabel7 */

export default function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

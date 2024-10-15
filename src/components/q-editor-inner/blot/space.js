import Quill from 'quill';
import { BlotName } from './type';

const Inline = Quill.import('blots/inline');

export default class SpaceBlot extends Inline {
  static blotName = BlotName.ngr_space;

  static tagName = 'span';

  static create(value) {
    console.info('🚀 ~ file:space method:create line:11 -----', value);
    const node = super.create();
    // node?.', 'false');
    node.innerHTML = `<span> </span>`;
    return node;
  }

  static formats(node) {
    // const link = node.getAttribute('href');
    const { type, topicname } = node.dataset;

    return {
      type,
      topicName: topicname,
    };
  }
}

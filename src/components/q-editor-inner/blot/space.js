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
    node?.setAttribute('data-type', 'topic');
    node?.setAttribute('data-topicname', 'space');
    node.setAttribute('style', 'color: rgb(71, 163, 230)'); // 为了兼容营地的样式格式, ngr这边通过class加权覆盖
    node.textContent = '#';
    console.info('🚀 ~ file:space method:create line:14 -----11', node);
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

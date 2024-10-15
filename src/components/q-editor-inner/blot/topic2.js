import Quill from 'quill';

import { BlotName } from './type';

const Inline = Quill.import('blots/inline');
export default class TopicBlot2 extends Inline {
  static blotName = BlotName.ngr_topic2;

  static tagName = 'span';

  static className = 'ngr-topic2';

  static create(value) {
    const node = super.create(value.topicName);

    this.init({
      node,
      value,
    });

    return node;
  }

  // @ts-ignore
  static init(data) {
    const {
      node,
      value: { topicName },
    } = data;
    node?.setAttribute('contenteditable', 'false');
    node.setAttribute('data-type', 'topic');
    node.setAttribute('data-topicname', topicName);
    node.setAttribute('style', 'color: rgb(71, 163, 230)');
    node.innerHTML = `<span>#${topicName}</span>`;
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

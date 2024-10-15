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
  static init({ node, value }) {
    const { topicName } = value;
    // node?.setAttribute('contenteditable', 'false');
    node?.setAttribute('data-type', 'topic');
    node?.setAttribute('data-topicname', topicName);
    node.setAttribute('style', 'color: rgb(71, 163, 230)'); // 为了兼容营地的样式格式, ngr这边通过class加权覆盖

    node.innerHTML = `<span> #${topicName} </span>`; // 套个span也是为了和营地结构一致
    // node.textContent = `<span> #${topicName} </span>`; // 套个span也是为了和营地结构一致
  }

  static sanitize(link) {
    if (!link) {
      return '';
    }

    if (!/^https?:\/\//i.test(link)) {
      return `https://${link}`;
    }

    return link;
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

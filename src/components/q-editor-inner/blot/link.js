import Quill from 'quill';
import { BlotName } from './type';

const Inline = Quill.import('blots/inline');

export default class LinkBlot extends Inline {
  static blotName = `${BlotName.ngr_link}`;

  static tagName = 'a';

  static create(value) {
    const node = super.create();
    node.setAttribute('href', value);
    node.setAttribute('target', '_blank');
    node.innerHTML = 'hhh';
    return node;
  }

  static formats(node) {
    return node.getAttribute('href');
  }
}

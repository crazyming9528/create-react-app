import Quill from 'quill';

import { BlotName } from './blot';

export default class QuillHelper {
  quill;

  constructor(quil) {
    this.quill = quil;
  }

  /**
   * 获取插入位置
   * @returns
   */
  getInsertIndex() {
    const range = this.quill?.getSelection();

    if (range) {
      return range ? range.index : 0;
    }

    // const lastRangeIndex = this.getLastRangeIndex();
    //
    // if (isNumber(lastRangeIndex)) {
    //   debugger;
    //   return lastRangeIndex;
    // }
    const contentLength = this.quill?.getLength();
    // 文档是空的，getLength 方法也会返回 1
    return contentLength - 1;
  }

  /**
   * 获取上一次光标丢失位置
   * @returns
   */
  getLastRangeIndex() {
    // @ts-ignore
    return this.quill?.oldRange?.index;
  }

  /**
   * 不会触发focus的 setSelection
   */
  setSelectionWithoutFocus(index, length) {
    this.quill.oldRange = {
      index,
      length: length || 0,
    };

    this.scrollLastInsertIntoView();
  }

  /**
   * 滚动到上一次插入的位置
   * setSelection 本身会自动触发 scrollSelectionIntoView
   * 但是会触发 focus，本需求要求不能触发focus 因此 hack 处理下
   */
  scrollLastInsertIntoView() {
    const lastInsertIndex = this.getLastRangeIndex();

    // @ts-ignore
    this.quill.selection.lastRange = {
      index: lastInsertIndex,
      length: 0,
    };

    this.quill?.scrollSelectionIntoView();
  }

  insertTopic(topic) {
    if (!topic.topicName) return;
    this.quill.focus();
    // const index = this.getInsertIndex();
    const { index } = this.quill.getSelection(true);
    console.info(
      '🚀 ~ file:quill-helper method:insertTopic line:73 -----',
      index
    );
    // this.quill.insertText(index, '');
    // const insertTopicIndex = index + 1;
    this.quill?.insertEmbed(
      index,
      BlotName.NGR_TOPIC,
      {
        topicName: topic.topicName,
        topicId: topic.topicId,
      },
      Quill.sources.USER
    );
    const topicNameLength = topic.topicName?.length || 0;
    const next = index + topicNameLength + 3; // 2: #号占一个
    // console.info('🚀 ~ file:quill-helper method:insertTopic line:82 -----', this.quill.getLength());
    // console.info('🚀 ~ file:quill-helper method:insertTopic line:83 -----', next);
    this.quill.setSelection(next, Quill.sources.SILENT); // 将光标移动到空格后
    // this.quill?.blur();
    this.quill.focus();
    setTimeout(() => {
      const { index: index_ } = this.quill.getSelection(true);
      console.info(
        '🚀 ~ file:quill-helper method:insertTopic2 line:73 -----',
        index_
      );
    }, 1000);
  }

  insertT() {
    const { index } = this.quill.getSelection(true);
    console.info('🚀 ~ file:quill-helper method:focus line:118 -----', index);
    this.quill.insertText(index, 'hello', Quill.sources.SILENT);
    // this.quill.insertEmbed(index, BlotName.NGR_SPACE, {}, Quill.sources.SILENT);
    this.setSelectionWithoutFocus(index + 1);
  }

  insertS() {
    const { index } = this.quill.getSelection(true);
    this.quill.insertEmbed(index, BlotName.ngr_space, {}, Quill.sources.SILENT);
    this.setSelectionWithoutFocus(index + 1);
  }

  focus() {
    const { index } = this.quill.getSelection(true);
    // if (index === 0) {
    //   this.quill?.insertText(index, '\n', Quill.sources.USER);
    //   index = index + 1;
    // }
    console.info('🚀 ~ file:quill-helper method:focus line:118 -----', index);
    // this.quill.insertEmbed(index, BlotName.NGR_SPACE, {}, Quill.sources.SILENT);
    this.setSelectionWithoutFocus(index + 1);
  }

  insertSpace(index) {
    this.quill.insertEmbed(index, BlotName.ngr_space, {}, Quill.sources.SILENT);
  }

  insertTopic2({ topicId, topicName }) {
    if (!topicName) return;
    const { index } = this.quill.getSelection(true);
    this.insertSpace(index);
    const topicIndex = index + 1;
    this.quill.setSelection(topicIndex, Quill.sources.SILENT); // 将光标移动到空格后
    this.quill?.insertEmbed(
      topicIndex,
      BlotName.ngr_topic2,
      {
        topicName,
        topicId,
      },
      Quill.sources.SILENT
    );
    const topicNameLength = topicName?.length || 0;
    const next = topicIndex + topicNameLength + 1; //  #号占一个
    // this.quill.insertText(next + 1, 'hello', Quill.sources.USER);
    // this.quill.setSelection(next + 1, Quill.sources.SILENT); // 将光标移动到空格后
    this.insertSpace(next);
    this.quill.setSelection(next + 1, Quill.sources.SILENT); // 将光标移动到空格后
  }
}

import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { initEditor } from './init';
import QuillHelper from './quill-helper';
import 'quill/dist/quill.snow.css';
import './style.scss';
import styles from './style.module.scss';
import { BlotName } from './blot';

export default function QEditorInner() {
  const editorContainerRef = useRef(null);
  const quillHelperRef = useRef(null);
  useEffect(() => {
    if (editorContainerRef.current) {
      const quill = initEditor({
        selector: editorContainerRef.current,
        formats: [BlotName.ngr_space, BlotName.ngr_topic2],
        placeholder: '说说此刻的想法',
        blotLimit: {},
        maxLength: 1000,
      });
      quillHelperRef.current = new QuillHelper(quill);
    }
  }, []);

  return (
    <>
      <div className={classNames(styles.toolsContainer)}>
        <button
          type="button"
          onClick={() => {
            const qe = quillHelperRef.current;
            console.log(qe);
          }}
        >
          qe实例
        </button>
        <button
          type="button"
          onClick={() => {
            const qe = quillHelperRef.current;
            qe.insertTopic2({
              topicName: '测试',
              topicId: 123,
            });
          }}
        >
          插入话题
        </button>
        <button
          type="button"
          onClick={() => {
            const qe = quillHelperRef.current;
            qe.insertT();
          }}
        >
          插入文本
        </button>
        <button
          type="button"
          onClick={() => {
            const qe = quillHelperRef.current;
            qe.insertS();
          }}
        >
          插入空格
        </button>
        <button type="button">打印</button>
      </div>
      <div
        onChange={(index) => {
          console.log(index);
        }}
        className={classNames(styles.editorContainer, 'ngr-editor')}
        ref={editorContainerRef}
        onFocus={() => {
          console.info('🚀 ~ file:index method: line:24 -----');
        }}
      />
    </>
  );
}

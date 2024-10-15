import { useEffect, useState } from 'react';
import classNames from 'classnames';
import QEditorInner from '../../components/q-editor-inner';

import styles from './style.module.scss';

export default function QuilljsPage() {
  const [hello, setHello] = useState('Hello World');

  useEffect(() => {
    setTimeout(() => {
      setHello('quilljs 富文本编辑器');
    }, 100);
  }, []);

  return (
    <div className={classNames(styles.pageWrapper)}>
      <div className={classNames(styles.title)}> {hello}</div>
      <QEditorInner />
    </div>
  );
}

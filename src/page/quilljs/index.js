import { useEffect, useState } from "react";
import  styles from "./style.module.scss";
import classNames from 'classnames';
import { QEditorInner } from '../../components/q-editor-inner';

export const  QuilljsPage = () => {
    const [hello, setHello] = useState('Hello World')
    
    useEffect(() => {
        setTimeout(() => {
            setHello('quilljs 富文本编辑器')
        }, 100);
    }, []);
    console.info('🚀 ~ file:index method:QuilljsPage line:5 -----',)
    return <div className={classNames(styles.pageWrapper)}>
        {hello}
        <QEditorInner></QEditorInner>
    </div>
    
    
}

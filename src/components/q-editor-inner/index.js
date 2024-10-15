import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { initEditor } from './init';
import { QuillHelper } from "./quill-helper";
import 'quill/dist/quill.snow.css';
import './style.scss';


import { BlotName } from "./blot";

export const QEditorInner = () => {
    const editorContainerRef = useRef(null);
    const quillHelperRef = useRef(null);
    useEffect(() => {
        if (editorContainerRef.current){
            const quill = initEditor({
                selector: editorContainerRef.current,
                formats: [BlotName.ngr_link, BlotName.ngr_topic, BlotName.ngr_space, BlotName.ngr_topic2],
                placeholder: '说说此刻的想法',
                blotLimit: {},
                maxLength: 1000,
            });
            quillHelperRef.current = new QuillHelper(quill);
        }
    }, []);
    
    return <div
        onChange={(index) => {
            console.log(index);
        }}
        className={classNames(styles.editorContainer, 'ngr-editor')}
        ref={editorContainerRef}
        onFocus={() => {
            console.info('🚀 ~ file:index method: line:24 -----');
        }}
    ></div>
    
}
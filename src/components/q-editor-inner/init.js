import Quill from 'quill';

import LinkBlot from './blot/link';
import TopicBlot2 from './blot/topic2';
import SpaceBlot from './blot/space';

export function initEditor({ selector, formats, placeholder }) {
  if (!selector) {
    throw new Error('selector is required');
  }

  if (!formats?.length) {
    throw new Error('formats is required');
  }

  // 注册blots
  // Quill.register(TopicBlot);
  Quill.register(TopicBlot2);
  Quill.register(LinkBlot);
  Quill.register(SpaceBlot);

  // 注册modules
  // Quill.register('modules/core', Core);
  // Quill.register('modules/magicUrl', MagicUrl);
  // Quill.register('modules/imageUpload', ImageUpload);
  // Quill.register('modules/container', Container);
  // Quill.register('modules/eventCenter', EventCenter);



  return new Quill(selector, {
    modules: {
      toolbar: false,
    },
    theme: 'bubble',
    formats: formats || [],
    placeholder: placeholder || '',
  });
}

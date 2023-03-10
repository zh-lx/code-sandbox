import {
  HtmlTemplate,
  JavascriptTemplate,
  ReactTemplate,
  TypescriptTemplate,
  Vue3Template,
} from '@/constant/templates';
export class File {
  filename: string;
  code: string;
  hidden: boolean;
  compiled = {
    js: '',
    css: '',
  };

  constructor(filename: string, code = '', hidden = false) {
    this.filename = filename;
    this.code = code;
    this.hidden = hidden;
  }
}

export const getTemplate = (appType: string = 'vue3') => {
  if (appType === 'vue3' || appType === 'vue') {
    return Vue3Template;
  } else if (appType === 'react') {
    return ReactTemplate;
  } else if (appType === 'html') {
    return HtmlTemplate;
  } else if (appType === 'javascript') {
    return JavascriptTemplate;
  } else {
    return TypescriptTemplate;
  }
};

export const getFileExtraName = (filename: string) => {
  const segments = filename.split('.');
  return segments[segments.length - 1];
};

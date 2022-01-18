import React from "react";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const icons = Quill.import('ui/icons');
icons.header[3] = `
<svg width="17px" height="12px" viewBox="0 0 17 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="h3" fill="currentColor">
            <path d="M9,1 L9,11 C9,11.5522847 8.55228475,12 8,12 C7.44771525,12 7,11.5522847 7,11 L7,7 L2,7 L2,11 C2,11.5522847 1.55228475,12 1,12 C0.44771525,12 0,11.5522847 0,11 L0,1 C-1.11022302e-16,0.44771525 0.44771525,0 1,0 C1.55228475,0 2,0.44771525 2,1 L2,5 L7,5 L7,1 C7,0.44771525 7.44771525,0 8,0 C8.55228475,0 9,0.44771525 9,1 Z" id="Shape" fill-rule="nonzero"></path>
            <text id="3" font-family="PingFangSC-Semibold, PingFang SC" font-size="9" font-weight="500">
                <tspan x="11.3" y="11">3</tspan>
            </text>
        </g>
    </g>
</svg>`;

const Link = Quill.import('formats/link');
// const BlockEmbed = Quill.import('blots/block/embed');

// class ImageBlotsMy extends BlockEmbed {
//   static create(value) {
//     let node = super.create();
//     node.setAttribute('alt', value.alt);
//     node.setAttribute('src', value.url);
//     return node;
//   }
//
//   static value(node) {
//     return {
//       alt: node.getAttribute('alt'),
//       url: node.getAttribute('src')
//     };
//   }
// }
// ImageBlotsMy.blotName = 'image';
// ImageBlotsMy.tagName = 'img';


class MyLink extends Link {
  static create (value) {
    let node = super.create(value)
    value = this.sanitize(value)
    // if (validations.isNumeric(value)) {
    //   node.setAttribute('href', 'tel:' + value)
    //   node.className = 'link--tel'
    // }
    // if (validations.isEmail(value)) {
    //   node.setAttribute('href', 'mailto:' + value)
    //   node.className = 'link--mail'
    // }
    if ((value.startsWith('https://') || value.startsWith('http://')) && !value.includes("kyrrex")) {
      node.className = 'link-nofollow'
      node.setAttribute('rel', "nofollow");
    }
    return node
  }
}

Quill.register(MyLink);
// Quill.register(ImageBlotsMy);

const Editor = ({ onChange, name, value }) => {

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, {'header': '3'},   { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']
    ],
  }


  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={(content, event, editor) => {
        onChange({ target: { name, value: content } });
      }}/>
  );
};

export default Editor;

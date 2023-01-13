import { css } from 'lit';

export const style = css`
  /* BASICS */

  .CodeMirror {
    color: var(--symbols);
    --symbols: #777;
    --base: #545281;
    --comment: hsl(210, 25%, 60%);
    --keyword: #af4ab1;
    --variable: var(--base);
    --function: #c25205;
    --string: #2ba46d;
    --number: #c25205;
    --tags: #dd0000;
    --brackets: var(--comment);
    --qualifier: #ff6032;
    --important: var(--string);
    --attribute: #9c3eda;
    --property: #6182b8;

    --selected-bg: #d7d4f0;
    --selected-bg-non-focus: #d9d9d9;
    --cursor: #000;

    direction: ltr;
    font-family: var(--font-code);
    height: auto;
  }

  .dark .CodeMirror {
    color: var(--symbols);
    --symbols: #89ddff;
    --base: #a6accd;
    --comment: #6d6d6d;
    --keyword: #89ddff;
    --string: #c3e88d;
    --variable: #82aaff;
    --number: #f78c6c;
    --tags: #f07178;
    --brackets: var(--symbols);
    --property: #f07178;
    --attribute: #c792ea;
    --cursor: #fff;

    --selected-bg: rgba(255, 255, 255, 0.1);
    --selected-bg-non-focus: rgba(255, 255, 255, 0.15);
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: 4px 0; /* Vertical padding around content */
  }
  .CodeMirror pre {
    padding: 0 4px; /* Horizontal padding of content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    background-color: white; /* The little square between H and V scrollbars */
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: transparent;
    white-space: nowrap;
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: var(--comment);
    white-space: nowrap;
    opacity: 0.6;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* FOLD GUTTER */

  .CodeMirror-foldmarker {
    color: #414141;
    text-shadow: #ff9966 1px 1px 2px, #ff9966 -1px -1px 2px,
      #ff9966 1px -1px 2px, #ff9966 -1px 1px 2px;
    font-family: arial;
    line-height: 0.3;
    cursor: pointer;
  }
  .CodeMirror-foldgutter {
    width: 0.7em;
  }
  .CodeMirror-foldgutter-open,
  .CodeMirror-foldgutter-folded {
    cursor: pointer;
  }
  .CodeMirror-foldgutter-open:after,
  .CodeMirror-foldgutter-folded:after {
    content: '>';
    font-size: 0.8em;
    opacity: 0.8;
    transition: transform 0.2s;
    display: inline-block;
    top: -0.1em;
    position: relative;
    transform: rotate(90deg);
  }
  .CodeMirror-foldgutter-folded:after {
    transform: none;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid var(--cursor);
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }
  @-moz-keyframes blink {
    0% {
    }
    50% {
      background-color: transparent;
    }
    100% {
    }
  }
  @-webkit-keyframes blink {
    0% {
    }
    50% {
      background-color: transparent;
    }
    100% {
    }
  }
  @keyframes blink {
    0% {
    }
    50% {
      background-color: transparent;
    }
    100% {
    }
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: -20px;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */
  .cm-s-default.CodeMirror {
    background-color: transparent;
  }
  .cm-s-default .cm-header {
    color: blue;
  }
  .cm-s-default .cm-quote {
    color: #090;
  }
  .cm-negative {
    color: #d44;
  }
  .cm-positive {
    color: #292;
  }
  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .cm-s-default .cm-atom,
  .cm-s-default .cm-def,
  .cm-s-default .cm-variable-2,
  .cm-s-default .cm-variable-3,
  .cm-s-default .cm-punctuation {
    color: var(--base);
  }
  .cm-s-default .cm-property {
    color: var(--property);
  }
  .cm-s-default .cm-hr,
  .cm-s-default .cm-comment {
    color: var(--comment);
  }
  .cm-s-default .cm-attribute {
    color: var(--attribute);
  }
  .cm-s-default .cm-keyword {
    color: var(--keyword);
  }
  .cm-s-default .cm-variable {
    color: var(--variable);
  }
  .cm-s-default .cm-tag {
    color: var(--tags);
  }
  .cm-s-default .cm-bracket {
    color: var(--brackets);
  }
  .cm-s-default .cm-number {
    color: var(--number);
  }
  .cm-s-default .cm-string,
  .cm-s-default .cm-string-2 {
    color: var(--string);
  }
  .cm-s-default .cm-type {
    color: #085;
  }
  .cm-s-default .cm-meta {
    color: #555;
  }
  .cm-s-default .cm-qualifier {
    color: var(--qualifier);
  }
  .cm-s-default .cm-builtin {
    color: #7539ff;
  }
  .cm-s-default .cm-link {
    color: var(--flash);
  }
  .cm-s-default .cm-error {
    color: #ff008c;
  }
  .cm-invalidchar {
    color: #ff008c;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
 the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: white;
  }

  .CodeMirror-scroll {
    overflow: auto !important; /* Things will break if this is overridden */
    /* 30px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    padding-bottom: 32px;
    height: calc(100% + 32px);
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
    height: 100%;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
 before actual scrolling happens, thus preventing shaking and
 flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0;
    bottom: 0;
  }

  .CodeMirror-gutters {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    /* height: 100% !important; */
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper ::selection {
    background-color: transparent;
  }
  .CodeMirror-gutter-wrapper ::-moz-selection {
    background-color: transparent;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  .CodeMirror pre {
    /* Reset some styles that the rest of the page might have set */
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: var(--selected-bg-non-focus);
  }
  .CodeMirror-focused .CodeMirror-selected {
    background: var(--selected-bg);
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }
  .CodeMirror-line::selection,
  .CodeMirror-line > span::selection,
  .CodeMirror-line > span > span::selection {
    background: var(--selected-bg);
  }
  .CodeMirror-line::-moz-selection,
  .CodeMirror-line > span::-moz-selection,
  .CodeMirror-line > span > span::-moz-selection {
    background: var(--selected-bg);
  }

  .cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, 0.4);
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  @media print {
    /* Hide the cursor when printing */
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  .CodeMirror {
    height: 100%;
  }

  .code-mirror-container {
    position: relative;
    height: 100%;
  }
`;

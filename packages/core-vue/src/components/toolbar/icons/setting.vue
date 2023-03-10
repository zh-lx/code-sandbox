<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { store } from '@/store';
import { TooltipText, CodeSizes } from '@/constant';
import RightMenu, { activeClass } from '@/components/menus';

const settingDOM = ref<HTMLDivElement>();

onMounted(() => {
  initSettingMenu();
});

const initSettingMenu = () => {
  new RightMenu(
    {
      el: settingDOM.value as HTMLElement,
      mode: 'click',
      theme: 'mac',
      minWidth: '100px',
    },
    () => [
      {
        type: 'ul',
        text: '工具栏',
        children: [
          {
            type: 'ul',
            text: '位置',
            children: [
              {
                type: 'li',
                text: '顶部',
                class: store.toolbarPosition === 'top' ? activeClass : '',
                callback: () => (store.toolbarPosition = 'top'),
                close: true,
              },
              {
                type: 'li',
                text: '底部',
                class: store.toolbarPosition === 'bottom' ? activeClass : '',
                callback: () => (store.toolbarPosition = 'bottom'),
                close: true,
              },
            ],
          },
        ],
      },
      {
        type: 'ul',
        text: '代码与沙盒',
        children: [
          {
            type: 'ul',
            text: '布局方式',
            children: [
              {
                type: 'li',
                text: '左右布局',
                class: store.vertical ? '' : activeClass,
                callback: () => (store.vertical = false),
              },
              {
                type: 'li',
                text: '上下布局',
                class: store.vertical ? activeClass : '',
                callback: () => (store.vertical = true),
              },
            ],
          },
          {
            type: 'ul',
            text: '是否翻转',
            children: [
              {
                type: 'li',
                text: '翻转',
                class: !store.reverse ? '' : activeClass,
                callback: () => (store.reverse = true),
              },
              {
                type: 'li',
                text: '不翻转',
                class: store.reverse ? '' : activeClass,
                callback: () => (store.reverse = false),
              },
            ],
          },
        ],
      },
      {
        type: 'ul',
        text: '代码编辑器',
        children: [
          {
            type: 'ul',
            text: '字号',
            children: CodeSizes.map((size) => ({
              type: 'li',
              text: `${size} px`,
              class: store.codeSize === size ? activeClass : '',
              callback: () => (store.codeSize = size),
            })),
          },
        ],
      },
    ]
  );
};
</script>

<template>
  <div
    v-if="!store.excludeTools.includes('toolbar')"
    data-toggle="tooltip"
    :title="TooltipText.Settings"
    class="toolbar-icon"
    ref="settingDOM"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
    >
      <path
        fill="currentColor"
        d="M2 12c0-.865.11-1.703.316-2.504A3 3 0 0 0 4.99 4.867a9.99 9.99 0 0 1 4.335-2.505 3 3 0 0 0 5.348 0 9.99 9.99 0 0 1 4.335 2.505 3 3 0 0 0 2.675 4.63c.206.8.316 1.638.316 2.503 0 .865-.11 1.703-.316 2.504a3 3 0 0 0-2.675 4.629 9.99 9.99 0 0 1-4.335 2.505 3 3 0 0 0-5.348 0 9.99 9.99 0 0 1-4.335-2.505 3 3 0 0 0-2.675-4.63C2.11 13.704 2 12.866 2 12zm4.804 3c.63 1.091.81 2.346.564 3.524.408.29.842.541 1.297.75A4.993 4.993 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274.455-.209.889-.46 1.297-.75A4.993 4.993 0 0 1 17.196 15a4.993 4.993 0 0 1 2.77-2.25 8.126 8.126 0 0 0 0-1.5A4.993 4.993 0 0 1 17.195 9a4.993 4.993 0 0 1-.564-3.524 7.989 7.989 0 0 0-1.297-.75A4.993 4.993 0 0 1 12 6a4.993 4.993 0 0 1-3.335-1.274 7.99 7.99 0 0 0-1.297.75A4.993 4.993 0 0 1 6.804 9a4.993 4.993 0 0 1-2.77 2.25 8.126 8.126 0 0 0 0 1.5A4.993 4.993 0 0 1 6.805 15zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </svg>
  </div>
</template>

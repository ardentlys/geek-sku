<template>
    <div class="codeBlock" :class="`language-${props.lang}`">
        <div class="top">
            <div class="lang">{{ props.lang }}</div>
            <el-tooltip content="复制" placement="top">
                <svg
                    @click="copyText(code)"
                    class="copy-icon"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
                    ></path>
                </svg>
            </el-tooltip>
        </div>
        <pre :class="`language-${props.lang}`"><code :class="`language-${props.lang}`" ref="codeBlockRef">{{code}}</code></pre>
    </div>
</template>
<script setup>
import { onMounted, defineProps, watch, ref, nextTick } from "vue";

import { ElMessage } from "element-plus";

import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // 用于 typescript 的语法高亮。
import "prismjs/components/prism-javascript"; // 用于 javascript 的语法高亮
import "prismjs/components/prism-css"; // 用于 CSS 的语法高亮。
import "prismjs/components/prism-markup"; // 用于 HTML 和 XML 的语法高亮。
import "prismjs/components/prism-json"; // 用于 JSON 的语法高亮。
import "@/components/prism/prism-vue"; // 用于 VUE 的语法高亮。
import "@/components/prism/prism-shell"; // 用于 shell 的语法高亮。
import "@/styles/prism.css"; // 引入 Prism.js 自定义样式表

let props = defineProps({
    code: {
        type: String,
        required: true,
    },
    lang: {
        type: String,
        required: true,
    },
});

let codeBlockRef = ref(null);

// 复制
let copyText = (text) => {
    // 创建一个临时的 textarea 元素
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    // 选中 textarea 中的文本
    textarea.select();

    // 执行复制操作
    document.execCommand("copy");

    // 移除临时的 textarea 元素
    document.body.removeChild(textarea);

    ElMessage({
        message: "复制成功",
        type: "success",
    });
};

onMounted(() => {
    Prism.highlightAll();
});

watch(
    () => props.code,
    () => {
        nextTick(() => {
            Prism.highlightElement(codeBlockRef.value);
        });
    }
);
</script>
<style scoped lang="scss">
.codeBlock {
    position: relative;
    padding-top: 1.4em;

    .top {
        display: flex;
        justify-content: space-between;
        align-content: center;
        position: absolute;
        top: 0.4em;
        left: 1.1em;
        right: 1.1em;
        .copy-icon {
            cursor: pointer;
            width: .9em;
            transform: translateY(2px);
        }
        .lang {
            z-index: 2;
            opacity: var(--prism-marker-opacity);
            font-size: var(--prism-marker-font-size);
            color: var(--code-text-color);
        }
    }
}
</style>
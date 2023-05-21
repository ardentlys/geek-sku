<template>
    <div class="guide">
        <div class="container">
            <!-- 侧边栏 md及以上使用 -->
            <el-aside>
                <div
                    class="aside_item"
                    :class="{ act: index == actMenuIndex }"
                    v-for="(aside, index) in menuList"
                    :key="index"
                    @click="actMenuIndex = index"
                >
                    {{ aside }}
                </div>
            </el-aside>
            <!-- 侧边栏 md以下使用 -->
            <div class="nav_bar">
                <div class="nav_bar_container flex f-x-b f-y-c">
                    <div class="left flex f-y-c" @click="nav_bar_open = true">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="2"
                                y="7"
                                width="11"
                                height="2"
                                fill="#606266"
                            ></rect>
                            <rect
                                x="2"
                                y="11"
                                width="14"
                                height="2"
                                fill="#606266"
                            ></rect>
                            <rect
                                x="2"
                                y="15"
                                width="8"
                                height="2"
                                fill="#606266"
                            ></rect>
                            <rect
                                x="2"
                                y="3"
                                width="16"
                                height="2"
                                fill="#606266"
                            ></rect>
                        </svg>
                        <div class="title">Menu</div>
                    </div>
                    <div class="backTop" @click="backTop">BackTop</div>
                </div>
            </div>
            <!-- 侧边栏抽屉 -->
            <el-drawer
                v-model="nav_bar_open"
                :before-close="handleClose"
                direction="ltr"
                :show-close="false"
                size="266px"
            >
                <div class="nav_bar_drawer_list">
                    <div
                        class="nav_bar_drawer_item"
                        :class="{ act: index == actMenuIndex }"
                        v-for="(aside, index) in menuList"
                        :key="index"
                        @click="
                            actMenuIndex = index;
                            nav_bar_open = false;
                        "
                    >
                        {{ aside }}
                    </div>
                </div>
            </el-drawer>
            <!-- 主内容 -->
            <el-main>
                <introduce v-if="actMenuIndex == 0"></introduce>
                <useSKU v-if="actMenuIndex == 1"></useSKU>
            </el-main>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, watch } from "vue";

// 引入组件
import introduce from "@/components/guide/introduce.vue";
import useSKU from "@/components/guide/useSKU.vue";

// 菜单列表
let menuList = reactive(["介绍", "使用"]);
let actMenuIndex = ref(0);

// 侧边栏抽屉是否打开
let nav_bar_open = ref(false);

// 返回页面顶部
let backTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // 平滑滚动
    });
};

window.onresize = () => {
    if (document.documentElement.clientWidth > 959) nav_bar_open.value = false;
};

watch(
    () => actMenuIndex,
    () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // 平滑滚动
        });
    }
);
</script>
<style lang="scss" scoped>
.guide {
    .el-aside {
        position: fixed;
        top: $header-height;
        bottom: 0;
        left: 0;
        width: 255px;
        display: block;
        padding: 48px 28px 0;
        box-sizing: border-box;
        overflow-y: auto;
        transition: transform 0.3s;
        z-index: 13;
        @media screen and (max-width: $mdMaxW) {
            transform: translateX(-100%);
            top: 0;
            padding-top: calc($header-height + 48px);
            background: var(--el-bg-color);
        }
        .aside_item {
            line-height: 20px;
            font-size: 13px;
            font-weight: 500;
            color: var(--el-text-color-regular);
            transition: color 0.5s;
            padding: 10px 16px;
            line-height: 1.5;
            font-size: 0.9rem;
            border-radius: 8px;
            &.act {
                background: rgba(var(--el-color-primary-rgb), 0.1);
                color: var(--el-color-primary);
                font-weight: 600;
            }
        }
    }
    .nav_bar {
        display: none;
        padding: 12px 50px;
        border-bottom: 1px solid var(--el-border-color);
        background: var(--el-bg-color);
        z-index: 2;
        @media screen and (max-width: $mdMaxW) {
            display: block;
            position: sticky;
            top: -2px;
        }
        .title {
            margin-left: 7px;
        }
        .left {
            cursor: pointer;
        }
        .backTop {
            font-size: var(--el-font-size-base);
            color: var(--el-button-text-color);
            cursor: pointer;
        }
    }
    .nav_bar_drawer_list {
        .nav_bar_drawer_item {
            line-height: 20px;
            font-size: 13px;
            font-weight: 500;
            color: var(--el-text-color-regular);
            transition: color 0.5s;
            padding: 10px 16px;
            line-height: 1.5;
            font-size: 0.9rem;
            border-radius: 8px;
            &.act {
                background: rgba(var(--el-color-primary-rgb), 0.1);
                color: var(--el-color-primary);
                font-weight: 600;
            }
        }
    }
    .el-main {
        padding: 130px 48px 0 330px;
        transition: all 0.3s;
        @media screen and (max-width: $mdMaxW) {
            padding-left: 48px;
            padding-top: 48px;
        }
    }
}
</style>
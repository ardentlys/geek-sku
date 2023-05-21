<template>
    <div id="main">
        <header class="navbar flex f-x-b">
            <div
                class="logo flex f-y-c"
                @click="
                    $router.push('/');
                    act_nav_list = -1;
                "
            >
                <img src="@/assets/logo.png" alt="" />
                <div class="text">SKU</div>
            </div>
            <div class="fun flex f-y-c">
                <div class="nav_list flex">
                    <div
                        class="nav_item"
                        :class="{ act: act_nav_list === index }"
                        v-for="(item, index) in nav_list"
                        :key="index"
                        @click="
                            $router.push(item.url);
                            act_nav_list = index;
                        "
                    >
                        {{ item.name }}
                    </div>
                </div>
                <div class="theme-toggler-content theme-toggler flex f-y-c">
                    <button
                        class="switch"
                        role="switch"
                        aria-label="切换暗色主题"
                        aria-checked="true"
                        @click="store.isDarkMode = !store.isDarkMode"
                    >
                        <div class="switch__action">
                            <div class="switch__icon">
                                <i class="el-icon" style="font-size: 13px">
                                    <svg
                                        v-if="store.isDarkMode"
                                        viewBox="0 0 24 24"
                                        class="dark-icon"
                                        data-v-3de418c2=""
                                    >
                                        <path
                                            d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <svg
                                        v-else
                                        viewBox="0 0 24 24"
                                        class="light-icon"
                                        data-v-3de418c2=""
                                    >
                                        <path
                                            d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
        <router-view></router-view>
        <footer v-if="act_nav_list === -1">
            <p class="p1">感谢您的使用❤️</p>
            <p>网站UI框架来自 <a href="https://element-plus.gitee.io">Element Plus</a></p>
        </footer>
    </div>
</template>

<script setup>
import { onBeforeMount, watch, ref, reactive } from "vue";
// 状态管理
import { useGlobalStore } from "./store/global";
let store = useGlobalStore();


// 导航列表
let nav_list = reactive([
    {
        name: "指南",
        url: "/guide",
    },
]);
let act_nav_list = ref(-1);

// 切换主题
let switchTheme = () => {
    let html = document.documentElement;
    // 给html上套或去dark class
    store.isDarkMode
        ? html.classList.add("dark")
        : html.classList.remove("dark");
    // 存储数据
    localStorage.setItem("isDarkMode", store.isDarkMode ? 1 : 0);
};

// 监听主题切换
watch(
    () => store.isDarkMode,
    () => {
        switchTheme();
    }
);

onBeforeMount(() => {
    switchTheme();
    // 加载前匹配对应的导航项
    act_nav_list.value = nav_list.findIndex(item=>item.url == window.location.pathname);
});
</script>

<style>
@import "./styles/init.css";
/* 使用 :global() 包裹样式，使其全局生效 */
::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar:horizontal {
    height: 7px
}

::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background-color: #0000004d;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
}

.dark ::-webkit-scrollbar-thumb {
    background-color: #fff3
}

.dark ::-webkit-scrollbar-thumb:hover {
    background-color: #fff6
}
</style>

<style lang="scss" scoped>
#main {
    min-height: 100vh;
    background: var(--el-bg-color);
    transition: background-color var(--el-transition-duration-fast);
    header.navbar {
        position: relative;
        height: $header-height;
        box-sizing: border-box;
        top: 0;
        left: 0;
        right: 0;
        z-index: 12;
        padding: 0 50px;
        border-bottom: 1px solid var(--el-border-color);
        transition: background-color var(--el-transition-duration-fast);
        // 径向渐变
        background-image: radial-gradient(
            transparent 1px,
            var(--el-bg-color) 1px
        );
        // 背景缩放
        background-size: 4px 4px;
        // 元素后面区域添加 饱和度 和 模糊效果
        backdrop-filter: saturate(50%) blur(4px);

        .logo {
            cursor: pointer;
            img {
                width: 28px;
            }
            .text {
                font-weight: bold;
                font-size: 20px;
                line-height: 1;
                background: linear-gradient(to right, #68d6fd, #4160f5);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        @media screen and (min-width: $lgMinW) {
            position: sticky;
        }

        .fun {
            .nav_list {
                height: $header-height;
                .nav_item {
                    padding: 0 15px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--text-color);
                    transition: color var(--el-transition-duration);
                    transform: translateY(-1px);
                    border-bottom: 2px solid transparent;
                    line-height: $header-height;

                    &:hover {
                        color: var(--el-color-primary);
                    }
                    &.act {
                        border-bottom-color: var(--el-color-primary);
                    }
                }
            }
            .theme-toggler-content {
                color: var(--text-color);
                background-color: transparent;
                transition: border-color var(--el-transition-duration),
                    background-color var(--el-transition-duration-fast);
                border-radius: 50%;
                padding-left: 10px;
                .switch {
                    margin: 0;
                    display: inline-block;
                    position: relative;
                    width: 40px;
                    height: 20px;
                    border: 1px solid var(--el-border-color);
                    outline: none;
                    border-radius: 10px;
                    box-sizing: border-box;
                    background: #f2f2f2;
                    cursor: pointer;
                    transition: border-color var(--el-transition-duration),
                        background-color var(--el-transition-duration);
                    .switch__action {
                        width: 16px;
                        height: 16px;
                        transform: translate(20px);
                        position: absolute;
                        top: 1px;
                        left: 1px;
                        border-radius: 50%;
                        background-color: var(--el-bg-color);
                        transform: translate(0);
                        color: var(--text-color-light);
                        transition: border-color var(--el-transition-duration),
                            background-color var(--el-transition-duration),
                            transform var(--el-transition-duration);

                        .switch__icon {
                            width: 16px;
                            height: 16px;
                            position: relative;

                            .el-icon {
                                position: absolute;
                                cursor: pointer;
                                position: absolute;
                                left: 0px;
                                bottom: 0.5px;
                                --color: inherit;
                                height: 1em;
                                width: 1em;
                                line-height: 1em;
                                display: inline-flex;
                                justify-content: center;
                                align-items: center;
                                position: relative;
                                fill: currentColor;
                                color: var(--color);
                                font-size: inherit;
                            }

                            svg {
                                height: 1em;
                                width: 1em;
                            }

                            .dark-icon,
                            .light-icon[data-v-3de418c2] {
                                position: absolute;
                                top: 0;
                                left: 0;
                                transition: color var(--el-transition-duration),
                                    opacity var(--el-transition-duration);
                            }
                        }
                    }
                }
            }
        }
    }

    footer {
        text-align: center;
        color: var(--el-text-color-primary);
        border-top: 1px solid var(--el-border-color);
        padding: 20px 0;
        p {
            font-size: 12px;
            margin: 0;
            &.p1 {
                margin-bottom: 10px;
            }

            a {
                color: var(--el-color-primary);
            }
        }
    }
}

// 暗黑模式
html.dark {
    header.navbar {
        .theme-toggler-content {
            .switch {
                background-color: #2c2c2c !important;
                .switch__action {
                    transform: translate(20px) !important;
                }
            }
        }
    }
}
</style>
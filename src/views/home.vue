<template>
    <div class="home" @mousemove="homeSVGRef.homeMouseMove">
        <div class="introduction t-c">
            <h1 class="title">Geek SKU</h1>
            <div class="subtitle">基于vue、uniapp开发的多规格带图SKU组件</div>
            <HomeSVG ref="homeSVGRef"></HomeSVG>
        </div>
        <div class="download t-c">
            <h2 class="title">选择SKU版本</h2>
            <div class="list">
                <div class="item vue">
                    <img src="@/assets/vue-logo.png" alt="" />
                    <div class="name">vue</div>
                    <div class="intr">
                        易学易用，性能出色，适用场景丰富的 Web 前端框架。
                    </div>
                    <div class="btn flex">
                        <a
                            class="left"
                            download="geek-sku"
                            href="https://github.com/ardentlys/geek-sku.github.io/raw/master/component/v2/geek-sku.zip"
                            >v2下载</a
                        >
                        <a
                            class="right"
                            download="geek-sku"
                            href="https://github.com/ardentlys/geek-sku.github.io/raw/master/component/v3/geek-sku.zip"
                            >v3下载</a
                        >
                    </div>
                </div>
                <div class="item uni">
                    <img src="@/assets/uniapp-logo.png" alt="" />
                    <div class="name">uni-app</div>
                    <div class="intr">
                        基于 Vue.js 开发的前端应用框架，开发一次，多端运行。
                    </div>
                    <div class="btn">
                        <a
                            target="_blank"
                            href="https://ext.dcloud.net.cn/plugin?id=10470"
                            >前往下载</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import HomeSVG from "@/components/homeSVG.vue";

let homeSVGRef = ref(null);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
    padding: 60px 40px 80px;
    .introduction {
        .title {
            font-size: 34px;
            margin: 0;
            line-height: 48px;
            color: var(--el-text-color-primary);
        }
        .subtitle {
            margin-top: 10px;
            font-size: 18px;
            color: var(--el-text-color-regular);
        }
    }

    .download {
        margin-top: 100px;
        .title {
            color: var(--el-text-color-primary);
            margin-bottom: 60px;
        }
        .list {
            display: flex;
            justify-content: center;
            .item {
                width: 30%;
                padding-top: 30px;
                margin: 0 30px;
                border-radius: 8px;
                border: 1px solid var(--el-border-color);
                background: var(--el-bg-color);
                overflow: hidden;
                transition: all 0.3s ease-in-out;
                &:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 32px 4px #edeff53d, 0 8px 20px #edeff57a;
                }
                img {
                    width: 30%;
                    margin-bottom: 35px;
                }
                .name {
                    color: var(--el-text-color-primary);
                    margin-bottom: 15px;
                    font-size: 20px;
                    font-weight: bold;
                }
                .intr {
                    padding: 0 30px;
                    color: var(--el-text-color-regular);
                    margin-bottom: 30px;
                    line-height: 1.5;
                }
                .btn {
                    border-top: 1px solid var(--el-border-color);
                    font-size: 14px;
                    color: var(--el-color-primary);
                    cursor: pointer;
                    a {
                        padding: 15px 0;
                        display: block;
                        text-decoration: none;
                        color: inherit;
                    }
                }
                &.vue {
                    .btn {
                        text-align: center;
                        > a {
                            width: 50%;
                            position: relative;
                            &:hover {
                                background: var(--el-color-primary);
                                color: #fff;
                            }
                        }
                        .left {
                            box-sizing: border-box;
                            border-right: 1px solid var(--el-border-color);
                        }
                    }
                }
                &.uni {
                    .btn {
                        &:hover {
                            background: var(--el-color-primary);
                            color: #fff;
                        }
                    }
                }
            }

            @media screen and (max-width: $smMaxW) {
                display: block;
                .item {
                    width: 80%;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
            }
        }
    }
}

.dark {
    .download .list .item:hover {
        box-shadow: 0 12px 32px 4px #090b103d, 0 8px 20px #090b107a;
    }
}
</style>

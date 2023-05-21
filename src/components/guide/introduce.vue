<template>
    <div class="doc-content introduce">
        <h1 id="介绍">
            介绍
            <a class="header-anchor vp-link" href="#介绍">#</a>
        </h1>
        <div class="logo t-c">
            <img src="@/assets/logo.png" alt="" />
            <h2 class="name">Geek SKU</h2>
            <p>基于vue、uniapp开发的多规格带图SKU组件</p>
        </div>
        <h2 id="来由">
            来由
            <a class="header-anchor vp-link" href="#来由">#</a>
        </h2>
        <p text="sm">
            因为业务需要且市场上的UI框架与插件市场内没有简易的用法并且不够全面萌生便了自己写一个SKU组件的想法，于是Geek-SKU便应运而生。
        </p>
        <p text="sm">
            现在的SKU组件已支持vue、uniapp，支持带图SKU、主题色设置、自动选择低价SKU、自动展示价格区间等，让您更便捷的使用，为您节省大量开发时间。
        </p>
        <p text="sm">
            Geek-SKU立志成为vue、uniapp两个生态最好用最便捷的sku解决方案
        </p>
        <h2 id="捐赠">
            捐赠
            <a class="header-anchor vp-link" href="#捐赠">#</a>
        </h2>
        <p text="sm">
            由于是个人开发，都是在业余时间进行开发和改进，并为大家提供持续的技术支持。
        </p>
        <p text="sm">
            如果您认为Geek-SKU对您的开发工作有所帮助，您可以进行捐赠，捐赠没有任何门槛。您的慷慨将对我的个人开发工作产生积极的影响，帮助我持续提供高质量的帮助和支持(相信我，这比打赏主播更有意义)
        </p>
        <div class="donate-type">
            <div class="wx">
                <div class="img_container">
                    <img src="@/assets/wx.jpg" alt="" />
                    <div class="name">早(**林)</div>
                </div>
            </div>
            <div class="zfb">
                <div class="img_container">
                    <img src="@/assets/zfb.jpg" alt="" />
                    <div class="name">Geek(**林)</div>
                </div>
            </div>
        </div>
        <h2 id="交流反馈">
            交流反馈
            <a class="header-anchor vp-link" href="#交流反馈">#</a>
        </h2>
        <h3 id="QQ群">
            QQ群
            <a class="header-anchor vp-link" href="#QQ群">#</a>
        </h3>
        <p>1群：<a target="_blank" href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=XQzqaElG5V0shQsc6M3zOQq1UNkuipGX&authKey=VkLcwXldjXOiylLPA8DRYCdvvDXy67Qrw2flfaAzKnrOg%2FBXc3wu40lKEPdqtGYD&noverify=0&group_code=830086788">830086788</a></p>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
@import "@/styles/doc.scss";
.logo {
    margin-top: 40px;
    img {
        width: 80px;
        height: 80px;
    }
    .name {
        margin: 0.2rem auto 0;
        display: block;
    }

    p {
        margin-top: 5px;
    }
}

.donate-type {
    margin-top: 50px;
    padding-bottom: 50px;
    .wx,
    .zfb {
        display: inline-block;
        padding: 30px;
        border-radius: 5px;
        margin-right: 30px;
        .img_container {
            background: #fff;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
            img {
                width: 100px;
            }
            .name {
                color: rgb(25 25 25);
                font-weight: 600;
                font-size: 10px;
                margin-top: 10px;
            }
        }
    }
    .wx {
        background: rgb(77 193 94);
        margin-bottom: 30px;
    }
    .zfb {
        background-color: rgb(75 120 255);
    }
}

.dark {
    @media screen and (min-width: $mdMinW) {
        .donate-type {
            display: flex;
            .wx,
            .zfb {
                display: block;
            }
            .wx {
                margin-right: 30px;
                margin-bottom: 0;
            }
        }
    }
}
</style>
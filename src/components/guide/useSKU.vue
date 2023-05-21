<template>
    <div class="doc-content useSKU">
        <h1 id="用法">
            用法
            <a class="header-anchor vp-link" href="#用法">#</a>
        </h1>
        <p>在首页下载后直接拖入自己的项目<code>components</code>即可</p>

        <h2 id="依赖">
            依赖
            <a class="header-anchor vp-link" href="#依赖">#</a>
        </h2>
        <p>需要安装的依赖 <code>crypto-js</code> 用来生成加密的属性名称。</p>
        <codeBlock code="npm install crypto-js" lang="shell"></codeBlock>

        <h2 id="基础用法">
            基础用法
            <a class="header-anchor vp-link" href="#基础用法">#</a>
        </h2>
        <p>
            为了方便大家复制和使用将基础用法分为 <code>vue3</code>、<code
                >vue2</code
            >
        </p>
        <p>vue3</p>
        <codeBlock :code="commonUseV3" lang="vue"></codeBlock>
        <p>vue2</p>
        <codeBlock :code="commonUseV2" lang="vue"></codeBlock>

        <h2 id="sku属性Logo图设置">
            sku属性Logo图设置
            <a class="header-anchor vp-link" href="#sku属性Logo图设置">#</a>
        </h2>
        <p>
            在sku列表数组中的每一项都可以有logo属性，这样在选择完整的sku后就会自动展示本项sku的logo。
        </p>
        <codeBlock :code="skuLogoImg" lang="js"></codeBlock>

        <h2 id="带图SKU">
            带图SKU
            <a class="header-anchor vp-link" href="#带图SKU">#</a>
        </h2>
        <p>
            仅需要在需要展示的图片的sku属性上稍微修改一下格式，将原来的
            <code>`属性名:属性值`</code> 变成
            <code>`属性名: {name: 属性名, img: '图片链接'}`</code>。
        </p>
        <p>这样修改后的属性在使用时就会变成带图的sku属性</p>
        <p>示例:</p>
        <codeBlock :code="imgSku" lang="js"></codeBlock>

        <h2 id="指定默认选中sku">
            指定默认选中sku
            <a class="header-anchor vp-link" href="#指定默认选中sku">#</a>
        </h2>
        <p>设置<code>selectSkuIndex</code>属性即可</p>
        <codeBlock :code="bindDefaultActSku" lang="vue"></codeBlock>

        <h2 id="props">
            props
            <a class="header-anchor vp-link" href="#props">#</a>
        </h2>
        <div class="vp-table">
            <table>
                <thead>
                    <tr>
                        <th>属性名</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                        <th>可选值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data</td>
                        <td>源数据(sku列表)</td>
                        <td>Array</td>
                        <td>[]</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>value/modelValue</td>
                        <td>是否显示sku组件</td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>isMaskClose</td>
                        <td>是否可以点击遮罩层关闭</td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>isSelectMinPriceSku</td>
                        <td>
                            是否默认选中最低价格的sku
                        </td>
                        <td>Boolean</td>
                        <td>true</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>selectSkuIndex</td>
                        <td>默认选中的sku下标</td>
                        <td>Number</td>
                        <td>null</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>defaultCover</td>
                        <td>默认封面图，用于没有选中完整的sku时展示</td>
                        <td>String</td>
                        <td>''</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>defaultNum</td>
                        <td>默认购买商品数量</td>
                        <td>Number</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>themeColor</td>
                        <td>主题色，需要传入一个数组长度为3的数组，分别对应rgb三个颜色的值，例如: [84, 164, 255]</td>
                        <td>Array</td>
                        <td>[84, 164, 255]</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>btnConfirmText</td>
                        <td>确认按钮文字</td>
                        <td>String</td>
                        <td>'确认'</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>notStockText</td>
                        <td>库存不足文字</td>
                        <td>String</td>
                        <td>'库存不足'</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>notSelectSku</td>
                        <td>
                            未选择完整的sku时的文字提示
                        </td>
                        <td>String</td>
                        <td>'请选择完整的sku属性'</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>isShowStock</td>
                        <td>是否展示库存</td>
                        <td>Boolean</td>
                        <td>true</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 id="props">
            props
            <a class="header-anchor vp-link" href="#props">#</a>
        </h2>
        <div class="vp-table">
            <table>
                <thead>
                    <tr>
                        <th>属性名</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                        <th>可选值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data</td>
                        <td>源数据(sku列表)</td>
                        <td>Array</td>
                        <td>[]</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>value/modelValue</td>
                        <td>是否显示sku组件</td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>isMaskClose</td>
                        <td>是否可以点击遮罩层关闭</td>
                        <td>Boolean</td>
                        <td>false</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>isSelectMinPriceSku</td>
                        <td>
                            是否默认选中最低价格的sku
                        </td>
                        <td>Boolean</td>
                        <td>true</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>selectSkuIndex</td>
                        <td>默认选中的sku下标</td>
                        <td>Number</td>
                        <td>null</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>defaultCover</td>
                        <td>默认封面图，用于没有选中完整的sku时展示</td>
                        <td>String</td>
                        <td>''</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>defaultNum</td>
                        <td>默认购买商品数量</td>
                        <td>Number</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>themeColor</td>
                        <td>主题色，需要传入一个数组长度为3的数组，分别对应rgb三个颜色的值，例如: [84, 164, 255]</td>
                        <td>Array</td>
                        <td>[84, 164, 255]</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>btnConfirmText</td>
                        <td>确认按钮文字</td>
                        <td>String</td>
                        <td>'确认'</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>notStockText</td>
                        <td>库存不足文字</td>
                        <td>String</td>
                        <td>'库存不足'</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>notSelectSku</td>
                        <td>
                            未选择完整的sku时的文字提示
                        </td>
                        <td>String</td>
                        <td>'请选择完整的sku属性'</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>isShowStock</td>
                        <td>是否展示库存</td>
                        <td>Boolean</td>
                        <td>true</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 id="Events">
            Events
            <a class="header-anchor vp-link" href="#Events">#</a>
        </h2>
        <div class="vp-table">
            <table>
                <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>回调参数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>confirm</td>
                        <td>点击确认按钮时触发的事件</td>
                        <td><code>e = { sku, skuText , num }</code>，分别对应选中的sku值 、sku属性名数组 、输入框内的数量</td>
                    </tr>
                    <tr>
                        <td>skuChange</td>
                        <td>sku发生变化时出发的事件，如果有选中完整的sku则会返回该sku，否则会返回{}</td>
                        <td><code>e = {}</code></td>
                    </tr>
                    <tr>
                        <td>numChange</td>
                        <td>输入框内数量发生改变时触发事件</td>
                        <td><code>e = num</code>，返回输入框数量</td>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>关闭sku组件触发事件</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>open</td>
                        <td>打开sku组件触发事件</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 id="Methods">
            Methods
            <a class="header-anchor vp-link" href="#Methods">#</a>
        </h2>
        <div class="vp-table">
            <table>
                <thead>
                    <tr>
                        <th>方法名</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>resetNum</td>
                        <td>重置购买数量</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import codeBlock from "@/components/codeBlock.vue";

// 基础用法
let commonUseV3 = `<template>
    <div class="test" style="padding: 3rem 1.5rem;">
        <geek-sku
        	v-model="skuShow"
        	:data="skus"
        	:themeColor="[226, 35, 26]"
        	defaultCover="https://img-blog.csdnimg.cn/img_convert/587467738dfa4de190a7cd9818ca59fb.jpeg"
        	btnConfirmText="购买"
        	notSelectSku="请选择完整的商品信息"
        	@skuChange="skuChange"
        	@confirm="skuConfirm"
        ></geek-sku>
        <!-- 打开sku组件 -->
        <button @click="skuShow = true">打开sku组件</button>
    </div>
</template>
<script setup>
    import { ref, reactive, inject, toRefs } from "vue";
    import geekSku from "@/components/geek-sku/geek-sku.vue";

    let skuShow = ref(false);
    // sku列表
    let skus = ref([
        {
            id: 1,
            price: 7000,
            stock: 30,
            sku_attrs: {
                '机身颜色': '深空黑色',
                '储存容量': '128G',
                '套装': '快充套装'
            }
        },
        {
            id: 2,
            price: 8500,
            stock: 10,
            sku_attrs: {
                '机身颜色': '暗紫色',
                '储存容量': '256G',
                '套装': '快充套装'
            }
        },
        {
            id: 3,
            price: 9500,
            stock: 0,
            sku_attrs: {
                '机身颜色': '暗紫色',
                '储存容量': '512G',
                '套装': 'AirPods套装'
            }
        },
        {
            id: 4,
            price: 9200,
            stock: 60,
            sku_attrs: {
                '机身颜色': '银色',
                '储存容量': '512G',
                '套装': 'AirPods套装'
            }
        },
        {
            id: 5,
            price: 9200,
            stock: 80,
            sku_attrs: {
                '机身颜色': '金色',
                '储存容量': '512G',
                '套装': 'AirPods3套装'
            }
        }
    ])
    
    // sku发生改变事件, 选择完整的sku则回返回 否则sku的值为{}
    let skuChange = (sku)=>{
        console.log(sku);
    }
    // sku确认事件
    let skuConfirm = (e)=>{
        console.log(e);
    }
<${"/script"}>`;
let commonUseV2 = `<template>
    <div class="test" style="padding: 3rem 1.5rem">
        <geek-sku
            v-model="skuShow"
            :data="skus"
            :themeColor="[226, 35, 26]"
            defaultCover="https://img-blog.csdnimg.cn/img_convert/587467738dfa4de190a7cd9818ca59fb.jpeg"
            btnConfirmText="购买"
            notSelectSku="请选择完整的商品信息"
            @skuChange="skuChange"
            @confirm="skuConfirm"
        ></geek-sku>
        <!-- 打开sku组件 -->
        <button @click="skuShow = true">打开sku组件</button>
    </div>
</template>
<script>
import geekSku from "@/components/geek-sku/geek-sku.vue";
export default {
    data() {
        return {
            // 是否显示组件
            skuShow: false,
            // sku列表
            skus: [
                {
                    id: 1,
                    price: 7000,
                    stock: 30,
                    sku_attrs: {
                        机身颜色: "深空黑色",
                        储存容量: "128G",
                        套装: "快充套装",
                    },
                },
                {
                    id: 2,
                    price: 8500,
                    stock: 10,
                    sku_attrs: {
                        机身颜色: "暗紫色",
                        储存容量: "256G",
                        套装: "快充套装",
                    },
                },
                {
                    id: 3,
                    price: 9500,
                    stock: 0,
                    sku_attrs: {
                        机身颜色: "暗紫色",
                        储存容量: "512G",
                        套装: "AirPods套装",
                    },
                },
                {
                    id: 4,
                    price: 9200,
                    stock: 60,
                    sku_attrs: {
                        机身颜色: "银色",
                        储存容量: "512G",
                        套装: "AirPods套装",
                    },
                },
                {
                    id: 5,
                    price: 9200,
                    stock: 80,
                    sku_attrs: {
                        机身颜色: "金色",
                        储存容量: "512G",
                        套装: "AirPods3套装",
                    },
                },
            ]
        };
    },
    components: {
        geekSku,
    },
    methods: {
        // sku发生改变事件, 选择完整的sku则回返回 否则sku的值为{}
        skuChange(sku) {
            console.log(sku);
        },
        // sku确认事件
        skuConfirm(e) {
            console.log(e);
        },
    },
};
<${"/script"}>`;
// SKU封面图
let skuLogoImg = `[
    ...
	{
		id: 3,
		price: 9500,
        logo: '图片路径',
		stock: 0,
		sku_attrs: {
			'机身颜色': '暗紫色'
			'储存容量': '512G',
			'套装': 'AirPods套装'
		}
	},
	...
]`;
// 带图sku
let imgSku = `[
    ...
	{
		id: 3,
		price: 9500,
		stock: 0,
		sku_attrs: {
            // 原来是 '机身颜色' : '暗紫色'
			'机身颜色': {
				name: '暗紫色',
				img: 'https://img-blog.csdnimg.cn/img_convert/0c16e250057a4ce38f8d7fc6b187a3b4.jpeg',
			},
			'储存容量': '512G',
			'套装': 'AirPods套装'
		}
	},
	...
]`;
// 指定默认选中sku
let bindDefaultActSku = `<geek-sku
	v-model="skuShow"
	:data="skus"
	defaultTitle="iPhone14 Pro MAX"
	defaultCover="http://rn8zfvrr0.hn-bkt.clouddn.com/e40744e32a2930f945e67da79a35f270.jpg?e=1672666137&token=0qmhoqQQZ4ggfGZOevcNXE4wYe_IZD3Y5xm8ZZ5Y:bxn-lcJPnFNY22kGWwh5MRgdGwM="
	btnConfirmText="购买"
	notSelectSku="请选择完整的商品信息"
	:isShowStock="false"
	:selectSkuIndex="3"
	@skuChange="skuChange"
	@confirm="skuConfirm"
></geek-sku>`;
</script>
<style lang="scss" scoped>
@import "@/styles/doc.scss";
</style>
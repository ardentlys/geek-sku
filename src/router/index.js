import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/home.vue')
  },
  {
    path: '/guide',
    name: 'Guide',
    component: ()=>import('@/views/guide.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
    const defaultTitle = '多规格带图sku解决方案 | Geek-SKU'; // 设置所有页面的默认标题
    document.title = to.meta.title || defaultTitle;
    next();
});

export default router;
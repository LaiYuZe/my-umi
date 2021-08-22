import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/home', component: '@/pages/home' },
  // ],
  // ssr: {
  // },
  history: {
    type: 'hash',
  },
});

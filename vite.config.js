import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'

// 引入element-plus自动引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  // 全局环境变量
  const env = loadEnv(mode,process.cwd(),"")
  // 正则表达式
  const regular = new RegExp("^" + env.VITE_BASEURL)
  return {
    plugins: [
      vue(),
      // element-plus自动引入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // define: {
    //   'process.env': {}
    // },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // 配置服务器代理
    server: {
      proxy: {
        [env.VITE_BASEURL]: {
          target: env.VITE_APP_API_BASE_URL,	//实际请求地址
          changeOrigin: true,
          rewrite: (path) => path.replace(regular, '')
        },
      }
    },
  }
})


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     // element-plus自动引入
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
//   define: {
//     'process.env': {}
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   // 配置服务器代理
//   server: { //主要是加上这段代码
//     proxy: {
//       [process.env.VITE_BASEURL]: {
//         target: process.env.VITE_APP_API_BASE_URL,	//实际请求地址
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       },
//     }
//   },
// })
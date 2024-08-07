import { fileURLToPath, URL } from 'node:url';
import type { ConfigEnv } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
// import viewport from 'postcss-mobile-forever'
import autoprefixer from 'autoprefixer'

// Icons 自动按需引入图标库
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [
			react(),
			Unocss(),
			Icons({ autoInstall: true }), // 自动安装icon
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
				comps: fileURLToPath(new URL('./src/components', import.meta.url)),
				assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
				utils: fileURLToPath(new URL('./src/utils', import.meta.url))
			}
		},
		css: {
			postcss: {
				plugins: [
					autoprefixer(),
					// https://github.com/wswmsword/postcss-mobile-forever
					// viewport({
					// 	appSelector: '#root',
					// 	viewportWidth: 375,
					// 	maxDisplayWidth: 600,
					// }),
				]
			}
		},
		server: {
			host: '0.0.0.0',
			open: true,
			//配置自定义代理规则
			[env.VITE_APP_BASE_API]: {
				target: env.VITE_APP_BASE_URL,
				changeOrigin: true,
				rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
			}
		},
		build: {
			sourcemap: env.VITE_ENV !== 'prod',
			// -- chunk 大小警告的限制（以 kbs 为单位）
			chunkSizeWarningLimit: 2000,
			// -- 启用/禁用 gzip 压缩大小报告
			reportCompressedSize: false
		}
	};
});

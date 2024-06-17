import App from './App'
import enUS from 'antd-mobile/es/locales/en-US'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import { ConfigProvider } from 'antd-mobile'

console.log('locale', zhCN);

function LocalApp() {
	const locale = zhCN.locale // TODO 可以后续读取全局store变量
	
	;<ConfigProvider locale={locale !== 'en' ? enUS : zhCN}>
		<App />
	</ConfigProvider>
}

export default LocalApp

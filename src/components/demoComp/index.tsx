import { useEffect } from 'react'
import reactLogo from 'assets/react.svg'
import viteLogo from '/vite.svg'
import { useTranslation } from 'react-i18next'
import './style.css'
import { Button } from 'antd-mobile'
import { useCounterStore } from '@/stores'

function DemoComp() {
  const { t, i18n } = useTranslation()
  const useCounter = useCounterStore() as any

  useEffect(() => {
    i18n.changeLanguage('zh') // 改变语言，同步国际化
  }, [i18n])

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-32">Vite + React</h1>
      <div className="card">
        <Button color="primary" onClick={useCounter.increase}>
          count is {useCounter.counter}
        </Button>
        <p className="mt-10">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        <span>翻译示例：{t('common.more')}</span>
      </p>
    </div>
  )
}

export default DemoComp

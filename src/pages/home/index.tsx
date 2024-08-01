import { memo } from 'react'
import { Button, Space, Switch } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useGlobalStore } from '@/stores'

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' },
} as any

const HomePage = memo(() => {
  const { t, i18n } = useTranslation()

  const navigate = useNavigate()
  const GoAbout = () => {
    navigate('/about')
  }

  const useGlobal = useGlobalStore() as any

  return (
    <div className="relative">
      <select
        className="absolute right-10 top-10"
        value={i18n.language}
        onChange={(evt) => {
          i18n.changeLanguage(evt.target.value)
        }}
      >
        {Object.keys(lngs).map((lng) => (
          <option key={lng} value={lng} label={lngs[lng].nativeName} />
        ))}
      </select>

      <h1 className="text-32px bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-center font-bold text-transparent">{t('home')}</h1>

      <div className="mt-10 flex flex-col items-center .dark:text-#fff">
        <Space align="center">
          <div>{t('darkMode')}</div>
          <Switch
            style={{
              '--height': '24px',
              '--width': '40px',
            }}
            checked={useGlobal.isDark}
            onChange={(v) => {
              useGlobal.setDarkMode(v)
            }}
          />
        </Space>

        <div className="mt-10">
          <Button className="mt-20 w-100" onClick={GoAbout}>
            Go About
          </Button>
        </div>
      </div>
    </div>
  )
})

export default HomePage

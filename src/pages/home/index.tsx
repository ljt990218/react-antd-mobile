import { memo, useLayoutEffect, useState } from 'react'
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
  console.log(useGlobal)

  return (
    <div className="relative">
      <select
        className="absolute right-10 top-10"
        onChange={(evt) => {
          i18n.changeLanguage(evt.target.value)
        }}
      >
        {Object.keys(lngs).map((lng) => (
          <option key={lng} value={lng} label={lngs[lng].nativeName} />
        ))}
      </select>

      <h1 className="text-32px bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-center font-bold text-transparent">{t('leftMenus.home')}</h1>

      <div className="mt-10 flex flex-col items-center">
        <Space align="center">
          <div>Dark Mode</div>
          <Switch
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

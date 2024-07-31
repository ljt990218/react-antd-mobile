import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const globalState = create()(
  persist(
    (set) => ({
      isDark: prefersDark,
      darkMode: prefersDark ? 'dark' : 'light',
      setDarkMode: (isDark: boolean) => {
        const html = document.documentElement
        const body = document.body
        if (isDark) {
          html.setAttribute('class', 'dark')
          body.setAttribute('data-prefers-color-scheme', 'dark')
        } else {
          html.removeAttribute('class')
          body.removeAttribute('data-prefers-color-scheme')
        }
        set(() => ({
          isDark: isDark,
          darkMode: isDark ? 'dark' : 'light',
        }))
      },
    }),
    {
      name: 'useGlobalStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default globalState

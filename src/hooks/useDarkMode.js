import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (darkMode) => {

    const [someValue, setSomeValue] = useLocalStorage (darkMode)

    return [someValue]

}
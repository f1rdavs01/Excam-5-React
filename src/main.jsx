
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './config/mui-config.js'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  
)

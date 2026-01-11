import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { loadGtag, pageview } from './ga'

function Root() {
  useEffect(() => {
    loadGtag()
    pageview(window.location.pathname)
  }, [])

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)

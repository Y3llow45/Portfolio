import { StrictMode, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { pageview } from './ga'

function Root() {
  const hasTrackedInitial = useRef(false);

  useEffect(() => {
    if (!hasTrackedInitial.current) {
      pageview(window.location.pathname + window.location.search);
      hasTrackedInitial.current = true;
    }
  }, []);

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)

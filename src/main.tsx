import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import { RootStore } from "./Store/RootStore.ts";
import { RootStoreContext } from './Store/RootStoreContext.ts';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RootStoreContext.Provider value={new RootStore()}>
            <App/>
        </RootStoreContext.Provider>
  </StrictMode>
)

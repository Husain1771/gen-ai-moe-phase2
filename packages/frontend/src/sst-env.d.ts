/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_REGION: string
  readonly VITE_APP_USER_POOL_ID: string
  readonly VITE_APP_USER_POOL_CLIENT_ID: string
  readonly VITE_WEBSOCKET_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
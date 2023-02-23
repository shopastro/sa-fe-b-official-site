declare module 'classname'
declare module 'react-file-viewer'

declare global {
  interface Window {
    dataLayer: any
    location: { host: string }
  }
}

import desktop_css from './PageFooter-desktop.css'
import mobile_css from './PageFooter-mobile.css'
import tablet_css from './PageFooter-tablet.css'
import tipper_css from './tipper.css'
import Device from 'utils/Device'


let s = tipper_css

if (true) s = Device.getPlatformCSS(desktop_css, mobile_css, tablet_css)

export default s

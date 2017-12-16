import desktop_css from './PageHeader-desktop.css'
import mobile_css from './PageHeader-mobile.css'
import tablet_css from './PageHeader-tablet.css'
import tipper_css from './tipper.css'
import Device from 'utils/Device'


let s = tipper_css

if (true) s = Device.getPlatformCSS(desktop_css, mobile_css, tablet_css)

export default s

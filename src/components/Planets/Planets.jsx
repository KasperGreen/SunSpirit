import React, { PureComponent } from 'react'
import s from './css'

export default class Planets extends PureComponent {
  render () {

    return (
      <figure
        className={s.wrapper}
      >
        <svg
          className={s.svg}
          version="1.1"
          viewBox="0 0 2140.23 1081.31"
        >
          <g id="layer_x0020_1">
            <path
              className={s.fill}
              d="M884.54 607.46c34.37,-2.88 61.37,-31.69 61.37,-66.81 0,-35.11 -27,-63.92 -61.37,-66.8 -13.15,-62.87 -44.47,-119.07 -88.23,-162.83 -58.77,-58.77 -139.97,-95.13 -229.64,-95.13 -89.67,0 -170.87,36.36 -229.64,95.13 -51.51,51.51 -85.8,120.27 -93.48,196.85 -15.14,3.24 -26.49,16.69 -26.49,32.78 0,16.1 11.35,29.55 26.49,32.78 7.68,76.59 41.97,145.35 93.48,196.86 58.77,58.77 139.97,95.12 229.64,95.12 89.67,0 170.87,-36.35 229.64,-95.12 43.76,-43.76 75.08,-99.96 88.23,-162.83zm-317.87 75.67c78.69,0 142.48,-63.79 142.48,-142.48 0,-78.68 -63.79,-142.47 -142.48,-142.47 -78.68,0 -142.48,63.79 -142.48,142.47 0,78.69 63.8,142.48 142.48,142.48zm0 381.41c144.67,0 275.65,-58.63 370.45,-153.43 80.22,-80.22 134.54,-186.35 149.36,-304.75 -30.6,-6.22 -53.62,-33.28 -53.62,-65.71 0,-32.42 23.02,-59.48 53.62,-65.7 -14.82,-118.4 -69.14,-224.53 -149.36,-304.74 -94.8,-94.8 -225.78,-153.45 -370.45,-153.45 -144.67,0 -275.65,58.65 -370.45,153.45 -87.77,87.77 -144.54,206.55 -152.48,338.51 13.52,4.32 23.31,16.99 23.31,31.93 0,14.95 -9.79,27.61 -23.31,31.94 7.94,131.95 64.71,250.75 152.48,338.52 94.8,94.8 225.78,153.43 370.45,153.43zm1106.28 -471.48c14.47,0 27.58,-5.87 37.06,-15.35 9.48,-9.48 15.35,-22.59 15.35,-37.06 0,-14.49 -5.86,-27.6 -15.32,-37.08l-0.03 0.03c-9.48,-9.48 -22.59,-15.35 -37.06,-15.35 -14.49,0 -27.6,5.86 -37.08,15.32 -9.46,9.48 -15.32,22.59 -15.32,37.08 0,14.47 5.87,27.58 15.35,37.06l-0.03 0.03c9.48,9.46 22.59,15.32 37.08,15.32zm60.76 8.35c-15.54,15.55 -37.03,25.17 -60.76,25.17 -23.67,0 -45.13,-9.62 -60.69,-25.17l-0.06 0c-15.55,-15.54 -25.17,-37.03 -25.17,-60.76 0,-23.67 9.62,-45.13 25.17,-60.69l0.06 -0.06c15.56,-15.55 37.02,-25.17 60.69,-25.17 23.73,0 45.22,9.62 60.76,25.17l0 0.06c15.55,15.56 25.17,37.02 25.17,60.69 0,23.73 -9.62,45.22 -25.17,60.76zm-60.76 136.22c54.4,0 103.65,-22.05 139.29,-57.69 29.32,-29.32 49.43,-67.84 55.65,-110.85 -9.46,-5.93 -15.76,-16.45 -15.76,-28.44 0,-11.99 6.3,-22.5 15.76,-28.43 -6.22,-43.02 -26.33,-81.54 -55.65,-110.85 -35.64,-35.65 -84.89,-57.69 -139.29,-57.69 -54.39,0 -103.64,22.04 -139.28,57.69 -35.65,35.64 -57.69,84.89 -57.69,139.28 0,54.4 22.04,103.65 57.69,139.29 35.64,35.64 84.89,57.69 139.28,57.69zm151.14 -45.84c-38.68,38.68 -92.12,62.6 -151.14,62.6 -59.01,0 -112.45,-23.92 -151.13,-62.6 -38.68,-38.68 -62.61,-92.12 -62.61,-151.14 0,-59.01 23.93,-112.45 62.61,-151.13 38.68,-38.68 92.12,-62.61 151.13,-62.61 59.02,0 112.46,23.93 151.14,62.61 31.21,31.21 52.81,72.04 59.99,117.65 0.52,-0.03 1.05,-0.04 1.58,-0.04 18.52,0 33.52,15.01 33.52,33.52 0,18.52 -15,33.53 -33.52,33.53 -0.53,0 -1.06,-0.02 -1.58,-0.04 -7.18,45.61 -28.78,86.44 -59.99,117.65zm-875.12 231.16c-97.84,97.84 -233.01,158.36 -382.3,158.36 -149.29,0 -284.46,-60.52 -382.3,-158.36 -90.6,-90.6 -149.19,-213.21 -157.36,-349.4 -15.39,-3.03 -27.01,-16.61 -27.01,-32.9 0,-16.28 11.62,-29.86 27.01,-32.89 8.17,-136.19 66.76,-258.8 157.36,-349.4 97.84,-97.84 233.01,-158.36 382.3,-158.36 149.29,0 284.46,60.52 382.3,158.36 82.98,82.98 139.1,192.81 154.24,315.33 35.49,1.72 63.75,31.04 63.75,66.96 0,35.92 -28.26,65.24 -63.75,66.97 -15.14,122.52 -71.26,232.35 -154.24,315.33zm-81.41 -448.39c-31.65,5.37 -55.75,32.92 -55.75,66.09 0,33.18 24.1,60.73 55.75,66.1 -12.8,58.52 -42.24,110.83 -83.1,151.69 -55.73,55.73 -132.73,90.21 -217.79,90.21 -85.05,0 -162.06,-34.48 -217.79,-90.21 -48.63,-48.62 -81.07,-113.46 -88.55,-185.7 13.76,-4.18 23.78,-16.96 23.78,-32.09 0,-15.12 -10.02,-27.9 -23.78,-32.08 7.48,-72.24 39.92,-137.08 88.55,-185.71 55.74,-55.73 132.74,-90.2 217.79,-90.2 85.06,0 162.06,34.47 217.79,90.2 40.86,40.87 70.3,93.17 83.1,151.7zm1239.15 99.62c18.51,0 33.52,-15.01 33.52,-33.53 0,-18.51 -15.01,-33.52 -33.52,-33.52 -18.52,0 -33.53,15.01 -33.53,33.52 0,18.52 15.01,33.53 33.53,33.53zm-110.53 0c18.52,0 33.53,-15.01 33.53,-33.53 0,-18.51 -15.01,-33.52 -33.53,-33.52 -18.51,0 -33.52,15.01 -33.52,33.52 0,18.52 15.01,33.53 33.52,33.53zm-1854.13 0c18.52,0 33.53,-15.01 33.53,-33.53 0,-18.51 -15.01,-33.52 -33.53,-33.52 -18.51,0 -33.52,15.01 -33.52,33.52 0,18.52 15.01,33.53 33.52,33.53zm1178.91 33.52c37.02,0 67.05,-30.02 67.05,-67.05 0,-37.03 -30.03,-67.05 -67.05,-67.05 -37.03,0 -67.05,30.02 -67.05,67.05 0,37.03 30.02,67.05 67.05,67.05z"
            />
          </g>
        </svg>


      </figure>
    )
  }

}

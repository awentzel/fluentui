import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <g>
        <path d="M9.453 19.547c.14.146.3.258.48.336.02.008.04.01.058.018l.902-.901H10.5a.477.477 0 0 1-.352-.148A.48.48 0 0 1 10 18.5v-7a.48.48 0 0 1 .148-.352A.481.481 0 0 1 10.5 11h8.393l1-1H10.5c-.198 0-.387.04-.566.117s-.34.188-.48.328c-.147.146-.259.309-.337.489S9 11.302 9 11.5v7c0 .198.04.387.117.566s.19.34.336.48z" />
        <path d="M16 13.892v-2.33L13.852 13H12v4h.893l1-1H13v-2h1.148l.852-.563v1.456zm7.854-5.745a.5.5 0 0 0-.707 0l-15 15a.5.5 0 1 0 .707.707L12.707 20H14v1h-1c-.33 0-.5.23-.5.5 0 .253.214.5.5.5h6c.294 0 .5-.212.5-.5 0-.288-.212-.5-.5-.5h-1v-1h3.5c.197 0 .387-.04.566-.117s.342-.19.489-.336c.14-.14.25-.3.328-.48S23 18.697 23 18.5v-7c0-.198-.04-.387-.117-.566s-.188-.343-.328-.489c-.053-.05-.119-.075-.175-.117l1.474-1.474a.5.5 0 0 0 0-.707zM17 21h-2v-1h2v1zm4.852-9.852c.097.1.148.217.148.352v7c0 .136-.05.253-.148.352A.48.48 0 0 1 21.5 19h-7.793l1.256-1.256 1.038.694v-1.731l.797-.798.811.567c.26-.463.391-.955.391-1.476 0-.089-.025-.173-.033-.26l.862-.862c.006.021.016.042.022.063.098.347.149.7.149 1.059s-.05.712-.148 1.059c-.1.346-.24.675-.422.988l.82.578a4.95 4.95 0 0 0 .559-3.996 5.036 5.036 0 0 0-.196-.535l2.06-2.06a.51.51 0 0 1 .179.114z" />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
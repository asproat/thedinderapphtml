import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BrandsThreads.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 3:388 */
export const BrandsThreads: FC<Props> = memo(function BrandsThreads(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}   onClick={ () => window.open("https://www.threads.net/@dinderinstgram", '_blank')}>
      <div className={`${props.classes?.vector || ''} ${classes.vector}`}>
        {props.swap?.vector || <VectorIcon className={classes.icon} />}
      </div>
    </div>
  );
});

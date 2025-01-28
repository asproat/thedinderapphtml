import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BrandsBluesky.module.css';
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
export const BrandsBluesky: FC<Props> = memo(function BrandsBluesky(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}  
      onClick={ () => window.open("https://bsky.app/profile/dinderbluesky.bsky.social", '_blank')}>
      <div className={`${props.classes?.vector || ''} ${classes.vector}`}>
        {props.swap?.vector || <VectorIcon className={classes.icon} />}
      </div>
    </div>
  );
});

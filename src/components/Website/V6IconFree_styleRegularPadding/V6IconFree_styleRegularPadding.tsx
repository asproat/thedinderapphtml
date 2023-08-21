import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './V6IconFree_styleRegularPadding.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    icon?: ReactNode;
  };
}
/* @figmaId 115:281 */
export const V6IconFree_styleRegularPadding: FC<Props> = memo(function V6IconFree_styleRegularPadding(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.icon != null ? props.text?.icon : <div className={classes.icon}>smile</div>}
    </div>
  );
});

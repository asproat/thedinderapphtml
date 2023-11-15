import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './MenuMenu_Alt_02.module.css';
import { VectorIconPlumBar } from '../VectorIconPlumBar';

interface Props {
  className?: string;
}
/* @figmaId 106:169 */
export const MenuMenu_Alt_02: FC<Props> = memo(function MenuMenu_Alt_02(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIconPlumBar className={classes.icon} />
      </div>
    </div>
  );
});

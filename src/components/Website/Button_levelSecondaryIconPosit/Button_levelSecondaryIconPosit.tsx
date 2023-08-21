import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_levelSecondaryIconPosit.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3:31 */
export const Button_levelSecondaryIconPosit: FC<Props> = memo(function Button_levelSecondaryIconPosit(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.button}>Button</div>
    </button>
  );
});

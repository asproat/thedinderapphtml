import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import classes from './HomeLogo.module.css';
import { Group3Icon } from './Group3Icon.js';
import { Link } from 'react-router-dom';

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
/* @figmaId 3:392 */
export const HomeLogo: FC<Props> = memo(function HomeLogo(props = {}) {
  return (
    <div className={classes.group3}>
      <Link className={classes.topLink} to="/home">
        <div className={classes.group2}>
          <Group3Icon className={classes.icon} />
        </div>
        <div className={classes.thedinderappCom}>thedinderapp.com</div>
      </Link>
    </div>

  );
});

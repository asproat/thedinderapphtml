import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import classes from './TopLink.module.css';

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
export const TopLink: FC<Props> = memo(function TopLink(props = {}) {
  return (
    <div className={classes.topLink} onClick={() => window.history.pushState({}, "", "/newPathname2")}>
    <h1>TESTTOPLINK</h1>
  </div>

  );
});

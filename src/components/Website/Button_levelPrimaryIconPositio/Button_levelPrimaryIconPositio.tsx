import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_levelPrimaryIconPositio.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 3:21 */
export const Button_levelPrimaryIconPositio: FC<Props> = memo(function Button_levelPrimaryIconPositio(props = {}) {
  return (
    <input type="submit" className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}/>
  );
});

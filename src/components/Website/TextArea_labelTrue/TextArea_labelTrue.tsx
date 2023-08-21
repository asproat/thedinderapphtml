import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TextArea_labelTrue.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 3:362 */
export const TextArea_labelTrue: FC<Props> = memo(function TextArea_labelTrue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
      <div className={classes.input}>
        <div className={classes.pleaseEnterYourMessage}>Please enter your message</div>
      </div>
    </div>
  );
});

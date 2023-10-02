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
  name?: string;
}
/* @figmaId 3:362 */
export const TextArea_labelTrue: FC<Props> = memo(function TextArea_labelTrue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
      <textarea className={classes.input} name={props.name != null ? props.name : "name"}
      id={props.name != null ? props.name : "name"} placeholder={props.name != null ? props.name : "name"}
      />
    </div>
  );
});

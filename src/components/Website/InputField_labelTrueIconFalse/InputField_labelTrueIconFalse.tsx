import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './InputField_labelTrueIconFalse.module.css';

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
/* @figmaId 3:321 */
export const InputField_labelTrueIconFalse: FC<Props> = memo(function InputField_labelTrueIconFalse(props = {}) {
  
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
      <div className={classes.input}>
        <input type="text" className={classes.placeholder} name={props.name != null ? props.name : "name"}
        id={props.name != null ? props.name : "name"} placeholder={props.name != null ? props.name : "name"}
        />
      </div>
    </div>
  );
});

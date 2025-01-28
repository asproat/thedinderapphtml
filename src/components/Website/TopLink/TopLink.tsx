import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import classes from './TopLink.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  to: string;
  linkLabel: string;
  classes?: {
    vector?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}

/* @figmaId 3:392 */
export const TopLink: FC<Props> = memo(function TopLink(props = {
  to: '/faqs', 
  linkLabel: 'Topo Link'
}) {
  const navigate = useNavigate();
  const handleClick = (to: string) => {
    navigate(to);
  };
  return (
    <div className={classes.topLink} onClick={() => handleClick(props.to)}>{props.linkLabel}</div>

  );
});

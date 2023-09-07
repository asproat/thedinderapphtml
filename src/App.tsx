import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Website } from './components/Website/Website.js';

interface Props {
  className?: string;
}

console.log("in app.tsx")

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Website />
    </div>
  );
});

console.log("end app.tsk")
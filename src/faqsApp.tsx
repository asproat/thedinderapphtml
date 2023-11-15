import { memo } from 'react';
import type { FC } from 'react';

import classes from './Faqs.module.css';
import resets from './components/_resets.module.css';
import { FaqsAppComponent } from './components/Faqs/Faqs.js';

interface Props {
  className?: string;
}

console.log("in faqsApp.tsx")

export const FaqsApp: FC<Props> = memo(function FaqsApp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FaqsAppComponent />
    </div>
  );
});

console.log("end faqsApp.tsk")
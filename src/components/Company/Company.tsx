import { memo } from 'react';
import type { FC } from 'react';
import { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CRow } from '@coreui/react';
import classes from '../Website/Website.module.css';

interface Props {
  className?: string;
}

export const CompanysAppComponent: FC<Props> = memo(function CompanysAppComponent() {

  console.log("start company")

  console.log("return actual website")
  /* @figmaId 154:24 */
  return (
    <div className={classes.company}>
      <CRow>
        <div className={classes.headline2}>Company</div>
        <div className={classes.headline3}>About Us</div>
        <div className={classes.copy}>The Dinder App was created based on a tumblr post for which the author is currently unknown. It looked like this:
          <div className={classes.chickendinder} />
        </div>
        <div className={classes.copy}>Like many people, the founder thought this is a thing that should really exist. They were also amazed to discover that it, in fact, did not exist.</div>
        <div className={classes.headline3}>Our Mission</div>
        <div className={classes.copy}>To sigificanlty decrease frustration and arguments about restaurant choices for couples and larger groups by providing a simple, efficient, and inexpensive way for each person to share their preferences.</div>
        <div className={classes.headline3}>Our Vision</div>
        <div className={classes.copy}>Elegant, useful, and reliable software created by people whose efforts and contributions are recognized, celebrated, and compensated spectacularly.</div>
      </CRow>
    </div>
  );
});




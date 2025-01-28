import { memo, useEffect } from 'react';
import type { FC } from 'react';
import { useState } from 'react';
import classes from './components/Website/Website.module.css';
import resets from './components/_resets.module.css';
import { Website } from './components/Website/Website.js';
import { FaqsAppComponent } from './components/Faqs/Faqs.js';
import { DinderForm } from './components/DinderForm/DinderForm.js';
import { createBrowserHistory } from 'history';
import { Group3Icon } from './components/Website/Group3IconA';
import { Link, Route, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { MenuMenu_Alt_02 } from './components/Website/MenuMenu_Alt_02/MenuMenu_Alt_02';
import { HomeLogo } from './components/Website/HomeLogo/HomeLogo';
import { BrandsFacebook } from './components/Website/BrandsFacebook/BrandsFacebook';
import { BrandsYouTube } from './components/Website/BrandsYouTube/BrandsYouTube';
import { BrandsInstagram } from './components/Website/BrandsInstagram/BrandsInstagram';
import { BrandsBluesky } from './components/Website/BrandsBluesky/BrandsBluesky';
import { BrandsThreads } from './components/Website/BrandsThreads/BrandsThreads';
import { BrandsTwitter } from './components/Website/BrandsTwitter/BrandsTwitter';
import { TopLink } from './components/Website/TopLink/TopLink';
          
const history = createBrowserHistory();

interface Props {
  className?: string;
  dinder: any;
  setDinder(d: any): void;
  dinderinvitecode: string;
  setDinderInviteCode(d: string): void;
  page: string;
  setPage(d: string): void;
}

console.log("in app.tsx")

class DinderHeader extends React.Component {
  render() {
    return (
      <div className={classes.callToAction} >
        <div className={classes.burgermenu} >
          <MenuMenu_Alt_02 />
        </div>
          <HomeLogo/>
          <div className={classes.links}>
            <TopLink to="/faqs" linkLabel='Company' />
            <TopLink to="/faqs" linkLabel='Privacy Policy' />
            <TopLink to="/faqs" linkLabel='FAQs'/>
            <BrandsFacebook />
            <BrandsYouTube />
            <BrandsInstagram />
            <BrandsBluesky />
            <BrandsThreads />
            <BrandsTwitter />
          </div>
        </div>
    );
  }
}

class DinderFooter extends React.Component {
  render() {
    return (
      <div className={classes.appDownload}>
        <Link className={classes.topLink} to="/home" >
        <div className={classes.frame2757}>
        <div className={classes.group32}>
            <Group3Icon className={classes.icon} />
          </div>
        </div>
        </Link>
        <div className={classes.frame2751}>          
          <Link to="/faqs" className={classes.bottomLink}>Company</Link>
          <Link to="/faqs" className={classes.bottomLink}>Privacy policy</Link>
          <Link to="/faqs" className={classes.bottomLink}>FAQs</Link>
        </div>
      </div>
    );
  }
}

export const App : FC<Props> = memo(function App() {

  const [dinder, setDinder] = useState(null)

  const [dinderinvitecode, setDinderInviteCode] = useState("")

  const page = useLocation().pathname;
  console.log("Page is")
  console.log(page)
  
  if (page == "/faqs") {
    return (
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <DinderHeader />
        <FaqsAppComponent  />
        <DinderFooter />
      </div>
    );
  
  } else if (page == "/dinderform") {

  console.log("page now dinderform")
  console.log(dinder)
  
  return (
  <div className={`${resets.clapyResets} ${classes.root}`}>
      <DinderHeader />
      <DinderForm 
    dinder={dinder} setDinder={function (d: any): void {
      setDinder(d)
    }}
    dinderinvitecode={dinderinvitecode} setDinderInviteCode={function (d: string): void {
      setDinderInviteCode(d)
    }}
/>
<DinderFooter />
  </div>
);
} else {

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <DinderHeader />
      <Website 
      dinder={null} setDinder={function (d: any): void {
        setDinder(d)
      }}
      dinderinvitecode={dinderinvitecode} setDinderInviteCode={function (d: string): void {
        setDinderInviteCode(d)
      }}
 />
 <DinderFooter />
    </div>
  );
}
});

console.log("end app.tsk")

import { memo, useEffect } from 'react';
import type { FC } from 'react';
import { useState } from 'react';
import classes from './components/Website/Website.module.css';
import resets from './components/_resets.module.css';
import { Website } from './components/Website/Website.js';
import { FaqsAppComponent } from './components/Faqs/Faqs.js';
import { DinderForm } from './components/DinderForm/DinderForm.js';
import { Group3Icon } from './components/Website/Group3IconA';
import { Link, useLocation } from 'react-router-dom';
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
import { CompanysAppComponent } from './components/Company/Company';
          
console.log("in app.tsx")

interface Props {
  className?: string;
  dinder: any;
  setDinder(d: any): void;
  dinderinvitecode: string;
  setDinderInviteCode(d: string): void;
  page: string;
  setPage(d: string): void;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class DinderHeader extends React.Component {
  render() {
    return (
      <div className={classes.callToAction} >
        <div className={classes.burgermenu} >
          <MenuMenu_Alt_02 />
        </div>
          <HomeLogo/>
          <div className={classes.links}>
            <TopLink to="/company" linkLabel='Company' />
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
            <Group3Icon className={classes.bottonIcon} />
          </div>
        </div>
        </Link>
        <div className={classes.frame2751}>          
          <Link to="/company" className={classes.bottomLink}>Company</Link>
          <Link to="/faqs" className={classes.bottomLink}>Privacy policy</Link>
          <Link to="/faqs" className={classes.bottomLink}>FAQs</Link>
        </div>
      </div>
    );
  }
}


function hideMenu() {
  const menu = document.querySelectorAll('[class*="openMenu"]')[0];
  //menu?.classList.toggle('showMenu');
  menu.setAttribute("style", "display: none;");  
}

export const App : FC<Props> = memo(function App() {

  const [dinder, setDinder] = useState(null)

  const [dinderinvitecode, setDinderInviteCode] = useState("")

  const page = useLocation().pathname;
  console.log("Page is")
  console.log(page)
  
  if (page == "/faqs") {
    return (
      <div className={`${resets.clapyResets} ${classes.root}`} onClick={() => hideMenu()}>
        <ScrollToTop />
        <DinderHeader />
        <FaqsAppComponent  />
        <DinderFooter />
      </div>
    );
  
  } else if (page == "/company") {
    return (
      <div className={`${resets.clapyResets} ${classes.root}`} onClick={() => hideMenu()}>
        <ScrollToTop />
        <DinderHeader />
        <CompanysAppComponent  />
        <DinderFooter />
      </div>
    );
  
  } else if (page == "/dinderform") {

  console.log("page now dinderform")
  console.log(dinder)
  
  return (
  <div className={`${resets.clapyResets} ${classes.root}`} onClick={() => hideMenu()}>
        <ScrollToTop />
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
    <div className={`${resets.clapyResets} ${classes.root}`} onClick={() => hideMenu()}>
        <ScrollToTop />
        <DinderHeader />
      <Website 
        dinder={null} setDinder={function (d: any): void {
          setDinder(d);
        } }
        dinderinvitecode={dinderinvitecode} setDinderInviteCode={function (d: string): void {
          setDinderInviteCode(d);
        } } page={''} setPage={function (d: string): void {
          throw new Error('Function not implemented.');
        } } />
 <DinderFooter />
    </div>
  );
}
});

console.log("end app.tsk")

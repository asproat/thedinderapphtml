import { memo } from 'react';
import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import resets from '../../_resets.module.css';
import classes from './MenuMenu_Alt_02.module.css';
import { VectorIconPlumBar } from '../VectorIconPlumBar';
import { BrandsFacebook } from '../BrandsFacebook/BrandsFacebook';
import { BrandsBluesky } from '../BrandsBluesky/BrandsBluesky';
import { BrandsInstagram } from '../BrandsInstagram/BrandsInstagram';
import { BrandsThreads } from '../BrandsThreads/BrandsThreads';
import { BrandsTwitter } from '../BrandsTwitter/BrandsTwitter';
import { BrandsYouTube } from '../BrandsYouTube/BrandsYouTube';
import { TopLink } from '../TopLink/TopLink';

interface Props {
  className?: string;
}

/* @figmaId 106:169 */
export const MenuMenu_Alt_02: FC<Props> = memo(function MenuMenu_Alt_02(props = {}) {
  const showHideMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    const menu = document.querySelectorAll('[class*="openMenu"]')[0];
    console.log("menu display is visible:" + menu.checkVisibility());
    //menu?.classList.toggle('showMenu');
    if (menu.checkVisibility()) {
      menu.setAttribute("style", "display: none;");
    } else {
      menu.setAttribute("style", "display: inline-flex;");
    }
  }
  
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIconPlumBar  className={classes.icon} 
          onClick={ showHideMenu } 
        />
          <nav id="openMenu" className={classes.openMenu}>
            <TopLink to="/company" linkLabel='Company' />
            <TopLink to="/faqs" linkLabel='Privacy Policy' />
            <TopLink to="/faqs" linkLabel='FAQs'/>
            <BrandsFacebook />
            <BrandsYouTube />
            <BrandsInstagram />
            <BrandsBluesky />
            <BrandsThreads />
            <BrandsTwitter />
            </nav>
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC, SetStateAction } from 'react';
import ReactPlayer from 'react-player'

import resets from '../_resets.module.css';
import { BrandsFacebook } from './BrandsFacebook/BrandsFacebook.js';
import { BrandsInstagram } from './BrandsInstagram/BrandsInstagram.js';
import { BrandsTwitter } from './BrandsTwitter/BrandsTwitter.js';
import { BrandsYouTube } from './BrandsYouTube/BrandsYouTube.js';
import { Button_levelPrimaryIconPositio } from './Button_levelPrimaryIconPositio/Button_levelPrimaryIconPositio.js';
import { Button_levelSecondaryIconPosit } from './Button_levelSecondaryIconPosit/Button_levelSecondaryIconPosit.js';
import classes from './Website.module.css';
import { Frame2758Icon } from './Frame2758Icon.js';
import { Group3Icon } from './Group3Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import { InputField_labelTrueIconFalse } from './InputField_labelTrueIconFalse/InputField_labelTrueIconFalse.js';
import { MenuMenu_Alt_02 } from './MenuMenu_Alt_02/MenuMenu_Alt_02.js';
import { TextArea_labelTrue } from './TextArea_labelTrue/TextArea_labelTrue.js';
import { V6IconFree_styleRegularPadding } from './V6IconFree_styleRegularPadding/V6IconFree_styleRegularPadding.js';
import { VectorIconInstagram } from './VectorIconInstagram.js';
import { VectorIconTwitter } from './VectorIconTwitter.js';
import { VectorIconYouTube } from './VectorIconYouTube.js';
import { VectorIconFacebook } from './VectorIconFacebook.js';
import { VectorIconPlumBar } from './VectorIconPlumBar';


var darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
var videourl = 'https://youtu.be/l5_vsnhvX20'
if (darkmode === 'dark') {
  videourl = 'https://youtu.be/WXizbPusJ2c'
} 

interface Props {
  className?: string;
}

const mql = window.matchMedia('(max-width: 600px)');

let mobileView = mql.matches;
var videoWidth = "640px"
var videoHeight = "360px"

var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var preferDark = ""
var platform = navigator.platform
var isMobile = "no"
if (mobileView) {
  isMobile="yes"
  videoWidth=screenWidth + "px"
  videoHeight=9/16*screenWidth + "px"
}

/* @figmaId 154:24 */
export const Website: FC<Props> = memo(function Website(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.callToAction}>
        <div className={classes.burgermenu}>
          <MenuMenu_Alt_02 />
        </div>
        <div className={classes.group3}>
          <div className={classes.group2}>
            <GroupIcon2 className={classes.icon} />
          </div>
          <div className={classes.thedinderappCom}>thedinderapp.com</div>
        </div>
        <div className={classes.links}>
          <div className={classes.company}>Company</div>
          <div className={classes.privacyPolicy}>Privacy Policy</div>
          <div className={classes.fAQs}>FAQs</div>
        </div>

      </div>
      <div className={classes.split}>
        <div className={classes.frame2760}>
          <div className={classes.intro}>
            <div id="blah" className={classes.welcomeNameOfUser}>Welcome, [Name of User] {platform} {screenWidth}</div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              <div className={classes.textBlock3}>
                You&#39;ve been invited to help pick where to eat for [name of dinder] on [date] at [time].{' '}
              </div>
              <div className={classes.textBlock4}>Download the app and tap the invitation again to get started.</div>
            </div>
          </div>
          <div className={classes.downloadButtons}>
            <div>
          <a href="https://apps.apple.com/us/app/wawgfl/id1372632501?itsct=apps_box_badge&amp;itscg=30200" >
            <img className={classes.applebadge} src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1531008000" alt="Download on the App Store" ></img>
          </a>
          </div>
          <div>
          <a href='https://play.google.com/store/apps/details?id=com.sproatcentral.wawgfl&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className={classes.badge}/></a>
          </div>
          </div>
          <div className={classes.noThanksIMNotDownloadingYourAp}>No thanks, I’m not downloading your app</div>
        </div>
        <div className={classes.group4}>
          <div className={classes.iPhone13}>
            <div className={classes.blue}></div>
          </div>
        </div>  
      </div>
      <div className={classes.contentAndImage} >
          <ReactPlayer url={videourl}
            className={classes.image}          
            width={videoWidth}  height={videoHeight}
          />
        <div className={classes.intro2}>
          <div className={classes.joinTheDinderCommunityToday}>What is a Dinder?</div>
          <div className={classes.loremIpsumDolorSitAmetConsecte}>
            ***This is where I want to describe what a Dinder is. Bascially, it's an event where more
            than one person is going out to eat in an area at a specific date and time. The Dinder App 
            allows that information to be shared along with a list of nearby restaurants. Each person, 
            the host and everyone invited, gets to vote plus/like (+) or minus/dislike (-) on each 
            restaurant in the list. When the voting ends, the host uses the votes to select which 
            restaurant they'll use. This will be a longer video that plays like a commercial for the app.***
          </div>
        </div>
      </div>
      <div className={classes.featureRow}>
        <div className={classes.whyChooseDinder}>Why Choose Dinder?</div>
        <div className={classes.feature}>
          <div className={classes.rectangle1}></div>
          <div className={classes.frame2759}>
            <div className={classes.comprehensiveRestaurantDatabas}>***Fast and Easy To Use***</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte2}>
              ***I was thinking that this would give a quick how to list. "Pick a date and time, Pick a 
              central location (using the map or searching for a locattion), change the name if you want,
              Push the button to create the Dinder. Share it with anyone you like. They get a link to 
              download the app if they don't have it installed, or directly to the Dinder if they do.***
            </div>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes.rectangle14}></div>
          <div className={classes.frame2759}>
            <div className={classes.socialIntegration}>***use information to vote ***</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte5}>
              *** the following is available for each choice/restaurant 
              - Name
              - address 
              - rating (1-5 stars)
              - cost (1-4?5? $)
              - link to google maps entry 
              ***
            </div>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes.rectangle12}></div>
          <div className={classes.frame2759}>
            <div className={classes.personalizedRecommendations}>***Customize the choices***</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte3}>
              *** you can: 
                - include, exclude, or use only fast food locations (default is exclude) 
                - choose the distance from the chosen location to search 
                    (from ~1 mile/1.5 km to 30 miles/50km, default is 30 miles)
                - choose the maximum number or choices (from 10 to 30, default is 20, 
                    more than 20 is extra $0.99 charge for host)***
            </div>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes.rectangle13}></div>
          <div className={classes.frame2759}>
            <div className={classes.easyToUseInterface}>***add features***</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte4}>
              *** here are some extras you can add (each adds a $0.99 charge for the host)
              - add names to votes (option to allow comments)
              - add double plus (like X 2) and deal breakers (dislike x 2)
              - allow invited members to invite others ***
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contactForm}>
        <div className={classes.contactUs}>Contact us</div>
        <div className={classes.frame2754}>
          <div className={classes.frame2753}>
            <InputField_labelTrueIconFalse
              className={classes.inputField}
              text={{
                label: <div className={classes.label}>First name</div>,
              }}
            />
            <InputField_labelTrueIconFalse
              className={classes.inputField2}
              text={{
                label: <div className={classes.label2}>Last name</div>,
              }}
            />
          </div>
          <InputField_labelTrueIconFalse
            className={classes.inputField3}
            text={{
              label: <div className={classes.label3}>Email address</div>,
            }}
          />
          <TextArea_labelTrue
            className={classes.textArea}
            text={{
              label: <div className={classes.label4}>Your message</div>,
            }}
          />
          <Button_levelPrimaryIconPositio
            className={classes.button4}
            text={{
              button: <div className={classes.button3}>Submit message</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.appDownload}>
        <div className={classes.frame2757}>
          <div className={classes.group32}>
            <Group3Icon className={classes.icon} />
          </div>
        </div>
        <div className={classes.frame2751}>
          <div className={classes.company2}>Company</div>
          <div className={classes.privacyPolicy2}>Privacy policy</div>
          <div className={classes.fAQs2}>FAQs</div>
        </div>
      </div>
    </div>
  );
});


import { memo } from 'react';
import type { FC } from 'react';
import ReactPlayer from 'react-player'
import resets from '../_resets.module.css';
import { BrandsFacebook } from './BrandsFacebook/BrandsFacebook.js';
import { BrandsInstagram } from './BrandsInstagram/BrandsInstagram.js';
import { BrandsTwitter } from './BrandsTwitter/BrandsTwitter.js';
import { BrandsYouTube } from './BrandsYouTube/BrandsYouTube.js';
import { Button_levelPrimaryIconPositio } from './Button_levelPrimaryIconPositio/Button_levelPrimaryIconPositio.js';
import { Button_levelSecondaryIconPosit } from './Button_levelSecondaryIconPosit/Button_levelSecondaryIconPosit.js';
import classes from './Website.module.css';
import { Group3Icon } from './Group3Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { InputField_labelTrueIconFalse } from './InputField_labelTrueIconFalse/InputField_labelTrueIconFalse.js';
import { MenuMenu_Alt_02 } from './MenuMenu_Alt_02/MenuMenu_Alt_02.js';
import { TextArea_labelTrue } from './TextArea_labelTrue/TextArea_labelTrue.js';
import { V6IconFree_styleRegularPadding } from './V6IconFree_styleRegularPadding/V6IconFree_styleRegularPadding.js';
import { VectorIconInstagram } from './VectorIconInstagram.js';
import { VectorIconTwitter } from './VectorIconTwitter.js';
import { VectorIconYouTube } from './VectorIconYouTube.js';
import { VectorIconFacebook } from './VectorIconFacebook.js';
import { VectorIconPlumBar } from './VectorIconPlumBar';

import { Amplify, API } from 'aws-amplify';

interface Props {
  className?: string;
  page?: string;
  setPage(d: string): void;
}

export const Website: FC<Props> = memo(function Website( {page, setPage} ) {
  
console.log("start website")

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'dinder',
        endpoint: 'https://jtytzf5c12.execute-api.us-east-1.amazonaws.com/Stage',
        custom_header: async () => {
          return { "x-api-key": 'dkDjxPPDyy2AG0kSj32882neBjtJRAH06gEHtOB2' };
          // Alternatively, with Cognito User Pools use this:
          // return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
          // return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
        }
      }
    ]
  }
});

var requestURL = window.location.href
var dinderCode = ""
var dinderinvitecode = ""
var re = /^\d{12}$/;
var urlparts = requestURL.split("/")
var lastPart = urlparts[urlparts.length - 1]
var invitewaitshow = "none"

console.log("check lastpart")
console.log(lastPart)
if (lastPart.match(re)) {
  invitewaitshow = "block"
  console.log("match code")
  dinderCode = lastPart
  dinderinvitecode = dinderCode.substring(8)

  const apiName = 'dinder';
  const path = '/' + dinderCode;
  const myInit = {
    headers: { "x-api-key": 'dkDjxPPDyy2AG0kSj32882neBjtJRAH06gEHtOB2' },
    response: true // OPTIONAL (return the entire Axios response object instead of only response.data)
  };

  console.log(dinderCode);
  console.log(dinderinvitecode);

  API.get(apiName, path, myInit)
    .then((response) => {
      console.log("response")
      console.log(response)
      if (response.data != null) {
        console.log(response.data)
        var dindername = response.data.dindername
        var dindertimestamp = response.data.dinderdate * 1000
        var dinderdate = new Date(dindertimestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        var dindertime = new Date(dindertimestamp).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
        console.log(dinderinvitecode)
        try {
          console.log(response.data.privateIds)
          var user = response.data.privateIds[dinderinvitecode]
          console.log(user)

          document.getElementById("welcome")!.innerText = `Welcome ${user.sentName},`
          document.getElementById("invitationdetails")!.innerText = 
            `You've been invited to help pick where to eat for ${dindername} on ${dinderdate} at ${dindertime}.`
        }
        catch(err) {
          console.log("data error")
          console.log(err)
        }
        document.getElementById("invitation")!.style.display = "flex"
        document.getElementById("invalid")!.style.display = "flex"
      }
      document.getElementById("invitationwait")!.style.display = "none"
    })
    .catch((error) => {
      console.log("get error")
      console.log(error)
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error.request)
      }
    });
}


var darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
var videourl = 'https://youtu.be/l5_vsnhvX20'

if (darkmode === 'dark') {
  videourl = 'https://youtu.be/WXizbPusJ2c'
}

const mql = window.matchMedia('(max-width: 600px)');

let mobileView = mql.matches;
var videoWidth = "500px"
var videoHeight = "297px"

var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (mobileView) {
  videoWidth = screenWidth + "px"
  videoHeight = 9 / 16 * screenWidth + "px"
}

console.log("return actual website")

/* @figmaId 154:24 */
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.callToAction}>
        <div className={classes.burgermenu}>
          <MenuMenu_Alt_02 />
        </div>
        <div className={classes.group3}  onClick={() => setPage("home")}>
          <div className={classes.group2}>
            <GroupIcon2 className={classes.icon} />
          </div>
          <div className={classes.thedinderappCom}>thedinderapp.com</div>
        </div>
        <div className={classes.links}>
          <div className={classes.topLink}>Company</div>
          <div className={classes.topLink}>Privacy Policy</div>
          <div onClick={() => setPage("faqs")} className={classes.topLink}>FAQs</div>
        </div>

      </div>
      <div className={classes.split}>
        <div className={classes.frame2760}>        
        <div className={classes.welcomeNameOfUser}>The Dinder App:
        <div className={classes.welcomeNameOfUser} style={{lineHeight: "36px", fontSize: "36px"}}>The answer to where are we going out to eat.</div>
        </div>
        <div id="invitationwait"  style={{display:invitewaitshow}}>
          <div className={classes.textBlock3}>Loading invitation...</div>
        <progress id="progress" style={{all:"revert"}} max="100" />
        </div>          
          <div id="invitation" className={classes.intro} style={{display: "none"}}>
            <div className={classes.welcomeNameOfUser} id="welcome"></div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              <div className={classes.textBlock3} id="invitationdetails">                
              </div>
              <div className={classes.textBlock4}>Download the app and tap the invitation again to get started.</div>
              <div className={classes.noThanksIMNotDownloadingYourAp}>No thanks, I’m not downloading your app</div>
            </div>
          </div>
          <div id="invalidDinder" className={classes.intro} style={{display: "none"}}>
            <div className={classes.welcomeNameOfUser} >Invalid Dinder ID</div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              Sorry, but that ID is not valid. It may have been deleted or used already. Contact the person who sent it to you to see if you can get a new one.
            </div>
          </div>
          <div className={classes.downloadButtons}>
            <div>
              <a href="itms-services://?action=download-manifest&amp;url=https://www.thedinderapp.com/app/manifest.plist" >
                <img className={classes.applebadge} src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1531008000" alt="Download on the App Store" ></img>
              </a>
            </div>
            <div>
              <a href='https://play.google.com/store/apps/details?id=com.sproatcentral.dinderandroiddemo'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className={classes.badge} /></a>
            </div>
          </div>
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
          width={videoWidth} height={videoHeight}
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
        <form className={classes.actualForm}>
        <div className={classes.frame2754}>
          <div className={classes.frame2753}>
            <InputField_labelTrueIconFalse
              className={classes.inputField}
              text={{
                label: <div className={classes.label}>First name</div>,
              }}
              name="First Name"
            />
            <InputField_labelTrueIconFalse
              className={classes.inputField2}
              text={{
                label: <div className={classes.label2}>Last name</div>,
              }}
              name="Last Name"
              />
          </div>
          <InputField_labelTrueIconFalse
            className={classes.inputField3}
            text={{
              label: <div className={classes.label3}>Email address</div>,
            }}
            name="Email Address"
          />
          <TextArea_labelTrue
            className={classes.textArea}
            text={{
              label: <div className={classes.label4}>Your message</div>,
            }}
            name="Your Message"
          />
          <Button_levelPrimaryIconPositio
            className={classes.button4}
            text={{
              button: <div className={classes.button3}>Submit message</div>,
            }}
          />
        </div>
</form>
      </div>
      <div className={classes.appDownload}>
        <div className={classes.frame2757}>
          <div className={classes.group32} onClick={() => setPage("home")}>
            <Group3Icon className={classes.icon} />
          </div>
        </div>
        <div className={classes.frame2751}>
          <div className={classes.bottomLink}>Company</div>
          <div className={classes.bottomLink}>Privacy policy</div>
          <div onClick={() => setPage("faqs")} className={classes.bottomLink}>FAQs</div>
        </div>
      </div>
      <script>
    </script>
    </div>
  );  
});




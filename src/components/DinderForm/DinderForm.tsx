import { memo } from 'react';
import type { FC } from 'react';
import ReactPlayer from 'react-player'
import resets from '../_resets.module.css';
import { BrandsFacebook } from '../Website/BrandsFacebook/BrandsFacebook.js';
import { BrandsInstagram } from '../Website/BrandsInstagram/BrandsInstagram.js';
import { BrandsTwitter } from '../Website/BrandsTwitter/BrandsTwitter.js';
import { BrandsYouTube } from '../Website/BrandsYouTube/BrandsYouTube.js';
import { Button_levelPrimaryIconPositio } from '../Website/Button_levelPrimaryIconPositio/Button_levelPrimaryIconPositio.js';
import classes from '../Website/Website.module.css';
import { Group3Icon } from '../Website/Group3Icon.js';
import { GroupIcon2 } from '../Website/GroupIcon2.js';
import { InputField_labelTrueIconFalse } from '../Website/InputField_labelTrueIconFalse/InputField_labelTrueIconFalse.js';
import { MenuMenu_Alt_02 } from '../Website/MenuMenu_Alt_02/MenuMenu_Alt_02.js';
import { TextArea_labelTrue } from '../Website/TextArea_labelTrue/TextArea_labelTrue.js';

import { Amplify, API } from 'aws-amplify';

interface Props {
  className?: string;
  page: string;
  setPage(d: string): void;
  dinder: any;
  setDinder(d: any): void;
}


export const DinderForm: FC<Props> = memo(function DinderForm({ page, setPage, dinder, setDinder }) {

  console.log("start website")
  console.log(dinder)

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
  document.getElementById("invitation")!.style.display = "flex"
  if (lastPart.match(re) && urlparts[urlparts.length - 2] == "invitation")  { 
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
          if (response.data == "expired") {
            console.log("expired")
            document.getElementById("expired")!.style.display = "flex"
          }
          else {
            setDinder(response.data)
            var dindername = response.data.dindername
            var dindertimestamp = response.data.dinderdate * 1000
            var dinderdate = new Date(dindertimestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
            var dindertime = new Date(dindertimestamp).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
            console.log(dinderinvitecode)
            try {
              console.log(response.data.privateIds)
              var user = response.data.privateIds[dinderinvitecode]
              console.log(user)

              document.getElementById("welcome")!.innerText = `Welcome ${decodeURIComponent(user.sentName)},`
              document.getElementById("invitationdetails")!.innerText =
                `You've been invited to help pick where to eat for ${dindername} on ${dinderdate} at ${dindertime}.`
              document.getElementById("invitation")!.style.display = "flex"
            }
            catch (err) {
              console.log("data error")
              console.log(err)
              document.getElementById("invalid")!.style.display = "flex"
            }
          }
        } else {
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
        document.getElementById("invalid")!.style.display = "flex"
        document.getElementById("invitationwait")!.style.display = "none"
      }
      );
  }

  if(lastPart == "dinderform") {
    setPage("dinderform")
  } else if(lastPart == "faqs") {
    setPage("faqs")
  } else {
    setPage("home")
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

  console.log("return dinder?")
  console.log(dinder)

  /* @figmaId 154:24 */
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.callToAction}>
        <div className={classes.burgermenu}>
          <MenuMenu_Alt_02 />
        </div>
        <div className={classes.group3} onClick={() => setPage("home")}>
          <div className={classes.group2}>
            <GroupIcon2 className={classes.icon} />
          </div>
          <div className={classes.thedinderappCom}>thedinderapp.com</div>
        </div>
        <div className={classes.links}>
          <div className={classes.topLink}>Company</div>
          <div className={classes.topLink}>Privacy Policy</div>
          <div onClick={() => setPage("faqs")} className={classes.topLink}>FAQs</div>
          <div>
          <BrandsFacebook/>
          <BrandsYouTube/>
          <BrandsInstagram/>
          <BrandsTwitter/>
          </div>
        </div>

      </div>
      <div className={classes.split}>
        <div className={classes.frame2760}>
          <div className={classes.welcomeNameOfUser}>The Dinder App: </div>
          <div className={classes.headline2}>Finally, the answer to "Where are we going out to eat?"</div>
          <div id="invitation" className={classes.intro}>
            <div className={classes.welcomeNameOfUser} id="welcome"></div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              <div className={classes.textBlock5}>
				XXX {dinder.dindername} XXX
              </div>
              <div className={classes.textBlock4}>Download the app and tap the invitation again to get started.</div>
              <div className={classes.noThanksIMNotDownloadingYourAp}>No thanks, I’m not downloading your app</div>
            </div>
          </div>
          <div id="invalid" className={classes.intro} style={{ display: "none" }}>
            <div className={classes.welcomeNameOfUser} >Invalid Dinder ID</div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              Sorry, but that ID is not valid. It may have been deleted or used already. Contact the person who sent it to you to see if you can get a new one.
            </div>
          </div>
          <div id="expired" className={classes.intro} style={{ display: "none" }}>
            <div className={classes.welcomeNameOfUser} >Dinder has ended</div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              Sorry, the voting for that Dinder has ended. You might contact the person who sent it to you to see the results.
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




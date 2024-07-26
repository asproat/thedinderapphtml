import { memo } from 'react';
import type { FC } from 'react';
import ReactPlayer from 'react-player'
import resets from '../_resets.module.css';
import { BrandsFacebook } from './BrandsFacebook/BrandsFacebook.js';
import { BrandsInstagram } from './BrandsInstagram/BrandsInstagram.js';
import { BrandsTwitter } from './BrandsTwitter/BrandsTwitter.js';
import { BrandsYouTube } from './BrandsYouTube/BrandsYouTube.js';
import classes from './Website.module.css';
import { Group3Icon } from './Group3Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { InputField_labelTrueIconFalse } from './InputField_labelTrueIconFalse/InputField_labelTrueIconFalse.js';
import { MenuMenu_Alt_02 } from './MenuMenu_Alt_02/MenuMenu_Alt_02.js';
import { TextArea_labelTrue } from './TextArea_labelTrue/TextArea_labelTrue.js';
import { Amplify, API } from 'aws-amplify';
import { SendEmailCommand, SendEmailResponse, SESClient } from '@aws-sdk/client-ses';
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

interface Props {
  className?: string;
  page?: string;
  setPage(d: string): void;
  dinder: any;
  setDinder(d: any): void;
  dinderinvitecode: string;
  setDinderInviteCode(d: string): void;
}

export const Website: FC<Props> = memo(function Website({ page, setPage, dinder, setDinder, dinderinvitecode, setDinderInviteCode }) {

  const apikey = import.meta.env.VITE_AWS_API_KEY;
  const awsregion = import.meta.env.VITE_AWS_REGION;
  const sesidentitypool = import.meta.env.VITE_AWS_SES_IDENTITY_POOL;
  const endpoint = import.meta.env.VITE_AWS_API_ENDPOINT;

  console.log("start website")

  function sendMessage() {

    var param = {
      Source: "support@thedinderapp.com",
      Destination: {
        ToAddresses: ["support@thedinderapp.com"]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: (document.forms[0].elements.namedItem('First Name')! as HTMLInputElement).value + " " +
              (document.forms[0].elements.namedItem('Last Name')! as HTMLInputElement).value + "<br/>" +
              (document.forms[0].elements.namedItem('Email Address')! as HTMLInputElement).value + "<br/>" +
              (document.forms[0].elements.namedItem('Your Message')! as HTMLInputElement).value
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Website Message"
        }
      }
    };

    var sc = new SESClient({
      region: awsregion,
      credentials:
      fromCognitoIdentityPool({
        clientConfig: { region: awsregion }, 
        identityPoolId: sesidentitypool
      })
    });

    sc.send(new SendEmailCommand(param),
      function (err, data) {
        if (err) {
          console.error(err, err.stack);
          document.getElementById("notSent")!.style.display = "block";
        } else {
          console.log(data);
          document.getElementById("sent")!.style.display = "block";
          }
      });
    };

  Amplify.configure({
    API: {
      endpoints: [
        {
          name: 'dinder',
          endpoint: endpoint,
          custom_header: async () => {
            return { "x-api-key": apikey };
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
  var detailshow = "flex"

  console.log("check lastpart")
  console.log(lastPart)
  if (lastPart.match(re) && urlparts[urlparts.length - 2] == "invitation") {
    invitewaitshow = "block"
    detailshow = "none"
    console.log("match code")
    dinderCode = lastPart
    dinderinvitecode = dinderCode.substring(8)

    const apiName = 'dinder';
    const path = '/' + dinderCode;
    console.log("check process")
    console.log(process.env.NODE_ENV)
    const myInit = {
      headers: { "x-api-key": apikey },
      response: true // OPTIONAL (return the entire Axios response object instead of only response.data)
    };

    console.log(dinderCode);
    console.log(dinderinvitecode);

    API.get(apiName, path, myInit)
      .then((response) => {
        console.log("response")
        console.log(response)
        if (response.data != null) {
          document.getElementById("dinderCopy")!.style.display = "none"
          console.log(response.data)
          if (response.data == "expired") {
            console.log("expired")
            document.getElementById("expired")!.style.display = "flex"
          }
          else {
            dinder = response.data
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

  if (lastPart == "faqs") {
    setPage("faqs")
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
            <BrandsFacebook />
            <BrandsYouTube />
            <BrandsInstagram />
            <BrandsTwitter />
          </div>
        </div>

      </div>
      <div className={classes.split} >
        <div className={classes.frame2760} >
          <div className={classes.headline1}>The Dinder App: </div>
          <div className={classes.headline2}>Finally, the answer to "Where are we going out to eat?"</div>
          <div id="invitationwait" style={{ display: invitewaitshow }}>
            <div className={classes.textBlock3}>Loading invitation...</div>
            <progress id="progress" style={{ all: "revert" }} max="100" />
          </div>
          <div id="invitation" className={classes.intro} style={{ display: "none" }}>
            <div className={classes.welcomeNameOfUser} id="welcome"></div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              <div className={classes.textBlock3} id="invitationdetails">
              </div>
              <div className={classes.textBlock4}>Download the app and tap the invitation again to get started.</div>
              <div onClick={() => { console.debug("gotoform"); console.log("click form"); setDinderInviteCode(dinderinvitecode); setDinder(dinder); setPage("dinderform"); }} className={classes.noThanksImNotDownloadingYourApp}>No thanks, I’m not downloading your app</div>
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
              Sorry, the voting for that Dinder has ended. You might contact the person who sent it to you to get the results.
            </div>
          </div>
          <div id="dinderCopy" className={classes.frame2763} style={{ display: detailshow }}>
            <div className={classes.headline3}>Are you tired of mindlessly scrolling trying to find the perfect place to share a meal?</div>
            <div className={classes.headline3}>Has this conversation ever happened:</div>
            <div className={classes.headline3}>“What about restaurant A?”</div>
            <div className={classes.headline3}>“I can’t eat there. Everything is fried. What about restaurant B?”</div>
            <div className={classes.headline3}>“No, went there last week.”</div>
            <div className={classes.headline3}>And the “Where do we eat?” carousel continues.</div>
            <div className={classes.headline3}>Finding the right restaurant that fits everyone’s needs may seem like finding the Holy Grail.</div>
            <div className={classes.headline3}>At Dinder, we’ve democratized dining out.</div>
            <div className={classes.headline3}>We know how difficult and exhausting it can be to get everyone to agree on where to eat. Sure, you can roll the dice and pick a random place. But what if no one likes it? What if there are no gluten-free options for Carol? What if Rick lives too far away? Isn’t Daryl allergic to shellfish?</div>
            <div className={classes.headline3}>If only there was an app that could help you make the best choice on where to eat that makes everyone happy.</div>
            <div className={classes.headline3}>Welcome to The Dinder App.</div>
            <div className={classes.headline3}>Spend less time agonizing and more time socializing.</div>
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
            <p>Dinder is your personal restaurant ranking system that is decided by the people you know. You choose a specific area of town, the time and the date of your event. Dinder takes this information and provides a list of nearby restaurants. Simply share this list with everyone in your dining party so they can help rate the choices. Everyone gets to vote up or down on every restaurant on the list and Dinder ranks your choices from best to worst. </p>
            <p>Whether you are the host or a guest, everyone can play.</p>
            <p>Bon Appetit!</p>
          </div>
        </div>
      </div>
      <div className={classes.featureRow}>
        <div className={classes.whyChooseDinder}>Why Choose Dinder?</div>
        <div className={classes.feature}>
          <div className={classes.rectangle1}></div>
          <div className={classes.frame2759}>
            <div className={classes.comprehensiveRestaurantDatabas}>It’s fast. It’s easy. And Dinder takes the guesswork out of where to break bread.</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte2}>
              Here’s How:
              <ol>
                <li>Pick a Date and Time</li>
                <li>Pick a Centralized Location Using the Map </li>
                <li>Push the Button and Create Your Dinder. </li>
              </ol>
              That’s it. The Dinder App will generate a link for you to share with everyone in your dinner party! Once they get they get the link, they can vote up or down on the choice. Crowdsource with the people you know to find the perfect place to dine.


            </div>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes.rectangle14}></div>
          <div className={classes.frame2759}>
            <div className={classes.socialIntegration}>The Dinder App provides all the information you’ll need to make your dining selections, including listings and locations, restaurant ratings and price rankings. </div>
            <div className={classes.loremIpsumDolorSitAmetConsecte5}>

            </div>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes.rectangle12}></div>
          <div className={classes.frame2759}>
            <div className={classes.personalizedRecommendations}> Customize your choice list by including type distance to your desired location, including or excluding fast food, limiting the number of choices and more!</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte3}>
            </div>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes.rectangle13}></div>
          <div className={classes.frame2759}>
            <div className={classes.easyToUseInterface}>For a small added fee you can get extra benefits, such as deal-breakers/double pluses, comments, and invites to friends of friends.</div>
            <div className={classes.loremIpsumDolorSitAmetConsecte4}>
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
            <div className={classes.button} onClick={async () => {
              console.log("before send message")
              await sendMessage();
              console.log("after send message")
            }} >Submit message</div>
            <div id="sent" className={classes.bottomLink} style={{ display: "none" }}>Message sent!</div>
            <div id="notSent" className={classes.bottomLink} style={{ display: "none" }}>Error sending message. Please try again!</div>
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




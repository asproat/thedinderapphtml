import { useState, memo } from 'react';
import type { FC } from 'react';
import ReactDomServer from 'react-dom/server';
import resets from '../_resets.module.css';
import { BrandsFacebook } from '../Website/BrandsFacebook/BrandsFacebook.js';
import { BrandsInstagram } from '../Website/BrandsInstagram/BrandsInstagram.js';
import { BrandsTwitter } from '../Website/BrandsTwitter/BrandsTwitter.js';
import { BrandsYouTube } from '../Website/BrandsYouTube/BrandsYouTube.js';
import { Button_levelPrimaryIconPosition } from '../Website/Button_levelPrimaryIconPositio/Button_levelPrimaryIconPositio.js';
import classes from '../Website/Website.module.css';
import { Group3Icon } from '../Website/Group3IconA.js';
import { GroupIcon2 } from '../Website/GroupIcon2.js';
import { InputField_labelTrueIconFalse } from '../Website/InputField_labelTrueIconFalse/InputField_labelTrueIconFalse.js';
import { MenuMenu_Alt_02 } from '../Website/MenuMenu_Alt_02/MenuMenu_Alt_02.js';
import { TextArea_labelTrue } from '../Website/TextArea_labelTrue/TextArea_labelTrue.js';

import { Amplify, API } from 'aws-amplify';
import { basename } from 'path';
import { UUID } from 'crypto';
import { int } from 'aws-sdk/clients/datapipeline';
import React from 'react';

interface Props {
  className?: string;
  dinder: any;
  setDinder(d: any): void;
  dinderinvitecode: string;
  setDinderInviteCode(d: string): void;
}

export const DinderForm: FC<Props> = memo(function DinderForm(this: any, { dinder, setDinder, dinderinvitecode, setDinderInviteCode }) {

  console.log("start website")
  console.log(dinder)

  Amplify.configure({
    API: {
      endpoints: [
        {
          name: 'dinder',
          endpoint: 'https://jtytzf5c12.execute-api.us-east-1.amazonaws.com/Stage',
          custom_header: async () => {
            return { "x-api-key": import.meta.env.VITE_AWS_API_KEY };
            // Alternatively, with Cognito User Pools use this:
            // return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
            // return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
          }
        }
      ]
    }
  });

  var requestURL = window.location.href
  var urlparts = requestURL.split("/")
  var lastPart = urlparts[urlparts.length - 1]
  var nocomment = "none"
  var noname = "none"

  if (dinder.dinderOptions.allowComments) {
    nocomment = "block"
  }

  if (dinder.dinderOptions.requireNames) {
    noname = "block"
  }

  console.log("check lastpart")
  console.log(lastPart)
  console.log("show invite")
  console.log(dinderinvitecode)
  console.log("end show")
  //document.getElementById("invitation")!.style.display = "flex"

  const mql = window.matchMedia('(max-width: 600px)');

  let mobileView = mql.matches;
  var videoWidth = "500px"
  var videoHeight = "297px"

  var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (mobileView) {
    videoWidth = screenWidth + "px"
    videoHeight = 9 / 16 * screenWidth + "px"
  }

  var placeList: string[] = []
  var placeDetails = JSON.parse("{\"a\":\"b\"}")
  var placeValues = JSON.parse("{\"a\":\"b\"}")
  const [isChecked, setIsChecked] = useState(false)
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  const allRated = () => {
    var allSet = Object.keys(placeValues).length == placeIds.length
    var noZero = Object.values(placeValues).filter((word) => word == 0).length == 0
    return allSet && noZero
  }

  var placeIds = Object.keys(dinder.choices).sort((n1, n2) => {
    if (n1 > n2) {
      return 1;
    }

    if (n1 < n2) {
      return -1;
    }

    return 0;
  })

  placeIds.forEach(function (key) {
    placeList.push(key.substring(4))
  });

  console.log("placelist")
  console.log(placeList)

  const apiName = 'dinder';
  const path = '/getPlaceDetails/' + dinder.id;
  const myInit = {
    headers: { "x-api-key": import.meta.env.VITE_AWS_API_KEY },
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    body: {
      "dinderid": dinder.dinderid,
      "placeList": placeList
    }
  };

  interface Score {
    score: int;
  }

  interface Scores {
    [key: string]: Score;
  }

  var dinderUpdate = {
    "dinderid": dinder.dinderid,
    "userid": crypto.randomUUID(),
    "scores": {} as Scores
  }

  const setRatingsPath = '/' + dinder.id + dinderinvitecode;
  const setRatingsInit = {
    useCors: true,
    withCredentials: false,
    headers: {
      "x-api-key": import.meta.env.VITE_AWS_API_KEY
    },
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    body: dinderUpdate
  };

  function ratingClick(placeId: string, rating: int) {
    if (placeValues[placeId] == rating) {
      placeValues[placeId] = 0
      if (dinder.dinderOptions.maxDoublePlus > 0) {
        document.getElementById(placeId + "2up")!.className = classes.choiceButton2UpOutline
      }
      document.getElementById(placeId + "1up")!.className = classes.choiceButton1UpOutline
      document.getElementById(placeId + "1down")!.className = classes.choiceButton1DownOutline
      if (dinder.dinderOptions.maxDealBreaker > 0) {
        document.getElementById(placeId + "2down")!.className = classes.choiceButton2DownOutline
      }
    } else {
      placeValues[placeId] = rating
      if (dinder.dinderOptions.maxDoublePlus > 0) {
        document.getElementById(placeId + "2up")!.className = classes.choiceButton2UpOutline
      }
      document.getElementById(placeId + "1up")!.className = classes.choiceButton1UpOutline
      document.getElementById(placeId + "1down")!.className = classes.choiceButton1DownOutline
      if (dinder.dinderOptions.maxDealBreaker > 0) {
        document.getElementById(placeId + "2down")!.className = classes.choiceButton2DownOutline
      }
      switch (rating) {
        case 2:
          document.getElementById(placeId + "2up")!.className = classes.choiceButton2UpSolid;
          break;
        case 1: ;
          document.getElementById(placeId + "1up")!.className = classes.choiceButton1UpSolid;
          break;
        case -1:
          document.getElementById(placeId + "1down")!.className = classes.choiceButton1DownSolid;
          break;
        case -2:
          document.getElementById(placeId + "2down")!.className = classes.choiceButton2DownSolid;
      }
    }
  }

  function getRatingForPlace(placeId: string) {
    var rating = 0

    if (document.getElementById(placeId + "2up")!.className == classes.choiceButton2UpSolid) {
      rating = 2
    } else if (document.getElementById(placeId + "2down")!.className == classes.choiceButton2DownSolid) {
      rating = -2
    } else if (document.getElementById(placeId + "1up")!.className == classes.choiceButton1UpSolid) {
      rating = 1
    } else if (document.getElementById(placeId + "1down")!.className == classes.choiceButton1DownSolid) {
      rating = -1
    }

    return rating
  }

  function mapLink(placeId: string) {
    return "https://www.google.com/maps/place/?q=place_id:" + placeId.substring(4)
  }

  function ratingDiv(placeId: string, rating: int) {
    return <div id={placeId + Math.abs(rating) + (rating > 0 ? "up" : "down")}
      className={
        (rating == 2 ? classes.choiceButton2UpOutline :
          (rating == 1 ? classes.choiceButton1UpOutline :
            (rating == -1 ? classes.choiceButton1DownOutline :
              classes.choiceButton2DownOutline
            )
          )
        )
      }
    ></div>
  }

  function setRatingClick(placeId: string, rating: int) {
    var ratingDiv = document.getElementById(placeId + Math.abs(rating) +
      (rating > 0 ? "up" : "down")
    )
    ratingDiv?.addEventListener("click", (event) => {
      ratingClick(placeId, rating);
    });
  }

  function sendRatings() {
    document.getElementById("submitsuccess")!.style.display = "none"
    document.getElementById("submiterror")!.style.display = "none"
    document.getElementById("submitbutton")!.style.display = "none"
    document.getElementById("submitwait")!.style.display = "block"

    for (const placeId of placeIds) {
      if (getRatingForPlace(placeId) != 0) {
        dinderUpdate.scores[placeId] = { score: getRatingForPlace(placeId) }
      }
    }


    API.post(apiName, setRatingsPath, setRatingsInit)
      .then((response) => {
        console.log("response")
        console.log(response)
        document.getElementById("choicesBlock")!.style.display = "none"
        document.getElementById("submitwait")!.style.display = "none"
        document.getElementById("submitsuccess")!.style.display = "block"
      })
      .catch((error) => {
        console.log("error")
        console.log(error)
        document.getElementById("submitbutton")!.style.display = "block"
        document.getElementById("submitwait")!.style.display = "none"
        document.getElementById("submiterror")!.style.display = "block"
      })
  }

  function getPlaces() {
    console.log("sending to get places")
    console.log(myInit)
    console.log(path)
    API.post(apiName, path, myInit)
      .then((response) => {
        console.log("responseDF")
        console.log(response)
        if (response.data != null) {
          console.log(response.data)
          placeDetails = response.data
          placeValues = {}
          document.getElementById("choiceswait")!.style.display = "none"
          document.getElementById("choices")!.outerHTML = ReactDomServer.renderToString(getDetailTable())
          document.getElementById("choicesBlock")!.style.display = "block"
          for (const placeId of placeIds) {
            if (dinder.dinderOptions.maxDoublePlus > 0) {
              setRatingClick(placeId, 2)
            } else {
              document.getElementById(placeId + "2up")!.style.display = "none"
            }
            setRatingClick(placeId, 1)
            setRatingClick(placeId, -1)
            if (dinder.dinderOptions.maxDealBreaker > 0) {
              setRatingClick(placeId, -2)
            } else {
              document.getElementById(placeId + "2down")!.style.display = "none"
            }
          }
        }
      })
      .catch((error) => {
        console.log("get errorDF")
        console.log(error)
        if (error.response) {
          console.log(error.response);
        } else {
          console.log(error.request)
        }
      }
      );
  };

  function getDetailTable(): React.JSX.Element {
    var placeRows = placeIds
    var details

    const tableElement = <table id="choices" >
      <thead>
        <th>Choice Info</th>
        <th colSpan={4} style={{ textAlign: "center" }}>Ratings</th>
      </thead>
      {placeRows.map(key => {
        details = placeDetails[key.substring(4)]

        return (
          <>
            <tr key={key + "row"} style={{ marginTop: "10px" }}>
              <td className={classes.choiceDetails}>
                {details.name}<br />
                <a href={mapLink(key)} target='_blank'>View Details</a>
              </td>
              <td className={classes.choiceCell}>
                {ratingDiv(key, 2)}
              </td>
              <td className={classes.choiceCell}>
                {ratingDiv(key, 1)}
              </td>
              <td className={classes.choiceCell}>
                {ratingDiv(key, -1)}
              </td>
              <td className={classes.choiceCell}>
                {ratingDiv(key, -2)}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid black" }} key={key + "row2"}>
              <td className={classes.choiceDetails} colSpan={5}>
                {details.formatted_address}<br />
                Price Level: {details.price_level == 0 ? "?" : "$".repeat(details.price_level)}<br />
                <div style={{ marginBottom: "10px" }} className={classes.choiceRatingDetails}>Rating:&nbsp;&nbsp;<span className={classes.bigStar}>{"*".repeat(details.rating)}</span>&nbsp;{details.rating}&nbsp;({details.user_ratings_total})</div>
              </td>
            </tr>
          </>
        )
      })}
    </table>

    return tableElement
  }

  console.log("return dinder?")
  console.log(dinder)

  const isZero = (value: number) => value == 0;

  function checkZero(value: number) {
    return value == 0;
  }

  /* @figmaId 154:24 */
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.nosplit}>
        <div className={classes.frame2760}>
          <div className={classes.headline1}>The Dinder App: </div>
          <div className={classes.headline2}>Finally, the answer to "Where are we going out to eat?"</div>
          <div className={classes.welcomeNameOfUser} id="welcome">
            Okay {dinder.privateIds[dinderinvitecode].sentName},
          </div>
          <div id='lastChance' className={classes.textBlock3} style={{ display: "block", marginBlockEnd: 0 }}>
            <p>You can use this webpage to rate the restaurants for {dinder.dindername}, but... </p>
            <ul>
              <li>you have to choose all your ratings now, you can't come back and finish</li>
              <li>you also can't change them later</li>
              <li>you won't be able to see what ratings others have given</li>
              <li>you won't be able to see the selected choice when voting has ended</li>
              <li style={{ display: noname }} >you can't change the your name from what was on invitation</li>
              <li style={{ display: nocomment }} >you can't leave comments</li>
            </ul>
            <p style={{ marginBottom: 8 }}>If you've changed your mind, you can download the app below and click the link you were sent again.</p>
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
            <p className={classes.noThanksImNotDownloadingYourApp} onClick={() => { console.debug("getPlaces"); document.getElementById("lastChance")!.style.display = "none"; document.getElementById("choiceswait")!.style.display = "block"; getPlaces(); }}>Otherwise, click here to see the choices.</p>
          </div>
          <div id="choiceswait" style={{ display: "none" }}>
            <div className={classes.textBlock3}>Loading choices...</div>
            <progress id="progress" style={{ all: "revert" }} max="100" />
          </div>
          <div id="choicesBlock" style={{ display: "none" }}>
            <div className={classes.textBlock3} style={{ display: "block", marginBlockEnd: 0 }}>
              <p>You can use this webpage to rate the restaurants for {dinder.dindername}. When you're finished, click the "Submit" button at the bottom of the list.</p>
            </div>
            <div id="choices">
            </div>
            <div id="skipAllChoices" className={classes.choiceDetails} style={{ display: "none", marginBlockEnd: 0 }}>
              <input type='checkbox' id='skipAllCheckbox' onChange={checkHandler} checked={isChecked} />&nbsp;<label htmlFor='skipAllCheckbox'> I understand that I have not rated all the choices and that I cannot rate them later.</label>
            </div>
            <div id="submitbutton" className={classes.button} onClick={() => { if (allRated() || isChecked) { sendRatings() } else { document.getElementById("skipAllChoices")!.style.display = "flex"; } }}>Submit Ratings</div>
          </div>
          <div id="submitwait" style={{ display: "none" }}>
            <div className={classes.textBlock3}>Saving ratings...</div>
            <progress id="progress" style={{ all: "revert" }} max="100" />
          </div>
          <div id="submitsuccess" className={classes.textBlock3} style={{ display: "none", marginBlockEnd: 0 }}>
            <p>Your ratings have been saved. Hopefully, the host will let you know when a final choice has been selected.</p>
          </div>
          <div id="submiterror" className={classes.textBlock3} style={{ display: "none", marginBlockEnd: 0 }}>
            <p>There was an issue saving your ratings. Please try again.</p>
          </div>
        </div>
      </div>
      <script>
      </script>
    </div>
  );
});




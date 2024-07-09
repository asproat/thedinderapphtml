import { Component, memo } from 'react';
import type { FC } from 'react';
import ReactDomServer from 'react-dom/server';
import resets from '../_resets.module.css';
import { BrandsFacebook } from '../Website/BrandsFacebook/BrandsFacebook.js';
import { BrandsInstagram } from '../Website/BrandsInstagram/BrandsInstagram.js';
import { BrandsTwitter } from '../Website/BrandsTwitter/BrandsTwitter.js';
import { BrandsYouTube } from '../Website/BrandsYouTube/BrandsYouTube.js';
import { Button_levelPrimaryIconPosition } from '../Website/Button_levelPrimaryIconPositio/Button_levelPrimaryIconPositio.js';
import classes from '../Website/Website.module.css';
import { Group3Icon } from '../Website/Group3Icon.js';
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
  page: string;
  setPage(d: string): void;
  dinder: any;
  setDinder(d: any): void;
  dinderinvitecode: string;
  setDinderInviteCode(d: string): void;
}

export const DinderForm: FC<Props> = memo(function DinderForm(this: any, { page, setPage, dinder, setDinder, dinderinvitecode, setDinderInviteCode }) {

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
  var urlparts = requestURL.split("/")
  var lastPart = urlparts[urlparts.length - 1]
  var nocomment = "none"
  var noname = "none"

  if(dinder.dinderOptions.allowComments) {
    nocomment = "block"
  }

  if(dinder.dinderOptions.requireNames) {
    noname = "block"
  }

  console.log("check lastpart")
  console.log(lastPart)
  console.log("show invite")
  console.log(dinderinvitecode)
  console.log("end show")
  //document.getElementById("invitation")!.style.display = "flex"

  if(lastPart == "dinderform") {
    setPage("dinderform")
  } else if(lastPart == "faqs") {
    setPage("faqs")
  } else {
    setPage("home")
  }

  var darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

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
  var choices = ""
  var placeIds = Object.keys(dinder.choices).sort((n1,n2) => {
    if (n1 > n2) {
        return 1;
    }

    if (n1 < n2) {
        return -1;
    }

    return 0;
})

placeIds.forEach(function (key){
  placeList.push(key.substring(4))
});

console.log("placelist")
console.log(placeList)


const apiName = 'dinder';
const path = '/getPlaceDetails';
const myInit = {
  headers: { "x-api-key": 'dkDjxPPDyy2AG0kSj32882neBjtJRAH06gEHtOB2' },
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  body: {
    placeList
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
    "x-api-key": 'dkDjxPPDyy2AG0kSj32882neBjtJRAH06gEHtOB2' },
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  body: dinderUpdate
};

function ratingClick(placeId: string, rating: int) {
  if(placeValues[placeId] == rating) {
    placeValues[placeId] = 0
    if(dinder.dinderOptions.maxDoublePlus > 0) {
      document.getElementById(placeId + "2up")!.className = classes.choiceButton2UpOutline
    }
    document.getElementById(placeId + "1up")!.className = classes.choiceButton1UpOutline
    document.getElementById(placeId + "1down")!.className = classes.choiceButton1DownOutline
    if(dinder.dinderOptions.maxDealBreaker > 0) {
      document.getElementById(placeId + "2down")!.className = classes.choiceButton2DownOutline    
    }
  } else {
    placeValues[placeId] = rating
    if(dinder.dinderOptions.maxDoublePlus > 0) {
      document.getElementById(placeId + "2up")!.className = classes.choiceButton2UpOutline
    }
    document.getElementById(placeId + "1up")!.className = classes.choiceButton1UpOutline
    document.getElementById(placeId + "1down")!.className = classes.choiceButton1DownOutline
    if(dinder.dinderOptions.maxDealBreaker > 0) {
      document.getElementById(placeId + "2down")!.className = classes.choiceButton2DownOutline
    }
    switch(rating) {
      case 2:
        document.getElementById(placeId + "2up")!.className = classes.choiceButton2UpSolid;
        break;
      case 1:;
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

  if(document.getElementById(placeId + "2up")!.className == classes.choiceButton2UpSolid) {
    rating = 2
  } else if(document.getElementById(placeId + "2down")!.className == classes.choiceButton2DownSolid) {
      rating = -2
  } else if(document.getElementById(placeId + "1up")!.className == classes.choiceButton1UpSolid) {
    rating = 1
  } else if(document.getElementById(placeId + "1down")!.className == classes.choiceButton1DownSolid) {
    rating = -1
  }

  return rating
}



function ratingClick2(placeId: string, rating: int) {
  console.log(placeId + ":" + rating);
}

function mapLink(placeId: string) {
  return "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=" + placeId
}


function ratingDiv(placeId: string, rating: int) {
    return <div id={placeId + Math.abs(rating) + (rating > 0 ? "up" : "down") }
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
  for(const placeId of placeIds ) {
    if(getRatingForPlace(placeId) != 0) {
      dinderUpdate.scores[placeId] = { score: getRatingForPlace(placeId) }
    }
  }


  API.post(apiName, setRatingsPath, setRatingsInit)
  .then((response) => {
    console.log("response")
    console.log(response)
  })
  .catch((error) => {
    console.log("error")
    console.log(error)
  })
}

function getPlaces() {
  API.post(apiName, path, myInit)
  .then((response) => {
    console.log("responseDF")
    console.log(response)
    if (response.data != null) {
      console.log(response.data)
      placeDetails=JSON.parse(response.data.body)
      for(const placeId of placeIds ) {
        placeValues[placeId] = 0
      }
      document.getElementById("choiceswait")!.style.display = "none"
      document.getElementById("choices")!.outerHTML = ReactDomServer.renderToString(getDetailTable())
      document.getElementById("choicesBlock")!.style.display="block"
      for(const placeId of placeIds ) {
        if(dinder.dinderOptions.maxDoublePlus > 0) {
          setRatingClick(placeId, 2)
        } else {
          document.getElementById(placeId + "2up")!.style.display = "none"
        }
        setRatingClick(placeId, 1)
        setRatingClick(placeId, -1)
        if(dinder.dinderOptions.maxDealBreaker > 0) {
          setRatingClick(placeId, -2)
        }else {
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

  function getDetailTable() : React.JSX.Element {
    var placeRows = placeIds
    var details 

    const tableElement =  <table id="choices" >
      <thead>
        <th>Choice Info</th>
        <th colSpan={4}>Ratings</th>
      </thead>
      {placeRows.map(key =>        
      {
        details = placeDetails[key.substring(4)]

        return (
          <tr key={key + "row"}>          
          <td className={classes.choiceDetails}>
            {details.name}<br/>
            {details.formatted_address}<br/>
            Price Level: {"$".repeat(details.price_level)}<br/>
            <div className={classes.choiceRatingDetails}>Rating:<span className={classes.bigStar}> {"*".repeat(details.rating)} </span>{details.rating} ({details.user_ratings_total})</div>
            <a href={mapLink(key)} target='_blank'>View Details</a>
          </td>
          <td className={classes.choiceCell}>
            { ratingDiv(key, 2) } 
          </td>
          <td className={classes.choiceCell}>
            { ratingDiv(key, 1) }
          </td>
          <td className={classes.choiceCell}>
            { ratingDiv(key, -1) } 
          </td>
          <td className={classes.choiceCell}>
            { ratingDiv(key, -2) } 
          </td>
        </tr>
      )
      })}
    </table>

    return tableElement
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
      <div className={classes.nosplit}>
        <script>
        </script>
        <div className={classes.frame2760}>
          <div className={classes.headline1}>The Dinder App: </div>
          <div className={classes.headline2}>Finally, the answer to "Where are we going out to eat?"</div>
            <div className={classes.welcomeNameOfUser} id="welcome">
              Okay { dinder.privateIds[dinderinvitecode].sentName },
            </div>
            <div className={classes.textBlock3} style={{display:"block", marginBlockEnd: 0 }}>
              <p>You can use this webpage to rate the restaurants for {dinder.dindername}, but... </p>
              <ul>
                <li>you have to rate them all now, you can't come back and finish</li>
                <li>you also can't change them later</li>
                <li>you won't be able to see what ratings others have given</li>
                <li style={{ display: noname }} >you can't change the your name from what was on invitation</li>
                <li style={{ display: nocomment }} >you can't leave comments</li>
              </ul>
              <p style={{marginBottom: 8 }}>If you've changed your mind, you can download the app below and click the link you were sent again.</p>
              <p className={classes.noThanksIMNotDownloadingYourApp} onClick={() => { console.debug("getPlaces"); document.getElementById("choiceswait")!.style.display = "block"; getPlaces(); }}>Otherwise, click here to see the choices.</p>
            </div>
          <div id="choiceswait" style={{ display: "none" }}>
            <div className={classes.textBlock3}>Loading choices...</div>
            <progress id="progress" style={{ all: "revert" }} max="100" />
          </div>
          <div id="choicesBlock" style={{ display: "none" }}>
          <div id="choices">
          </div>
          <div className={classes.button3} onClick={() => sendRatings()}>Submit Ratings</div>
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




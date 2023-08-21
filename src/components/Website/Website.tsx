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

interface Props {
  className?: string;
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
            <div className={classes.welcomeNameOfUser}>Welcome, [Name of User]</div>
            <div className={classes.youVeBeenInvitedToHelpPickWher}>
              <div className={classes.textBlock3}>
                You&#39;ve been invited to help pick where to eat for [name of dinder] on [date] at [time].{' '}
              </div>
              <div className={classes.textBlock4}>Download the app and tap the invitation again to get started.</div>
            </div>
          </div>
          <div className={classes.frame2758}>
            <Frame2758Icon className={classes.icon} />
          </div>
          <div className={classes.noThanksIMNotDownloadingYourAp}>No thanks, I’m not downloading your app</div>
        </div>
        <div className={classes.group4}>
          <div className={classes.iPhone13}>
            <div className={classes.screen}></div>
            <div className={classes.blue}></div>
          </div>
          <div className={classes.iPhone14}>
            <div className={classes.screen2}></div>
            <div className={classes.blue2}></div>
          </div>
        </div>
      </div>
      <div className={classes.contentAndImage}>
        <div className={classes.image}>
          <ReactPlayer url='https://youtu.be/l5_vsnhvX20' />
        </div>
        <div className={classes.intro2}>
          <div className={classes.joinTheDinderCommunityToday}>Join the Dinder community today!</div>
          <div className={classes.loremIpsumDolorSitAmetConsecte}>
            Lorem ipsum dolor sit amet consectetur. Nunc viverra neque enim libero aenean. Sed erat cursus erat leo non
            sed erat nunc ut. Imperdiet magna tincidunt cras interdum massa. Bibendum elit faucibus in scelerisque
            aliquam diam quam. Eget tincidunt eleifend ac.
          </div>
        </div>
      </div>
      <div className={classes.featureRow}>
      <div className={classes.whyChooseDinder}>Why Choose Dinder?</div>
          <div className={classes.feature}>
            <div className={classes.rectangle1}></div>
            <div className={classes.frame2759}>
              <div className={classes.comprehensiveRestaurantDatabas}>Comprehensive Restaurant Database</div>
              <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                Lorem ipsum dolor sit amet consectetur. Eu eget in scelerisque mauris commodo venenatis. Tempus
                habitasse penatibus senectus tortor praesent sollicitudin lacinia tellus et. Sed nunc sed tristique elit
                accumsan metus. Velit sed urna magna ac. Cum ac nisi fermentum pretium mattis.
              </div>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.rectangle12}></div>
            <div className={classes.frame27592}>
              <div className={classes.personalizedRecommendations}>Personalized Recommendations</div>
              <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                Lorem ipsum dolor sit amet consectetur. Eu eget in scelerisque mauris commodo venenatis. Tempus
                habitasse penatibus senectus tortor praesent sollicitudin lacinia tellus et. Sed nunc sed tristique elit
                accumsan metus. Velit sed urna magna ac. Cum ac nisi fermentum pretium mattis.
              </div>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.rectangle13}></div>
            <div className={classes.frame27593}>
              <div className={classes.easyToUseInterface}>Easy-to-Use Interface</div>
              <div className={classes.loremIpsumDolorSitAmetConsecte4}>
                Lorem ipsum dolor sit amet consectetur. Eu eget in scelerisque mauris commodo venenatis. Tempus
                habitasse penatibus senectus tortor praesent sollicitudin lacinia tellus et. Sed nunc sed tristique elit
                accumsan metus. Velit sed urna magna ac. Cum ac nisi fermentum pretium mattis.
              </div>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.rectangle14}></div>
            <div className={classes.frame27594}>
              <div className={classes.socialIntegration}>Social Integration</div>
              <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                Lorem ipsum dolor sit amet consectetur. Eu eget in scelerisque mauris commodo venenatis. Tempus
                habitasse penatibus senectus tortor praesent sollicitudin lacinia tellus et. Sed nunc sed tristique elit
                accumsan metus. Velit sed urna magna ac. Cum ac nisi fermentum pretium mattis.
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

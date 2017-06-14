import React from 'react';
import PageId from '../../Shared/PageId/PageId';

import svgIcons from '../../../data/icons.json';

const contactLinks = [
  {title: "Github", url: "https://github.com/dgading", icon: svgIcons.github},
  {title: "Twitter", url: "https://twitter.com/dgading", icon: svgIcons.twitter},
  {title: "Email", url: "mailto:danielgading@gmail.com", icon: svgIcons.email},
  {title: "LinkedIn", url: "https://www.linkedin.com/in/daniel-gading/", icon: svgIcons.linkedin}
];

export const ContactPage = ({match}) => (
  <div className={"content-container content-container--" + match.path.substr(1)}>
    <PageId pathname={match.path.substr(1)} title={"Contact"} />
    <div className={"content-container__content content-container__content--" + match.path.substr(1)}>
      <ul className="contact__item-container">
        {contactLinks.map(function(contactLink, i) {
          let icon = contactLink.icon;
          return (
            <li key={i}
                className={"contact__item contact__item--" + (contactLink.title).toLowerCase()}>
                <a className={"contact__link contact__link--" + (contactLink.title).toLowerCase()}
                    href={contactLink.url}>
                    <span className={"contact__icon contact__icon--" + (contactLink.title).toLowerCase()}
                      dangerouslySetInnerHTML={{__html: icon}} />
                    {contactLink.title}
                </a>
              </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default ContactPage;
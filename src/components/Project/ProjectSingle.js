import React from 'react';

export const ProjectSingle = ({match}) => (
  <div className={"content-container content-container--" + match.path.substr(1)}>
    <div className={"content-container__header content-container__header--" + match.path.substr(1)}>
      <h1 className={"content-container__title content-container__title--" + match.path.substr(1)}>About Me</h1>
    </div>
    <div className={"content-container__content content-container__content--" + match.path.substr(1)}>
      <p>
        Fixie disrupt typewriter lomo. Tilde vegan crucifix intelligentsia polaroid small batch squid, stumptown humblebrag viral narwhal raw denim godard mlkshk. Cliche forage DIY, kogi cardigan live-edge try-hard. Hell of vinyl air plant, iceland kitsch cred hot chicken locavore +1 humblebrag prism occupy fashion axe activated charcoal. Paleo flexitarian four loko, man braid hell of organic hoodie helvetica squid craft beer bicycle rights. Pok pok plaid chicharrones, vinyl drinking vinegar ennui organic try-hard four dollar toast farm-to-table authentic viral shabby chic brooklyn fixie. +1 fashion axe humblebrag echo park 3 wolf moon art party, hammock pitchfork. 
      </p>
      <p>
        Celiac marfa tumblr sartorial. Post-ironic vaporware irony, stumptown kinfolk selfies ennui. Bitters kogi scenester squid shabby chic. Hexagon schlitz gochujang messenger bag, af biodiesel williamsburg try-hard iceland kale chips tattooed street art taxidermy swag. Synth art party blue bottle occupy tousled, XOXO hexagon tilde swag pinterest. Gentrify messenger bag kitsch, skateboard gastropub shabby chic sriracha seitan direct trade blue bottle keffiyeh raclette scenester marfa keytar. Knausgaard ethical chartreuse air plant.
      </p>
      <p>
        Artisan kinfolk air plant iPhone readymade copper mug before they sold out hammock, fam lomo YOLO flannel truffaut. Fashion axe tacos keffiyeh gentrify health goth microdosing man braid coloring book. Asymmetrical neutra portland, thundercats single-origin coffee squid seitan pickled cray poutine. Bitters farm-to-table biodiesel, knausgaard vinyl brunch portland vexillologist crucifix scenester. Butcher etsy next level try-hard venmo. Normcore iceland bitters, unicorn cold-pressed crucifix selfies lo-fi retro jean shorts squid. Enamel pin vice gluten-free, farm-to-table helvetica church-key kinfolk poutine lyft gentrify mumblecore mixtape raw denim.
      </p>
      <p>
        Kitsch humblebrag listicle shoreditch man braid hexagon, hella fanny pack roof party coloring book taxidermy selvage vape knausgaard. Stumptown banh mi vexillologist bitters, whatever authentic semiotics narwhal health goth. Tattooed pinterest intelligentsia iPhone chillwave lumbersexual seitan, cronut plaid glossier live-edge vice helvetica ugh. Raw denim fashion axe glossier viral roof party butcher. Church-key thundercats pabst vaporware asymmetrical, ramps listicle sriracha shaman salvia. Wayfarers salvia 3 wolf moon cold-pressed heirloom, ugh meggings food truck air plant DIY tattooed cardigan distillery sartorial austin. +1 YOLO meggings kale chips mumblecore, mlkshk paleo you probably haven't heard of them leggings dreamcatcher messenger bag pabst palo santo.
      </p>
    </div>
  </div>
);

export default ProjectSingle;
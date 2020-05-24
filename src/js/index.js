import EventBuilder from './EventBuilder'
import { userEventMaker, EventArray } from './EventArray'
import createEventModel from './EventModel'

// Caraousel from Glider.js Library
new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slideToScroll: 1,
    
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
  });

//--------------------------------------------------------------------------------------
userEventMaker({
  Title: "Know Your Audience",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing.",
});
userEventMaker({
  Title: "Know Your Tactics",
  Day: "2020-04-02",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing.",
});
userEventMaker({
  Title: "Making Your Case to Congress",
  Day: "2020-11-21",
  Day2: "2020-12-02",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing.",
});
userEventMaker({
  Title: "Webinars",
  Day: "Presented live and on-demand",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing.",
});

userEventMaker({
  Title: "Making Your Case to Congress",
  Day: "2020-04-03",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing.",
});

userEventMaker({
  Title: "Making Your Case to Congress",
  Day: "2020-05-23",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing.",
});


//--------------------------------------------------------------------------------------




// Map Event into Glider

let glider = '';
EventArray.sort((a, b) => b.Day - a.Day) 
EventArray
  .map((event) => createEventModel(event))
  .forEach((card) => {
    glider += card;
  });

   
  
  let cardWrap = document.querySelector('.glider .glider-track');
  cardWrap.style.width = `${EventArray.length * 430}px`;
  cardWrap.innerHTML = glider;
  
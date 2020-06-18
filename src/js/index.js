import EventBuilder from './EventBuilder'
import { userEventMaker, EventArray } from './EventArray'
import createEventModel from './EventModel'
import Glider from './glider.min.js'






/*
 Omni Dependencies
*/


// calendarArray.forEach(s => {
//   userEventMaker({
//     Title:s[0],
//     Caption:s[1],
//     Day:s[2],
//     Day2:s[3],
//     LinkText:s[4],
//     Link:s[5],

//   })
// })










// Caraousel from Glider.js Library
 new Glider(document.querySelector('.glider'), {
    slidesToShow: 4,
    slideToScroll: 1,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 2560,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 4,
          slidesToScroll: 1,
          duration: 0.5
        }
      },
      {
        // screens greater than >= 775px
        breakpoint: 1290,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 4,
          slidesToScroll: 1,
          duration: 0.5
        }
      },
      {
        // screens greater than >= 775px
        breakpoint: 1060,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 1,
          duration: 0.5
        }
      },
      {
        // screens greater than >= 775px
        breakpoint: 835,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 1,
          duration: 0.5
        }
      },
      {
        // screens greater than >= 775px
        breakpoint: 427,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          duration: 0.5
        }
      },
      {
        // screens greater than >= 775px
        breakpoint: 426,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 0.5
        }
      },{
        // screens greater than >= 775px
        breakpoint: 300,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 0.5
        }
      },
      // {
      //   // screens greater than >= 1024px
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     itemWidth: 150,
      //     duration: 0.25
      //   }
      // }
    ]
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
  LinkText: "Explore >>",
  Link: "https://www.stonybrook.edu/admissions/",
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
  LinkText: "More Info...",
  Link: "https://www.stonybrook.edu/admissions/",
});


//--------------------------------------------------------------------------------------




// Map Event into Glider
let cardWrap = document.querySelector('.glider .glider-track');
EventArray
  .map((event) => createEventModel(event))
  .forEach((card) => {
    cardWrap.innerHTML  += card;
  });

  

  // cardWrap.innerHTML = glider;
  
 
    // document.querySelectorAll('.alda-calendar-header').forEach(s => {
    //   if(backgroundScheme == "Solid Red"){
    //     s.style.backgroundImage = "none"
    //     s.style.backgroundColor = "#990000"
    //   }
    //   else if(backgroundScheme == "Rays Grey"){
    //     s.style.filter = "grayscale(100%)"
    //   }
    //   else if(backgroundScheme == "Rays Red"){
    //     return;
    //   }
    // })
  
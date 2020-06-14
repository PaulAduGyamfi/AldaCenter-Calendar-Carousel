import EventBuilder from './EventBuilder'

const isDefined = (string) => string != null || string != undefined

let EventArray = [];

const userEventMaker = ({
    Title,
    LinkText,
    Link,
    Day,
    Day2,
    isOnCalendar,
    isOnCalendar2,
    Caption,
}) =>{
    const event = EventBuilder();

    event.withTitle(Title);
    if(isDefined(LinkText)) event.withLinkText(LinkText);
    if(isDefined(Link)) event.withLink(Link);

    if(isDefined(Day)){

        let parts = Day.split('-');
        let mydate = new Date(parts[0], parts[1] - 1, parts[2]);

        if( mydate == "Invalid Date"){
            event.withDay(Day)
        }
        else{
            let splitArray = mydate.toDateString().split(" ");
            let monthAndDay = `<span class="month">${splitArray[1]}</span>  <span class="number">${splitArray[2]}</span> `
            // document.querySelector(".day").classList.add("isOnCalendar");
            isOnCalendar = true
            event.isOnCalendar(isOnCalendar)
            event.withDay(monthAndDay)
            
        }
        
    }

    if(isDefined(Day2)){

        let parts2 = Day2.split('-');
        let mydate2 = new Date(parts2[0], parts2[1] - 1, parts2[2]);

        if( mydate2 == "Invalid Date"){
            event.withDay2(Day2)
        }
        else{
            let splitArray2 = mydate2.toDateString().split(" ");
            let monthAndDay2 = `<span class="month">${splitArray2[1]}</span>  <span class="number">${splitArray2[2]}</span> `
            // document.querySelector(".day").classList.add("isOnCalendar");
            isOnCalendar2 = true
            event.isOnCalendar2(isOnCalendar)
            event.withDay2(monthAndDay2)
            
        }
        
    }


    event.withCaption(Caption);

    EventArray.push(event.build())
}

export {userEventMaker, EventArray}
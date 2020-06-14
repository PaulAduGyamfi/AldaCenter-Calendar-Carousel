
const createEventModel = (eventOject) => {
  
  
    const element = `
            
            <div class="card" style="height: auto;">
              <header class="alda-calendar-header"><p class="alda-cal-title">${eventOject.Title}</p></header>
              <content>
                <div class="calendar-wrap">
                    <p class="day ${eventOject.isOnCalendar && 'calendar'}">${eventOject.Day}</p>
                    <p class="${eventOject.isOnCalendar2 && 'calendar'}">${eventOject.Day2}</p>
                </div>
                <p class="paragraph" style="line-height: 23px;">${eventOject.Caption}</p><span><a href="${eventOject.Link}">${eventOject.LinkText}</a></span>
                
              </content>
            </div> 

            `;



    return element;
};


export default createEventModel
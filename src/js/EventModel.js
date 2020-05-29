
const createEventModel = (eventOject) => {
  
  
    const element = `
            
            <div class="card" style="height: auto; width: 443px;">
              <header><a href="${eventOject.Link}">${eventOject.Title}</a></header>
              <content>
                <div class="calendar-wrap">
                    <p class="day ${eventOject.isOnCalendar && 'calendar'}">${eventOject.Day}</p>
                    <p class="${eventOject.isOnCalendar2 && 'calendar'}">${eventOject.Day2}</p>
                </div>
                <p class="paragraph">${eventOject.Caption}</p>
              </content>
            </div> 

            `;



    return element;
};


export default createEventModel
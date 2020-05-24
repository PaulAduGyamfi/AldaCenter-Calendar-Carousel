const EventBuilder = () => {
    let Title = "";
    let Day = "Dates to be announced";
    let Day2 = "";
    let isOnCalendar = false;
    let isOnCalendar2 = false;
    let Caption = "";

    return{
        withTitle(value){
            Title = value;
            return this;
        },
        withDay(value){
            Day = value;
            return this;
        },
        withDay2(value){
            Day2 = value;
            return this;
        },
        isOnCalendar(value){
            isOnCalendar = value;
            return this;
        },
        isOnCalendar2(value){
            isOnCalendar2 = value;
            return this;
        },
        withCaption(value){
            Caption = value;
            return this;
        },



        build(){
            return{
                Title,
                Day,
                Day2,
                isOnCalendar,
                isOnCalendar2,
                Caption,

            }
        }
    }
}

export default EventBuilder
type EventList = 'click' | 'scroll' | 'mouseover';
type ExcludeEvent = Exclude<EventList, 'scroll'>;

const handleEvent = (event: ExcludeEvent)=> {
    console.log(`Handling event: ${event}`);
};

handleEvent('click');

handleEvent('mouseover');
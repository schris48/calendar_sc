var events = {}

var createEvent = function(eventText, eventTime, eventList) {
  // create elements that make up an event item
  var eventLi = $("<li>").addClass("list-group-item");
  var eventSpan = $("<span>")
    .addClass("")
    .text(eventTime);
  var eventP = $("<p>")
    .addClass("")
    .text(eventText);
  
  // append span and p element to parent li
  eventLi.append(eventSpan, eventP);
}

var loadEvents = function() {
  tasks = JSON.parse(localStorage.getItem("events"));
  
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!events) {
    events = {
      description: [],
      time: []
    };
  }
  // loop over object properties
  $.each(events, function(list, arr) {
    console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function(event) {
      createEvent(event.text, event.time, list);
    });
  });
};
    
  var saveEvents = function() {
    localStorage.setItem("tasks", JSON.stringify(events));
  };

// load tasks for the first time
loadEvents();
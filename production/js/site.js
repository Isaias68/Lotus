!function(){$(document).ready(function(){function e(){var e=this;return e.HOURS_OF_OPERATION={Monday:{isOpen:!0,startTime:"9:00",endTime:"19:00"},Tuesday:{isOpen:!0,startTime:"9:00",endTime:"19:00"},Wednesday:{isOpen:!0,startTime:"9:00",endTime:"19:00"},Thursday:{isOpen:!0,startTime:"9:00",endTime:"19:00"},Friday:{isOpen:!0,startTime:"9:00",endTime:"19:00"},Saturday:{isOpen:!0,startTime:"9:00",endTime:"17:00"},Sunday:{isOpen:!1}},e.timeDisplaySpan=$("#time-display"),e.currentDayOfWeek=moment().format("dddd"),e.hoursOfOperationByDay=_.pick(e.HOURS_OF_OPERATION,this.currentDayOfWeek),e.setDOM=function(){var t=parseInt(e.hoursOfOperationByDay[e.currentDayOfWeek].startTime),n=parseInt(e.hoursOfOperationByDay[e.currentDayOfWeek].endTime),a=e.hoursOfOperationByDay[e.currentDayOfWeek].isOpen,s="<h5 class='today'>Today</h5><h1 class='status'>Open</h3><h6 class='time'>"+moment({hour:t}).format("ha")+"&ndash;"+moment({hour:n}).format("ha")+"</h6>",i=a?s:"<h5 class='today'>Today</h5><h1 class='status closed'>Closed</h3>";e.timeDisplaySpan.html(i)},{setDOM:e.setDOM}}function t(){var e=this;return e.listItems=$("ul.menu li"),e.listItemAnchors=$("ul.menu li a"),e.listItemAnchorsClick=function(){e.listItemAnchors.click(function(){e.listItems.removeClass("active"),$(this).parent().addClass("active")})},{bindListItemAnchorsClickEv:e.listItemAnchorsClick}}function n(){$(window).load(function(){$(".loader").delay(300).fadeOut(),$(".animationload").delay(600).fadeOut("slow")})}!function(){var a=new e,s=new t;a.setDOM(),s.bindListItemAnchorsClickEv(),n()}()})}();
document.addEventListener("DOMContentLoaded", function() {
    var invitationCard = document.getElementById("invitation-card");
    var invitationCardPhoto = document.getElementById("invitation-card-photo")
    var invitationCardText = document.getElementById("invitation-text")
    
    var locationCard = document.getElementById("location-card");
    var locationCardPhoto = document.getElementById("location-card-photo");
    var locationCardText = document.getElementById("location-text");

    var familyCard = document.getElementById("family-card");
    var familyCardPhoto = document.getElementById("family-card-photo");
    var familyCardMaleText = document.getElementById("male-family");
    var familyCardFemaleText = document.getElementById("female-family");

    var timelineCard = document.getElementById("timeline-card");
    var giftCard = document.getElementById("gift-card");
    var boardCard = document.getElementById("board-card");


    var invitationSwiped = false;        
    var locationSwiped = false;
    var familySwiped = false;
    var timelineSwiped = false;
    var giftSwiped = false;


    invitationCard.addEventListener("click", function () {

        if(!invitationSwiped) {
            invitationCard.classList.add("invitation-animation");            
            invitationCard.classList.remove("invitation-animation-reverse");
            invitationSwiped = true;
        }
    })

    locationCard.addEventListener("click", function () {
        if(!locationSwiped) {
            locationCard.classList.add("location-animation");
            locationCard.classList.remove("location-animation-reverse");            
            locationSwiped = true;
        }
        
        
    })

    familyCard.addEventListener("click", function() {
        if(!familySwiped) {
            familyCard.classList.add("family-animation");
            familyCard.classList.remove("family-animation-reverse");

            familySwiped = true;
        }
    })

    timelineCard.addEventListener("click", function() {
        if(!timelineSwiped) {
            timelineCard.classList.add("timeline-animation");
            timelineCard.classList.remove("timeline-animation-reverse")
            timelineSwiped = true;
        }
    })

    giftCard.addEventListener("click", function() {
        if(!giftSwiped) {
            giftCard.classList.add("gift-animation");
            giftCard.classList.remove("gift-animation-reverse");
            giftSwiped = true;
        }
    })

    boardCard.addEventListener("click", function() {
        if(invitationSwiped
            && locationSwiped
            && familySwiped
            && timelineSwiped
            && giftSwiped ) {
            invitationCard.classList.remove("invitation-animation");
            invitationCard.classList.add("invitation-animation-reverse");    

            locationCard.classList.remove("location-animation");
            locationCard.classList.add("location-animation-reverse");

            familyCard.classList.remove("family-animation");
            familyCard.classList.add("family-animation-reverse");            

            timelineCard.classList.remove("timeline-animation");
            timelineCard.classList.add("timeline-animation-reverse");
            
            giftCard.classList.remove("gift-animation");
            giftCard.classList.add("gift-animation-reverse");
            

            invitationSwiped = false;
            locationSwiped = false;
            familySwiped = false;
            timelineSwiped = false;
            giftSwiped = false;
        }
    })
});
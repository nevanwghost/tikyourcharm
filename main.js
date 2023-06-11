document.addEventListener("DOMContentLoaded", function() {
    var invitationCard = document.getElementById("invitation-card");
    var locationCard = document.getElementById("location-card");
    var familyCard = document.getElementById("family-card");
    var timeline1Card = document.getElementById("timeline-1-card");
    var timeline2Card = document.getElementById("timeline-2-card");
    var timeline3Card = document.getElementById("timeline-3-card");
    var timeline4Card = document.getElementById("timeline-4-card");
    var timeline5Card = document.getElementById("timeline-5-card");
    var timeline6Card = document.getElementById("timeline-6-card");
    var giftCard = document.getElementById("gift-card");
    var boardCard = document.getElementById("board-card");

    var invitationSwiped = false;
    var locationSwiped = false;
    var familySwiped = false;
    var timeline1Swiped = false;
    var timeline2Swiped = false;
    var giftSwiped = false;


    invitationCard.addEventListener("click", function () {

        if(!invitationSwiped) {
            invitationSwiped = true;
            invitationCard.classList.add("invitation-animation");
            invitationCard.classList.remove("invitation-animation-reverse");
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

    timeline1Card.addEventListener("click", function() {
        if(!timeline1Swiped) {
            timeline1Card.classList.add("timeline-animation");
            timeline1Card.classList.remove("timeline-animation-reverse")
            timeline1Swiped = true;
        }
    })

    timeline2Card.addEventListener("click", function() {
        if(!timeline2Swiped) {
            timeline2Card.classList.add("timeline-animation");
            timeline2Card.classList.remove("timeline-animation-reverse")
            timeline2Swiped = true;
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
            && timeline1Swiped
            && timeline2Swiped
            && giftSwiped ) {
            invitationCard.classList.remove("invitation-animation");
            invitationCard.classList.add("invitation-animation-reverse");            
            locationCard.classList.remove("location-animation");
            locationCard.classList.add("location-animation-reverse");
            familyCard.classList.remove("family-animation");
            familyCard.classList.add("family-animation-reverse");

            timeline1Card.classList.remove("timeline-animation");
            timeline1Card.classList.add("timeline-animation-reverse");
            timeline2Card.classList.remove("timeline-animation");
            timeline2Card.classList.add("timeline-animation-reverse");
            
            giftCard.classList.remove("gift-animation");
            giftCard.classList.add("gift-animation-reverse");
            

            invitationSwiped = false;
            locationSwiped = false;
            familySwiped = false;
            timeline1Swiped = false;
            timeline2Swiped = false;
            giftSwiped = false;
        }
    })
});
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

    var giftCard = document.getElementById("gift-card");
    var boardCard = document.getElementById("board-card");


    var invitationSwiped = false;        
    var locationSwiped = false;
    var familySwiped = false;
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
            && giftSwiped ) {
            invitationCard.classList.remove("invitation-animation");
            invitationCard.classList.add("invitation-animation-reverse");    

            locationCard.classList.remove("location-animation");
            locationCard.classList.add("location-animation-reverse");

            familyCard.classList.remove("family-animation");
            familyCard.classList.add("family-animation-reverse");
            
            giftCard.classList.remove("gift-animation");
            giftCard.classList.add("gift-animation-reverse");
            

            invitationSwiped = false;
            locationSwiped = false;
            familySwiped = false;
            giftSwiped = false;
        }
    })


    const duration = 15 * 1000000000,
  animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  const timeLeft = animationEnd - Date.now(),
    ticks = Math.max(200, 500 * (timeLeft / duration));

  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: Math.random() * skew - 0.2,
    },
    colors: ["#FFFFFF"],
    shapes: ["circle"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
})();
});
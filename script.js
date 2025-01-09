window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.action-row');
  let currentIndex = 0;

  const showRow = (index) => {
      rows.forEach((row, idx) => {
          row.style.display = idx === index ? 'flex' : 'none';
      });
  };

  const nextButton = document.getElementById('nextbutton');
  const prevButton = document.getElementById('previous');

  nextButton.addEventListener('click', () => {
      if (currentIndex < rows.length - 1) {
          currentIndex++;
          showRow(currentIndex);
      }
  });

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          showRow(currentIndex);
      }
  });

  // Initially display the first row
  showRow(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-element");

  function checkIfVideoInView() {
      const rect = video.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      console.log("Video is in view:", isInView);

      if (isInView) {
          video.play();
      } else {
          video.pause();
      }
  }

  window.addEventListener("scroll", checkIfVideoInView);
  window.addEventListener("resize", checkIfVideoInView); 
  video.addEventListener("fullscreenchange", handleFullscreenChange);
video.addEventListener("webkitfullscreenchange", handleFullscreenChange); // for Safari
video.addEventListener("mozfullscreenchange", handleFullscreenChange);     // for Firefox
video.addEventListener("msfullscreenchange", handleFullscreenChange);      // for IE/Edge

function handleFullscreenChange() {
    if (document.fullscreenElement) {
        video.style.objectFit = "contain"; // Show the entire video in fullscreen
    } else {
        video.style.objectFit = "cover"; // Return to 'cover' when exiting fullscreen
    }
}
});

document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".gallery-row");
    const bullets = document.querySelectorAll(".bullet");
    let currentIndex = 0;


    function showRow(index) {
        rows.forEach((row, i) => {
            row.classList.toggle("active", i === index);
        });
        bullets.forEach((bullet, i) => {
            bullet.classList.toggle("active", i === index);
        });
    }


    function startAutoSwitch() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % rows.length;
            showRow(currentIndex);
        }, 15000); 
    }

    
    bullets.forEach((bullet) => {
        bullet.addEventListener("click", (e) => {
            currentIndex = parseInt(e.target.getAttribute("data-index"), 15);
            showRow(currentIndex);
        });
    });
    
    showRow(currentIndex);
    startAutoSwitch();
});





// top button
const scrollToTopButton = document.getElementById('topBtn');
const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "topBtn show";
  } else {
    scrollToTopButton.className = "topBtn hide";
  }
};


window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);

    window.scrollTo(0, c - c / 10);
  }
};


scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}



//navbar buttons



$(document).ready(function() {
    $('page-section').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.topnav a.active').removeClass('active');
                    $('.topnav a').eq(i).addClass('active');
            }
    });
}).scroll();



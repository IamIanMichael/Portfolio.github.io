document.addEventListener('DOMContentLoaded', function () {
  const about = document.getElementById('about');
  const home = document.getElementById('home');
  const project = document.getElementById('project');
  const contact = document.getElementById('contact');


  about.addEventListener('click', function (event) {
    // Prevent the default behavior of the link (preventing the browser from navigating)
    event.preventDefault();

    
    window.location.href = 'about.html';

  }
  );

  home.addEventListener('click', function (event) {
    // Prevent the default behavior of the link (preventing the browser from navigating)
    event.preventDefault();

    
    window.location.href = 'index.html';

  });

  project.addEventListener('click', function (event) {
    // Prevent the default behavior of the link (preventing the browser from navigating)
    event.preventDefault();

    
    window.location.href = 'project.html';

  });
  contact.addEventListener('click', function (event) {
    // Prevent the default behavior of the link (preventing the browser from navigating)
    event.preventDefault();

    
    window.location.href = 'contact.html';

  });

});


  








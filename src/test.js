document.addEventListener('DOMContentLoaded', function() {
  var hovers = {
    me: {
      image: '/images/me.jpg',
      title: 'Robin Tollisen',
      text: `I'm a sofware developer. Currently working for Schibsted Products and Technology in
      Kristiansand, Norway.`,
      customCss: `background-position: top;`,
    },
    education: {
      image: '/images/me.jpg',
      title: 'Education',
      text: '<h3>Master of Technology, Computer Science</h3>',
      customCss: `background-position: top;`,
    },
    work: {
      image: '/images/me.jpg',
      title: 'Education',
      text: '<h3>Schibsted Product and Tech</h3><h3>Buypass</h3>',
      customCss: `background-position: top;`,
    },
    gaming: {
      image: '/images/me.jpg',
      title: 'Gaming',
      text:
        'I enjoy gaming in most forms, computer games, board games and sports such as football and volleyball.',
      customCss: `background-position: top;`,
    },
    family: {
      image: '/images/me.jpg',
      title: 'Family',
      text: '',
      customCss: `background-position: top;`,
    },
    football: {
      image: '/images/me.jpg',
      title: 'Football',
      text: '<h3>Liverpool</h3>',
      customCss: `background-position: top;`,
    },
    training: {
      image: '/images/me.jpg',
      title: 'Training',
      text: 'I might not look like it, but I work out quite a bit.',
      customCss: `background-position: top;`,
    },
    elixir: {
      image: '/images/me.jpg',
      title: 'Elixir',
      text: 'My favorite language at the moment. Check it out!',
      customCss: `background-position: top;`,
    },
    phoenix: {
      image: '/images/me.jpg',
      title: 'Phoenix Framework',
      text:
        'The Phoenix Framework is my framework of choice when creating new web applications.',
      customCss: `background-position: top;`,
    },
    javascript: {
      image: '/images/me.jpg',
      title: 'Javascript',
      text: 'I guess you need Javascript for the frontend as well.',
      customCss: `background-position: top;`,
    },
    react: {
      image: '/images/me.jpg',
      title: 'React',
      text: 'Working with React makes javascript quite bearable.',
      customCss: `background-position: top;`,
    },
  };

  var elements = document.getElementsByClassName('div-image');
  var content = document.getElementById('content');
  var hero = document.getElementById('image');

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function(e) {
      var data = hovers[e.target.dataset.subject];
      hero.style = `background-image: url("${data.image}");${data.customCss}`;
      content.innerHTML = `
        <h1>${data.title}</h1>
        <h2>${data.text}</h2>
      `;
    });
  }
});

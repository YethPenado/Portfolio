function addEvents(event) {
  const response = event.target.response;
  const gitActivity = document.getElementById('github__list');
  const imprDom = response.slice(0, 10);
  imprDom.forEach((i) => {
    const githubItem = document.createElement('li');
    const type = document.createElement('p');
    const repo = document.createElement('a');
    const date = document.createElement('p');
    type.innerHTML += i.type;
    repo.innerHTML += i.repo.url;
    date.innerHTML += i.created_at;
    githubItem.appendChild(type);
    githubItem.appendChild(repo);
    githubItem.appendChild(date);
    githubItem.className = 'gitChild';
    gitActivity.appendChild(githubItem);
  });
}

function getElements() {
  const request = new XMLHttpRequest();
  request.addEventListener('load', addEvents);
  request.responseType = 'json';
  request.open('GET', 'https://api.github.com/users/yethpenado/events/public');
  request.send();
}

getElements();
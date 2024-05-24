let searchInput = document.querySelector('#search');
let getDiv = document.querySelector('.news');

const news = (search) => {
  fetch(
    `https://newsapi.org/v2/everything?q=${search}&from=2024-04-24&sortBy=publishedAt&apiKey=99bb0138dbc54d348ef7ab8d0a739b1b`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getDiv.innerHTML = '';
      data.articles.forEach((articles) => {
        getDiv.innerHTML += `
        <div class="newscards">
                     <img src="${articles.urlToImage}" alt="news" />
                     <h5>Title: ${articles.title}</h5>
                     <p><b>Details:</b> ${articles.description}</p>
                   </div>
        `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

let initialInput = searchInput.value.toLowerCase() || 'karachi';
news(initialInput);

searchInput.addEventListener('input', () => {
  let search = searchInput.value.toLowerCase() || 'karachi';
  searchInput(search);
});

const playlist = {
    name: 'United States Top 10',
    description: 'The top songs in the US right now.',
    songs: [{
        name: 'thank u, next',
        artists: ['Ariana Grande'],
        image: 'https://i.scdn.co/image/3492042deca1ed9a02e6d46ebe58807bbf8d2a51'
      },
      {
        name: 'Mo Bamba',
        artists: ['Sheck Wes'],
        image: 'https://i.scdn.co/image/099e0b63f08bea5b5616b2e6fb06c342da7071ad'
      },
      {
        name: 'SICKO MODE',
        artists: ['Travis Scott', 'Drake'],
        image: 'https://i.scdn.co/image/092f661e5290a05410f1696e608cb140461b7ebf'
      },
      {
        name: 'ZEZE (feat. Travis Scott & Offset)',
        artists: ['Kodak Black', 'Offset', 'Travis Scott'],
        image: 'https://i.scdn.co/image/817da8e0c3bcd24e19a02c2485f91c29699c1d8f'
      },
      {
        name: 'Drip Too Hard',
        artists: ['Lil Baby', 'Gunna'],
        image: 'https://i.scdn.co/image/d6ad16e502fb15fcc76bc050df10c6fd1cda6968'
      },
      {
        name: 'Without Me',
        artists: ['Halsey'],
        image: 'https://i.scdn.co/image/51f8ddb6e9f08b8d42a27f7894f68a9106a3df5f'
      },
      {
        name: 'Sunflower - Spider-Man: Intro',
        artists: ['Post Malone', 'Swae Lee'],
        image: 'https://i.scdn.co/image/923b854eefa3fe67c5089c45fb9efea4fbc5c7af'
      },
      {
        name: 'BAD!',
        artists: ['XXXTENTACION'],
        image: 'https://i.scdn.co/image/eba497599a8754e8458fc18e7feadb30aaa6eb0d'
      },
      {
        name: 'Lucid Dreams',
        artists: ['Juice WRLD'],
        image: 'https://i.scdn.co/image/e351fde0fb77b8f64ed8883c429cada24306600d'
      },
      {
        name: 'Wake Up in the Sky',
        artists: ['Gucci Mane', 'Bruno Mars', 'Kodak Black'],
        image: 'https://i.scdn.co/image/6695a36b5929353cdb7d2e3807c600f73796e1aa'
      },
      {
        name: 'Armed And Dangerous',
        artists: ['Juice WRLD'],
        image: 'https://i.scdn.co/image/e351fde0fb77b8f64ed8883c429cada24306600d'
      },
      {
        name: 'when the party\'s over',
        artists: ['Billie Eilish'],
        image: 'https://i.scdn.co/image/40aefbf33d89b6292973941739940b900a95e607'
      },
      {
        name: 'All I Want for Christmas Is You',
        artists: ['Mariah Carey'],
        image: 'https://i.scdn.co/image/770180da03a8e23ac5ff7847496e9538cf73ce85'
      }
    ]
  };
  
  // const h1 = document.querySelector('.diplay-4')
  // h1[0] = playlist.name
  // console.dir('h1')
  
  const objectToHTML = (song) => {
    return `<div class='col-1'>
    <img src="${song.image}" class="rounded" style='width: 50px; height: 50px;'>
  </div>
  <div class='col-11'>
    <p class='mb-0 mt-1 song-name'>${song.name}</p>
    <p class='my-0 song-artists'>${song.artists}</p>
  </div>`;
  }
  
  const render = () => {
  
    const title = document.querySelector('h1');
    title.innerText = playlist.name
  
    const dsc = document.querySelector('.lead')
    dsc.innerText = playlist.description
  
    const song_list = document.querySelector('.song-list')
  
    let combinedHTML = '';
    for (let i = 0; i < playlist.songs.length; i++) {
      combinedHTML += objectToHTML(playlist.songs[i]);
    }
  
    song_list.innerHTML = combinedHTML;
    // console.log(combinedHTML);
  
  }
  
  render();
  
  // 1. create a variable and store search 
  
  const search = document.querySelector('.search');
  
  // console.log(search.value);// Have access to what is in the search bar
  
  // connect search to object
  
  
  search.addEventListener('input', function (e) {
    console.log(e.data)
    console.log(`e.target.value ${e.target.value}`)
    console.log(`playlist.songs.name ${playlist.songs[0].name}`)
    let newStr = ''
    for (let i = 0; i < playlist.songs.length; i++) {
      if (playlist.songs[i].name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) { // compare what the user types in to the list of song names 
        newStr += objectToHTML(playlist.songs[i])
      } 
  
    }
  
    const song_list = document.querySelector('.song-list')
  
    song_list.innerHTML = newStr
  
  });
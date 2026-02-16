let playlists = [
  {
    id: "workout",
    name: "Workout",
    genres: [
      {
        name: "Hip Hop",
        artists: [
          { name: "Drake", songs: ["God's Plan", "Nonstop"] },
          { name: "Eminem", songs: ["Lose Yourself"] },
        ],
      },
      {
        name: "EDM",
        artists: [{ name: "Avicii", songs: ["Levels", "Wake Me Up"] }],
      },
    ],
  },
  {
    id: "chill",
    name: "Chill",
    genres: [],
  },
  {
    id: "party",
    name: "Party",
    genres: [],
  },
];

// Get the container where playlists will be displayed
const container = document.getElementById("playlist-container");

// Get the container where playlist details will be displayed
const details = document.getElementById("playlist-details");

// This function runs when you click a playlist name.
function showDetails(playlist) {
  details.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = playlist.name;
  details.appendChild(title);

  // If no genres
  if (!playlist.genres || playlist.genres.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No genres yet.";
    details.appendChild(p);
    return;
  }

  // Loop through every genre in the selected playlist
  for (let i = 0; i < playlist.genres.length; i++) {
    const genre = playlist.genres[i];

    // Create to display the genre name
    const genreTitle = document.createElement("h3");
    genreTitle.textContent = "Genre: " + genre.name;
    details.appendChild(genreTitle);

    // Loop through all artists inside THIS genre.
    for (let j = 0; j < genre.artists.length; j++) {
      const artist = genre.artists[j];

      const artistTitle = document.createElement("h4");
      artistTitle.textContent = "Artist: " + artist.name;
      details.appendChild(artistTitle);

      // Loop through all songs for THIS artist.
      for (let k = 0; k < artist.songs.length; k++) {
        const song = document.createElement("p");
        song.textContent = "• " + artist.songs[k];
        details.appendChild(song);
      }
    }
  }
}

// Function to display all playlists on the page
function showPlaylists() {
  // Clear the container first so i don't duplicate items
  container.innerHTML = "";

  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    const div = document.createElement("div");
    // Put the playlist name inside the div
    div.textContent = playlist.name;

    //  Make each playlist div clickable
    div.addEventListener("click", function () {
      showDetails(playlist);
    });

    // Add the div to the container so it becomes visible on the page
    container.appendChild(div);
  }
}

showPlaylists();

// Get form and input elements
const form = document.getElementById("playlist-form");
const input = document.getElementById("playlist-name");

// Run this function when the form is submitted
form.addEventListener("submit", function (event) {
  // stop reload when the form is submitted
  event.preventDefault();

  const name = input.value.trim();
  // Stop if input is empty
  if (name === "") return;

  // Add new playlist object to array
  playlists.push({
    id: name.toLowerCase().replaceAll(" ", "-"),
    name: name,
    genres: [],
  });

  // Clear input field
  input.value = "";

  details.innerHTML = "";
  showPlaylists();
});

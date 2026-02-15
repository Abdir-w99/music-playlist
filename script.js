let playlists = [
  {
    id: "workout",
    name: "Workout",
    tracks: [],
  },

  {
    id: "chill",
    name: "Chill",
    tracks: [],
  },

  {
    id: "party",
    name: "Party",
    tracks: [],
  },
];

const container = document.getElementById("playlist-container");

for (let i = 0; i < playlists.length; i++) {
  const playlist = playlists[i];

  const div = document.createElement("div");

  div.textContent = playlist.name;

  container.appendChild(div);
}

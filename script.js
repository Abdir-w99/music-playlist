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
// Get the container where playlists will be displayed
const container = document.getElementById("playlist-container");
// Function to display all playlists on the page
function showPlaylists() {
  // Clear the container first so i don't duplicate items
  container.innerHTML = "";

  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    const div = document.createElement("div");
    // Put the playlist name inside the div
    div.textContent = playlist.name;
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
  // Prevent page reload when the form is submitted
  event.preventDefault();
  const name = input.value.trim();
  // Stop if input is empty
  if (name === "") return;
  // Add new playlist object to array
  playlists.push({
    id: name.toLowerCase().replaceAll(" ", "-"),
    name: name,
    tracks: [],
  });
  // Clear input field
  input.value = "";

  showPlaylists();
});

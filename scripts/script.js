function fetchAlbums(){
    fetch("/api/albums")
        .then(response => response.json())
        .then(albums => displayAlbums(albums))
        .catch(err => console.error("Error fetching albums: ", err));
}

function addAlbum(){
    const art = document.getElementById("album-image").value;
    const title = document.getElementById("album-title").value;
    const artist = document.getElementById("album-artist").value;
    const genre = document.getElementById("album-genre").value;
    const newAlbum = {art, title, artist, genre};

    fetch("/api/albums", {
        method: "POST",
        headers:{
            "Content Type": "application.json",
        },
        body: JSON.stringify(newAlbum),
    })
    .then(response => {
        if(response.ok){
            return fetchAlbums();
        }
        throw new Error("Failed to add album.");
    })
    .catch(err => console.error("Error adding album: ", err));
    document.getElementById("album-image").value = " ";
    document.getElementById("album-title").value = " ";
    document.getElementById("album-artist").value = " ";
    document.getElementById("album-genre").value = " ";
}

function displayAlbums(albums){
    const albumsList = document.getElementById("albumsList");
    albumsList.innerHTML = " ";

    albums.forEach(album =>{
        const p = document.createElement("p");
        p.textContent = `${album.album-image} ${album.album-title} ${album.album-artist} ${album.album-genre}`;
        albumsList.appendChild(p);
    });
}

fetchAlbums();

// if AlbumDisplay.length <10, display "oops, you don't have enough albums to start this set!"
// ideally calculate number of albums left to get to 10

var n = 9 - AlbumCollection.length

function checkSetLength(collectionArray){
    if(collectionArray.length < 10){
        console.log(`Oops! It looks like you need ${n} more albums to play your set.`)
    }
}

document.getElementById('play-set').onclick = () => {
    // display error message or play set
};
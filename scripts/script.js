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


var n = 9 - AlbumCollection.length

function checkSetLength(collectionArray){
    if(collectionArray.length < 10){
        console.log(`Oops! It looks like you need ${n} more albums to play your set.`)
    }
}

document.getElementById('play-set').onclick = () => {
    checkSetLength(collectionArray);
};

var albumList = [];

document.addEventListener('DOMContentLoaded', () => {
    const displayArrayAsList = (array, elementID) =>{
        const listElement = document.getElementById(elementID);
        listElement.innerHTML = '';
        array.forEach(item =>{
            const listItem = document.createElement('div');
            listItem.textContent = item.displayInfo ? item.displayInfo() : item;
            listElement.appendChild(listItem);
        })
    }

    document.getElementById('add-album').innerHTML = fetchAlbums();
    document.getElementById('add-album-button').onclick = () => {
        const title = document.getElementById("album-title-input").value;
        const artist = document.getElementById("artist-name-input").value;
        const genre = document.getElementById("genre-select").value;
        const art = document.getElementById("album-art-input").value;
        const album = new albumList(title, artist, genre, art);
        albumList.push(album);

        displayArrayAsList(albumList, 'display');
    }

    document.getElementById('add-album-button').onclick = () => {
        const title = document.getElementById('album-title-input').value;
        const artist = document.getElementById("artist-name-input").value;
        const genre = document.getElementById("genre-select").value;
        const art = document.getElementById("album-art-input").value;
        const album = new FurnitureItems(title, artist, genre, art);
        albumList.push(album);
        displayArrayAsList(albumList, 'display');
    }
})
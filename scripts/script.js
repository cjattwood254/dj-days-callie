class AlbumCollection {
    constructor(url, artist, title){
        this.url = url;
        this.artist = artist;
        this.title = title;
    }
}

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
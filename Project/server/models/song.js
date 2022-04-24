let songs = [
    { songId: 1, title: "i love you", reliseDate: '2018-01-04',url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
    { songId: 2, title: "no need for love", reliseDate:'2020-10-07', url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/background%20image.mp3" },
    { songId: 3, title: "what about us", reliseDate: '2011-12-01', url: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/big%20ben.mp3", },
    { songId: 4, title: "i dont care", reliseDate: '2014-01-01', url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", },
    { songId: 5, title: "on my wey", reliseDate: '2017-11-19', url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { songId: 6, title: "how long", reliseDate:'2001-11-21', url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
    { songId: 7, title: "Unstopable", reliseDate: '2012-09-11',  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",},
    { songId: 8, title: "yummy", reliseDate: '2022-1-08', url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    ];

class Song {
    constructor(songId, title, reliseDate,url) {
        this.songId = songId;
        this.title = title;
        this.reliseDate = reliseDate;
        this.url=url;
    }

    static gets() {
        return songs;
    }

    static getSongByTitle(title) {
          return songs.filter((x) =>x.title.toUpperCase().includes(title.toUpperCase()));
    }
}

module.exports = Song;
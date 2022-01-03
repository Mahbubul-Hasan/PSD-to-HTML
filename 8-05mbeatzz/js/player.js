let previous = document.querySelector("#previous");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let volume = document.querySelector("#volume");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let autoplay_switcher = document.querySelector("#autoplay-switcher");
let loop_switcher = document.querySelector("#loop-switcher");
let shuffle_switcher = document.querySelector("#shuffle-switcher");

let timer;
let autoplay = 0;
let loop = 1;
let shuffle = 0;

let index_no = 0;
let playing_song = false;

//create a audio Element
let track = document.createElement("audio");

//All songs list
let all_song = [
    {
        name: "First song",
        path: "../music/song1.mp3",
        img: "../images/img1.jpg",
        singer: "1",
    },
    {
        name: "Second song",
        path: "../music/song2.mp3",
        img: "../images/img2.jpg",
        singer: "2",
    },
    {
        name: "Third song",
        path: "../music/song3.mp3",
        img: "../images/img3.jpg",
        singer: "3",
    },
    {
        name: "Fourth song",
        path: "../music/song4.mp3",
        img: "../images/img4.jpg",
        singer: "4",
    },
    {
        name: "Fifth song",
        path: "../music/song5.mp3",
        img: "../images/img5.jpg",
        singer: "5",
    },
];

// All functions

// function load the track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();

    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    track.load();

    timer = setInterval(range_slider, 1000);
}

load_track(index_no);

// checking.. the song is playing or not
function just_play() {
    if (playing_song == false) {
        play_song();
    } else {
        pause_song();
    }
}

// reset song slider
function reset_slider() {
    slider.value = 0;
}

// play song
function play_song() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fas fa-pause" aria-hidden="true"></i>';
}

//pause song
function pause_song() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i>';
}

// next song
function next_song() {
    if (index_no < all_song.length - 1) {
        index_no += 1;
    } else {
        index_no = 0;
    }
    load_track(index_no);
    play_song();
}

// previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
    } else {
        index_no = all_song.length - 1;
    }
    load_track(index_no);
    play_song();
}

// change volume
function volume_change() {
    track.volume = volume.value / 100;
}
//mute sound function
function mute_sound() {
    track.volume = 0;
    volume.value = 0;
    volume.style.backgroundSize = "0% 100%";
}
//mute sound function
function full_sound() {
    track.volume = 1;
    volume.value = 100;
    volume.style.backgroundSize = "100% 100%";
}

// autoplay function
function autoplay_control() {
    if (autoplay == 1) {
        autoplay = 0;
        autoplay_switcher.classList.remove("active");
    } else {
        autoplay = 1;
        loop = 0;
        shuffle = 0;
        autoplay_switcher.classList.add("active");
        loop_switcher.classList.remove("active");
        shuffle_switcher.classList.remove("active");
    }
}

// loop function
function loop_control() {
    if (loop == 1) {
        loop = 0;
        loop_switcher.classList.remove("active");
    } else {
        loop = 1;
        autoplay = 0;
        shuffle = 0;
        loop_switcher.classList.add("active");
        autoplay_switcher.classList.remove("active");
        shuffle_switcher.classList.remove("active");
    }
}

// shuffle function
function shuffle_control() {
    if (shuffle == 1) {
        shuffle = 0;
        shuffle_switcher.classList.remove("active");
    } else {
        shuffle = 1;
        autoplay = 0;
        loop = 0;
        shuffle_switcher.classList.add("active");
        autoplay_switcher.classList.remove("active");
        loop_switcher.classList.remove("active");
    }
}

// change slider position
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider() {
    let position = 0;

    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
        slider.style.backgroundSize = Math.round(position) + "% 100%";
    }

    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            play_song();
        } else if (loop == 1) {
            index_no = index_no;
            load_track(index_no);
            play_song();
        } else if (shuffle == 1) {
            index_no = Math.floor(Math.random() * all_song.length);
            load_track(index_no);
            play_song();
        }
    }
}

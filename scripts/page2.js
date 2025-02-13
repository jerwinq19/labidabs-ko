const songMap = {
    box1: "../songs/Lihim.mp3",
    box2: "../songs/EVERYTHING.mp3",
    box3: "../songs/be careful with my heart.mp3",
    box4: "../songs/EVERYTHING.mp3",
    box5: "../songs/Take A Chance With Me.mp3", 
    box6: "../songs/Eba.mp3",
}

$('.box').click(function() {
    let docuID = $(this).attr('id')
    console.log("ID:", docuID); 
    if (songMap[docuID]) {
        console.log("Song:", songMap[docuID]); 
        $('#myAudio').attr('src', songMap[docuID])
        $('#myAudio')[0].volume = 0.2
        $('#myAudio')[0].play()
    } else {
        console.log("No song found for this ID.");
    }
})

$('#last-btn').click(() => {
    open('../html/page-3.html')
})
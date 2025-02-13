$('document').ready(() => {
    
    let text = "Simula nung nakilala kita, hindi ko na mabilang kung ilang beses akong nagpasalamat sa'yo. Thank you sa pag-intindi sa akin, kahit na minsan sumusobra ako. Sobrang thankful ako na dumating ka sa buhay ko, at wala na akong ibang mahihiling pa. Napaka-blessed ko na nandiyan ka. Wala akong ibang masabi kundi thank you at, higit sa lahat, I love you.  Happy Valentine’s Day, love! ❤️"
    let index = 0;

    $('#envelope-closed').click(function () {
        $('.text-enve').fadeToggle(1000)
        $('#typewriter').text("")
        index = 0
        typeWriter()
    })


    function typeWriter() {
        if (index < text.length) {
            $('#typewriter').append(text.charAt(index)); // Add one character at a time
            index++;
            setTimeout(typeWriter, 40); // Delay 100ms between characters
        }
    }
})
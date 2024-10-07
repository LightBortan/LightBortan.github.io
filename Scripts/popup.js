document.addEventListener('DOMContentLoaded', function() {
    const pantheon = document.querySelector('.Pantheon');
    const pantheonPop = document.querySelector('#PantheonPop');
    const JavaAdventure = document.querySelector('.JavaAdventure');
    const JavaAdventurePop = document.querySelector('#JavaAdventurePop');
    const Dencode = document.querySelector('.Dencode');
    const DencodePop = document.querySelector('#DencodePop');
    const ReactAdventure = document.querySelector('.ReactAdventure');
    const ReactAdventurePop = document.querySelector('#ReactAdventurePop');
    const overlay = document.querySelector('.overlay');

    function closePopup() {
        pantheonPop.style.display = 'none';
        JavaAdventurePop.style.display = 'none'
        DencodePop.style.display = 'none'
        ReactAdventurePop.style.display = 'none'
        overlay.style.display = 'none';
    }

    pantheon.addEventListener('click', function() {
        pantheonPop.style.display = 'block';
        overlay.style.display = 'block';
    });

    JavaAdventure.addEventListener('click', function() {
        JavaAdventurePop.style.display = 'block';
        overlay.style.display = 'block';
    });

    Dencode.addEventListener('click', function() {
        DencodePop.style.display = 'block';
        overlay.style.display = 'block';
    });

    ReactAdventure.addEventListener('click', function() {
        ReactAdventurePop.style.display = 'block';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function(event) {
        event.stopPropagation();
        closePopup();
    });
});
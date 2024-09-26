document.addEventListener('DOMContentLoaded', function() {
    const musicPlayerIcon = document.getElementById('music-player-icon');
    const pressingSound = document.getElementById('pressing-sound');
    const musicPlayer = document.getElementById('music-player');
    const volumeControl = document.getElementById('volume-control');

    const musicTracks = [
        'Sound/Pyrosion - Did You Know Better.mp3',
        'Sound/🎍 Lofi Soul and R&B (Music For Videos) - _Day In Paris_ by Pyrosion.mp3',
        'Sound/😶 Emotional Calm Piano (Music For Videos) - _Illusions_ by Keys Of Moon 🇺🇸.mp3'
    ];

    musicPlayerIcon.addEventListener('click', function() {
        // Pause and reset the pressing sound and music player
        pressingSound.pause();
        pressingSound.currentTime = 0;
        musicPlayer.pause();
        musicPlayer.currentTime = 0;

        // Play the pressing sound
        pressingSound.play();

        // When the pressing sound ends, play a random music track
        pressingSound.onended = function() {
            const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
            musicPlayer.src = randomTrack;
            musicPlayer.play();
        };
    });

    // Update the volume of both audio elements when the volume control changes
    volumeControl.addEventListener('input', function() {
        const volume = volumeControl.value;
        pressingSound.volume = volume;
        musicPlayer.volume = volume;
    });
});



// Pet the cat
document.addEventListener("DOMContentLoaded", function() {
    const catIcon1 = document.getElementById("catIcon1");
    const catIcon2 = document.getElementById("catIcon2");
    const catSound = document.getElementById("cat-sound");

    if (catIcon1 && catIcon2 && catSound) {
        // When hovering over cat-icon-1
        catIcon1.addEventListener("mouseover", function() {
            // Hide cat-icon-1
            catIcon1.style.display = "none";
            // Show cat-icon-2
            catIcon2.style.display = "block";
            // Play the cat purr sound
            catSound.play();
        });

        // When hovering out of cat-icon-2
        catIcon2.addEventListener("mouseout", function() {
            // Show cat-icon-1 again
            catIcon1.style.display = "block";
            // Hide cat-icon-2
            catIcon2.style.display = "none";
            // Stop the cat purr sound
            catSound.pause();
            catSound.currentTime = 0; 
        });
    } else {
        console.error("One or more elements were not found in the DOM.");
    }
});

function showPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
}

function hidePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
}

//CLOCK
setInterval (() => {
    const time = document.querySelector(".time-display");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AM_PM = "AM";

    if (hours > 11) {
    AM_PM = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
    hours = 12;
    }
    if (seconds < 10) { seconds = "0" + seconds;
    }
    if (minutes < 10) { minutes = "0" + minutes;
    }
    if (hours < 10) {
    hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" +
    seconds +"" + AM_PM;
})
//Particle
document.addEventListener("DOMContentLoaded", function() { 
    const toggleButton = document.getElementById("toggleButton");
    const nightOverlay = document.getElementById("nightOverlay");
    const daySound = document.getElementById("day-sound");
    const nightSound = document.getElementById("night-sound");
    const particlesContainer = document.getElementById("particles-js"); // Particles container

    let isNight = false; 
    let particlesEnabled = false; 

    // Function to enable particles
    function enableParticles() {
        if (!particlesEnabled) {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.5,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
            particlesEnabled = true;
        }
    }

    // Function to disable particles
    function disableParticles() {
        if (particlesEnabled) {
            const canvas = particlesContainer.querySelector('canvas');
            if (canvas) {
                canvas.remove(); 
            }
            particlesEnabled = false;
        }
    }

    // Function to toggle day/night mode
    toggleButton.addEventListener("click", function() {
        if (isNight) {
            // Switch to Day Mode
            toggleButton.src = "DAY ICON.svg"; // Change icon back to day
            nightSound.pause(); // Stop night ambient sound
            nightSound.currentTime = 0; // Reset audio
            daySound.play(); // Play day ambient sound

            // Fade out the night light
            nightOverlay.style.transition = "opacity 2s ease"; // Smooth transition
            nightOverlay.style.opacity = "0";

            // Disable particles for Day Mode
            disableParticles();

        } else {
            // Switch to Night Mode
            toggleButton.src = "NIGHT ICON.svg"; // Change icon to night
            daySound.pause(); // Stop day ambient sound
            daySound.currentTime = 0; // Reset audio
            nightSound.play(); // Play night ambient sound

            // Fade in the night light
            nightOverlay.style.transition = "opacity 2s ease"; // Smooth transition
            nightOverlay.style.opacity = "1";

            // Enable particles for Night Mode
            enableParticles();
        }

        // Toggle the state
        isNight = !isNight;
    });
});
//swimming fish
document.addEventListener('DOMContentLoaded', function() {
    const fishElements = document.querySelectorAll('.fish-1-icon, .fish-2-icon, .fish-3-icon');
    const tank = document.querySelector('.fish-tank');

    function getRandomPosition() {
        const tankRect = tank.getBoundingClientRect();
        const fishWidth = 100;
        const fishHeight = 50;

        const maxX = tankRect.width - fishWidth;
        const maxY = tankRect.height - fishHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        return { x: randomX, y: randomY };
    }

    function moveFish(fish) {
        const currentX = parseFloat(fish.style.left) || 0;
        const { x, y } = getRandomPosition();
        fish.style.left = `${x}px`;
        fish.style.top = `${y}px`;

        // Flip the fish horizontally based on direction change
        if (x > currentX) {
            fish.style.transform = 'scaleX(1)';
        } else {
            fish.style.transform = 'scaleX(-1)';
        }
    }

    function moveAllFish() {
        fishElements.forEach(fish => moveFish(fish));
    }

    // Move all fish every 5 seconds
    setInterval(moveAllFish, 5000); // Slower interval
});

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const writeAudio = document.getElementById('write');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const label = document.createElement('label');
            label.textContent = taskText;

            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            taskList.appendChild(listItem);

            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            const listItem = event.target.parentElement;
            if (event.target.checked) {
                listItem.style.textDecoration = 'line-through';
                writeAudio.play();
            } else {
                listItem.style.textDecoration = 'none';
            }
        }
    });
});

function showPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
}

function hidePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
}

function playAudio(audioId) {
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
        audioElement.play();
    }
}
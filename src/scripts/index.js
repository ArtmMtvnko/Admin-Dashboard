import './../index.html'
import './../styles/index.scss'
import urlAudio from './../assets/audio/Saga_1op.mp3'
import WaveSurfer from 'wavesurfer.js'

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#bbbbbb39',
    progressColor: '#ededed',
    url: urlAudio,
    height: 40,
    barWidth: 5,
    barRadius: 2
})

wavesurfer.on('interaction', () => {
    wavesurfer.play()
})

const playButton = document.querySelector('#playButton')
let play = false

playButton.addEventListener('click', () => {
    playButton.classList.toggle('play')
    if (play) {
        wavesurfer.pause()
        play = false
    } else {
        wavesurfer.play()
        play = true
    }
})
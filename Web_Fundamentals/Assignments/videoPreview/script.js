function playTheVideo(video){
    video.play()
    video.muted = true
}

function stopTheVideo(video){
    video.pause()
    video.currentTime = 0
}

function muteChange(video){
    if(video.muted == true){
        video.muted = false
    }else{
        video.muted = true
    }
    
    
    // elem.play()
}
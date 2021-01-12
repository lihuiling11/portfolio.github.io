//assegno le src dinamicamente
if(window.innerWidth > 900){
    //add higher quality srcs

    document.getElementById('video-preview-madre').querySelector('source').src = "assets/video-preview/museomadrenapoli.mp4";
    document.getElementById('video-preview-madre').play();
    /*
    document.getElementById('video-preview-italics').querySelector('source').src = "assets/video-preview/italics.mp4";
    document.getElementById('video-preview-mm').querySelector('source').src = "assets/video-preview/mm.mp4";
    document.getElementById('video-preview-combo').querySelector('source').src = "assets/video-preview/combo-2.mp4";
    document.getElementById('video-preview-icon').querySelector('source').src = "assets/video-preview/icon.mp4";
    document.getElementById('video-preview-grc').querySelector('source').src = "assets/video-preview/grc.mp4";
    document.getElementById('video-preview-gs1').querySelector('source').src = "assets/video-preview/oi.mp4";
    document.getElementById('video-preview-maxxi').querySelector('source').src = "assets/video-preview/maxxi.mp4";
    document.getElementById('video-preview-land').querySelector('source').src = "assets/video-preview/land.mp4";
    document.getElementById('video-preview-lft').querySelector('source').src = "assets/video-preview/lft.mp4";
    */
}else {
  //add lower quality srcs
    /*
    var videini = document.getElementById('projects').querySelectorAll('.proj-video-preview');

    videini.forEach(function(videoSingolo) {
        videoSingolo.querySelector('.mob-hidden').remove();
    });
    */

    document.getElementById('video-preview-madre').querySelector('source').src = "assets/video-preview/mob/museomadrenapoli.mp4";
    document.getElementById('video-preview-madre').play();
    /*
    #projects #proj-madre .proj-video-preview
    document.getElementById('video-preview-italics').querySelector('source').src = "assets/video-preview/mob/italics.mp4";
    document.getElementById('video-preview-mm').querySelector('source').src = "assets/video-preview/mob/mm.mp4";
    document.getElementById('video-preview-combo').querySelector('source').src = "assets/video-preview/mob/combo-2.mp4";
    document.getElementById('video-preview-icon').querySelector('source').src = "assets/video-preview/mob/icon.mp4";
    document.getElementById('video-preview-grc').querySelector('source').src = "assets/video-preview/mob/grc.mp4";
    document.getElementById('video-preview-gs1').querySelector('source').src = "assets/video-preview/mob/oi.mp4";
    document.getElementById('video-preview-maxxi').querySelector('source').src = "assets/video-preview/mob/maxxi.mp4";
    document.getElementById('video-preview-land').querySelector('source').src = "assets/video-preview/mob/land.mp4";
    document.getElementById('video-preview-lft').querySelector('source').src = "assets/video-preview/mob/lft.mp4";
    */
}

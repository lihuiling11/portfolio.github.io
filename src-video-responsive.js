//assegno le src dinamicamente
if(window.innerWidth > 900){
    //add higher quality srcs
    /*
    var source1 = document.createElement('source');
    source1.setAttribute('src', '/assets/video-preview/museomadrenapoli.mp4');
    source1.setAttribute('type', 'video/mp4');
    var video1 = document.getElementById('video-preview-madre');
    video1.appendChild(source1);
    video1.play();

    var source2 = document.createElement('source');
    source2.setAttribute('src', '/assets/video-preview/italics.mp4');
    source2.setAttribute('type', 'video/mp4');
    var video2 = document.getElementById('video-preview-italics');
    video2.appendChild(source2);
    video2.play();

    var source3 = document.createElement('source');
    source3.setAttribute('src', '/assets/video-preview/combo-2.mp4');
    source3.setAttribute('type', 'video/mp4');
    var video3 = document.getElementById('video-preview-combo');
    video3.appendChild(source3);
    video3.play();

    var source4 = document.createElement('source');
    source4.setAttribute('src', '/assets/video-preview/icon.mp4');
    source4.setAttribute('type', 'video/mp4');
    var video4 = document.getElementById('video-preview-icon');
    video4.appendChild(source4);
    video4.play();

    var source5 = document.createElement('source');
    source5.setAttribute('src', '/assets/video-preview/grc.mp4');
    source5.setAttribute('type', 'video/mp4');
    var video5 = document.getElementById('video-preview-grc');
    video5.appendChild(source5);
    video5.play();

    var source6 = document.createElement('source');
    source6.setAttribute('src', '/assets/video-preview/oi.mp4');
    source6.setAttribute('type', 'video/mp4');
    var video6 = document.getElementById('video-preview-gs1');
    video6.appendChild(source6);
    video6.play();

    var source7 = document.createElement('source');
    source7.setAttribute('src', '/assets/video-preview/mm.mp4');
    source7.setAttribute('type', 'video/mp4');
    var video7 = document.getElementById('video-preview-mm');
    video7.appendChild(source7);
    video7.play();
    //
    var source8 = document.createElement('source');
    source8.setAttribute('src', '/assets/video-preview/maxxi.mp4');
    source8.setAttribute('type', 'video/mp4');
    var video8 = document.getElementById('video-preview-maxxi');
    video8.appendChild(source8);
    video8.play();

    var source9 = document.createElement('source');
    source9.setAttribute('src', '/assets/video-preview/land.mp4');
    source9.setAttribute('type', 'video/mp4');
    var video9 = document.getElementById('video-preview-land');
    video9.appendChild(source9);
    video9.play();

    var source10 = document.createElement('source');
    source10.setAttribute('src', '/assets/video-preview/lft.mp4');
    source10.setAttribute('type', 'video/mp4');
    var video10 = document.getElementById('video-preview-lft');
    video10.appendChild(source10);
    video10.play();
    */
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
    /*
    var source1 = document.createElement('source');
    source1.setAttribute('src', '/assets/video-preview/mob/museomadrenapoli.mp4');
    source1.setAttribute('type', 'video/mp4');
    var video1 = document.getElementById('video-preview-madre');
    video1.appendChild(source1);
    video1.play();

    var source2 = document.createElement('source');
    source2.setAttribute('src', '/assets/video-preview/mob/italics.mp4');
    source2.setAttribute('type', 'video/mp4');
    var video2 = document.getElementById('video-preview-italics');
    video2.appendChild(source2);
    video2.play();

    var source3 = document.createElement('source');
    source3.setAttribute('src', '/assets/video-preview/mob/combo-2.mp4');
    source3.setAttribute('type', 'video/mp4');
    var video3 = document.getElementById('video-preview-combo');
    video3.appendChild(source3);
    video3.play();

    var source4 = document.createElement('source');
    source4.setAttribute('src', '/assets/video-preview/mob/icon.mp4');
    source4.setAttribute('type', 'video/mp4');
    var video4 = document.getElementById('video-preview-icon');
    video4.appendChild(source4);
    video4.play();

    var source5 = document.createElement('source');
    source5.setAttribute('src', '/assets/video-preview/mob/grc.mp4');
    source5.setAttribute('type', 'video/mp4');
    var video5 = document.getElementById('video-preview-grc');
    video5.appendChild(source5);
    video5.play();

    var source6 = document.createElement('source');
    source6.setAttribute('src', '/assets/video-preview/mob/oi.mp4');
    source6.setAttribute('type', 'video/mp4');
    var video6 = document.getElementById('video-preview-gs1');
    video6.appendChild(source6);
    video6.play();

    var source7 = document.createElement('source');
    source7.setAttribute('src', '/assets/video-preview/mob/mm.mp4');
    source7.setAttribute('type', 'video/mp4');
    var video7 = document.getElementById('video-preview-mm');
    video7.appendChild(source7);
    video7.play();
    //
    var source8 = document.createElement('source');
    source8.setAttribute('src', '/assets/video-preview/mob/maxxi.mp4');
    source8.setAttribute('type', 'video/mp4');
    var video8 = document.getElementById('video-preview-maxxi');
    video8.appendChild(source8);
    video8.play();

    var source9 = document.createElement('source');
    source9.setAttribute('src', '/assets/video-preview/mob/land.mp4');
    source9.setAttribute('type', 'video/mp4');
    var video9 = document.getElementById('video-preview-land');
    video9.appendChild(source9);
    video9.play();

    var source10 = document.createElement('source');
    source10.setAttribute('src', '/assets/video-preview/mob/lft.mp4');
    source10.setAttribute('type', 'video/mp4');
    var video10 = document.getElementById('video-preview-lft');
    video10.appendChild(source10);
    video10.play();
    */
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

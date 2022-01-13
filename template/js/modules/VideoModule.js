export default function VideoModule() {
    if ($('.intro-clip').length) {
        var player = fluidPlayer(
            'my-video', {
            "layoutControls": {
                "autoPlay": false,
                "mute": true,
                "allowTheatre": true,
                "playPauseAnimation": true,
                "playbackRateEnabled": true,
                "allowDownload": false,
                "playButtonShowing": true,
                "fillToContainer": false,
                "primaryColor": "white",
                // "posterImage": "",
                "posterImage": './img/bg-yourself-video.png' // Default false
            },
        }
        );
    }

    if ($('.post-yoga').length) {
        var player = fluidPlayer(
            'video-post-big', {
            "layoutControls": {
                "autoPlay": false,
                "mute": true,
                "allowTheatre": true,
                "playPauseAnimation": true,
                "playbackRateEnabled": true,
                "allowDownload": false,
                "playButtonShowing": true,
                "fillToContainer": false,
                "primaryColor": "white",
                // "posterImage": "",
                "posterImage": './img/bg-video-post.png' // Default false
            },
        }
        );
    }

    
}
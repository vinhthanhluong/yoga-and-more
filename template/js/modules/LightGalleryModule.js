export default function LightGalleryModule(){
    // if ($('#lightgallery').length) {

    //     $("#lightgallery").lightGallery({
    //         selector: ".icourse-lighty",
    //         thumbnail: true,
    //         download: false,
    //         // animateThumb: false,
    //         // showThumbByDefault: false
    //     });
    // }

    if ($('.slide-icourse').length) {

        $(".slide-icourse").lightGallery({
            selector: ".img-light",
            // thumbnail: true,
            download: false,
            // animateThumb: false,
            // showThumbByDefault: false
        });
    }

   
}
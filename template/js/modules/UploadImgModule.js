export default function UploadImgModule(){
    if ($('.account-box-name').length) {
        imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                imgupload.src = URL.createObjectURL(file)
            }
        }
    }
}
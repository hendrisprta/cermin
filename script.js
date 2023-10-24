document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const captureButton = document.getElementById('capture');

    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(error => {
                console.error('Error accessing the camera:', error);
            });
    }


});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const fileId = urlParams.get('id');
    
    if (fileId) {
        const fileDetails = JSON.parse(localStorage.getItem(fileId));

        if (fileDetails) {
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = createObjectURL(fileId, fileDetails);
            downloadLink.innerHTML = `Download ${fileDetails.name}`;
        } else {
            alert("File not found.");
        }
    } else {
        alert("Invalid file link.");
    }

    function createObjectURL(fileId, fileDetails) {
        const blob = new Blob([localStorage.getItem(fileId)], { type: fileDetails.type });
        return URL.createObjectURL(blob);
    }
});

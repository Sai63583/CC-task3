document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const fileLinkInput = document.getElementById("fileLink");

    function shareFile() {
        const file = fileInput.files[0];
        if (file) {
            // Generate a unique identifier for the file (in a real app, you would upload the file to a server)
            const fileId = generateUniqueId();
            
            // Save the file details in local storage (in a real app, use a server and database)
            const fileDetails = {
                id: fileId,
                name: file.name,
                size: file.size,
                type: file.type,
            };
            localStorage.setItem(fileId, JSON.stringify(fileDetails));

            // Create a link for the file
            const fileLink = `${window.location.origin}/download.html?id=${fileId}`;
            fileLinkInput.value = fileLink;
        } else {
            alert("Please select a file.");
        }
    }

    function generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
});

$(document).ready(function () {
    fetch("booklist.json").then(response => response.json()).then(data => console.log(data));
});


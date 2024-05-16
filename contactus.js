document.addEventListener("DOMContentLoaded", function() {
    // Get the text content height
    const textHeight = document.getElementById('mapCell').offsetHeight;
  
    // Set the iframe height to match the text content height
    document.getElementById('mapIframe').style.height = textHeight + 'px';
  });
  
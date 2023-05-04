function copyLink() {
    const shortenedLink = document.getElementById("shortened-link-text").innerHTML;
  
    navigator.clipboard.writeText(shortenedLink)
      .then(() => {
        document.getElementById("copy-button").innerHTML = "Copied!";
        setTimeout(() => {
          document.getElementById("copy-button").innerHTML = "Copy Link";
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function shortenLink() {
    const originalLink = document.getElementById("original-link").value;
  
    fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
      .then((response) => response.json())
      .then((data) => {
        const shortenedLink = data.result.short_link;
        document.getElementById("shortened-link-text").innerHTML = shortenedLink;
        document.getElementById("shortened-link").classList.remove("hidden");
        document.getElementById("copy-button").classList.remove("hidden");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
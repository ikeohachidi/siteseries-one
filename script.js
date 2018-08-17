let nav = document.getElementsByTagName("nav")[0]
let navLinks = nav.getElementsByTagName("a")
window.addEventListener("scroll", () => {
  if(window.scrollY >= 30) {
    nav.style.backgroundColor = "#fff";
    nav.style.boxShadow = "0px 4px 9px 0px rgba(107,107,107,1)";
    for (let link of navLinks) {
      link.classList.add("link-color")
    }
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
    for (let link of navLinks) {
      link.classList.remove("link-color")
    }
  }
})
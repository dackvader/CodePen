document.addEventListener("DOMContentLoaded", function () {
  const article = document.getElementById("main-article");
  const asides = article.querySelectorAll("aside");
  const articleColumns = article.querySelectorAll("article > p");

  // Intersection Observer options
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1 
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  }, options);

  for (let i = 0; i < asides.length; i++) {
    const pullQuote = asides[i].textContent.trim();

    // Create a new paragraph element
    const wrapper = document.createElement("div");
    const pulledQuote = document.createElement("p");
    pulledQuote.textContent = pullQuote;

    if (i === 0) {
      paragraph = articleColumns[1];
    } else {
      paragraph = articleColumns[20];
    }

    // Insert the new paragraph
    wrapper.appendChild(pulledQuote);
    article.insertBefore(wrapper, paragraph);

    // Apply styles to the new paragraph
    wrapper.classList.add("pulledquote-wrapper");
    pulledQuote.classList.add("pulledquote");

    // Observe the newly added pulledQuote element
    observer.observe(pulledQuote);
  }
});

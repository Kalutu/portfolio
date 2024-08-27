import React from "react";

export default function Intro() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  function getRandomIndex(data) {
    return Math.floor(Math.random() * data.length);
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        setQuotes(data);

        let storedIndex = localStorage.getItem("randomQuoteIndex");
        let randIndex = storedIndex
          ? parseInt(storedIndex, 10)
          : getRandomIndex(data);

        setRandomQuote(data[randIndex]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setRandomQuote({
          text: "Loyalty is a two-way street. If you expect it from others, you should show it to them.",
        });
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    if (quotes.length > 0) {
      let randIndex = getRandomIndex(quotes);
      setRandomQuote(quotes[randIndex]);
      localStorage.setItem("randomQuoteIndex", randIndex.toString());
    }
  }, [quotes]);

  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
      <div className="container-fluid bg-light my-6 mt-0" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <h3 className="text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">Kalutu Daniel</h1>
              <h2 className="typed-text-output d-inline">Software Engineer</h2>
              <div className="d-flex align-items-center pt-5">
                <a
                  href="docs/DANIEL KALUTU-CV.pdf"
                  className="btn btn-primary py-3 px-4 me-5"
                  download
                >
                  <i class="fa fa-download fa-2x text-dark"></i>Download CV
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="img/profile.png"
                alt="profile picture"
              />
            </div>
            <h2
              className="text-primary text-center py-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              &quot;{loading ? "Loading..." : randomQuote.text}&quot;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

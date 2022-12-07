import style from "~/styles/style.css";

export default function Index() {
  const A = ["T", "w", "o", " ", "f", "i", "l", "e", "s"];
  const B = [
    "T",
    "h",
    "o",
    "u",
    "s",
    "a",
    "n",
    "d",
    "s",
    " ",
    "o",
    "f",
    " ",
    "v",
    "a",
    "r",
    "i",
    "a",
    "t",
    "i",
    "o",
    "n",
    "s",
    ".",
  ];
  const C = [
    "I",
    "n",
    "f",
    "i",
    "n",
    "i",
    "t",
    "e",
    " ",
    "p",
    "o",
    "s",
    "s",
    "i",
    "b",
    "i",
    "l",
    "i",
    "t",
    "i",
    "e",
    "s",
    ".",
  ];
  const D = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "?",
    "#",
    "%",
    "&",
    "~",
    "(",
    ")",
    "[",
    "]",
  ];
  return (
    <div>
      <div className="p1">
        <p id="up">TWO VARIABLE, OPEN SOURCE FONTS from GITHUB</p>
        <div className="textup">
          <span class="Mona">MONA</span>
          <span className="d-block position-relative z-2 lh-condensed-ultra text-extrabold">
            <span className="and">&amp;</span>
          </span>
          <span className="hubot">HUBOT</span>
          <span class="sans">SANS</span>
        </div>
        <div class="p1img">
          <img
            className="img1"
            src="https://github.githubassets.com/images/modules/site/mona-sans/mona-hubot.webp"
            alt="Hubot and Mona, holding a font file"
          />
          <img
            className="img2"
            src="https://github.githubassets.com/images/modules/site/mona-sans/mona-sans-icon.png"
            alt=""
          />
          <div class="position-absolute mx-auto bottom-n3 left-0 right-0 z-3"></div>
          <div class="position-absolute mx-auto top-n12 left-0 right-0 z-2"></div>
        </div>
      </div>
      <div className="p2">
        <div className="onhoverbold">
          {A.map((item) => {
            return <span>{item}</span>;
          })}
          <br />
          {B.map((item) => {
            return <span>{item}</span>;
          })}
          <br />
          {C.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
        <div className="p2t">
          <hr />
          <div className="p2h">
            <span>MONA SANS</span>
            <img
              src="https://github.githubassets.com/images/modules/site/mona-sans/octoface.svg"
              alt="Mona icon"
              loading="lazy"
              decoding="async"
              className="mlogo"
              width="40"
              height="40"
            ></img>
          </div>
          <hr />
          <div className="p2m">
            <p>
              A strong and versatile typeface, designed with Degarism and
              inspired by industrial-era grotesques. Mona Sans works well across
              product, web, and print.
            </p>
            <video
              loop="loop"
              muted="muted"
              width="360"
              height="360"
              autoPlay
              src="https://github.githubassets.com/images/modules/site/discussions/animations/hearts.webm"
            ></video>
          </div>
          <div className="btns">
            <button>Download font</button>
            <button>View on Github</button>
          </div>
          <div className="alpha">
            {D.map((item) => {
              return <span>{item}</span>;
            })}
          </div>

          <img
            src="https://github.githubassets.com/images/modules/site/mona-sans/mona-sketches.webp"
            className="sketch1"
            alt="A series of sketches of Mona from different angles"
            loading="lazy"
            decoding="async"
          ></img>

          <hr />
          <div className="hubotsans">
            <video
              className="video2"
              loop
              autoPlay
              src="https://github.githubassets.com/images/modules/site/mona-sans/hubot.webm"
            ></video>
            <div className="hstop">
              <div>
                <span>HUBOT SANS</span>
                <img
                  src="https://github.githubassets.com/images/modules/site/mona-sans/octoface.svg"
                  alt="Mona icon"
                  loading="lazy"
                  decoding="async"
                  class="height-auto position-relative"
                  width="40"
                  height="40"
                ></img>
              </div>
              <hr />
              <p>
                Mona’s robotic sidekick. More geometric accents lend a technical
                and idiosyncratic feel—perfect for headers and pull‑quotes.
              </p>
              <div className="btns">
                <button className="btn1">Download font</button>
                <button>View on Github</button>
              </div>
            </div>
          </div>
          <div className="alpha">
            {D.map((item) => {
              return <span>{item}</span>;
            })}
          </div>
          <img
            src="https://github.githubassets.com/images/modules/site/mona-sans/hubot-sketches.webp"
            className="sketch1"
            alt="A series of sketches of Mona from different angles"
            loading="lazy"
            decoding="async"
          ></img>
        </div>
      </div>
      <div className="p3"></div>
      <div className="p4">
        <div className="p4top">
          <div className="p4top1">
            Find the right width, weight, & slant that fits you.
          </div>
          <div className="p4top2">
            <video
              width="360"
              height="360"
              loop
              autoPlay
              src="https://github.githubassets.com/images/modules/site/discussions/animations/mind-blown.webm"
            ></video>
            <p>
              Variable fonts give you granular control of how fonts are
              displayed by packaging a set of variable axes into one single font
              file. <br /> <br /> Mona Sans and Hubot Sans come with three
              variable axes each: weight (ultra thin to extra heavy), width
              (condensed to expanded), and slant (regular to italics). By
              combining these axes freely, you have access to thousands of
              different looks, and endless of possibilities.
            </p>
          </div>
        </div>
        <div className="p4imges">
          <img
            class="poster1"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-1.jpg"
            alt="Poster 1"
            loading="lazy"
            width="480"
            height="720"
          />
          <img
            class="poster2"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-2.jpg"
            alt="Poster 2"
            loading="lazy"
            width="480"
            height="720"
          />
          <img
            class="poster3"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-3.jpg"
            alt="Poster 3"
            loading="lazy"
            width="480"
            height="720"
          />
          <img
            class="poster4"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-4.jpg"
            alt="Poster 4"
            loading="lazy"
            width="480"
            height="720"
          />
          <img
            class="poster5"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-5.jpg"
            alt="Poster 5"
            loading="lazy"
            width="480"
            height="720"
          />
          <img
            class="poster6"
            src="https://github.githubassets.com/images/modules/site/mona-sans/poster-6.webp"
            alt="Poster 6"
            loading="lazy"
            width="480"
            height="720"
          />
        </div>
      </div>
      <div className="p5">
      </div>
    </div>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

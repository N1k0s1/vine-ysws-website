import { useState, useEffect } from 'react';
import '../css/terminal.css';
import HackerSimulator from './HackSimulator';
const artStyle = {
  color: '#33FF57',
  whiteSpace: 'pre',
  fontFamily: 'monospace',
};
const terminalStyle = {
  color: '#FFFFFF',
  backgroundColor: '#2E2E2E',
  padding: '20px',
  borderRadius: '5px',
  whiteSpace: 'pre',
  fontFamily: 'monospace',
};
const Typewriter = (text, delay, func, Spinner, spinTime) => {
  const startTime = new Date();
  let Output = '';
  let index = 0;
  text = Spinner ? "⠋⠙⠹⠸⠼⠴⠦⠧⠇" : text;



  const intervalId = setInterval(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        return clearInterval(intervalId);
      }
    });

    const endTime = new Date();
    if (index < text.length) {
      Output += text[index];
      index += 1;

      if (Spinner) {
        func(text[index]);
        setTimeout(function () {
          func(text[index + 1]);
        }, 700);
        if (index === 8) {
          if (endTime.getTime() - startTime.getTime() < spinTime) {
            index = 0;
          } else {
            clearInterval(intervalId);
          }
        }
      } else {
        func(Output);
      }
    } else {
      return clearInterval(intervalId);
    }
  }, delay);
};

// Move Terminal outside of Typewriter
function Terminal() {
  const [Text1, setText1] = useState('');
  const [Text2, setText2] = useState('');
  const [Text3, setText3] = useState('');
  const [Text4, setText4] = useState('');
  const cursor = '▮';
  let previousCommand;
  const [prevusedCommand, setprevusedCommand] = useState([]);

  function SkipIntro() {
    let id = setTimeout(() => { }, 0);
    while (id--) {
      clearTimeout(id);
    }

    id = setInterval(() => { }, 0);
    while (id--) {
      clearInterval(id);
    }
    setText1("ssh guest@vine.me");
    setText3("Access Granted!");
  }

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        if (!Text3.includes("Access")) {
          let id = setTimeout(() => { }, 0);
          while (id--) {
            clearTimeout(id);
          }

          id = setInterval(() => { }, 0);
          while (id--) {
            clearInterval(id);
          }
          setText1("ssh guest@vine.me");
          setText2("guest@vine.me's password:");
          setText3("Access Granted!");
        }
        const CommandArea = document.getElementById("command");
        if (CommandArea) {
          previousCommand = CommandArea.value;
          setprevusedCommand((prevArray) => [...prevArray, "guest@vine.me:~$ " + previousCommand]);
          if (CommandArea.value === "github") {
            window.open("https://github.com/N1k0s1/vine-ysws-website", '_blank');
          } else if (CommandArea.value === "source") {
            window.open("https://github.com/N1k0s1/vine-ysws-website", '_blank');
          }
          else if (CommandArea.value === "guide") {
            window.open("https://sonic-pi.mehackit.org/exercises/en/01-introduction/01-introduction.html", '_blank');
          }
          else if (CommandArea.value === "submit") {
            window.open("https://forms.fillout.com/t/tZ1CDPD5Brus", '_blank');
          }
          CommandArea.value = "";
        }
      }
    });

    Typewriter("ssh guest@vine.me", 100, setText1);

    setTimeout(() => {
      setText2("guest@vine.me's password:▮");
    }, 3000);

    setTimeout(() => {
      Typewriter("", 100, setText4, true, 2500);
    }, 4300);

    setTimeout(() => {
      setText3("Connecting to guest@vine.me...");
    }, 4300);

    setTimeout(() => {
      setText2("guest@vine.me's password:");
      setText3("> Access granted.");
    }, 7300);
  }, []);

  return (
    <div className="terminal">
      <div className='console'>
        <span className='userPrefix'>user@vine:~$
          <span style={{ color: "white", marginLeft: "8px" }}>{Text1}{Text1.length === 20 ? "" : cursor}</span>
        </span>

        {Text3.includes("Access") ? "" : <span id='skipButton' onClick={SkipIntro}>Press Enter or Click Here to Skip</span>}
        {Text2}
        <span> {Text4} <span style={{ color: Text3.includes("Access") ? ("yellow") : "" }} >{Text3}</span></span>
        <br />
        {Text3.includes("Access") ? (
<pre>
{`
____   ____.__               
\\   \\ /   /|__| ____   ____  
 \\   Y   / |  |/    \\_/ __ \\ 
  \\     /  |  |   |  \\  ___/ 
   \\___/   |__|___|  /\\___  >
                   \\/     \\/ 
`}
</pre>

) : null}

        {Text3.includes("Access") ? <span>Welcome!</span> : ""}
        {Text3.includes("Access") ? <span></span> : ""}<br />
        {Text3.includes("Access") ? <span><span style={{ color: "skyblue" }}>Available Commands:</span></span> : ""}
        {Text3.includes("Access") ? <span><span style={{ color: "#c9c9c9" }}>General: </span> about, hacksim, neofetch, clear, instructions</span> : ""}
        {Text3.includes("Access") ? <span><span style={{ color: "#c9c9c9" }}>Links:</span> github, submit, guide</span> : ""}

        <br></br>
        {Text3.includes("Access") ? <span>Thank you for visiting!◝(ᵔᵕᵔ)◜</span> : ""}
        <br></br>
        <ul className='previousCommands' id='console23'>
          {prevusedCommand.map((item, index) => {
            if (item.match(new RegExp(`\\b${"github"}\\b`, 'g'))) {
              return <li key={index}>{item}<br></br><br></br><span style={{ color: "#c9c9c9" }}>Opened GitHub https://github.com/N1k0s1/vine-ysws-website</span><br></br><br></br></li>;
            }
            else if (item.match(new RegExp(`\\b${"source"}\\b`, 'g'))) {
              return <li key={index}>{item}<br></br><br></br><span style={{ color: "#c9c9c9" }}>Opened the source code of this site in a new tab: https://github.com/N1k0s1/vine-ysws-website</span><br></br><br></br></li>;
            }
            else if (item.match(new RegExp(`\\b${"guide"}\\b`, 'g'))) {
              return <li key={index}>{item}<br></br><br></br><span style={{ color: "#c9c9c9" }}>Opened the guide for Sonic Pi in a new tab: https://sonic-pi.mehackit.org/exercises/en/01-introduction/01-introduction.html</span><br></br><br></br></li>;
            }
            else if (item.match(new RegExp(`\\b${"submit"}\\b`, 'g'))) {
              return <li key={index}>{item}<br></br><br></br><span style={{ color: "#c9c9c9" }}>Opened the submission form in a new tab: https://forms.fillout.com/t/tZ1CDPD5Brus</span><br></br><br></br></li>;
            }

            else if (item.match(new RegExp(`\\b${"hacksim"}\\b`, 'g'))) {
              return <div><HackerSimulator></HackerSimulator><br></br>
                To abort, use aborthack
              </div>
            }
            else if (item.match(new RegExp(`\\b${"aborthack"}\\b`, 'g'))) {
              return <div key={index}><li>{item}</li>
                bash: {item.replace("guest@renisal.me:~$", '')}: ERROR - Script terminated by the user</div>;
            }
            else if (item.match(new RegExp(`\\b${"clear"}\\b`, 'g'))) {
              return setprevusedCommand([]);
            }
            else if (item.match(new RegExp(`\\b${"about"}\\b`, 'g'))) {
              return <div><li key={index}>{item}</li>
                <div className='about'><br></br>
                to take part in this YSWS, you will code a piece of music that's at least 60 seconds long (max 4 minutes) using any open source code based music development software. (link to it on your github!) once you have completed your piece, you can submit it to the form provided. all submissions will recieve a vinyl with their piece of music on it. (this depends if there are at least 50 submissions.) the best pieces will be featured on the website. Good Luck! <br></br><br></br>
                </div></div>
            }
            else if (item.match(new RegExp(`\\b${"instructions"}\\b`, 'g'))) {
              return <div><li key={index}>{item}</li>
                <div className='instructions'><br></br>
                once you've made your 60 sec - 4 min song, make a GitHub repo, and a short readme about the genre/what the song's about. then submit your project using the "submit" command!<br></br><br></br>
                </div></div>
            }
             else if (item.match(new RegExp(`\\b${"neofetch"}\\b`, 'g'))) {
              return <div><li key={index}>{item}</li>
                <div className='neofetch'><br></br>
                <div style={{ display: 'flex' }}>
                {/* ASCII Art on the left */}
                <div style={artStyle}>
                  ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣶⣾⣿⣿⣿⣿⣷⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀<br />
                  ⠀⠀⠀⠀⠀⣠⢔⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀<br />
                  ⠀⠀⣠⢊⡴⡫⢚⡽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀<br />
                  ⠀⠀⡴⣱⢫⢎⡔⡩⣚⠵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀<br />
                  ⠀⣼⣽⣳⣣⢯⣞⡜⡱⣫⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀<br />
                  ⢸⣿⣿⣿⣿⣿⣿⣾⡽⣱⣫⠞⠉⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇<br />
                  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠃⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿<br />
                  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠘⠃⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿<br />
                  ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡿<br />
                  ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀⣀⣀⣠⣴⢟⡵⣳⢯⢿⣿⡟⣿⣿⣿⣿⡇<br />
                  ⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⡵⣫⢏⢞⡽⡽⣻⢯⡟⠀<br />
                  ⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣚⢕⡡⢊⠜⡵⣣⠟⠀⠀<br />
                  ⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢷⣫⢖⡥⢊⡴⠋⠀⠀⠀⠀⠀<br />
                  ⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣞⣭⠞⠋⠀⠀⠀⠀⠀⠀<br />
                  ⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠿⢿⣿⣿⣿⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀
                </div>

                {/* Terminal text on the right */}
                <div style={terminalStyle}>
                  <span style={{ color: "#33FF57" }}>guest@vine.me</span><br />
                  -------------------------<br />
                  <span style={{ color: "#33FF57" }}>OS:</span> Sonic Pi π<br />
                  <span style={{ color: "#33FF57" }}>Host:</span> Vine v1.0<br />
                  <span style={{ color: "#33FF57" }}>Kernel:</span> 6.1.0-21-amd64<br />
                  <span style={{ color: "#33FF57" }}>Uptime:</span> 21,373,712  mins<br />
                  <span style={{ color: "#33FF57" }}>Resolution:</span> 1920x1080<br />
                  <span style={{ color: "#33FF57" }}>DE:</span> GNOME 43.9 (wayland)<br />
                  <span style={{ color: "#33FF57" }}>WM:</span> Mutter<br />
                  <span style={{ color: "#33FF57" }}>Theme:</span> Adwaita [GTK2/3]<br />
                  <span style={{ color: "#33FF57" }}>Terminal:</span> gnome-terminal<br />
                  <span style={{ color: "#33FF57" }}>CPU:</span> Intel 80286 (1) @ 12.5MHz<br /><br />
                  
                  <span style={{color: "#FFFF00"}}>Fun fact!</span> Most climbing mishaps happen from exhaustion.<br />
                  Remember to take regular breaks!<br /><br />
                </div>
                </div>
                </div>
                </div>
            } else {
              return <div><li key={index}>{item}</li>
                bash: {item.replace("guest@renisal.me:~$", '')}: command not found</div>;
            }
          })}
        </ul>
        {Text3.includes("Access") ? <span className='commands'><span className='userPrefix'>guest@vine.me:~$</span> <input type="text" id="command" name="command" autoFocus></input></span> : ""}
      </div>
    </div>
  );
}


export default Terminal;
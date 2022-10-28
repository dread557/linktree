import React, { useState } from 'react'
import './App.scss'

function App() {
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  }

  const copyToClipboard = (content) => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(content);
    } else {
      unsecuredCopyToClipboard(content);
    }
  };

  return (
    <div className="App">
      <header>
        <div className='pfp-name-grp'>
          <img className='profile__img' id='profile__img' src='../images/pfp.jpg' alt='profile' />
          <p>Dada Olawunmi</p>
        </div>
        <p className='slack' id='slack'>@Dread</p>
        <button className='share'
          onClick={() => copyToClipboard('https://linktree-six-sable.vercel.app/')}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          <img src='../images/share.png' alt='share link' />
        </button>
        <button
          className='share-mob'
          onClick={() => copyToClipboard('https://linktree-six-sable.vercel.app/')}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          <img src='../images/share-mob.png' alt='share link' />
        </button>
      </header>
      {isHovering && <p className='hover-text'>Click to copy link</p>}
      <main className='links'>
        <a className='twitter' id='twitter' href='https://www.twitter.com/dread557' target="_blank" rel="noopener noreferrer">Twitter Link</a>
        <a className='btn__zuri' id='btn__zuri' href='https://training.zuri.team/' target="_blank" rel="noopener noreferrer">Zuri Team</a>
        <a className='books' id='books' href='http://books.zuri.team/' target="_blank" rel="noopener noreferrer">Zuri Books</a>
        <a className='book__python' id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=dread' target="_blank" rel="noopener noreferrer">Python Book</a>
        <a className='pitch' id='pitch' href='https://background.zuri.team/' target="_blank" rel="noopener noreferrer">Background Check for Coders</a>
        <a className='book__design' id='book__design' href='https://books.zuri.team/design-rules' target="_blank" rel="noopener noreferrer">Design Books</a>
        <section className='slack_git'>
          <img src='../images/slack.png' alt='slack' />
          <img src='../images/Icon.png' alt='github' />
        </section>
      </main>
      <footer>
        <img src='../images/Zuri.Internship_Logo.png' alt='zuri' />
        <p>HNG Internship 9 Frontend Task</p>
        <img src='../images/I4G.png' alt='I4g' />
      </footer>
    </div>
  );
}

export default App;

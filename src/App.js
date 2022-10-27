import React from 'react'
import './App.scss'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <img className='profile__img' src='../images/pfp.jpg' alt='profile' />
        <p>Dada Olawunmi</p>
        <p className='slack'>@Dread</p>
        <img className='share' src='../images/share.png' alt='share link' />
        <img className='share mobile' src='../images/share-mob.png' alt='share link' />
      </header>
      <main className='links'>
        <Link className='twitter' to='https://www.twitter.com/dread557'>Twitter Link</Link>
        <Link className='btn__zuri' to='https://training.zuri.team/'>Zuri Team</Link>
        <Link className='books' to='http://books.zuri.team/'>Zuri Books</Link>
        <Link className='book__python' to='https://books.zuri.team/python-for-beginners?ref_id=dread'>Python Book</Link>
        <Link className='pitch' to='https://background.zuri.team/'>Background Check for Coders</Link>
        <Link className='book__design' to='https://books.zuri.team/design-rules'>Design Books</Link>
        <Link className='' to='https://www.twitter.com/dread557'></Link>
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

import '../styles/componentStyles/Header.css'
import headerImg from '/headerImg.png'

const Header =  `
    <div class='header'>
        <div class='header-left'>
            <h1>Unlock Seamless <span>Transportation</span>: Share rides, Share routes</h1>
            <p>Book affordable rides, faster and more efficiently.</p>
            <form id='headform' class='waitlist'>
                <input id='headInput' type='email' required placeholder='Email address' />
                <button id='headButton' class='waitlist-button'>
                    <p>Join Waitlist</p>
                </button>
            </form>
        </div>
        <div class='header-right'>
            <div>
                <img src=${headerImg} />
            </div> 
        </div>
    </div>
`

export default Header
import { addDoc, collection } from 'firebase/firestore'
import '../styles/componentStyles/Footer.css'  
import { db } from '../firebase'



const Footer = `
    <div class='footer'>
        <div class='footer-left'>
            <h3>Stay in the Loop! Subscribe to Our Newsletter for Exclusive Updates.</h3>
            <form id='footform' class='footer-input'>
                <input id='footInput' type='email' required placeholder='Email address' />
                <button id='footButton'>
                    <p>Subscribe</p>
                </button>
            </form>
        </div>
        <div class='footer-right'>
            <div class='footer-icon'>
                <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div class='footer-icon'>
                <i class="fa-brands fa-instagram"></i>
            </div>
            <div class='footer-icon'>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    </div>
`

export default Footer
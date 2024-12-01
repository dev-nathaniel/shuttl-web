import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Section from './components/Section'
import groupRoute from '/groupRoute.png'
import vehicleSelect from '/vehicleSelect.png'
import chat from '/chat.png'
import Footer from './components/Footer'
import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebase'
// import { submitForm } from './submitForm'
let loading = false

document.querySelector('#app').innerHTML = `
  <div>
    ${Navbar}
    ${Header}
    ${Section(groupRoute, 'Share routes with various groups', 'Create groups, Add members, Share route, Share vehicle with members goign your way.', null, true)}
    ${Section(vehicleSelect, 'Pick vehicles to match your style and event', 'Going to a special event? Need a particular vehicle for the occasion? Select from various vehicles available to users at Shuttl.', true)}
    ${Section(chat, 'Communicate with drivers and passengers', "Need more information on the route? Need to verify anything from the driver? Shuttl provides it's users with a way to communicate with both driver and other passengers")}
    ${Footer}
  </div>
`

// submitForm(document.getElementById('footButton'))
// console.log('test')

export function submitForm() { 
  const submit = async (e) => {
          e.preventDefault()
          loading = true
          document.getElementById('footButton').innerHTML = '<div class="lds-dual-ringg"></div>'
          console.log(loading)
          try {
          const input = document.getElementById('footInput')
          const docRef = await addDoc(collection(db, "waitlist"), {
              email: input.value
          })
          } catch (err) {
              console.log(err)
          } finally {
              loading = false
              document.getElementById('footButton').innerHTML = '<p>Subscribed</p>'
              console.log(loading)
          }
  }

  const submitt = async (e) => {
    e.preventDefault()
    loading = true
    document.getElementById('headButton').innerHTML = '<div class="lds-dual-ring"></div>'
    console.log(loading)
    try {
    const input = document.getElementById('headInput')
    const docRef = await addDoc(collection(db, "waitlist"), {
        email: input.value
    })
    } catch (err) {
        console.log(err)
    } finally {
        loading = false
        document.getElementById('headButton').innerHTML = '<p>Joined</p>'
        console.log(loading)
    }
}
  
  document.getElementById('footform').addEventListener('submit', (e)=>submit(e))
  document.getElementById('headform').addEventListener('submit', (e)=>submitt(e))
  // console.log('test')
  }

  submitForm()

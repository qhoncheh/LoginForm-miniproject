import { v4 as uuidv4 } from 'uuid'
import './index.css'


const form = document.querySelector<HTMLFormElement>('#add-user-form')

const name = document.querySelector<HTMLInputElement>('#name')
const email = document.querySelector<HTMLInputElement>('#email')

const users = document.querySelector<HTMLDivElement>('user-list')

form?.addEventListener('submit', e => {
    e.preventDefault()

    if(name?.value === undefined || email?.value === undefined) return

    const userItem = {
        id:uuidv4(),
        name:name.value,
        email:email.value,
    } 
})


function addUser(item){
    
}
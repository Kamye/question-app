import {isValid} from './utils.js';
import './styles.css';

const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const dubmitBtn = form.querySelector('#submit');

form.addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }

    // Async request to server to save question

    
  }
}
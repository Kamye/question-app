export class Question {
  static create(question) {
    return fetch('https://ask-me-anything-4db04.firebaseio.com/questions.json', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }
}
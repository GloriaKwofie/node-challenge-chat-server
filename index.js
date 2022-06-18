const { response } = require("express");

function renderMessages (messages, sectionId) {
    const messagesSection = document. getElementById(sectionId);
    messagesSection.innerText = ""
    messages.forEach(message => {
    const container = document.createElement ('div')
    container.innerText= `${message. id} - ${message. from} - ${message. text}`
    messagesSection.appendChild (container) })
}

setInterval(() => {
    fetch('/messages/latest')
    .then(response => response.json())
    .then(messages => renderMessages(messages, 'messages-section'))
}, 1000)
const searchButton = document.getElementById('search-button' ) ;
const searchText = document. getElementById('search-text' ) 
const url = new URL ('messages/search' , document. location.origin) ;
searchButton.addEventListener('click', event => {
    const text = searchText.value 
    url.searchParams.set('text', text)
    fetch(url)
    .then(response => response.json())
    .then(messages => renderMessages(messages, 'search-result-section'))

})
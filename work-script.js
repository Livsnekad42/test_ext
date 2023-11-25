// let title = document.getElementsByClassName("resume__contacts");
// let p = document.createElement("button");
// p.textContent = 'Hello HUI';
// p.style.color = 'green';
// p.addEventListener('click', function handleClick(event) {
//     event.preventDefault()
//     console.log('bla')
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
// });
// title[0].append(p)

// chrome.storage.local.set({'foo': 'hello', 'bar': 'hi'}, function() {
//     console.log('Settings saved');
// });

// chrome.storage.local.set({ 'foo': 'bar' }).then(() => {
//     console.log("Value is set");
// });
//
//
// // Read it using the storage API
// chrome.storage.local.get(null).then((items) => {
//     console.log('Settings retrieved local', items);
// });
//
// chrome.storage.sync.get(null).then((items) => {
//     console.log('Settings retrieved sync', items);
// });
//
// chrome.storage.managed.get(null).then((items) => {
//     console.log('Settings retrieved managed', items);
// });
//
// console.log('qwewww', JSON.parse(localStorage.getItem('auth')))
try {
alert('qqqq')
    console.log('h', localStorage.getItem('name'))
    alert('ok1')
    console.log('q', localStorage.getItem('auth'))
chrome.storage.local.set({ 'name': JSON.stringify(localStorage.getItem('name')) }).then(() => {
    console.log("Value is set");
});
    alert('ok2')
    let token = JSON.parse(localStorage.getItem('auth')).accessToken
    chrome.storage.local.set({ 'token': token }).then(() => {
        console.log("Value is set token" );
    });

} catch (e) {
    console.log('h', e)
}

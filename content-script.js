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
    var text = document.createElement('button');
    text.innerText = 'Импортировать';
    text.classList.add('bloko-button')
    text.classList.add('bloko-button_kind-primary')
    text.style.marginTop = '10px';
    let title = document.getElementsByClassName("resume-job-search-status");
    title[0].parentNode.insertBefore(text, title[0].nextSibling)
    text.addEventListener("click", async () => {
        await chrome.storage.local.get('name', function(result){
            alert('ХХ РУ');
            alert(result.name);
            alert('hui');
        });
        await chrome.storage.local.get('token', function(result){
            alert(JSON.stringify(result))
            let hh_token = window.location.pathname.split('/')[2]
            const response = fetch("https://example.com/profile", {
                method: "POST", // or 'PUT'
                headers: {
                    "Api-Key": result.token,
                },
                body: JSON.stringify({
                    'hh_token': hh_token
                }),
            });
        });
    });
} catch (e) {
    console.log('h', e)
}

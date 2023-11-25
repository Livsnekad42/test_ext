//
// const tabs = await chrome.tabs.query({
//     url: [
//         "https://developer.chrome.com/docs/webstore/*",
//         "https://developer.chrome.com/docs/extensions/*",
//     ],
// });
//
// const collator = new Intl.Collator();
// tabs.sort((a, b) => collator.compare(a.title, b.title));
//
const template = document.getElementById("li_template");
const p = document.getElementById("hui");
// const elements = new Set();
// for (const tab of tabs) {
//     const element = template.content.firstElementChild.cloneNode(true);
//
//     const title = tab.title.split("-")[0].trim();
//     const pathname = new URL(tab.url).pathname.slice("/docs".length);
//
//     element.querySelector(".title").textContent = title;
//     element.querySelector(".pathname").textContent = pathname;
//     element.querySelector("a").addEventListener("click", async () => {
//         // need to focus window as well as the active tab
//         await chrome.tabs.update(tab.id, { active: true });
//         await chrome.windows.update(tab.windowId, { focused: true });
//     });
//
//     elements.add(element);
// }
// document.querySelector("ul").append(...elements);
//
const button = document.querySelector("button");
button.addEventListener("click", async () => {
    // await chrome.storage.local.set({ 'name': 'artem' }).then(() => {
    //     console.log("name is set");
    // });
    // await chrome.storage.local.set({ 'tok': JSON.parse(localStorage.getItem('auth')) }).then(() => {
    //     console.log("accessToken is set");
    // });
    await chrome.storage.local.get('name', function(result){
        alert('Settings retrieved local');
        alert(result.name);
        p.innerText = result.name
        alert('hui');
    });
});


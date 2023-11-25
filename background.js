const hh = 'hh.ru'
const habr = 'habr.com'
const work = 'profsoft.online'

// chrome.runtime.onInstalled.addListener(function() {
//     chrome.tabs.onActivated.addListener(async info => {
//         const tab = await chrome.tabs.get(info.tabId);
//
//         if (tab.url.includes(hh) || tab.url.includes(habr)) {
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: ["content-script.js"]
//         });
//          }
//     });
// });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
         if (tab.url.includes(hh) || tab.url.includes(habr)) {
             console.log('tab', tab)
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["content-script.js"]
            });
         }
        if (tab.url.includes(work)) {
            console.log('tab', tab)
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["work-script.js"]
            });
        }

    }
})
//
// chrome.action.onClicked.addListener(async (tab) => {
//     console.log('qweqwe', tab)
//     if (tab.url.includes(hh) || tab.url.includes(habr)) {
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: ["content-script.js"]
//         });
//     }
//     if (tab.url.includes(work)) {
//         console.log('qwe')
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: ["content-script.js"]
//         });
//         chrome.storage.local.get(null).then((items) => {
//             console.log('Settings retrievedqqqq', items);
//         });
//     }
// });
//
// chrome.storage.onChanged.addListener((changes, namespace) => {
//     for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
//         console.log(
//             `Storage key "${key}" in namespace "${namespace}" changed.`,
//             `Old value was "${oldValue}", new value is "${newValue}".`
//         );
//     }
// });
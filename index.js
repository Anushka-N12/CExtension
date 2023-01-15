if (localStorage.getItem("Links") === null) {
    let urls = []
    localStorage.setItem("Links", JSON.stringify(urls)) 
}

document.getElementById("tablink").addEventListener("click", save_tab)
document.getElementById("windowlinks").addEventListener("click", save_window)

function save_tab()  {
    let urls = JSON.parse(localStorage.getItem("Links"))
    chrome.tabs.query({currentWindow: true, active: true}, tabs => {
        urls.push(tabs[0].url)
        localStorage.setItem("Links", JSON.stringify(urls))
    })
}

function save_window()  {
    let urls = JSON.parse(localStorage.getItem("Links"))
    chrome.tabs.query({currentWindow: true}, tabs => {
        for (const tab of tabs) {
            urls.push(tab.url)
        }
        localStorage.setItem("Links", JSON.stringify(urls))
    })
}
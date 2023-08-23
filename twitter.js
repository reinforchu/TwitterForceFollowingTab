function forceFollowingTab() {
    let tabs = document.getElementsByClassName('css-4rbku5 css-18t94o4 css-1dbjc4n r-1awozwy r-1loqt21 r-6koalj r-eqz5dr r-6416eg');
    window.addEventListener('load', (event) => {
        tabs[1].click();
    });
}

const defaultHosts = "*://twitter.com/*";
const defaultCode = "forceFollowingTab();";

async function register(hosts, code) {
  return await browser.contentScripts.register({
    matches: [hosts],
    js: [{code}],
    runAt: "document_idle"
  });
}

var registered = register(defaultHosts, defaultCode);
chrome.omnibox.onInputEntered.addListener(function(text) {
    const url = qulinks_url + text;
    console.log(url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: url});
    });
});

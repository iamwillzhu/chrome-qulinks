import {qulinks_url} from "qulinks_url";
chrome.omnibox.onInputEntered.addListener(function(text) {
    const url = qulinks_url + text;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: url});
    });
});

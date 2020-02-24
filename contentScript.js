function popup() {
    let background = document.createElement('div');
    background.className = 'NoWastingTimeBackground';
    let suggestions = document.createElement('div');
    suggestionsText = document.createElement('p');
    suggestionsText.innerHTML =
        `
Are you sure you want to spend your time on this site? You could do one of the following things instead:<br><br>
<ul>
<li>Read your Bible</li>
<li>Go play outside</li>
<li>Do some school work</li>
<li>Clean your room</li>
<li>Fold your laundry</li>
<li>Do some other chore...</li>
</ul>
`
    document.body.classList.add('NoWastingTimeNoScrool');
    suggestionsText.className = 'NoWastingTimeParagraph';
    suggestions.appendChild(suggestionsText)
    suggestions.className = 'NoWastingTimeText';
    background.appendChild(suggestions);

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'NoWastingTimeButtons';

    let okButton = document.createElement('button');
    okButton.className = 'NoWastingTimeButton NoWastingTimeOk';
    okButton.innerText = 'Ok';
    okButton.addEventListener('click', () => {
        window.location = 'about:blank';
    })
    buttonContainer.appendChild(okButton);

    let noButton = document.createElement('button');
    noButton.className = 'NoWastingTimeButton NoWastingTimeNo';
    noButton.innerText = 'Nope';

    noButton.addEventListener('click', () => {
        document.body.removeChild(background);
        document.body.className = document.body.classList.remove('NoWastingTimeNoScrool');
    })
    buttonContainer.appendChild(noButton);

    suggestions.appendChild(buttonContainer);

    console.log(background);


    document.body.appendChild(background);
}

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('myStyles.css');
(document.head || document.documentElement).appendChild(style);

popup();

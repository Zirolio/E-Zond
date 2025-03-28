(async() => {
    eval(localStorage.getItem("e-zond-code") || await fetch(`https://raw.githubusercontent.com/Zirolio/E-Zond/main/e-zond/e-zond.user.js`).then(d => d.text()));
})();
setInterval(() => {
    let yesButton = document.querySelector("[jsname='k0pbMd']");
    if (yesButton) {
        // Find out how many people joined the event
        var infolabels = document.getElementsByClassName("AzuXid O2VjS CyPPBf");
        var guests = null;
        for (i=0; i<infolabels.length; i++) {
            if (infolabels[i].innerHTML.search(" ja") < 6 || infolabels[i].innerHTML.search(" yes") < 6) {
                guests = parseInt(infolabels[i].innerText.match(/\d+/g)[0]) // save the first number (not digit) of the label to guests
            }
        }

        // Find out the max amount of people
        var maximum = null;
        var eventTitle = document.getElementById("rAECCd")
        if (eventTitle) {
            var foundNumber = eventTitle.innerText.slice(eventTitle.innerText.toUpperCase().lastIndexOf("MAX")).match(/\d+/g) // array of all numbers after "MAX"
            if (
                eventTitle.innerText.toUpperCase().lastIndexOf("MAX") > 4 && // If the string isn't found, lastIndexOf() returns -1, so foundNumber contains every number in the title
                foundNumber != null
            ) {
                maximum = parseInt(foundNumber[0])
            }
        }
        if (guests !== null && maximum !== null) {
            if (guests > maximum) {
                let yesButtonSegment = document.querySelector("[jsname='Wbj7Wd']"); // The "yes" button also has an extra segment on the right, which has to be disabled as well
                yesButton.disabled = true;
                yesButtonSegment.disabled = true;
                yesButton.innerText = "VOLZET"
            }
        }
    }
}, 1000);
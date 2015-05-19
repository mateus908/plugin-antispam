function popMenu() {

        var mailAddress = gFolderDisplay.selectedMessage.author;
        
        window.openDialog("chrome://antispam/content/setspam.xul",
                "block", "chrome", mailAddress);
}

function popList() {

        window.openDialog("chrome://antispam/content/blockedmail.xul",
                "block", "chrome");
}
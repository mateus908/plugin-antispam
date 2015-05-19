var gmyextensionBundle = Components.classes["@mozilla.org/intl/stringbundle;1"]
    .getService(Components.interfaces.nsIStringBundleService);
var _bundle = gmyextensionBundle.createBundle("chrome://antispam/locale/antispam.properties")

var treeitems_size = 0;

function createTree(response) {
    
    var i;
    var arr = response.split("&");
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
            var cell = document.createElement("treecell");
            cell.setAttribute("label", arr[i]);
            var row = document.createElement("treerow");
            row.appendChild(cell);
            var item = document.createElement("treeitem");
            item.appendChild(row);
            var element = document.getElementById("parenttree");
            element.appendChild(item);
            treeitems_size++;
        }
    }
}

function onCancelar() {

        return true;
}

function onRemover() {

    var parent = document.getElementById("m-tree");
    var index = parent.currentIndex;
    var tchildren = document.getElementsByTagName("treeitem")[index];
    var cellText = parent.view.getCellText(index, parent.columns.getColumnAt(0));

    if (treeitems_size > 0) {
        removeMail(cellText);
        tchildren.parentNode.removeChild(tchildren);
    } else {
        alert(_bundle.GetStringFromName("emptyTable"));
    }
    treeitems_size--;
}

function onAdicionar() {

    var add = document.getElementById("add-blocked");
    var mail_add = add.value;
    var cell = document.createElement("treecell");

    if (mail_add != "") {
        cell.setAttribute("label", mail_add);
        var row = document.createElement("treerow");
        row.appendChild(cell);
        var item = document.createElement("treeitem");
        item.appendChild(row);
        var element = document.getElementById("parenttree");
        element.appendChild(item);
        add.value="";

        treeitems_size++;
        addMail(mail_add);
    } else {
        alert(_bundle.GetStringFromName("noMail"));
    }
}
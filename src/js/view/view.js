// the view presents model and provide ui event
var ListView=function(model, elements) {
    console.log(" in view");
    this.model = model;
    this.elements = elements;

    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);

    var _this = this;

    //attached model listener
    this.model.itemAdded.attach(function() {
        _this.rebuildList();
    });
    this.model.itemRemoved.attach(function() {
        _this.rebuildList();
    });

    //attached listener to Html Controls
    this.elements.list.change(function(e) {
        _this.listModified.notify({
            index: e.target.selectedIndex
        });
    });
    this.elements.addButton.click(function() {
        _this.addButtonClicked.notify();
    });
    this.elements.delButton.click(function() {
        _this.delButtonClicked.notify();
    });
}

ListView.prototype = {
    show: function() {
        console.log("in show");
        this.rebuildList();
    },
    rebuildList: function() {
        console.log("called by Show rebuildList");
        var list, item, key;
        list = this.elements.list;
        list.html('');
        item = this.model.getItems();
        for (key in item) {
            if (item.hasOwnProperty(key)) {
                list.append($('<option>' + item[key] + '</opton>'));
            }
        }
        this.model.setSelectedIndex(-1);
    }
};
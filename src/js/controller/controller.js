// controllers respond the user action and invoke change on model

var ListController=function(model, view) {
    console.log(" in controller");
    this.model = model;
    this.view = view;
    var _this = this;

    this.view.listModified.attach(function(sender, args) {
        _this.updateSelected(args.index);
    });

    this.view.addButtonClicked.attach(function() {
        _this.addItem();
    });

    this.view.delButtonClicked.attach(function() {
        _this.delItem();
    });
}

ListController.prototype = {
    addItem: function() {
        var item = window.prompt('Add item:', '');
        if (item) {
            this.model.addItem(item);
        }
    },
    delItem: function() {
        var index;

        index = this.model.getSelectedIndex();
        if (index !== -1) {
            this.model.removedItemAt(this.model.getSelectedIndex());
        }
    },
    updateSelected: function(index) {
        this.model.setSelectedIndex(index);
    }
};
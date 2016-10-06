var Event = function(sender) {
    console.log(" in Event Handler");
    console.log(" in Sender " + sender);
    this.sender = sender;
    this.listeners = [];
}
Event.prototype = {
    attach: function(listener) {
        this.listeners.push(listener);
        console.log("in listener values: " + listener);
    },
    notify: function(args) {
        var index;
        for (index = 0; index < this.listeners.length; index++) {
            this.listeners[index](this.sender, args);
        }
    }
};
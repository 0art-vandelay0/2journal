export default function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.countWords = function() {
    // return this.body.split(' ').length;
    return "This is a test";
};
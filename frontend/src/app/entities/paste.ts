export class Paste {
    constructor(
        public id: Number,
        public hash: String,
        public paste: String,
        public author: String,
        public title: String,
        public expires: Date,
    ) { }
}

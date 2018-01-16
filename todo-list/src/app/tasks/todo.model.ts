export class ToDo {
    constructor(
        public task: string,
        public dateAdded: Date,
        public dateCompleted: Date,
        public completed: Boolean
    ) {}
}

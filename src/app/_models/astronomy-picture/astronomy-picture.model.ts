export class AstronomyPicture {
    constructor(
        public date: string,
        public explanation: string = null,
        public url: string,
        public media_type: string,
        public service_version: string,
        public title: string
    ) {}
}

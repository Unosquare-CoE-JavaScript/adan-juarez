class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.image = imageUri;
        this.address = address;
        this.location = location;
        this.id = new Date().toString() + Math.random().toString();
    }
}

export default Place;
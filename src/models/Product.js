export default class Product {
    constructor({
        id = '',
        key='',
        name='',
        imageUrl='',
        sizes = {},
        price = '',
        quantity = 0,
        description = '',
    }){

        this.id = id;
        this.key = key;
        this.name = name;
        this.imageUrl = imageUrl;
        this.sizes = sizes;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    get id() {
        return this._id;
    }

    get key() {
        return this._key;
    }

    get name() {
        return this._name;
    }

    get imageUrl() {
        return this._imageUrl;
    }
    
    get sizes() {
        return this._sizes;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    get description() {
        return this._description;
    }

    set id(value) {
        this._id = value;
    }

    set key(value) {
        this._key = value;
    }

    set name(value) {
        this._name = value;
    }

    set imageUrl(value){
        this._imageUrl = value;
    }

    set sizes(value) {
        this._sizes = value;
    }

    set price(value) {
        this._price = value;
    }

    set quantity(value) {
        this._quantity = value;
    }
    
    set description(value) {
        this._description = value;
    }
}
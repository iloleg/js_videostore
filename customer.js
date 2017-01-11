/**
 * Created by oleg on 11/01/2017.
 */
var Rental = require('./rental');
class Customer{
    constructor(data){
        this._data = data;
    }
    get name(){
        return this._data.name;
    }
    get rentals(){
        return this._data.rentals
            .map(rental => new Rental(rental));
    }
}

module.exports = Customer;
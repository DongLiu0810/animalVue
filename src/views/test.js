var BicycleShop = function () {};
BicycleShop.prototype = {
    sellBicycle: function (model) {
        var bicycle;

        switch (models) {
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Comfort Cruiser':
            default:
                bicycle = new ComfortCruiser();
        }
        Interface.ensureImplements(bicycle, Bycycle);
        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    }
}
//
var Bicycle = new Interface('Bicycle', ['assemble', 'wash', 'ride', 'repair']);
var Speedster = function () {};
Speedster.prototype = {
    assemble: function () {},
    wash: function () {},
    ride: function () {},
    repair: function () {}
};

var californiaCruisers = new BicycleShop();
var yourNewBike = californiaCruisers.sellBicycle('The Speedster');

//
var CompositeFieldset = function (id, legendText) {
    this.components = {};

    this.element = document.createElement('fieldset');
    this.element.id = id;


    if (legendText) {
        this.legend = document.createElement('legend');
        this.legend.appendChild(document.createTextNode(legendText));
        this.element.appendChild(this.legend);
    }
}


var TimedWarrantyDecorator = function (bicycle, coberageLengthYears) {
    TimedWarrantyDecorator.superclass.constructor.call(this, bicycle);
    this.expDate = new Date();
    var coverageLengthInMs = this.coverageLength * 365 * 24 * 60 * 60 * 1000;
    this.expDate.setTime(this.expDate.getTime() + coverageLengthInMs);
}
extend(TimedWarrantyDecorator, BicycleDecorator);
TimedWarrantyDecorator.prototype.repair = function () {
    var repairInstructions;
    var currentDate = new Date();
    if (currentDate < this.expDate) {
        repairInstructions = 'This bicycle is currently covered bu a warranty.' + 'Please take it to an authorized Acme Repair Center.';
    } else {
        repairInstructions = this.bicycle.repair();
    }
    return repairInstructions;
};

TimedWarrantyDecorator.prototype.getPrice = function () {
    return this.bicycle.getPrice() + (40.00 * this.coverageLength);
}

var BellDecorator = function (bicycle) {
    BellDecorator.superclass.constructor.call(this, bicycle);
}
extend(BellDecorator, BicycleDecorator);
BellDecorator.prototype.assemble = function () {
    return this.bicycle.assemble() + 'Attach bell to handlebars.';
}
BellDecorator.prototype.getPrice = function () {
    return this.bicycle.getPrice() + 6.00;
};
BellDecorator.prototype.getTime = function () {
    return 'Bell rung.';
}

var myBicycle = new AcmeComfortCruiser();
myBicycle = new BellDecorator(myBicycle);
alert(myBicycle.ringBell());

var myBicycle = new AcmeComfortCruiser();
myBicycle = new BellDecorator(myBicycle);
myBicycle = new HeadlightDecorator(myBicycle);
alert(myBicycle.ringBell());
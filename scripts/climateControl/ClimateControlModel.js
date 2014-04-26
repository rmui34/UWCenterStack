ClimateControlModel = Backbone.Model.extend({
    defaults: {
        controlMode: 'driver',
        driverTemp: 70,
        passengerTemp: 70,
        driverFanSpeed: 25,
        passengerFanSpeed: 25,
        driverAirFlow: 'both',
        passengerAirFlow: 'both',
        defrostFront: false,
        defrostRear: false
    }
});
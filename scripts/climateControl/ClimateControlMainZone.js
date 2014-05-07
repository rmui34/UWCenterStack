var ClimateControlMainZone = MainZoneLayout.extend({
    id: 'climateControlMainZone',

    initialize: function() {
        this.clockView = new ClockView({title: 'TEMP'});
        this.contentLeftView = new ClimateControlMainZoneView({side: 'driver', model: this.model});
        this.contentRightView = new ClimateControlMainZoneView({side: 'passenger', model: this.model});
        this.currentTrackView = new CurrentTrackView({model: currentTrack});
    },

    onRender: function() {
        this.clock.show(this.clockView);
        this.currentTrack.show(this.currentTrackView);
        this.contentLeft.show(this.contentLeftView);
        this.contentRight.show(this.contentRightView);
    }

});

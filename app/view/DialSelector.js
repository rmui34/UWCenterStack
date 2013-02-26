Ext.define('UWCenterStack.view.DialSelector', {
	extend: 'Ext.Container',
	requires: ['Ext.dataview.DataView'],

	config: {
		fullscreen: true,
		items: [
			{
				xtype: 'roundlist',
				id: 'list',
				store: 'Songs',
				diameter: 500,
				itemConfig: {
					html: '',
					width: 150,
					height: 20,
				}
			},
			{
				xtype: 'dial',
				id: 'dial',
				diameter: 400,
				centered: true
			}
		],

		listeners: [
			{
				delegate: '#dial',
				event: 'dialrotate',
				fn: 'updateList'
			},
			{
				delegate: '#dial',
				event: 'restore',
				fn: 'restore'
			}
		]
	},

	updateList: function(theta, dial) {
		Ext.ComponentManager.get('list').angleChange(-theta/Math.PI*180, dial);
	},

	restore: function(theta, dial){
		var list = Ext.ComponentManager.get('list');
		theta = theta/Math.PI*180;
		if (theta%30 > -15){
			theta = theta - theta%30;
		} else {
			theta = theta - (30 + theta%30);
		}
		
		dial.setTheta(theta/180*Math.PI);
		dial.set();

		list.angleChange(-theta, dial);
	}
});
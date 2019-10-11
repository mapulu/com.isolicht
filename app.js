'use strict';

const Homey = require('homey');

class Isolicht extends Homey.App {
	
	onInit() {
		this.log('Isolicht is running...');
	}
	
}

module.exports = Isolicht;
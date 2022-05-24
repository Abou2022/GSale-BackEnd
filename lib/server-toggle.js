'use strict';

const mongoose = require('mongoose');

module.exports = exports = {};

exports.serverOn = (server, done) => {
	if (!server.isRunning) {
		server.listen(process.env.PORT, () => {
			server.isRunning = true;
			console.log('server is rizzunning');
			done();
		});
		return;
	}
	done();
};

exports.serverOff = (server, done) => {
	if (server.isRunning) {
		server.close(err => {
			if (err) return done(err);
			server.isRunning = false;
			mongoose.connection.close();
			console.log('server is dizzizown');
			done();
		});
		return;
	}
	done();
};
'use strict';

const TextChannel = require('../structures/TextChannel');

module.exports.handle = function(client, data) {
	switch (data.type) {
		case 0: {
			const channel = new TextChannel(client, data);
			client.channels.cache.delete(data.id);
			client.emit('channelDelete', channel);
		}
	}
};

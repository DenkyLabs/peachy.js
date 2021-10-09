'use strict';

const Permissions = require('../utils/PermissionParser');
const Base = require('./Base');

class GuildMember extends Base {
  constructor(client, data, user, guild) {
    super(client, data.id)
    this.user = user;
    this.guild = guild;

    this.parseData(data, user, guild);
  }

  parseData(data) {
    this.nickname = data.nick;
    this.rolesIds = data.roles;
    this.permissionsList = [];

    for (const role of this.rolesIds) {
      this.permissionsList.push(...Permissions.parse(this.guild.roles.cache.get(role).permissions));
    }

    if (data.joined_at) {
      this.joinedTimestamp = new Date(data.joined_at).getTime();
      this.joinedAt = new Date(this.joinedTimestamp);
    }
  }
}

module.exports = GuildMember;

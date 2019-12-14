"use strict";

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

const StudentHook = (exports = module.exports = {});

StudentHook.hashPassword = async userInstance => {
  if (userInstance.dirty.password) {
    userInstance.password = await Hash.make(userInstance.password);
  }
};

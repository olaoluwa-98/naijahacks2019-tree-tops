"use strict";

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  "@adonisjs/framework/providers/AppProvider",
  "@adonisjs/auth/providers/AuthProvider",
  "@adonisjs/bodyparser/providers/BodyParserProvider",
  "@adonisjs/cors/providers/CorsProvider",
  "@adonisjs/lucid/providers/LucidProvider",
  "@adonisjs/framework/providers/ViewProvider",
  "@adonisjs/validator/providers/ValidatorProvider",
  "adonis-guard/providers/GuardProvider",
  "adonis-sentry/providers/Sentry",
  "adonis-bumblebee/providers/BumblebeeProvider"
  // "adonis-kue/providers/KueProvider",
  // "adonis-twilio-node/providers/TwilioProvider",
  // "adonis-bitly/providers/BitlyProvider",
  // "@radmen/adonis-lucid-soft-deletes/providers/SoftDeletesProvider",
  // "@adonisjs/redis/providers/RedisProvider",
  // "@adonisjs/mail/providers/MailProvider",
];

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  "@adonisjs/lucid/providers/MigrationsProvider",
  "adonis-bumblebee/providers/CommandsProvider"
  // "adonis-kue/providers/CommandsProvider",
];

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  // Job: "App/Utilities/QueueJob"
  // SMS: "App/Services/Sms"
};

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [];

/*
|--------------------------------------------------------------------------
| Jobs
|--------------------------------------------------------------------------
|
| Here you write jobs
|
*/
const jobs = [
  // "App/Jobs/Sms/Reset/SendPasswordResetSms"
];

module.exports = { providers, aceProviders, aliases, commands, jobs };

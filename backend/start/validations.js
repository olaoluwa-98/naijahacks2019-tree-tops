/**
 * Ensure record exists in a database.
 */
const exists = async (data, field, message, args, get) => {
  const Database = use("Database");
  const value = get(data, field);
  if (!value) return;

  const [table, column] = args;
  const row = await Database.table(table)
    .where(column, value)
    .first();

  if (!row) throw message;
};

const inArray = async (data, field, message, args, get) => {
  const value = get(data, field);

  if (args.indexOf(value.toString()) < 0) {
    throw message;
  }

  return;
};

module.exports = { exists, inArray };

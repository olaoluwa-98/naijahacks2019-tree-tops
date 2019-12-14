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

module.exports = { exists };

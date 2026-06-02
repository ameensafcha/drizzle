import { pgTable, text, jsonb, timestamp } from "drizzle-orm/pg-core";

export const dashboardState = pgTable("dashboard_state", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

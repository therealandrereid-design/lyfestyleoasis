/*
# Create bookings table for appointment scheduling

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `client_name` (text, not null) — customer's name
  - `client_phone` (text, not null) — customer's phone number
  - `service_name` (text, not null) — selected service (e.g. "Signature Haircut")
  - `appointment_date` (date, not null) — preferred date
  - `appointment_time` (text, not null) — preferred time slot (e.g. "10:00 AM")
  - `duration_minutes` (int, not null, default 60) — service duration
  - `notes` (text, nullable) — optional customer notes
  - `status` (text, not null, default 'pending') — booking status: pending, confirmed, cancelled
  - `created_at` (timestamptz, default now())

2. Constraints
- Unique constraint on (appointment_date, appointment_time) to prevent double-booking.
  Only one booking can exist per date+time slot.

3. Indexes
- Index on appointment_date for fast lookups when checking available slots.
- Index on (appointment_date, appointment_time) to enforce the unique constraint.

4. Security
- Enable RLS on bookings.
- This is a single-tenant (no auth) barbershop booking app, so anon + authenticated
  can read (to check available slots) and insert (to create bookings).
- Updates and deletes are also allowed for anon + authenticated so the shop owner
  can manage bookings via the Supabase dashboard or future admin UI.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_phone text NOT NULL,
  service_name text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  duration_minutes int NOT NULL DEFAULT 60,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Prevent double-booking: one booking per date+time slot
CREATE UNIQUE INDEX IF NOT EXISTS bookings_date_time_unique
  ON bookings (appointment_date, appointment_time);

-- Fast lookups when querying available slots for a specific date
CREATE INDEX IF NOT EXISTS bookings_date_idx
  ON bookings (appointment_date);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings"
  ON bookings FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
CREATE POLICY "anon_update_bookings"
  ON bookings FOR UPDATE
  TO anon, authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;
CREATE POLICY "anon_delete_bookings"
  ON bookings FOR DELETE
  TO anon, authenticated
  USING (true);

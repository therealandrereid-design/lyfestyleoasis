/*
# Lock down bookings privacy

1. Summary
- Visitors could previously read every booking (names, phone numbers, notes) and
  update or delete any booking. This migration closes that.

2. Changes
- Remove public SELECT, UPDATE and DELETE policies on `bookings`.
- Keep public INSERT so visitors can still book, but force new rows to start as 'pending'.
- Add `get_booked_times(p_date date)` which returns ONLY the taken time slots for a
  date (no names/phones), so the booking form can still grey out booked times.
- Replace the date+time unique index with one that ignores cancelled bookings, so a
  cancelled slot becomes bookable again.

3. Notes
- The shop owner manages bookings from the Supabase dashboard, which is unaffected by these rules.
*/

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    status = 'pending'
    AND appointment_date >= CURRENT_DATE
    AND char_length(client_name) BETWEEN 1 AND 100
    AND char_length(client_phone) BETWEEN 1 AND 30
    AND (notes IS NULL OR char_length(notes) <= 500)
  );

CREATE OR REPLACE FUNCTION public.get_booked_times(p_date date)
RETURNS SETOF text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT appointment_time FROM bookings
  WHERE appointment_date = p_date AND status <> 'cancelled';
$$;

REVOKE ALL ON FUNCTION public.get_booked_times(date) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_booked_times(date) TO anon, authenticated;

DROP INDEX IF EXISTS bookings_date_time_unique;
CREATE UNIQUE INDEX IF NOT EXISTS bookings_date_time_active_unique
  ON bookings (appointment_date, appointment_time)
  WHERE status <> 'cancelled';

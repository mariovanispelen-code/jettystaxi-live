import { z } from "zod";
import { SITE } from "./constants";

export const reservationSchema = z.object({
  naam: z.string().trim().min(2).max(120),
  telefoon: z.string().trim().min(8).max(30).regex(/^[+\d\s()-]+$/),
  email: z.string().trim().email().max(200),
  vertrek: z.string().trim().min(3).max(300),
  bestemming: z.string().trim().min(3).max(300),
  datum: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/),
  tijd: z.string().trim().regex(/^\d{2}:\d{2}$/),
  passagiers: z.coerce.number().int().min(1).max(8),
  bagage: z.string().trim().max(200).optional().or(z.literal("")),
  type: z.enum(["regulier", "schiphol", "zakelijk", "bob", "m5", "overig"]),
  vlucht: z.string().trim().max(40).optional().or(z.literal("")),
  wensen: z.string().trim().max(2000).optional().or(z.literal("")),
  voorwaardenAkkoord: z.literal(true),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export type ReservationRecord = ReservationInput & {
  id: string;
  receivedAt: string;
  conditionsVersion: typeof SITE.conditionsVersion;
  conditionsAcceptedAt: string;
  source: "website-form";
  status: "dry-run-accepted";
};

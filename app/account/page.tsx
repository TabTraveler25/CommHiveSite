import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | Boxwoods Community Beehive",
};

export default function AccountPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <h1 className="font-display text-3xl text-ink-deep">
        Customer Account Login
      </h1>
      <p className="mt-4 max-w-md text-ink-deep/70">
        Account login and the Managed Service Client Dashboard are coming
        soon. Garden Concierge clients will be able to view private hive data
        and harvest schedules here.
      </p>
    </div>
  );
}

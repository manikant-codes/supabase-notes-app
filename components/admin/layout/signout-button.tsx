"use client";

import { signout } from "@/app/(actions)/auth-actions";
import Button from "@/components/common/button";

export default function SignoutButton() {
  return (
    <Button variant="ghost" onClick={signout}>
      Sign Out
    </Button>
  );
}

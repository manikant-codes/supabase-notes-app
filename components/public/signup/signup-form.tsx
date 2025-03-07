import { signup } from "@/app/(actions)/auth-actions";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import LinkButton from "@/components/common/link-button";

export default function SignupForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input labelText="Email" id="email" name="email" type="email" required />
      <Input
        labelText="Password"
        id="password"
        name="password"
        type="password"
        required
      />
      <Input
        labelText="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        required
      />

      <div className="space-y-2">
        <Button formAction={signup} className="w-full mt-8">
          Sign Up
        </Button>
        <p className="text-center">OR</p>
        <LinkButton href="/login" text="Log In" variant="ghost" />
      </div>
    </form>
  );
}

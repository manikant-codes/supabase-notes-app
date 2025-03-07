import { login } from "@/app/(actions)/auth-actions";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import LinkButton from "@/components/common/link-button";

export default function LoginForm() {
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

      <div className="space-y-2">
        <Button formAction={login} className="w-full mt-8">
          Log In
        </Button>
        <p className="text-center">OR</p>
        <LinkButton href="/signup" text="Sign Up" variant="ghost" />
      </div>
    </form>
  );
}

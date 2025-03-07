import Card from "@/components/common/card";
import PublicPageTitle from "@/components/public/page-title";
import SignupForm from "@/components/public/signup/signup-form";

export default function SignupPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Card>
        <PublicPageTitle className="mb-8">Sign Up</PublicPageTitle>
        <SignupForm />
      </Card>
    </div>
  );
}

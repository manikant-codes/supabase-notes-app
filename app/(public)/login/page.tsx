import Card from "@/components/common/card";
import LoginForm from "@/components/public/login/login-form";
import PublicPageTitle from "@/components/public/page-title";

export default function LoginPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Card>
        <PublicPageTitle className="mb-8">Log In</PublicPageTitle>
        <LoginForm />
      </Card>
    </div>
  );
}

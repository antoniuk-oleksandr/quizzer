"use client";

import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { useRouter } from "next/navigation";

const buttons = [
  {
    label: "Sign In",
    href: "/sign-in",
  },
  {
    label: "View All Quizzes",
    href: "/quizzes",
  },
  {
    label: "Create New Quiz",
    href: "/create",
  },
];

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="m-auto">
      <Card className="h-fit">
        <h1 className="text-4xl font-extrabold  mb-6">Quizzer Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Quick access to all your quizzes and account.
        </p>

        <div className="flex flex-col gap-4">
          {buttons.map((button, index) => (
            <Button type="button" key={index} onClick={() => router.push(button.href)}>
              {button.label}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomePage;

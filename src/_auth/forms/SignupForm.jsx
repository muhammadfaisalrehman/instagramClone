import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SigninValidation } from "@/lib/validation";

const SigninForm = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="w-full flex-center flex-col max-w-xs mx-auto">
        <p className="text-center text-gray-500 mt-2 mb-4">
          Sign up to see photos and videos from your friends.
        </p>

        <Button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4">
          Log in with Facebook
        </Button>

        <div className="flex items-center mb-4">
          <hr  className="flex-1 bg-gray-500 border-nones"/>
          <span className="text-gray-500 text-center text-xs font-semibold flex-[0.50]">OR</span>
          <hr  className="flex-1 bg-gray-500 border-nones"/>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Mobile Number or Email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Sign up
          </Button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-blue-500">Learn More</a>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          By signing up, you agree to our <a href="#" className="text-blue-500">Terms</a>, <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Cookies Policy</a>.
        </p>
      </div>
    </Form>
  );
};

export default SigninForm;

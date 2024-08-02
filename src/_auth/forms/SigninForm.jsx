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
  const form = useForm({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="w-full flex-center flex-col max-w-xs mx-auto">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Phone number, username, or email"
                    className="w-full p-2 border border-gray-300 rounded-sm text-sm"
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
                    className="w-full p-2 border border-gray-300 rounded-sm text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded-sm text-sm font-semibold mt-2 hover:bg-blue-600"
          >
            Log in
          </Button>
        </form>

        <div className="flex items-center justify-center w-full my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex flex-col items-center">
          <button className="text-blue-900 font-semibold text-sm flex items-center">
            <img
              src="assets/images/Facebook-Logo-PNG10.png"
              alt="Facebook"
              className="w-4 h-4 mr-2"
            />
            Log in with Facebook
          </button>

          <a href="#" className="text-xs text-blue-900 mt-4">
            Forgot password?
          </a>
        </div>
      </div>
    </Form>
  );
};

export default SigninForm;

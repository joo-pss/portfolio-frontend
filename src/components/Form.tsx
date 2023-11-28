import { Field } from "./Field";
import { Button } from "./Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const messageFormSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email")
    .trim(),
  message: z.string().min(1, "Message is required").trim(),
});

type MessageFormData = z.infer<typeof messageFormSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageFormData>({
    resolver: zodResolver(messageFormSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleMessage = async (data: MessageFormData) => {
    setIsLoading(true);
    await axios.post(`${import.meta.env.VITE_API_URL}/senders`, data);

    reset();
    setIsLoading(false);
  };

  const inputStyle = `w-full border border-slate-500 bg-transparent px-2.5 py-[0.6rem] outline-none`;

  return (
    <form onSubmit={handleSubmit(handleMessage)} className="mt-8">
      <div className="flex flex-col gap-8">
        <Field
          labelText="Name"
          htmlFor="name"
          hasError={!!errors.name}
          errorMessage={errors.name?.message}
        >
          <input
            type="text"
            id="name"
            className={inputStyle}
            {...register("name")}
          />
        </Field>
        <Field
          labelText="Email"
          htmlFor="email"
          hasError={!!errors.email}
          errorMessage={errors.email?.message}
        >
          <input
            type="email"
            id="email"
            className={inputStyle}
            {...register("email")}
          />
        </Field>
        <Field
          labelText="Message"
          htmlFor="message"
          hasError={!!errors.message}
          errorMessage={errors.message?.message}
        >
          <input
            type="text"
            id="message"
            className={inputStyle}
            {...register("message")}
          />
        </Field>
        <div className="flex justify-end">
          <Button isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
}

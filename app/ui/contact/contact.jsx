import { sendMail } from "@/app/actions";
import Button from "../button";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center pb-20">
      <h2 className="text-4xl font-bold mb-8 top-heading text-black">
        Contact me
      </h2>
      <form action={sendMail} className="w-[400px] flex flex-col items-center">
        <input
          className=" px-5 py-4 border border-black rounded-[5px] w-full mb-5 max-[1330px]:w-4/5 outline-none text-black"
          type="email"
          name="mail"
          placeholder="Email Address"
        />
        <Button name="Submit" />
      </form>
    </section>
  );
}

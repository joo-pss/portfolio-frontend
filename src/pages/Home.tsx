import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { AboutMe } from "../components/AboutMe";
import { Form } from "../components/Form";
import { FaLinkedin } from "react-icons/fa6";

export function Home() {
  return (
    <>
      <Title text={["hello,", "I'm João"]} />
      <div className="rounded-lg border border-teal-400/10 bg-[#112240]/50 p-8 shadow-lg">
        <div className="mb-12">
          <Subtitle text="About me" />
          <AboutMe />
        </div>
        <div>
          <Subtitle text="Let's chat" />
          <span className="text-slate-200">
            Get in touch with me via{" "}
            <a
              href="https://www.linkedin.com/in/joaopss255"
              target="_blank"
              className="whitespace-nowrap text-teal-300"
            >
              <FaLinkedin className="mb-1 mr-1 inline" />
              LinkedIn
            </a>{" "}
            or email.
          </span>
          <Form />
        </div>
      </div>
    </>
  );
}

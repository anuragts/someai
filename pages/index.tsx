import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Spinner from "./components/Spinner";

import ReactMarkdown from "react-markdown";

function Home() {
  interface Data {
    text: string;
  }
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    setError(false);
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const dataObj = Object.fromEntries(data);
    // setLoading(true);

    const response = await fetch("/api/gpt", {
      method: "POST",
      body: JSON.stringify({ prompt: dataObj.prompt }),
      headers: {
        "Content-Type": "application/json",
      },

      // handle errors

      
    });
    
    if (response.status === 500) {
      setError(true);
      setLoading(false);
      return ;

    }
    const result = await response.json();

    setTimeout(() => {
      setLoading(false);
      setData(result);
    }, 2);
  };

  return (
    <div className="">
      <Head>
        <title>Some AI</title>
        <meta name="description" content="Create code using chatgpt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="text-center text-2xl md:text-4xl mt-[5rem] mb-5">
          Some AI
        </div>
        <div className="text-center">create code using ChatGPT</div>
        <form onSubmit={handleSubmit} className="my-5 text-center">
          <input
            type="text"
            name="prompt"
            required
            placeholder="Create a java code to add two numbers"
            className="text-center text-sm md:text-2xl py-4 px-2 md:px-8 mt-10 mb-5 mx-2 md:mx-5"
          />
          <button
            type="submit"
            className="my-5 bg-white text-black py-3 px-7 sm:text-xl rounded-full font-bold border-2 border-white hover:bg-black hover:text-white text-sm"
          >
            Submit
          </button>
        </form>
        {loading ? (
          <div className="text-center my-5 ">
            <Spinner />
            {" "}
          </div>
        ) : null}

        {error ? (
          <div className="text-center my-5 text-red-500 text-2xl font-semibold">
            Something went wrong !!! Try again later
          </div>
        ) : null}
        <div className="break-words mx-5 sm:mx-20 sm:my-[4rem] sm:flex sm:justify-center">
          <ReactMarkdown className="break-words text-sm">{data}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
// export async function getServerSideProps(context:any) {
//   const timeout = context.serverRuntimeConfig.timeout;
//   // Use the timeout value to configure your API request..
//   return {
//     props: {
//       timeout,
//     }, // will be passed to the page component as props
//   }
// }

export default Home;

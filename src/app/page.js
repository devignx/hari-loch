"use client";
import Image from "next/image";
import bg from "../assets/bg.svg";
import bell from "../assets/Bell.svg";
import eye from "../assets/Eye.svg";
import logo from "../assets/logo.svg";
import coh from "../assets/Cohorts.jpg";
import Link from "next/link";
import { testData } from "@/data/testimonials-data";
import Testimonials from "./components/testimonials";
import TestCarousel from "./components/slick/testimonial-carousel";
import NotificationCarousel from "./components/slick/notification-carousel";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

import { useRouter } from "next/navigation";
export default function Home() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="centerh mob pointer-events-none fixed bottom-8 topppp w-full">
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-black w-11/12 ring-2 pointer-events-auto mx-auto block p-3 ring-green-600 rounded-lg text-white"
                >
                    Get Started{" "}
                    <MdKeyboardArrowRight className="text-blue-500 mb-0.5 inline" />
                </button>
            </div>
            <div className="w-screen h-screen md:overflow-hidden fixed bottt top-0 left-0">
                <Image
                    src={bg}
                    alt="bg"
                    className=" w-screen md:min-w-[75vw] noselect fixed top-0 opacity-50 md:opacity-100 md:-left-[15rem] object-cover h-screen"
                />
            </div>

            <div className="lg:max-w-[60vw] w-full relative md:py-24">
                <div className="w-11/12 mt-16 md:mt-0 md:w-2/3 flex flex-wrap md:px-24 mx-auto md:mx-0 text-center md:text-left mb-8 md:mb-24 pr-0 tracking-tighter">
                    <Image
                        src={bell}
                        alt="bell"
                        className="w-12 mx-auto md:mx-0 mb-4"
                    />
                    <h1 className="text-4xl font-medium drop-shadow-[0_8px_5px_rgba(0,0,0,0.2)]">
                        Get notified when a highly correlated whale makes a move
                    </h1>
                    <p className="opacity-70 text-lg mt-4">
                        Find out when a certain whale moves more than any preset
                        amount on-chain or when a dormant whale you care about
                        becomes active.
                    </p>
                </div>
                <div className="h-[35rem] md:absolute top-0 md:translate-y-24 right-12 w-4/6 md:w-[35%] mx-auto maskkk">
                    <NotificationCarousel />
                </div>

                <div className="w-11/12 md:w-full md:mt-0 flex flex-wrap md:px-24 mx-auto text-center md:text-right mb-8 md:mb-24 pr-0 md:ml-auto md:mr-0 tracking-tighter">
                    <div className=" flex justify-between w-full flex-wrap-reverse lg:flex-nowrap ">
                        <Image
                            src={coh}
                            alt="coh"
                            className="w-10/12 md:w-1/2 mt-8 mx-auto md:mr-12 rounded-xl"
                        />
                        <div>
                            <Image
                                src={eye}
                                alt="eye"
                                className="w-12 mx-auto mt-4 md:mt-0 mb-4 md:ml-auto md:mr-0"
                            />
                            <h1 className=" text-4xl font-medium drop-shadow-[0_8px_5px_rgba(0,0,0,0.2)]">
                                Watch what the whales are doing
                            </h1>
                            <p className="opacity-70 text-lg mt-4">
                                All whales are not equal. Know exactly what the
                                whales impacting YOUR portfolio are doing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-24 w-full">
                    <div className="px-24">
                        <h1 className="text-4xl text-right font-medium drop-shadow-[0_8px_5px_rgba(0,0,0,0.2)]">
                            Testimonials
                        </h1>
                        <hr className="border-white border-1 mix-blend-overlay my-6" />
                    </div>
                    <div className="w-11/12 md:w-[78%] pointer-events-none md:ml-auto md:mr-0">
                        <Image
                            src={logo}
                            alt="bell"
                            className="w-16 pc left-0 translate-x-24 absolute"
                        />
                        <div className="maskk w-full min-h-[10rem]">
                            <TestCarousel />
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white shrink flex pc text-zinc-400 justify-center items-center w-[40vw] h-screen fixed right-0 top-0 ">
                <form
                    onSubmit={() =>
                        router.replace("https://app.loch.one/welcome")
                    }
                    className="w-3/5 flex flex-col gap-6"
                >
                    <h1 className="text-4xl tracking-tighter font-medium ">
                        Sign up for
                        <br /> exclusive access.
                    </h1>
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-4 mt-5 text-zinc-800 peer rounded-md border-2 border-black/10 focus:drop-shadow-md drop-shadow-sm anim outline-none"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <button
                        type="submit"
                        className="bg-zinc-800 mb-5 text-center text-white rounded-md p-4"
                    >
                        Get Started
                    </button>
                    <p className="text-center font-semibold text-black">
                        You&apos;ll receive an email with an invite link to
                        join.
                    </p>
                </form>
            </section>

            {open && (
                <section className="bg-white mob shrink flex text-zinc-400 justify-center items-center w-screen h-screen fixed toppppp left-0 top-0 ">
                    <form
                        onSubmit={() =>
                            router.replace("https://app.loch.one/welcome")
                        }
                        className="w-3/5 flex flex-col gap-6"
                    >
                        <h1 className="text-4xl tracking-tighter text-center font-medium ">
                            Sign up for
                            <br /> exclusive access.
                        </h1>
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-4 mt-5 text-zinc-800 peer rounded-md border-2 border-black/10 focus:drop-shadow-md drop-shadow-sm anim outline-none"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <button
                            type="submit"
                            className="bg-zinc-800 mb-5 text-center text-white rounded-md p-4"
                        >
                            Get Started
                        </button>
                        <p className="text-center font-semibold text-black">
                            You&apos;ll receive an email with an invite link to
                            join.
                        </p>
                    </form>
                </section>
            )}
        </>
    );
}

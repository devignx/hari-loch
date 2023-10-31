export default function Testimonials({ name, msg, org }) {
    return (
        <div className="p-8 mx-8 shrink-0 max-w-[25rem] md:h-[15rem] text-black rounded-xl bg-white hover:drop-shadow-2xl drop-shadow-xl">
            <div className="flex gap-1 items-end">
                <h1 className="font-semibold whitespace-nowrap">{name}</h1>
                <p className="text-zinc-400 whitespace-nowrap overflow-clip overflow-ellipsis">
                    {org}
                </p>
            </div>
            <p className="mt-4">❛❛ {msg} ❜❜</p>
        </div>
    );
}

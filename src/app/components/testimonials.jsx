export default function Testimonials({ name, msg, org }) {
    return (
        <div className="p-8 w-11/12 md:w-fit hover:ring-green-400/100 m-2 ring-2 hover:ring-4 ring-blue-500/0 anim grow shrink-0 text-black rounded-xl bg-white">
            <div className="flex gap-1 items-end">
                <h1 className="font-semibold whitespace-nowrap">{name}</h1>
                <p className="text-zinc-400 whitespace-nowrap overflow-clip overflow-ellipsis">
                    {org}
                </p>
            </div>
            <p className="mt-2 w-[20rem] text-sm">❛❛ {msg} ❜❜</p>
        </div>
    );
}



const ContactForm = () => {

    function handleSubmit(){

    }

    return (
        <form action=""
        onSubmit={handleSubmit}
            className="w-full max-w-[550px] flex flex-col gap-3 justify-start px-6"
        >
            <h1
                className="text-2xl text-white mb-10 font-semibold"
            >
                Contact Me
            </h1>
            <div className="flex flex-col text-white gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                    className="w-full h-[40px] rounded border border-stone-300 outline-stone-50"
                />
            </div>
            <div className="flex flex-col text-white gap-2">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"
                    className="w-full h-[40px] rounded border border-stone-300 outline-stone-50"
                />
            </div>
            <div className="flex flex-col gap-2 text-white">
                <label htmlFor="enquiry">Type of Enquiry</label>
                <select name="enquiry" id="enquiry"
                    className="w-full h-[40px] rounded border border-stone-300 outline-stone-50 p-2"
                >
                    <option value="" className="text-black">Frontend Project Development</option>
                    <option value="" className="text-black">BackEnd Project Development</option>
                    <option value="" className="text-black">FullStack Project Development</option>
                </select>
            </div>
            <div className="flex flex-col text-white gap-2">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"
                    className="w-full h-[110px] rounded border border-stone-300 outline-stone-50"
                />
            </div>
            <button
            className="w-full p-2 rounded bg-cyan-500 text-cyan-950"
            >
                Send
            </button>
        </form>
    )
}

export default ContactForm
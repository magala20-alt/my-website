import MailGrid from "../Mail/page";
export default function ContactSection() {
    return (
        <div className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground md-12 max-w-2xl mx-auto">
                    If you would like to know more about me or collaborate, or just say hello, feel free to reach out. I'm always open to discussing new opportunities. 
                </p>
                <div className="flex gap-4 items-center md:items-stretch  flex-col md:flex-row pb-24 pt-20">
                    <div className="flex-1 space-y-8 flex-col">
                        <div className="flex-col gap-4">
                            <label for="name "className="block mb-2 text-lg font-medium ">Name</label>
                            <input id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Enter your name"></input>
                        </div>
                        <div className="flex-col gap-4">
                            <label for="email"className="block mb-2 text-lg font-medium ">Email</label>
                            <input id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" placeholder="Enter your email"></input>
                        </div>
                        <div className="flex-col gap-4">
                            <label for="message"className="block mb-2 text-lg font-medium ">Message</label>
                            <textarea id="message" className="h-30 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <div className="space-y-8 flex-1 text-right">
                        <div>
                            <h1 className="text-3xl mb-3.5">Email</h1>
                            <a>angelmagala20@gmail.com</a>
                        </div>
                        <div>
                            <h1 className="text-3xl mb-3.5">Home Address</h1>
                            <a>Kampala Uganda</a>
                        </div>
                        <div>
                            <h1 className="text-3xl mb-3.5">Socials</h1>
                            <div className="float-right">
                                 <MailGrid/>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}
export default function Contact() {
    return (
        <form className="flex flex-col items-center text-sm text-gray-800 px-4 py-10 md:px-0 bg-white">
            <p className="text-xs bg-amber-100 text-amber-600 font-medium px-3 py-1 rounded-full uppercase tracking-wide">
                Contact Us
            </p>

            <h1 className="text-4xl font-bold py-4 text-center text-gray-900">Let’s Get In Touch</h1>

            <p className="text-sm text-center text-gray-500 pb-8 max-w-md">
                We'd love to hear from you! Share your thoughts or send us your custom cake request. You can also reach us directly at{" "}
                <a href="mailto:cakespot.ke@gmail.com" className="text-amber-600 hover:underline">
                    cakespot.ke@gmail.com
                </a>
            </p>

            <div className="w-full max-w-md">
                {/* Name Field */}
                <label htmlFor="name" className="font-medium text-gray-700">Full Name</label>
                <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-amber-400 transition-all overflow-hidden">
                    <svg className="text-gray-500" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569" />
                    </svg>
                    <input type="text" className="h-full px-3 w-full outline-none bg-transparent" placeholder="Enter your full name" required />
                </div>

                {/* Email Field */}
                <label htmlFor="email" className="font-medium text-gray-700">Email Address</label>
                <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-amber-400 transition-all overflow-hidden">
                    <svg className="text-gray-500" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569" />
                    </svg>
                    <input type="email" className="h-full px-3 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
                </div>

                {/* Message Field */}
                <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                <textarea rows="4" className="w-full mt-2 p-3 bg-transparent border border-gray-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-amber-400 transition-all" placeholder="Tell us how we can help you..." required></textarea>

                {/* Submit Button */}
                <button type="submit" className="flex items-center justify-center gap-2 mt-6 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2.5 w-full rounded-full transition-all duration-300">
                    Submit Form
                    <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </form>

    
    );
}

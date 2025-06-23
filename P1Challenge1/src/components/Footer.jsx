import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#080a14] text-gray-400 px-6 md:px-12 py-10 text-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-white font-semibold mb-2">Company</h2>
                    <ul>
                        <li className="mb-1 hover:underline cursor-pointer">Supported Devices</li>
                        <li className="hover:underline cursor-pointer">Interest based Ads</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-semibold mb-2">View Website in</h2>
                    <ul>
                        <li>English</li>
                        <li>Indonesian</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-semibold mb-2">Need Help?</h2>
                    <ul>
                        <li className="mb-1 hover:underline cursor-pointer">Help</li>
                        <li className="hover:underline cursor-pointer">Feedback</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-semibold mb-2">Connect with Us</h2>
                    <div className="flex items-center gap-4 text-lg mb-4">
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                    <div className="flex items-center gap-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-auto" />
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 w-auto" />
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-xs text-center">
                <p className="mb-2">Content subject to availability. © 2025 Disney and its related entities. All Rights Reserved.</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <span className="hover:underline cursor-pointer">Privacy Policy</span>
                    <span className="hover:underline cursor-pointer">Terms Of Use</span>
                    <span className="hover:underline cursor-pointer">Supplemental Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
}

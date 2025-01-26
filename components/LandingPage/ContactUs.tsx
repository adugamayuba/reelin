import {useState} from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import leftStar from "../../assets/png/left-star.png";
import rightStar from "../../assets/png/right-star.png";
import { toast } from 'react-toastify';
import { postWaitList } from '../../services/homeServices';

const ContactUs = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: "", name: "" });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: "", name: "" };

        // Name validation
        if (!name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handlePost = async () => {
        if (!validateForm()) {
            toast.error("Please check all required fields");
            return;
        }

        try {
            setLoading(true);
            const data = {
                email: email.trim(),
                name: name.trim(),
            };

            await postWaitList(data);
            toast.success("Successfully! We will get back to you as soon as possible");
            setEmail("");
            setName("");
            setErrors({ email: "", name: "" });
        } catch (error) {
            console.error("Newsletter subscription error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !loading) {
            handlePost();
        }
    };

    return (
        <section className="w-full bg-[#1B4332] py-24 relative overflow-hidden rounded-t-[80px]">
            <ContainerLayout>
                {/* Background Stars */}
                <div className="absolute left-0 top-0 opacity-20">
                    <Image
                        src={leftStar}
                        alt="Decorative star"
                        width={leftStar?.width}
                        height={leftStar?.height}
                    />
                </div>
                <div className="absolute right-0 bottom-0 opacity-20">
                    <Image
                        src={rightStar}
                        alt="Decorative star"
                        width={rightStar?.width}
                        height={rightStar?.height}
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl">
                    <div className="grid lg:grid-cols-2 gap-12 p-12">
                        {/* Left Column - Text */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Join our Reelin newsletter
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Stay updated with amazing deals and offers, plus hot news about Reelin products 
                                and features. Be the first to know about our latest innovations.
                            </p>
                        </div>

                        {/* Right Column - Form */}
                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    className={`w-full px-6 py-4 rounded-xl border ${
                                        errors.name ? 'border-red-300 bg-red-50/50' : 'border-gray-200 bg-gray-50/50'
                                    } placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                    focus:ring-[#1B4332] focus:border-transparent transition-all`}
                                    placeholder="Full Name"
                                    required
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                                    }}
                                    onKeyPress={handleKeyPress}
                                    aria-label="Full Name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    required
                                    className={`w-full px-6 py-4 rounded-xl border ${
                                        errors.email ? 'border-red-300 bg-red-50/50' : 'border-gray-200 bg-gray-50/50'
                                    } placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                    focus:ring-[#1B4332] focus:border-transparent transition-all`}
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                                    }}
                                    onKeyPress={handleKeyPress}
                                    aria-label="Email Address"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>
                            <button
                                onClick={handlePost}
                                disabled={loading}
                                className="w-full bg-[#1B4332] text-white py-4 rounded-xl font-semibold
                                         hover:bg-[#143026] transition-colors duration-300 disabled:opacity-70
                                         disabled:cursor-not-allowed flex items-center justify-center"
                                aria-label={loading ? "Subscribing..." : "Join Newsletter"}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Subscribing...
                                    </>
                                ) : (
                                    "Join Newsletter"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </section>
    );
}

export default ContactUs

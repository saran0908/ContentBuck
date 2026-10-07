import React, { useState } from 'react'
import { motion } from "framer-motion"
import fadeIn from './variants';
import { FaArrowRight } from "react-icons/fa6";
import p1 from '../Assests/p1.jpg'
import p2 from '../Assests/p2.jpg'
import p3 from '../Assests/p3.jpg'
import p4 from '../Assests/p4.jpg'
import p5 from '../Assests/p5.jpg'
import p6 from '../Assests/p6.jpg'
import p7 from '../Assests/p7.jpg'
import p8 from '../Assests/p8.jpg'
import p9 from '../Assests/p9.jpg'
import p10 from '../Assests/p10.jpg'
import p11 from '../Assests/p11.jpg'
import p12 from '../Assests/p12.jpg'
import p13 from '../Assests/p13.jpg'
import p14 from '../Assests/p14.jpg'
import m1 from '../Assests/m1.png'
import m2 from '../Assests/m2.png'
import m3 from '../Assests/m3.png'
import m4 from '../Assests/m4.png'
import m5 from '../Assests/m5.png'
import m6 from '../Assests/m6.png'
import s1 from '../Assests/s1.jpg'
import s2 from '../Assests/s2.jpg'
import s3 from '../Assests/s3.jpg'
import s4 from '../Assests/s4.jpeg'
import q1 from '../Assests/q1.jpg'
import q2 from '../Assests/q2.jpg'
import q3 from '../Assests/q3.jpg'
import w1 from '../Assests/w1.jpg'
import w2 from '../Assests/w2.jpg'
import w3 from '../Assests/w3.jpg'
import w4 from '../Assests/w4.jpg'
import g1 from '../Assests/g1.jpeg'
import g2 from '../Assests/g2.jpeg'
import g3 from '../Assests/g3.jpeg'
import g4 from '../Assests/g4.jpeg'
import t1 from '../Assests/t1.jpg'
import t2 from '../Assests/t2.jpg'
import t3 from '../Assests/t3.jpg'
import t4 from '../Assests/t4.jpg'
import t5 from '../Assests/t5.jpg'
import t6 from '../Assests/t6.jpg'
import t7 from '../Assests/t7.jpg'
import { IoFolderOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { PiArrowBendRightDownThin } from "react-icons/pi";
import { PiArrowBendLeftDownThin } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FiClock } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from './Header';
function Home() {
    const arraya = [
        {
            Num: "700k+",
            text: "Subscribers Added"
        },
        {
            Num: "89,500 Hrs",
            text: "Watch-time"
        },
        {
            Num: " 100M+",
            text: "Views"
        },
        {
            Num: "35%+",
            text: "Average Retention"
        },
    ]
    const arrayb = [
        {
            Num: "38%+",
            text: "Revenue"
        },
        {
            Num: "15-70+",
            text: "Leads per month"
        }
    ]

    const array1a = [
        {
            img: p1,
            name: "Elijah Trask"
        },
        {
            img: p2,
            name: "Funpunch.shop"
        },
        {
            img: p3,
            name: "Jason kitenge"
        },
        {
            img: p4,
            name: "Iman Musa"
        },
        {
            img: p5,
            name: "James Hepburn"
        },
        {
            img: p6,
            name: "Marta Mi"
        },
        {
            img: p7,
            name: "Jandre Beer"
        },
        {
            img: p8,
            name: "Dante Mcclain"
        },
    ]
    const array1b = [
        {
            img: p9,
            name: "Project Viral"
        },
        {
            img: p10,
            name: "Danial"
        },
        {
            img: p11,
            name: "Owen"
        },
        {
            img: p12,
            name: "Mike"
        },
        {
            img: p13,
            name: "Nick"
        },
        {
            img: p14,
            name: "Tyler"
        },
    ]

    const array2a = [
        {
            text: "Expertise",
            expn: "With years of experience in the industry, we bring unparalleled expertise to every project. Our team consists of seasoned professionals who are experts in content strategy, creation, and distribution."
        },
        {
            text: "Long-Term Partnership",
            expn: "We're not just here for a one-time project. We believe in building long-term relationships with our clients, serving as trusted advisors and partners in your success."
        },
        {
            text: "Client Satisfaction",
            expn: "Our top priority is your satisfaction. We go above and beyond to exceed your expectations, delivering high-quality work on time and within budget."
        }
    ]
    const array2b = [
        {
            text: "Results-Driven Approach",
            expn: "At Contentbuck, we're laser-focused on delivering results. From increasing website traffic to boosting conversions, our strategies are designed to achieve measurable outcomes and drive business growth."
        },
        {
            text: "Customized Solutions",
            expn: "We understand that one size does not fit all. That's why we tailor our solutions to meet your specific goals, audience, and budget. Whether you need blog posts, social media content, or email campaigns, we've got you covered."
        },
    ]

    const array3 = [
        {
            img: s1,
            text: "Entrepreneurs"
        },
        {
            img: s2,
            text: " Consultants"
        },
        {
            img: s3,
            text: "Coaches"
        },
        {
            img: s4,
            text: "Podcasts"
        },
    ]

    // const array4 = [
    //     {
    //         no: "01.",
    //         name: "Discovery",
    //         expn: "We start by getting to know you and your goal. We will conduct in-depth discussions to  understand your unique needs, challenges, and vision."
    //     },
    //     {
    //         no: "02.",
    //         name: "Vision and Mission creation",
    //         expn: "We begin by collaborating with you to define a compelling vision and mission for your project or brand. This foundational step aligns our efforts with your overarching goals and sets the stage for suc cess."
    //     },
    //     {
    //         no: "03.",
    //         name: "Planning and style selection",
    //         expn: "Our team works closely with you to develop a strategic content plan tailored to your brand and target audience. We also help you to choose the appropriate style and tone to effectively communicate your message."
    //     },
    //     {
    //         no: "04.",
    //         name: "Get on camera",
    //         expn: "Set aside some time to record, and we’ll prepare the video ideas & scripts beforehand. Our team will coach you on the best practices for recording videos that perform and get conversions."
    //     },
    //     {
    //         no: "05.",
    //         name: "We edit the videos",
    //         expn: "Our team will transform your recordings into long and short-form videos. Depending on your goals, we can create as many or as few videos as you need. You'll have enough content to post from once to multiple times daily"
    //     },
    //     {
    //         no: "06.",
    //         name: "Propagate onto all platforms",
    //         expn: "We'll take your short-form videos and post them on all platforms. Sit back, relax, and watch the views and conversions come in."
    //     },
    //     {
    //         no: "07.",
    //         name: "Analytics",
    //         expn: "All the contents will be planned and tailored according to the past analytics, So you get the maximum reach."
    //     },
    // ]

    const array5 = [
        {
            text1: "2X ROAS within 60 days",
            text2: "Customizable highly edited ads  ",
            text3: "24/7 priority customer support",
        },
        {
            text1: "35% growth on YT within 90 days",
            text2: "Thumnails, SEO and Management",
            text3: "24/7 priority customer support",
        },
        {
            text1: "Killer personal brand within 90 days",
            text2: "100% Done for you",
            text3: "24/7 priority customer support",
        }
    ]

    const [date, SetDate] = useState(new Date());
    function showdateandtime(value) {
        let timeslotarray = []
        let selecttimestamp = new Date(value).getTime()
        let nextdaytimestamp = new Date(value).getTime() + (86400000 / 2)
        while (selecttimestamp < nextdaytimestamp) {
            timeslotarray.push(selecttimestamp)
            selecttimestamp += 1800000
        }
        return timeslotarray
    }
    function returnvalue(value) {
        if (value.toString().length < 2) {
            return value.toString().padStart(2, 0)
        }
        else {
            return value.toString()
        }
    }

    const [arrow, Setarrow] = useState([true, true, true]);
    const [count, setcount] = useState(0);
    // function Arrow(params) {
    //     const newarrow = [...arrow];
    //     newarrow[params] = params != 1 ? !newarrow[params] : params == 1 && count >=2 ? true : !newarrow[params];
    //     Setarrow(newarrow);
    //     if (params == 1) {
    //         let c1 = count;
    //         setcount(c1 + 1);           
    //     }
    //     // alert(count);

    // }

    function Arrow(params) {
        const newarrow = [...arrow];
        newarrow[params] =!newarrow[params];
        Setarrow(newarrow);

    }

    const [page, Setpage] = useState(1);
    const [showtime, SetShowtime] = useState(-1)
    const functionMonth = (i) => {
        switch (i) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
        }
    }
    const functionDay = (i) => {
        switch (i) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    }
    function myFunctiona() {
        const element = document.getElementById("GetinTouch");
        element.scrollIntoView({ behavior: "smooth", });
    }
    function myFunctionb() {
        const element = document.getElementById("SeeOurPlans");
        element.scrollIntoView({ behavior: "smooth", });
    }
    return (


        <div className='flex flex-col h-full w-full '>
            <Header />
            <div className='flex flex-col items-center py-5 bg-[#f1ecdf] p-5 lg:px-0'>
                <div className='flex flex-col max-w-[950px] w-full items-center gap-y-7 '>
                    <h1 className='text-black   text-center text-2xl md:text-4xl lg:text-7xl'>Unlimited Videos & Graphics for a Fixed Cost  </h1>
                    <h1 className='text-black  font-bold text-center text-sm md:text-md lg:text-lg w-2/3'>Weather its youtube video, ads, client testimonials, social media videos & many more - <span className='text-[#ff4040]'>Just under one monthly subscription</span></h1>
                    <div className='flex flex-row items-center gap-5'>
                        <h1 onClick={() => myFunctionb()} className='bg-[#fcc028] text-black  rounded-full border-2 border-black cursor-pointer hover:bg-black hover:text-white duration-300 px-8 p-2'>See Our Plans</h1>
                        <div onClick={() => myFunctiona()} className='flex flex-row items-center text-black  rounded-full border-2 border-black cursor-pointer hover:bg-black hover:text-white duration-300 px-6 p-2'>
                            <h1 className='mr-1'>Get in Touch</h1>
                            <FaArrowRight />
                        </div>
                    </div>
                    <h1 className='text-black  text-center text-sm md:text-md lg:text-lg w-2/3'>We will 2X your current analytics within 90 Days or You Don’t Pay.</h1>
                </div>
            </div>

            <div id="Results" className='scroll-mt-[60px] lg:scroll-mt-[80px] '>
                <div className='flex flex-col items-center bg-black py-10 p-5 lg:px-0'>
                    <div className='flex flex-col max-w-[950px] w-full items-center gap-10'>
                        <div className='flex flex-col lg:flex-row w-full justify-center gap-10'>
                            {arraya.map((item, index) =>
                                <div key={index} className='flex flex-col items-center gap-3'>
                                    <h1 className='text-white   text-5xl'>{item.Num}</h1>
                                    <h1 className='text-white   text-xl'>{item.text}</h1>
                                </div>)}
                        </div>
                        <div className='flex flex-row w-full justify-center gap-10'>
                            {arrayb.map((item, index) =>
                                <div key={index} className='flex flex-col items-center gap-3'>
                                    <h1 className='text-white  text-5xl'>{item.Num}</h1>
                                    <h1 className='text-white  text-xl'>{item.text}</h1>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center bg-[#f1ecdf] py-10 '>
                <div className='flex flex-col max-w-[950px] w-full items-start gap-y-10 p-5 lg:px-0'>
                    <motion.div variants={fadeIn("bottom", 0.01)} initial="" whileInView={""} className='flex flex-row justify-center w-full'>
                        <h1 className='text-black  text-4xl lg:w-4/5 w-full'>Brands that trusted us</h1>
                        <h1 className='border-b border-black w-full hidden md:flex'> </h1>
                    </motion.div>
                    <motion.div variants={fadeIn("bottom", 0.02)} initial="" whileInView={""} className='flex flex-row w-full gap-x-5 overflow-auto'>
                        {array1a.map((item, index) =>
                            <div key={index} className='flex flex-col items-center gap-3'>
                                <img src={item.img} alt='' className='rounded-full h-[100px] w-[100px]' />
                                <h1 className='text-center  w-[100px]'>{item.name}</h1>
                            </div>)}
                    </motion.div>
                    <motion.div variants={fadeIn("bottom", 0.03)} initial="" whileInView={""} className='flex flex-row w-full overflow-auto '>
                        <div className='flex flex-row gap-x-7'>
                            {array1b.map((item, index) =>
                                <div key={index} className='flex flex-col items-center gap-3'>
                                    <img src={item.img} alt='' className='rounded-full h-[100px] w-[100px]' />
                                    <h1 className='text-center  w-[100px]'>{item.name}</h1>
                                </div>)}
                        </div>
                        <h1 className='text-black  p-5 text-center text-3xl lg:flex hidden'>List goes on & on...</h1>
                    </motion.div>
                </div>
            </div>

            <div className='flex flex-col items-center bg-[#f1ecdf] py-10 p-5 lg:px-0'>
                <div className='flex flex-col max-w-[950px] w-full items-center gap-10'>
                    <motion.div variants={fadeIn("bottom", 0.01)} initial="" whileInView={""} className='flex flex-row w-full justify-evenly'>
                        <h1 className='text-black  text-4xl w-full md:w-3/5'>Why Choose Us?</h1>
                        <h1 className='border-b border-black w-full hidden md:flex'> </h1>
                    </motion.div>
                    <motion.div variants={fadeIn("bottom", 0.02)} initial="" whileInView={""} className='grid grid-row-1 md:grid-cols-3 gap-5'>
                        {array2a.map((item, index) =>
                            <div key={index} className='flex flex-col bg-[#faf9ef] border border-[#c5bfac] flex-1 rounded-3xl p-5 '>
                                <h1 className='text-black  text-2xl my-3'>{item.text}</h1>
                                <p className='text-black  text-sm'>{item.expn}</p>
                            </div>)}
                    </motion.div>
                    <motion.div variants={fadeIn("bottom", 0.03)} initial="" whileInView={""} className='grid grid-rows-1 md:grid-cols-2 gap-5'>
                        {array2b.map((item, index) =>
                            <div key={index} className='flex flex-col bg-[#faf9ef] border border-[#c5bfac] h-auto w-full md:w-full rounded-3xl p-5'>
                                <h1 className='text-black  text-2xl my-3'>{item.text}</h1>
                                <p className='text-black  text-sm'>{item.expn}</p>
                            </div>)}
                    </motion.div>
                    <div className='flex flex-col w-full gap-y-10'>
                        <motion.div variants={fadeIn("right", 0.1)} initial="" whileInView={""} className='flex flex-row justify-between items-center gap-x-5 overflow-auto'>
                            <img src={m1} alt='' className='' />
                            <img src={m2} alt='' className='' />
                            <img src={m3} alt='' className='' />
                        </motion.div>
                        <motion.div variants={fadeIn("right", 0.3)} initial="" whileInView={""} className='flex flex-row justify-between items-center gap-x-5 overflow-auto bg-red-'>
                            <img src={m4} alt='' className='' />
                            <img src={m5} alt='' className='' />
                            <img src={m6} alt='' className='' />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id='Portfolio' className='scroll-mt-[60px] lg:scroll-mt-[80px] '>
                <div className='flex flex-col items-center bg-[#f1ecdf] py-10 p-5 lg:px-0 scroll-smooth'>
                    <div className='flex flex-col max-w-[950px] w-full items-center gap-y-10'>
                        <div className='flex flex-row w-full justify-evenly'>
                            <h1 className='text-black  text-4xl w-full md:w-1/3'>Our Works</h1>
                            <h1 className='border-b border-black w-full hidden md:flex'> </h1>
                        </div>
                        <div className='flex flex-col w-full items-center gap-y-5'>
                            <h1 className='text-black  font-bold text-3xl bg-[#fcc028]'>Long Form Videos</h1>
                            <div className='flex flex-col md:flex-row gap-y-5 w-full justify-evenly'>
                                <div className='flex flex-col relative items-center justify-center'>
                                    <img src={q1} alt='' className='h-[200px]' />
                                    <MdOutlinePlayCircleOutline className=' absolute text-5xl text-white cursor-pointer' />
                                </div>
                                <div className='flex flex-col relative items-center justify-center'>
                                    <img src={q2} alt='' className='h-[200px]' />
                                    <MdOutlinePlayCircleOutline className=' absolute text-7xl text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex flex-col relative items-center justify-center'>
                                <img src={q3} alt='' className='h-[200px]' />
                                <MdOutlinePlayCircleOutline className=' absolute text-7xl text-white cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full items-center gap-y-10'>
                            <h1 className='text-black  text-3xl font-bold bg-[#fcc028]'>Short form videos</h1>
                            <div className='flex flex-row w-full justify-evenly gap-x-5 overflow-auto'>
                                <div className='flex flex-col relative flex-none items-center justify-center'>
                                    <img src={w1} alt='' className='h-[300px] ' />
                                    <MdOutlinePlayCircleOutline className=' absolute text-7xl text-white cursor-pointer' />
                                </div>
                                <div className='flex flex-col relative flex-none items-center justify-center'>
                                    <img src={w2} alt='' className='h-[300px] ' />
                                    <MdOutlinePlayCircleOutline className=' absolute text-7xl text-white cursor-pointer' />
                                </div>
                                <div className='flex flex-col relative flex-none items-center justify-center'>
                                    <img src={w3} alt='' className='h-[300px] ' />
                                    <MdOutlinePlayCircleOutline className=' absolute text-7xl text-white cursor-pointer' />
                                </div>
                                <div className='flex flex-col relative flex-none items-center justify-center'>
                                    <img src={w4} alt='' className='h-[300px] ' />
                                    <MdOutlinePlayCircleOutline className=' absolute text-7xl text-white cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full items-center gap-y-10'>
                            <h1 className='text-black  text-3xl font-bold bg-[#fcc028]'>Graphic Designs</h1>
                            <div className='flex flex-row w-full justify-start gap-x-20 overflow-auto'>
                                <img src={g1} alt='' className='h-[200px]' />
                                <img src={g2} alt='' className='h-[200px]' />
                            </div>
                            <div className='flex flex-row w-full justify-start md:justify-end gap-x-20 overflow-auto '>
                                <img src={g3} alt='' className='h-[220px]' />
                                <img src={g4} alt='' className='h-[220px]' />
                            </div>
                        </div>

                        <div className='flex flex-col w-full items-center gap-y-10'>
                            <h1 className='text-black  text-3xl font-bold bg-[#fcc028]'>More in our portfolio</h1>
                            <div className='flex flex-col w-full items-center bg-[#414141] gap-y-3 text-white text-xs p-5'>
                                <div className='flex flex-row w-full justify-between border-b border-b-gray-500 py-2'>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <IoFolderOutline className='text-lg' />
                                        <h1>Portfolio for content buck</h1>
                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <input onClick={() => Setarrow("a")} placeholder={`${arrow == "a" ? '' : 'Serach he folder'}`} type='text' className='outline-none bg-[#414141] text-white ' />
                                        <CiSearch className='text-lg' />
                                    </div>
                                </div>
                                <div className='flex flex-row w-full items-center justify-between cursor-pointer'>
                                    <div onClick={() => Arrow(0)} className='flex flex-row w-full items-center  cursor-pointer gap-x-1 ml-6'>
                                        <h1>Name</h1>
                                        {arrow[0] == true ? <IoIosArrowRoundDown className={`text-base ${arrow == true ? "" : ""}`} /> : <IoIosArrowRoundUp className='text-base' />}
                                    </div>
                                    <div className='flex flex-row w-full items-center justify-around'>
                                        <div onClick={() => Arrow(1)} className='flex flex-row items-center cursor-pointer gap-x-1'>
                                            <h1>Owner</h1>
                                            {arrow[1] == true ? <IoIosArrowRoundDown className={`text-base ${arrow == true ? "" : ""}`} /> : <IoIosArrowRoundUp className='text-base' />}
                                        </div>
                                        <div onClick={() => Arrow(2)} className='flex flex-row items-center cursor-pointer gap-x-1  md:ml-5'>
                                            <h1>Last modified</h1>
                                            {arrow[2] == true ? <IoIosArrowRoundDown className={`text-base ${arrow == true ? "" : ""}`} /> : <IoIosArrowRoundUp className='text-base' />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col w-full gap-y-10 '>
                            <div className='flex flex-row w-full justify-evenly'>
                                <h1 className='text-black  font-semibold text-4xl w-full md:w-1/3'>Testimonials</h1>
                                <h1 className='border-b border-black w-full hidden md:flex'> </h1>
                            </div>
                            <div className='flex flex-row w-full justify-between gap-x-5 lg:gap-x-20 overflow-auto'>
                                <img src={t1} alt='' className='h-[400px]' />
                                <img src={t2} alt='' className='h-[400px]' />
                                <img src={t3} alt='' className='h-[400px]' />
                            </div>
                            <div className='flex flex-row w-full justify-between gap-x-5 lg:gap-x-20 overflow-auto'>
                                <img src={t4} alt='' className='h-[400px]' />
                                <img src={t5} alt='' className='h-[400px]' />
                                <img src={t6} alt='' className='h-[400px]' />
                            </div>
                            <div className='flex flex-row w-full justify-center  gap-x-5 lg:gap-x-20'>
                                <img src={t7} alt='' className='h-[400px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='Process' className='scroll-mt-[60px] lg:scroll-mt-[80px] '>
                <div className='flex flex-col items-center bg-black py-10 p-5 lg:px-0'>
                    <div className='flex flex-col max-w-[950px] w-full items-center gap-y-10'>
                        <div className='flex flex-row w-full justify-evenly'>
                            <h1 className='text-white  text-4xl w-full lg:w-3/5'>Who this is for?</h1>
                            <h1 className='border-b border-white w-full hidden md:flex'> </h1>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-5'>
                            {array3.map((item, index) =>
                                <div key={index} className='flex flex-col h-full w-auto items-center relative '>
                                    <img src={item.img} alt='' className=' rounded-lg h-full' />
                                    <h1 className='bg-[#fcc028] text-center text-black  text-xl rounded-lg w-[150px] lg:w-[200px] absolute bottom-0 p-1 my-3'>{item.text}</h1>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>

            <div id='Plan' className='scroll-mt-[60px] lg:scroll-mt-[80px] '>
                <div className='flex flex-col items-center bg-[#f1ecdf] py-10 p-5 lg:px-0'>
                    <div className='flex flex-col max-w-[950px] w-full items-center gap-10'>
                        <div className='flex flex-row w-full justify-evenly'>
                            <h1 className='text-black  text-4xl w-full md:w-2/3'>How it Works?</h1>
                            <h1 className='border-b border-black w-full hidden md:flex'> </h1>
                        </div>
                        <div className='flex flex-col px-10 gap-y-10'>
                            <div className='flex flex-row w-full h-full justify-between gap-x-5'>
                                <div className='flex flex-col w-full md:w-1/2 gap-y-2'>
                                    <div className='flex flex-row gap-x-2'>
                                        <h1 className=' text-2xl text-gray-500'>01.</h1>
                                        <h1 className=' text-lg text-center bg-[#fcc028] '>Discovery</h1>
                                    </div>
                                    <h1 className=' text-black text-md'>We start by getting to know you and your goal. We will conduct in-depth discussions to  understand your unique needs, challenges, and vision.</h1>
                                </div>
                                {/* <div className='flex flex-col w-full items-start justify-end mt-10 '>
                                    <PiArrowBendRightDownThin className='text-8xl' />
                                </div> */}
                            </div>
                            <div className='flex flex-row w-full h-full justify-end gap-x-5'>
                                {/* <div className='flex flex-col w-full items-end justify-end mt-10 '>
                                    <PiArrowBendLeftDownThin className='text-8xl' />
                                </div> */}
                                <div className='flex flex-col w-full md:w-1/2  gap-y-2 '>
                                    <div className='flex flex-row gap-x-2'>
                                        <h1 className=' text-2xl text-gray-500'>02.</h1>
                                        <h1 className=' text-lg text-center bg-[#fcc028] '>Vision and Mission creation</h1>
                                    </div>
                                    <h1 className=' text-black text-md'>We begin by collaborating with you to define a compelling vision and mission for your project or brand. This foundational step aligns our efforts with your overarching goals and sets the stage for suc cess.</h1>
                                </div>
                            </div>
                            <div className='flex flex-row w-full h-full justify-start gap-x-5'>
                                <div className='flex flex-col w-full md:w-1/2  gap-y-2'>
                                    <div className='flex flex-row gap-x-2'>
                                        <h1 className=' text-2xl text-gray-500'>03.</h1>
                                        <h1 className=' text-lg text-center bg-[#fcc028] '>Planning and style selection</h1>
                                    </div>
                                    <h1 className=' text-black text-md'>Our team works closely with you to develop a strategic content plan tailored to your brand and target audience. We also help you to choose the appropriate style and tone to effectively communicate your message.</h1>
                                </div>
                                {/* <div className='flex flex-col w-full items-start justify-end mt-10 '>
                                    <PiArrowBendRightDownThin className='text-8xl' />
                                </div> */}
                            </div>
                            <div className='flex flex-row w-full h-full justify-end gap-x-5'>
                                {/* <div className='flex flex-col w-full items-end justify-end mt-10 '>
                                    <PiArrowBendLeftDownThin className='text-8xl' />
                                </div> */}
                                <div className='flex flex-col w-full md:w-1/2 gap-y-2'>
                                    <div className='flex flex-row gap-x-2'>
                                        <h1 className=' text-2xl text-gray-500'>04.</h1>
                                        <h1 className=' text-lg text-center bg-[#fcc028] '>Get on camera</h1>
                                    </div>
                                    <h1 className=' text-black text-md'>Set aside some time to record, and we'll prepare the video ideas & scripts beforehand. Our team will coach you on the best practices for recording videos that perform and get conversions.</h1>
                                </div>
                            </div>
                            <div className='flex flex-row w-full h-full justify-start gap-x-5'>
                                <div className='flex flex-col w-full md:w-1/2  gap-y-2'>
                                    <div className='flex flex-row gap-x-2'>
                                        <h1 className=' text-2xl text-gray-500'>05.</h1>
                                        <h1 className=' text-lg text-center bg-[#fcc028] '>We edit the videos</h1>
                                    </div>
                                    <h1 className=' text-black text-md'>Our team will transform your recordings into long and short-form videos. Depending on your goals, we can create as many or as few videos as you need. You'll have enough content to post from once to multiple times daily</h1>
                                </div>
                                {/* <div className='flex flex-col w-full items-start justify-end mt-10 '>
                                    <PiArrowBendRightDownThin className='text-8xl' />
                                </div> */}
                            </div>
                            <div className='flex flex-row w-full  h-full justify-end  gap-x-5'>
                                {/* <div className='flex flex-col w-full items-end justify-end mt-10 '>
                                    <PiArrowBendLeftDownThin className='text-8xl' />
                                </div> */}
                                <div className='flex flex-col w-full md:w-1/2 gap-y-2'>
                                    <div className='flex flex-row gap-x-2'>
                                        <h1 className=' text-2xl text-gray-500'>06.</h1>
                                        <h1 className=' text-lg text-center bg-[#fcc028] '>Propagate onto all platforms</h1>
                                    </div>
                                    <h1 className=' text-black text-md'>We'll take your short-form videos and post them on all platforms. Sit back, relax, and watch the views and conversions come in.</h1>
                                </div>
                            </div>
                            <div className='flex flex-row w-full h-full items-start '>
                                <div className='flex flex-col w-full md:w-1/2 gap-y-2'>
                                    <div className='flex flex-row gap-x-2'>
                                        <h1 className=' text-2xl text-gray-500'>07.</h1>
                                        <h1 className=' text-lg text-center bg-[#fcc028] '>Analytics</h1>
                                    </div>
                                    <h1 className=' text-black text-md'>All the contents will be planned and tailored according to the past analytics, So you get the maximum reach.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='SeeOurPlans' className='scroll-mt-[60px] lg:scroll-mt-[80px] '>
                <div className='flex flex-col items-center bg-[#fcc028] py-10 p-5 lg:px-0'>
                    <div className='flex flex-col max-w-[950px] w-full items-center gap-y-10'>
                        <h1 className='text-black  text-6xl text-center'>Our Services</h1>
                        <h1 className='text-black  text-lg text-center w-3/4'>Our plans are simple and designed to cater to creators of various sizes and needs. Choose a plan that suits your needs and budget.</h1>
                        <div className='grid grid-cols-1 w-full lg:grid-cols-3 gap-5'>
                            <div className='flex flex-col bg-[#f1ecdf] rounded-2xl gap-y-9 p-8'>
                                <div className='flex flex-row items-center gap-x-5'>
                                    <h1 className='bg-[#fcc028] text-2xl rounded-lg w-max p-2'><FaFacebookF /></h1>
                                    <h1 className='text-black  text-2xl '>ADs Creatives</h1>
                                </div>
                                <h1 className='text-black  text-4xl'>Highly engaging Video Ads</h1>
                                <h1 className='text-gray-600  text-lg'>For Entrepreneur in need of video ads.</h1>
                                <button onClick={() => myFunctiona()} className='text-black  text-xl border-2 border-black hover:bg-black hover:text-white duration-300 rounded-3xl p-2'>Contact Us</button>
                            </div>

                            <div className='flex flex-col bg-black rounded-2xl gap-y-7 p-8'>
                                <div className='flex flex-row items-center gap-x-5'>
                                    <h1 className='bg-[#fcc028] text-2xl rounded-lg w-max p-2'><FaYoutube /></h1>
                                    <h1 className='text-white  text-2xl '>Youtube</h1>
                                </div>
                                <h1 className='text-white  text-3xl'>For businesses and persoanl brands</h1>
                                <h1 className='text-gray-200  text-lg'>Tailored for Youtubers with significant editing demands.</h1>
                                <button onClick={() => myFunctiona()} className='flex flex-row items-center justify-center bg-[#fcc028] text-black  text-xl border-2 border-black hover:bg-black hover:text-white duration-300 rounded-3xl p-2 gap-x-3'>
                                    <h1>Contact Us</h1>
                                    <FaArrowRight />
                                </button>
                            </div>

                            <div className='flex flex-col bg-[#f1ecdf] rounded-2xl gap-y-7 p-8'>
                                <div className='flex flex-row items-center gap-x-5'>
                                    <h1 className='bg-[#fcc028] text-2xl rounded-lg w-max p-2'><SiYoutubeshorts /></h1>
                                    <h1 className='text-black  text-2xl '>Short Form</h1>
                                </div>
                                <h1 className='text-black  text-3xl'>For personal brands and podcasts</h1>
                                <h1 className='text-gray-600  text-lg'>For Creators in need of high-quality short-form content..</h1>
                                <button onClick={() => myFunctiona()} className='text-black  text-xl border-2 border-black hover:bg-black hover:text-white duration-300 rounded-3xl p-2'>Contact Us</button>
                            </div>
                        </div>
                        <div className='grid grid-rows-1 w-full md:grid-cols-3 gap-5'>
                            {array5.map((item, index) =>
                                <div key={index} className='flex flex-col gap-y-5'>
                                    <h1 className='text-black  text-xl'>What's Included</h1>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <TiTick className='text-white bg-black rounded-full text-2xl p-1' />
                                        <h1 className=''>{item.text1}</h1>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <TiTick className='text-white bg-black rounded-full text-2xl p-1' />
                                        <h1 className=''>{item.text2}</h1>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <TiTick className='text-white bg-black rounded-full text-2xl p-1' />
                                        <h1 className=''>{item.text3}</h1>
                                    </div>
                                </div>)}
                        </div>
                        <h1 className='text-black text-2xl  font-bold'>We also provide Test and sample work for $50*</h1>
                    </div>
                </div>
            </div>

            <div id='GetinTouch' className='scroll-mt-[60px] lg:scroll-mt-[80px] '>
                <div className='flex flex-col items-center bg-[#151515] py-10 p-5 lg:px-0 '>
                    <div className='flex flex-col max-w-[950px] w-full items-center gap-y-10'>
                        <div className='flex flex-row w-full justify-evenly '>
                            <h1 className='text-white  text-4xl w-full lg:w-3/5'>Why Choose Us?</h1>
                            <h1 className='border-b border-white w-full hidden md:flex'> </h1>
                        </div>
                        <div className='flex flex-col lg:flex-row w-full gap-5'>
                            <div className='flex flex-col w-full gap-5'>
                                <div className='flex flex-col w-full gap-2 items-start'>
                                    <h1 className='text-white '>Full Name</h1>
                                    <input className='rounded-lg bg-[#f1ecdf] border-2 border-[#f1ecdf] hover:bg-black duration-300 focus:bg-white outline-none w-full p-2' />
                                </div>
                                <div className='flex flex-col w-full gap-2 items-start'>
                                    <h1 className='text-white '>Email*</h1>
                                    <input className='rounded-lg bg-[#f1ecdf] border-2 border-[#f1ecdf] hover:bg-black duration-300 focus:bg-white outline-none w-full p-2' />
                                </div>
                                <div className='flex flex-col w-full gap-2 items-start'>
                                    <h1 className='text-white '>Company Name(Optional)                                </h1>
                                    <input className='rounded-lg bg-[#f1ecdf] border-2 border-[#f1ecdf] hover:bg-black duration-300 focus:bg-white outline-none w-full p-2' />
                                </div>
                                <div className='flex flex-col w-full gap-2 items-start'>
                                    <h1 className='text-white '>Service Required</h1>
                                    <input className='rounded-lg bg-[#f1ecdf] border-2 border-[#f1ecdf] hover:bg-black duration-300 focus:bg-white outline-none w-full p-2' />
                                </div>
                                <button className='bg-[#fcc028] text-black  font-semibold rounded-xl hover:bg-blue-300 hover:text-white duration-500 p-2'>Submit</button>
                            </div>

                            <div className='bg-white items-center w-auto lg:w-[1700px] h-[700px] '>

                                <div className='flex flex-col w-full items-center'>
                                    <div className='flex flex-col w-full items-center gap-y-2 border-b border-gary-400 py-2'>
                                        <div className='flex flex-row w-full items-start'>
                                            {page == 2 ? <IoMdArrowRoundBack onClick={() => Setpage(1)} className='border rounded-full text-3xl cursor-pointer text-blue-600 mx-5' /> : null}
                                            {page == 3 ? <IoMdArrowRoundBack onClick={() => Setpage(2)} className='border rounded-full text-3xl cursor-pointer text-blue-600 mx-5' /> : null}
                                        </div>
                                        <div className='flex flex-col w-full items-center gap-y-1'>
                                            {page == 1 ? <h1 className=' font-semibold text-gray-400 text-lg'>Path</h1> : null}
                                            <h1 className=' font-bold text-gray-800 text-2xl'>30 Minute Meeting</h1>
                                            <div className='flex flex-col items-start gap-y-3 w-1/2'>
                                                <div className='flex flex-row items-center gap-x-2'>
                                                    < FiClock className='text-2xl text-gray-500' />
                                                    <h1 className=' text-gray-500'>30 min</h1>
                                                </div>
                                                <div className='flex flex-row items-center gap-x-2'>
                                                    <BsCameraVideo className='text-3xl text-gray-500' />
                                                    <h1 className=' text-gray-500'>Web conferencing details provided upon confirmation.</h1>
                                                </div>
                                                {page == 1 ? <h1 className=' text-gray-600'>Lets make this happen !!!</h1> : null}
                                                {page == 1 ? <h1 className=' text-gray-600'>Discovery call</h1> : null}
                                                {page == 2 || page == 3 ? <div className='flex flex-col w-full items-center'>
                                                    <h1 className=' font-semibold text-lg text-black'>{functionDay((new Date(date).getDay()))}</h1>
                                                    <div className='flex flex-row  text-gray-500'>
                                                        <h1 className=' font-semibold text-lg '>{functionMonth((new Date(date).getMonth()))}-</h1>
                                                        <h1 className=' font-semibold text-lg'>{new Date(date).getDate()}/</h1>
                                                        <h1 className=' font-semibold text-lg'>{new Date(date).getFullYear()}</h1>
                                                    </div>
                                                </div> : null}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full items-center overflow-auto'>
                                        {page == 1 ? <div className='flex flex-col items-center py-10 gap-y-5'>
                                            <h1 className=' font-bold text-black text-xl'>Select a Day</h1>
                                            <Calendar onChange={(e) => {
                                                SetDate(new Date(e).getFullYear() + "-" + returnvalue(new Date(e).getMonth() + 1) + "-" + returnvalue(new Date(e).getDate()) + " 12:0:0")
                                                Setpage(2)
                                            }} value={date} />
                                            {/* {showtime === true ? <div className='flex flex-col overflow-auto'>
                                        <h1>Selet Time</h1>
                                         <button key={index}>{new Date(item).getHours() + ":" + new Date(item).getMinutes()}</button>)}
                                    </div> : null}                                    
                                </div> : null} */}
                                        </div> : null}
                                        {page == 2 ? <div className='flex flex-col w-full h-[450px] items-center justify-center gap-y-5 p-6 overflow-auto '>
                                            {showdateandtime(date).map((item, index) =>
                                                <div className={`w-full flex flex-row `}>
                                                    <h1 onClick={() => {
                                                        // Settime('b')
                                                        SetShowtime(index)
                                                    }} className={`text-2xl cursor-pointer   p-2 mx-1 text-center rounded-lg  ${showtime == index ? 'w-[50%] bg-gray-600 text-white' : 'text-blue-600 border border-blue-800 w-full'} duration-700`}>{new Date(item).getHours() + ":" + new Date(item).getMinutes()}</h1>
                                                    <h1 onClick={() => {
                                                        Setpage('3')
                                                        SetShowtime(index)
                                                    }} className={`text-2xl cursor-pointer  p-2 mx-1 text-center rounded-lg ${showtime == index ? 'w-[50%] bg-blue-600 text-white' : 'text-blue-600 border border-blue-800 opacity-0 hidden w-0'} duration-700`}>Next</h1>
                                                </div>)}
                                        </div> : null}
                                    </div>
                                </div>

                                {page == 3 ? <div className='flex flex-col w-full h-[450px] items-center overflow-auto'>
                                    <div className='flex flex-col w-full lg:w-2/3  items-center py-5 gap-5'>
                                        <div className='flex flex-col w-full gap-2 items-start'>
                                            <h1 className='text-black  font-semibold text-sm'>Name</h1>
                                            <input className='rounded-lg border-2 focus:border-blue-600 outline-none w-full p-2' />
                                        </div>
                                        <div className='flex flex-col w-full gap-2 items-start'>
                                            <h1 className='text-black  font-semibold text-sm'>Email</h1>
                                            <input className='rounded-lg border-2 focus:border-blue-600 outline-none w-full p-2' />
                                        </div>
                                        <button className='border-blue-600 border text-blue-600 hover:bg-blue-200  rounded-2xl w-full p-1'>Add Guests</button>
                                        <div className='flex flex-col w-full gap-2 items-start'>
                                            <h1 className='text-black  font-semibold text-sm'>Phone Number with country code *</h1>
                                            <input className='rounded-lg border-2 focus:border-blue-600 outline-none w-full p-2' />
                                        </div>
                                        <div className='flex flex-col w-full gap-2 items-start'>
                                            <h1 className='text-black  font-semibold text-sm'>Please share anything that will help prepare for our meeting.</h1>
                                            <input className='rounded-lg border-2 focus:border-blue-600 outline-none w-full p-2' />
                                        </div>
                                        <h1 className=' text-gray-600 font-semibold text-sm'>By proceeding, you confirm that you have read and agree to <span className='text-blue-900'>Calendly's Terms of Use and Privacy Notice.</span></h1>
                                        <button className='bg-blue-600 hover:bg-blue-800 text-white  rounded-2xl w-full p-2'>Schedule Event</button>
                                    </div>
                                </div> : null}

                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-y-10  '>
                            <h1 className=' text-white font-bold text-center text-xl md:text-3xl lg:text-5xl w-4/5'>Our commitment to Quality is helping Brands double their reach and income.</h1>
                            <button className='bg-[#fcc028] text-black font-semibold  px-10 rounded-3xl p-2 w-max'>Get In Touch</button>
                            <h1 className='text-white  text-sm md:text-md lg:text-lg'>©2024 Content Buck. All rights reserved.</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}


export default Home

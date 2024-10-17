import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At Forever, we are committed to delivering a seamless shopping experience by offering high-quality products that meet the diverse needs of our customers. Our journey began with a passion for curating the best items across various categories, ensuring that every product we offer is carefully selected for its craftsmanship, functionality, and style. With a user-friendly platform, fast shipping, and exceptional customer service, we strive to make online shopping as convenient and enjoyable as possible.</p>
        <p>Our mission is not just about selling products, but building a community of loyal customers who trust us for reliability and value. We believe in transparency, sustainability, and innovation, continuously improving our offerings to keep up with the latest trends and customer demands. Whether you're shopping for the latest fashion, home essentials, or lifestyle products, [Your Brand Name] is your go-to destination for quality and satisfaction.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to provide exceptional products and services that enrich the lives of our customers. We strive to create a seamless shopping experience, built on trust, innovation, and customer satisfaction. By continuously improving and adapting to your needs, we ensure that quality, convenience, and value are at the core of everything we do</p>

        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>At Forever, we are dedicated to ensuring the highest standards of quality. Every product undergoes thorough testing and review to guarantee it meets your expectations. Our commitment to excellence means you can shop with confidence, knowing that reliability, durability, and superior craftsmanship are at the core of everything we offer.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>
           <p className='text-gray-600'>Experience unparalleled convenience with our streamlined shopping process! At Forever, we prioritize your time and comfort, ensuring that finding and purchasing your favorite products is quick and hassle-free. From easy navigation on our website to fast checkout options, we are dedicated to providing you with a seamless experience that fits perfectly into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>At Forever, we believe that exceptional customer service is the foundation of a great shopping experience. Our dedicated team is committed to providing personalized support, ensuring that your needs are met every step of the way. Whether you have questions about our products, need assistance with your order, or seek recommendations, we're here to help. Your satisfaction is our top priority, and we strive to exceed your expectations with prompt and friendly service.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About

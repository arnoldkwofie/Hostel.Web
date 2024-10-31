
import React, { useState } from "react";
import Header from "pages/Home/Header";
import NewFooter from "pages/Home/Footer";

function About() {
  

  return (
    <div className="overall-container">
      <Header />
      <div className="max-w-5xl mx-auto p-5 text-gray-600 text-justify-right">
     
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p>
          H-Manager is a dedicated accommodation and facility management platform designed specifically for students and staff of the University of Mines and Technology (UMaT). Our mission is to streamline the process of finding and managing accommodation, ensuring a seamless experience for all users.
        </p>
        <p>
          At H-Manager, we understand the challenges faced by students and faculty in securing quality living arrangements that cater to their needs. Our platform provides comprehensive solutions that enhance the living experience at UMaT by offering a user-friendly interface, effective communication channels, and reliable service providers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc ml-6">
          <li>Accommodation Listings: Browse a wide variety of accommodation options tailored to fit different budgets and preferences.</li>
          <li>Booking Management: Easily book your preferred accommodation directly through our platform.</li>
          <li>Facility Management: Access information about facilities available within hostels and apartments.</li>
          <li>User Reviews and Ratings: Read reviews from other students to make informed decisions.</li>
          <li>Support Services: Get assistance with accommodation issues through our dedicated help desk.</li>
          <li>Event Notifications: Stay updated on campus events and housing fairs through our notification system.</li>
          <li>Facility Reservation: Reserve a facility for your programme on campus.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Terms of Service and Usage</h2>
        <p>By using H-Manager, you agree to the following terms and conditions:</p>
        <ol className="list-decimal ml-6">
          <li>User Registration: Users must create an account to access certain features of the platform.</li>
          <li>Acceptable Use: Users agree to use the platform for lawful purposes only.</li>
          <li>Accommodation Listings: While H-Manager strives to provide accurate listings, we do not guarantee availability or suitability.</li>
          <li>Payment Terms: All transactions are subject to the terms outlined during the booking process.</li>
          <li>Cancellation Policy: Cancellation terms vary by accommodation provider.</li>
          <li>Limitation of Liability: H-Manager is not liable for any damages resulting from the use of the platform.</li>
          <li>Privacy Policy: Personal information will be handled in accordance with our Privacy Policy.</li>
          <li>Modifications to Terms: H-Manager reserves the right to modify these terms at any time.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          For inquiries or support, please reach out to our customer service team at <a href="mailto:accommodation@umat.edu.gh" className="text-blue-500">accommodation@umat.edu.gh</a> or call us at +233 4564 765 445. We’re here to help you make the most of your accommodation experience at UMaT!
        </p>
      </section>
    </div>
      <NewFooter />
    </div>
  );
}

export default About;


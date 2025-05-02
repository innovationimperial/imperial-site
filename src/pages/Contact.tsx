import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <Card className="w-full max-w-xl shadow-2xl glass-card">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-2 text-imperial-purple">Contact Us</h1>
            <p className="mb-6 text-gray-600">We'd love to hear from you! Fill out the form below or reach us directly.</p>
            <div className="mb-6">
              <div className="mb-2 font-semibold text-imperial-purple">Email:</div>
              <a href="mailto:mcmarsh@innovationimperial.co.za" className="text-blue-600 hover:underline">mcmarsh@innovationimperial.co.za</a>
              <div className="mt-4 mb-2 font-semibold text-imperial-purple">Phone:</div>
              <a href="tel:+27697906374" className="text-blue-600 hover:underline">+27 69 790 6374</a>
            </div>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full btn-primary">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 
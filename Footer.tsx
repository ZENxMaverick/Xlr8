import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Vital Drops
              </span>
            </div>
            <p className="text-gray-600">
              Connecting donors with those in need, every drop matters.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/donate-blood"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Donate Blood
                </Link>
              </li>
              <li>
                <Link
                  to="/request-blood"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Request Blood
                </Link>
              </li>
              <li>
                <Link
                  to="/donation-centers"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Donation Centers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-primary-600"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-gray-600">support@vitaldrops.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-gray-600">
                  123 Blood Drive, Medical District
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Vital Drops. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

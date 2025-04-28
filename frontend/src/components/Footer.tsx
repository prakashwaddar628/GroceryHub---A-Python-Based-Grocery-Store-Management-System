export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-100 py-8 text-center text-gray-600 border-t border-gray-300 bottom-0">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            &copy; {currentYear} Grocery Hub. All rights reserved.
          </p>
          <ul className="flex justify-center space-x-4 text-sm">
            <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-600">Terms of Service</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    );
  }
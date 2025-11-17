export default function Footer({ palette }) {
  return (
    <footer className="py-10 text-center border-t border-gray-200">
      <div className="container mx-auto px-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} FashionONE ERP</p>
          <p>Terms | Privacy</p>
          <p>1421, 2nd Floor, 13th Main, Sahakar Nagar, Bangalore - 560092 • www.fashion1erp.com</p>
        </div>
      </div>
    </footer>
  )
}

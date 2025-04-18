import Link from 'next/link';

export default function notFound(){
return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-600">404</h1>
        <p className="text-2xl md:text-3xl text-gray-800 font-semibold mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist.
        </p>
        <Link href="/" className="inline-block mt-6 px-6 py-3 bg-gray-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-700 transition-all">
          Go to Homepage
        </Link>
      </div>
    </div>
)
}
export default function About() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">About LinkLine Solutions</h1>
          <p className="mt-4 text-xl text-gray-600">
            Leading the way in industrial automation and technological innovation
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
            Our mission is to deliver state-of-the-art security and technology solutions that protect assets, enhance safety, and improve operational efficiency. We aim to achieve this by, 
            Offering a diverse range of reliable, high-quality products tailored to meet our customers' needs,
            Continuously innovating and integrating the latest technologies to stay ahead of industry trends,
            Building lasting relationships through exceptional customer service, professionalism, and integrity.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
            To become the most trusted provider of advanced technology and security solutions, enabling a safer 
            and smarter world through innovative products, exceptional service, and unwavering commitment to quality and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries to deliver cutting-edge solutions
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in everything we do
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Building trust through honest and ethical business practices
              </p>
            </div>
          </div>
        </div>

          
        {/*Team Section
         <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">John Smith</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>*/}
        
      </div>
    </div>
  );
}
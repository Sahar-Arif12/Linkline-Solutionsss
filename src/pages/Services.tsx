export default function Services() {
  const services = [
    {
      title: 'Surveillance and Security',
      description: 'Ensures 24/7 monitoring and protection of homes, offices, and public spaces with advanced cameras and DVRs.',
      features: [
        'High-Definition Imaging',
        'Motion Detection',
        'Night Vision Capability',
        'Remote Monitoring via Apps',
      ],
    },
    {
      title: 'Metal Detection and Screening',
      description: 'Enhanced safety through accurate metal detection and secure access control.',
      features: [
        'High Sensitivity Detection',
        'Multi-Zone Walk-Through Gates',
        'Portable Metal Detectors',
        'Under Vehicle Surveillance Tools',
      ],
    },
    {
      title: 'Communication Solutions',
      description: 'Reliable tools for seamless connectivity and enhanced communication.',
      features: [
        'Dual-Band Wi-Fi Routers',
        'Cordless Phones with Caller ID',
        'Walkie Talkie Accessories',
        'GSM Wireless Phones',
      ],
    },
    {
      title: 'Operational Efficiency Devices',
      description: 'Products that streamline operations and improve productivity.',
      features: [
        'Money Counting Machines with Counterfeit Detection',
        'Rechargeable Search Lights',
        'LED Traffic Baton Lights',
        'Rugged Police Batons',
      ],
    },
  ];
  

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive industrial automation and security solutions
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
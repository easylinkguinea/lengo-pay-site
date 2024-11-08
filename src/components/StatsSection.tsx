import React from 'react';

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Countries */}
          <div className="group p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl overflow-hidden relative">
            {/* African Pattern Background */}
            <div 
              className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                <img
                  src="https://i.ibb.co/Wkzqdsr/africa.gif"
                  alt="Africa Map"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-black mb-2">
                1
              </div>
              <div className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors">
                Pays de présence
              </div>
            </div>
          </div>

          {/* Business Clients */}
          <div className="group p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl overflow-hidden relative">
            {/* African Pattern Background */}
            <div 
              className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                <img
                  src="https://i.ibb.co/vsMcGSs/building.gif"
                  alt="Building Icon"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-black mb-2">
                + 1 000
              </div>
              <div className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors">
                Clients entreprises
              </div>
            </div>
          </div>

          {/* Daily Transactions */}
          <div className="group p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl overflow-hidden relative">
            {/* African Pattern Background */}
            <div 
              className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                <img
                  src="https://i.ibb.co/933LbDF/payment-app.gif"
                  alt="Payment Icon"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-black mb-2">
                + 50 000
              </div>
              <div className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors">
                Transactions par jour
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
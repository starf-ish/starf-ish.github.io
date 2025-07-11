import React from 'react';
import { Piano, Users, Music, Calendar, Trophy, MessageCircle } from 'lucide-react';
import CookieBanner from './components/CookieBanner';

function App() {
  console.log('App component is rendering'); // Debug log
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E1AFB8] to-[#fffafa] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Piano className="w-12 h-12 text-rose-700" />
            <h1 className="text-4xl md:text-5xl font-bold text-rose-800 tracking-tight">
              Piano WhatsApp Channel
            </h1>
            <MessageCircle className="w-12 h-12 text-rose-700" />
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200">
            <p className="text-2xl text-rose-700 font-medium mb-2">hi kids!!1!</p>
            <p className="text-rose-600 italic text-sm">
              this is definitely not a page to steal ownership of the piano channel from hx
            </p>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-rose-700" />
            <h2 className="text-2xl font-bold text-rose-800">Current Schedule</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-rose-200">
                  <th className="text-left py-4 px-6 text-rose-800 font-semibold text-lg">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Target
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 text-rose-800 font-semibold text-lg">
                    <div className="flex items-center gap-2">
                      <Music className="w-5 h-5" />
                      Piece
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 text-rose-800 font-semibold text-lg">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Played by
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-rose-100 hover:bg-rose-50/50 transition-colors">
                  <td className="py-4 px-6 text-rose-700 font-medium">35 followers</td>
                  <td className="py-4 px-6 text-rose-700">Etude Op 10 No 1</td>
                  <td className="py-4 px-6">
                    <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                      yn
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-rose-50/50 transition-colors">
                  <td className="py-4 px-6 text-rose-700 font-medium">40 followers</td>
                  <td className="py-4 px-6 text-rose-700">Nocturne Op 9 No 2</td>
                  <td className="py-4 px-6">
                    <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                      hx
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Updates Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Celebration Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-rose-800">Latest Achievement!</h3>
            </div>
            <p className="text-rose-700 leading-relaxed">
              <strong>hx</strong> has finally sent his nocturne after two months!! 
              <span className="inline-block ml-2 text-2xl">👏</span>
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Piano className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-rose-800">Work in Progress</h3>
            </div>
            <p className="text-rose-700 leading-relaxed">
              Meanwhile <strong>yn</strong> is not done learning his Chopin Op 10 No 1
            </p>
            <div className="mt-4">
              <div className="bg-rose-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-rose-400 to-rose-600 h-2 rounded-full w-3/4 transition-all duration-1000 ease-out"></div>
              </div>
              <p className="text-xs text-rose-600 mt-1">Progress: Still practicing...</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-rose-200">
            <p className="text-rose-600 text-sm">
              菜就多练
            </p>
            <p className="text-rose-500 text-xs mt-2 opacity-75">
              UI created by Prime Intellect
            </p>
          </div>
        </div>
      </div>
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}

export default App;
        {/* Monterrey MX Branch - HIGHLIGHTED */}
        <div className="absolute w-6 h-6 bg-[#ce1126] rounded-full animate-pulse" style={{ left: "19%", top: "48%", transform: 'translate(-50%, -50%)', boxShadow: '0 0 15px #ce1126', zIndex: 30 }}></div>
        <div className="absolute text-xs font-bold text-[#ce1126]" style={{ left: "19%", top: "51%", transform: 'translate(-50%, -50%)' }}>Monterrey, MX</div>
        
        <div className="absolute w-5 h-5 bg-[#ce1126] rounded-full" style={{ left: "13%", top: "42%", transform: 'translate(-50%, -50%)', boxShadow: '0 2px 5px rgba(0,0,0,0.3)', zIndex: 10 }}></div>
        
        {/* Connection Lines - US Network */}
        <svg className="absolute top-0 left-0 w-full h-full" style={{zIndex: 5}}>
          {/* HQ to Chicago */}
          <line x1="22%" y1="38%" x2="18%" y2="35%" stroke="#ce1126" strokeWidth="2" strokeDasharray="5,3" />
          
          {/* HQ to Denver */}
          <line x1="22%" y1="38%" x2="15%" y2="38%" stroke="#ce1126" strokeWidth="2" strokeDasharray="5,3" />
          
          {/* HQ to Dallas */}
          <line x1="22%" y1="38%" x2="20%" y2="45%" stroke="#ce1126" strokeWidth="2" strokeDasharray="5,3" />
          
          {/* Dallas to LA */}
          <line x1="20%" y1="45%" x2="13%" y2="42%" stroke="#ce1126" strokeWidth="2" strokeDasharray="5,3" />
          
          {/* Monterrey to Dallas - HIGHLIGHTED Connection */}
          <line x1="19%" y1="48%" x2="20%" y2="45%" stroke="#ce1126" strokeWidth="4" strokeOpacity="0.8">
            <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          </line>
          
          {/* Europe Network */}
          <line x1="48%" y1="32%" x2="51%" y2="33%" stroke="#ce1126" strokeWidth="2" strokeDasharray="5,3" />
          <line x1="51%" y1="33%" x2="54%" y2="35%" stroke="#ce1126" strokeWidth="2" strokeDasharray="5,3" />
          
          {/* Transcontinental connection (subtle) */}
          <path d="M22,38 Q35,25 48,32" fill="none" stroke="#ce1126" strokeWidth="1.5" strokeDasharray="2,4" strokeOpacity="0.6" />
        </svg>
        
        {/* Coverage zones - wider */}
        <div className="absolute rounded-full opacity-15 bg-[#ce1126]" style={{ width: '200px', height: '200px', left: "22%", top: "38%", transform: 'translate(-50%, -50%)', zIndex: 2 }}></div>
        <div className="absolute rounded-full opacity-15 bg-[#ce1126]" style={{ width: '150px', height: '150px', left: "19%", top: "48%", transform: 'translate(-50%, -50%)', zIndex: 3 }}></div>
        <div className="absolute rounded-full opacity-15 bg-[#ce1126]" style={{ width: '170px', height: '170px', left: "20%", top: "45%", transform: 'translate(-50%, -50%)', zIndex: 2 }}></div>
        <div className="absolute rounded-full opacity-15 bg-[#ce1126]" style={{ width: '150px', height: '150px', left: "15%", top: "38%", transform: 'translate(-50%, -50%)', zIndex: 2 }}></div>
        <div className="absolute rounded-full opacity-15 bg-[#ce1126]" style={{ width: '130px', height: '130px', left: "18%", top: "35%", transform: 'translate(-50%, -50%)', zIndex: 2 }}></div>
        <div className="absolute rounded-full opacity-15 bg-[#ce1126]" style={{ width: '140px', height: '140px', left: "13%", top: "42%", transform: 'translate(-50%, -50%)', zIndex: 2 }}></div>
        <div className="absolute rounded-full opacity-15 bg-[#ce1126]" style={{ width: '180px', height: '180px', left: "51%", top: "33%", transform: 'translate(-50%, -50%)', zIndex: 2 }}></div>
        
        {/* Monterrey-Texas Highlight Box */}
        <div className="absolute bottom-16 left-4 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-3 border-l-4 border-[#ce1126] shadow-lg z-20">
          <p className="font-medium text-[#ce1126]">Monterrey, MX - Texas Route</p>
          <p className="text-gray-700 text-xs">Cross-border expedited service</p>
          <p className="text-gray-700 text-xs">5 daily connections • 98.7% on-time</p>
        </div>
        
        {/* Map legend overlay */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg py-3 px-4 text-sm border border-gray-200 shadow-sm z-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ce1126]"></div>
              <span className="text-xs text-gray-700">Branch Location</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-[#ce1126] flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-700">Headquarters</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ce1126] opacity-20"></div>
              <span className="text-xs text-gray-700">Service Coverage</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-6 border-t-2 border-[#ce1126] border-dashed"></div>
              <span className="text-xs text-gray-700">Connection Routes</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-6 border-t-3 border-[#ce1126]"></div>
              <span className="text-xs text-gray-700">Cross-Border Route</span>
            </div>
          </div>
        </div>
        
        {/* Branch stats */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-3 text-xs border border-gray-200 shadow-sm z-10">
          <p className="font-medium text-[#ce1126]">USKO Global Network</p>
          <p className="text-gray-700">9 Branches | Coverage in 24 Countries</p>
          <p className="text-gray-700">Specialized in Cross-Border Operations</p>
        </div> 
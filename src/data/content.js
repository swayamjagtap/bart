// Base URL prefix — resolves correctly for both local dev and GitHub Pages
const BASE = import.meta.env.BASE_URL;

export const COMPANY_INFO = {
  name: 'B.A.R.T.',
  fullName: 'Biomimetic Autonomous Robotics & Technologies',
  tagline: 'BUILDING INDIGENOUS AERIAL INTELLIGENCE FOR INDIA',
  descriptor: 'Biomimetic Autonomous Robotics & Technologies',
  motto: 'Adrishya. Achook. Atmanirbhar.',
  mottoTranslation: 'Invisible. Infallible. Self-Reliant.',
  foundedYear: '2024',
  hq: 'New Delhi / Bengaluru Aerospace Corridor, India',
  clearanceLevel: 'Buy (Indian-IDDM) | DPIIT Defence Industrial Licensed',
  classification: 'RESTRICTED / DEFENCE COMMERCIAL',
  contactEmail: 'liaison@bart-defence.in',
  secureComms: 'PGP-4096 / AES-256 Encrypted Telemetry Portal',
  logoUrl: `${BASE}assets/logo/bart-logo-full.png`,
  emblemUrl: `${BASE}assets/logo/bart-emblem.png`
};

export const KEY_METRICS = [
  {
    id: 'acoustic',
    value: '< 10 dB',
    label: 'Acoustic Signature',
    subtext: 'Inaudible beyond 25m flapping radius',
    highlight: 'Zero Mechanical Buzz'
  },
  {
    id: 'compute',
    value: '26 TOPS',
    label: 'Edge-AI Compute',
    subtext: 'VIRTUS-EYE onboard neural engine',
    highlight: 'Zero Cloud Dependency'
  },
  {
    id: 'perch',
    value: '48 Hours',
    label: 'Perch & Spy Mode',
    subtext: 'Bio-talon passive branch/cliff standby',
    highlight: '95% Power Cutoff'
  },
  {
    id: 'iddm',
    value: '100%',
    label: 'Indian-IDDM Content',
    subtext: 'Fully sovereign design, IP & firmware',
    highlight: 'Buy (Indian-IDDM)'
  },
  {
    id: 'range',
    value: '50+ km',
    label: 'Autonomous Range',
    subtext: 'NavIC satellite waypoint navigation',
    highlight: 'Radio-Silent Guidance'
  },
  {
    id: 'temp',
    value: '-40°C to +55°C',
    label: 'Thermal Envelope',
    subtext: 'MIL-STD-810H high-altitude tested',
    highlight: 'Siachen to Thar'
  }
];

export const PROJECT_CHAYA = {
  name: 'PROJECT CHAYA',
  codename: 'VIRTUS-AVIAN',
  title: 'Sovereign Biomimetic Stealth Reconnaissance Initiative',
  summary: "India's premier indigenous biomimetic unmanned aerial systems program engineered to replace noisy quadcopters with bio-mechanical apex predators. Offering undetectable visual and acoustic stealth, zero-RF telemetry alerts, and long-endurance high-altitude surveillance.",
  problemStatement: [
    {
      title: 'Acoustic Exposure',
      description: 'Traditional military drones emit >65 dB propeller buzz, alerting hostile border sentries within seconds and destroying tactical surprise.',
      solution: 'Acoustic downy feather serrations break wind turbulence into micro-vortices, reducing acoustic signature to <10 dB at 20m.'
    },
    {
      title: 'Visual Exposure',
      description: 'Geometric quadcopter frames and spinning blades stand out clearly against rugged mountain ridge lines and natural horizons.',
      solution: 'Morphologically exact biomimetic silhouettes resembling native raptors blend invisibly into natural avian airspace.'
    },
    {
      title: 'RF Jamming Vulnerability',
      description: 'Continuous analog or digital video streams are easily triangulated, tracked, and severed by modern electronic warfare (EW) counter-UAS jammers.',
      solution: 'VIRTUS-EYE processes all computer vision locally onboard and transmits AES-256 encrypted micro-text alerts in zero-RF burst mode.'
    }
  ],
  media: {
    heroImage: `${BASE}assets/project-chaya/images/chaya-concept.jpg`,
    flightVideo: `${BASE}assets/project-chaya/videos/chaya-demonstration.mp4`,
    highAltitudeImage: `${BASE}assets/project-chaya/images/chaya-high-altitude.jpg`,
    thermalReconImage: `${BASE}assets/project-chaya/images/chaya-thermal-recon.jpg`
  }
};

export const PLATFORMS = {
  uluka: {
    id: 'uluka-n1',
    name: 'ULUKA-N1',
    category: 'NIGHT-OPS BIOMIMETIC PLATFORM',
    codename: 'Nishchar (Silent Night Stalker)',
    morphology: 'Indian Eagle-Owl (Bubo bengalensis)',
    role: 'Nocturnal Clandestine Surveillance, Perimeter Reconnaissance, Thermal Target Detection & Base-Camp Scouting',
    wingspan: '1.1 m',
    activeFlightTime: '3 to 4 Hours',
    standbyEndurance: 'Up to 48 Hours (Perch-and-Spy Mode)',
    acousticOutput: '< 10 dB at 20m (Completely silent beyond 25-30m)',
    directRfRadius: '25 km (Dual-band 1.2 GHz / 2.4 GHz FHSS)',
    autonomousNavicRange: '50 km Waypoint Navigation',
    opticalSensors: {
      leftPupil: 'Micro-Bolometer LWIR Thermal Sensor (-40°C to +500°C detection)',
      rightPupil: 'Sony Micro-Starvis2 Ultra Low-Light IR (0.0001 lux starlight visibility)'
    },
    headArticulation: '270° Horizontal Gimbal / 90° Vertical Articulation',
    powerPlant: 'High-Density Lithium-Silicon Micro-Battery Array',
    landingGear: 'High-Torque Bio-Claw Mechanical Talons with Impact-Damping Pistons',
    featuredMedia: {
      type: 'image',
      src: `${BASE}assets/uluka-n1/images/uluka-subsystem-analysis.jpg`,
      title: 'ULUKA-N1 Subsystem Analysis',
      caption: 'ULUKA-N1 — Biomimetic flight platform & subsystem breakdown'
    },
    gallery: [
      {
        id: 'u-sub-1',
        type: 'image',
        src: `${BASE}assets/uluka-n1/images/uluka-subsystem-analysis.jpg`,
        title: 'Subsystem Analysis & Avionics',
        caption: 'ULUKA-N1 — Subsystem layout, dual-spectrum optics, and talon mechanics'
      },
      {
        id: 'u-opt-2',
        type: 'image',
        src: `${BASE}assets/uluka-n1/images/uluka-thermal-ai-spec.jpg`,
        title: 'Owl-Eye Thermal AI Vision Spec',
        caption: 'ULUKA-N1 — Dual pupil thermal fusion & VIRTUS-EYE neural engine'
      },
      {
        id: 'u-plt-3',
        type: 'image',
        src: `${BASE}assets/uluka-n1/images/uluka-stealth-platform.jpg`,
        title: 'Dorsal Power & Solar Integration',
        caption: 'ULUKA-N1 — Dorsal micro-battery array & synthetic feather layering'
      },
      {
        id: 'u-mor-4',
        type: 'image',
        src: `${BASE}assets/uluka-n1/images/uluka-morphology.jpg`,
        title: 'Indian Eagle-Owl Morphology',
        caption: 'ULUKA-N1 — Natural biomimetic silhouette & branch perching profile'
      },
      {
        id: 'u-det-5',
        type: 'image',
        src: `${BASE}assets/uluka-n1/images/uluka-subsystem-detail.jpg`,
        title: 'Ventral Payload Bay & Talons',
        caption: 'ULUKA-N1 — Removable Li-Si battery pack and non-slip polymer talons'
      },
      {
        id: 'u-vid-1',
        type: 'video',
        src: `${BASE}assets/uluka-n1/videos/uluka-nightops-flight.mp4`,
        poster: `${BASE}assets/uluka-n1/images/uluka-stealth-platform.jpg`,
        title: 'ULUKA-N1 Flight Demonstration',
        caption: 'ULUKA-N1 — Silent night-flight kinematics and nocturnal tracking'
      }
    ],
    specifications: [
      { label: 'Wingspan', value: '1.1 Meters' },
      { label: 'Airframe Weight', value: '1.6 kg (with payload)' },
      { label: 'Acoustic Profile', value: '< 10 dB @ 20m (0 dB gliding)' },
      { label: 'Continuous Night Flight', value: '3.5 - 4.0 Hours' },
      { label: 'Perch-and-Spy Endurance', value: '48 Hours Standby' },
      { label: 'Thermal Detection Range', value: '-40°C to +500°C' },
      { label: 'Low-Light Sensitivity', value: '0.0001 Lux (Starvis2 4K)' },
      { label: 'Neck Articulation', value: '270° Horiz / 90° Vert' },
      { label: 'Control Encryption', value: 'AES-256 Tactical FHSS' },
      { label: 'Autonomous NavIC Guidance', value: '50 km Radio-Silent' }
    ]
  },
  shyena: {
    id: 'shyena-d1',
    name: 'SHYENA-D1',
    category: 'DAY-OPS APEX EAGLE PLATFORM',
    codename: 'Apex Eagle High-Altitude Platform',
    morphology: 'Himalayan Golden Eagle (Aquila chrysaetos daphanea)',
    role: 'High-Altitude Day Reconnaissance, Ridge-Line Patrol, Dynamic Soaring, Target Tracking & Convoy Scouting',
    wingspan: '1.8 m',
    activeFlightTime: '3 to 4 Hours (Extended via Thermal Soaring)',
    standbyEndurance: 'Up to 48 Hours with Solar Top-Up',
    acousticOutput: '< 12 dB (Undetectable in high-altitude mountain winds)',
    directRfRadius: '35 km (Extended Line-of-Sight)',
    autonomousNavicRange: '75 km Waypoint Navigation',
    opticalSensors: {
      leftPupil: '4K Sony Micro-Starvis Optical Sensor',
      rightPupil: '30x Optical Zoom Telephoto Lens (Combined 60x AI Digital Zoom)'
    },
    wingKinematics: 'Dynamic Wing-Warping Actuators with 50 km/h Gust Stabilization',
    powerPlant: 'High-Density Lithium-Silicon Pack + Top-Surface Solar Feather Micro-Cells',
    serviceCeiling: '6,000 Meters (High-Altitude Himalayan Envelope)',
    featuredMedia: {
      type: 'image',
      src: `${BASE}assets/shyena-d1/images/shyena-blueprint-specs.jpg`,
      title: 'SHYENA-D1 Engineering Blueprint',
      caption: 'SHYENA-D1 — Complete technical blueprint and kinematic specifications'
    },
    gallery: [
      {
        id: 's-blu-1',
        type: 'image',
        src: `${BASE}assets/shyena-d1/images/shyena-blueprint-specs.jpg`,
        title: 'System Specifications Blueprint',
        caption: 'SHYENA-D1 — Engineering schematic, wing micro-servos, and data flow'
      },
      {
        id: 's-soa-2',
        type: 'image',
        src: `${BASE}assets/shyena-d1/images/shyena-himalayan-soaring.jpg`,
        title: 'High-Altitude Himalayan Soaring',
        caption: 'SHYENA-D1 — High-altitude configuration over snowcapped peaks'
      },
      {
        id: 's-cut-3',
        type: 'image',
        src: `${BASE}assets/shyena-d1/images/shyena-subsystems-cutaway.jpg`,
        title: 'Avionics & Energy Harvesting Cutaway',
        caption: 'SHYENA-D1 — Solar feather cells, Li-Si pack, and secure data link'
      },
      {
        id: 's-opt-4',
        type: 'image',
        src: `${BASE}assets/shyena-d1/images/shyena-optics-virtuseye.jpg`,
        title: 'Eagle-Eye 30x Optical Lens Close-up',
        caption: 'SHYENA-D1 — 30x telephoto right pupil & VIRTUS-EYE neural HUD'
      },
      {
        id: 's-prc-5',
        type: 'image',
        src: `${BASE}assets/shyena-d1/images/shyena-perched-mountain.jpg`,
        title: 'Perched Mountain Reconnaissance',
        caption: 'SHYENA-D1 — High-torque bio-claws anchored to alpine rock face'
      },
      {
        id: 's-vid-1',
        type: 'video',
        src: `${BASE}assets/shyena-d1/videos/shyena-apex-flight.mp4`,
        poster: `${BASE}assets/shyena-d1/images/shyena-himalayan-soaring.jpg`,
        title: 'SHYENA-D1 High-Altitude Flight',
        caption: 'SHYENA-D1 — Mountain ridge soaring and aerodynamic stabilization'
      },
      {
        id: 's-vid-2',
        type: 'video',
        src: `${BASE}assets/shyena-d1/videos/shyena-mountain-recon.mp4`,
        poster: `${BASE}assets/shyena-d1/images/shyena-perched-mountain.jpg`,
        title: 'SHYENA-D1 Mountain Reconnaissance',
        caption: 'SHYENA-D1 — Long-range surveillance mission over forward borders'
      }
    ],
    specifications: [
      { label: 'Wingspan', value: '1.8 Meters' },
      { label: 'Airframe Weight', value: '2.4 kg (with telephoto payload)' },
      { label: 'Service Ceiling', value: '6,000 Meters (ASL)' },
      { label: 'Optical Zoom', value: '30x Optical + 60x AI Digital' },
      { label: 'Wind Tolerance', value: '50 km/h Gust Resistance' },
      { label: 'Solar Recharge', value: 'Flexible Top-Wing Micro-Cells' },
      { label: 'Active Soaring Time', value: '3 - 4 Hours' },
      { label: 'Perch Standby', value: '48 Hours' },
      { label: 'Telemetry Link', value: 'AES-256 NavIC / Tactical RF' },
      { label: 'AI Detection', value: 'Infantry, Small Arms, Mortars' }
    ]
  }
};

export const VIRTUS_EYE = {
  name: 'VIRTUS-EYE',
  title: 'Onboard Edge-AI Neural Processor',
  hardware: 'Hailo-8 / NVIDIA Jetson Orin Embedded Architecture',
  computePower: '26 TOPS',
  powerDraw: '< 5W Operational Compute',
  description: 'Concealed entirely inside the skull of the biomimetic aircraft, VIRTUS-EYE performs 100% onboard neural inference with zero cloud latency. It eliminates enemy thermal camouflage, identifies small arms (AK-series, sniper systems), detects warm vehicle motors, and converts complex computer vision into micro-text alerts.',
  features: [
    {
      title: 'Real-Time Thermal Fusion',
      description: 'Dynamically fuses LWIR thermal radiation with ultra-low-light Sony Starvis2 imagery into a unified tactical overlay.'
    },
    {
      title: 'Thermal Camouflage Breakdown',
      description: 'Strips away ghillie suits, foliage netting, and thermal-blanketing to isolate body heat signatures and warm weapon barrels.'
    },
    {
      title: 'Zero-RF Micro-Alert Telemetry',
      description: 'Defeats electronic warfare triangulation by transmitting tiny 40-byte encrypted text alerts instead of heavy video feeds.'
    },
    {
      title: 'Autonomous Target Tagging',
      description: 'Instantly tags infantry, mortar tubes, armored vehicles, and fortified bunker vents with precise GPS/NavIC coordinates.'
    }
  ],
  simulationModes: [
    {
      id: 'day',
      name: '4K Starlight Optics',
      description: 'High-definition 0.0001 lux sensor capturing crystal clear imagery under moonless night conditions.',
      activeOverlay: 'Visible Spectrum / Low-Light Amplified'
    },
    {
      id: 'thermal',
      name: 'LWIR Thermal Fusion',
      description: 'Long-Wave Infrared sensor detecting heat variations from -40°C to +500°C through smoke and fog.',
      activeOverlay: 'Thermal Radiation Heatmap (Ironbow / White-Hot)'
    },
    {
      id: 'ai',
      name: 'VIRTUS-EYE Target Lock',
      description: 'Neural edge inference overlaying threat bounding boxes, target classification, and grid coordinates.',
      activeOverlay: 'AI Bounding Boxes: AK-47 (98% Conf) | Troop Heat (3) | Mortar Grid 43A'
    }
  ]
};

export const STRATEGIC_ROADMAP = [
  {
    phase: 'PHASE 1',
    title: 'Foundation & IP Protection',
    timeline: 'Q1 - Q3',
    status: 'Completed',
    milestones: [
      'Incorporated as 100% Indian Private Limited entity meeting Buy (Indian-IDDM) criteria.',
      'DPIIT & MSME recognition unlocked under Startup India framework.',
      'Filed 3 provisional utility patents: wing-warping actuators, acoustic feather layering, pupil gimbals.'
    ]
  },
  {
    phase: 'PHASE 2',
    title: 'Airworthiness & Wireless Clearance',
    timeline: 'Q4 - Q6',
    status: 'In Progress',
    milestones: [
      'DGCA DigitalSky Authorized Manufacturer Profile for Type Certification (TC) & UIN tracking.',
      'Equipment Type Approval (ETA) from WPC for military-grade 1.2 GHz / 2.4 GHz FHSS telemetry.',
      'Wind-tunnel kinematic calibration and dynamic soaring firmware validation.'
    ]
  },
  {
    phase: 'PHASE 3',
    title: 'Defence Licensing & Environmental Test',
    timeline: 'Q7 - Q9',
    status: 'Scheduled',
    milestones: [
      'DPIIT Defence Industrial License (IL) via National Single Window System with MHA security vetting.',
      'MIL-STD-810H environmental chamber qualification (-40°C Siachen to +55°C Thar).',
      'Independent NABL laboratory certification for <10 dB acoustic signature & low RCS.'
    ]
  },
  {
    phase: 'PHASE 4',
    title: 'Field Evaluation & Army Induction',
    timeline: 'Q10 - Q12',
    status: 'Strategic Goal',
    milestones: [
      'Active participation in Ministry of Defence iDEX / ADITI open defence challenges.',
      'High-Altitude Warfare Field Evaluation Trials (FET) in Ladakh and Siachen sectors.',
      'Serial commercial procurement under Buy (Indian-IDDM) for frontline Indian Armed Forces.'
    ]
  }
];

export const COMPLIANCE_BADGES = [
  {
    id: 'iddm',
    title: 'Buy (Indian-IDDM) Compliant',
    badge: '100% Native IP & Governance',
    description: 'Designed, Developed, and Manufactured 100% in India, exceeding the mandatory 50% Indigenous Content (IC) threshold required by DAP 2020.'
  },
  {
    id: 'dpiit',
    title: 'DPIIT Defence Industrial Licensed',
    badge: 'MHA Security Cleared',
    description: 'Government-authorized manufacturing framework for military unmanned aerial platforms, payload optics, and encrypted communications via MHA vetting.'
  },
  {
    id: 'dgca',
    title: 'DGCA DigitalSky Ecosystem',
    badge: 'Drone Rules 2021 Compliant',
    description: 'Full alignment with Civil Aviation guidelines for UAS manufacturer registration, experimental testing, Type Certification (TC), and UIN tracking.'
  },
  {
    id: 'wpc',
    title: 'WPC Spectrum Approved',
    badge: 'Encrypted Tactical Wireless',
    description: 'Radio frequency control links operate under official Equipment Type Approval (ETA) from the Wireless Planning & Coordination wing of DoT.'
  },
  {
    id: 'milstd',
    title: 'MIL-STD-810H Qualified',
    badge: 'Extreme Environment Ready',
    description: 'Hardware architecture tested for thermal survivability from -40°C Siachen freezes to +55°C desert heat, sandstorm resistance, and wind shear.'
  },
  {
    id: 'cyber',
    title: 'Cyber-Secured & Anti-Tamper',
    badge: 'AES-256 Secured',
    description: 'All flight logs, telemetry, and neural AI weights are protected with AES-256 hardware encryption and zero-latency storage sanitize protocols upon physical breach.'
  }
];

export const BUSINESS_MODEL = {
  unitProduct: 'Tactical Squad Pack',
  contents: [
    '1x ULUKA-N1 Night-Owl Stealth Platform',
    '1x SHYENA-D1 Apex-Eagle Day-Ops Platform',
    '1x Ruggedized Dual-Screen Ground Control Station (GCS)',
    '4x High-Density Li-Si Modular Battery Packs & Field Charger'
  ],
  pricing: {
    sellingPrice: '₹3.20 Crore (~$380,000 USD)',
    manufacturingCost: '₹1.65 Crore',
    grossProfitMargin: '48.4%',
    amcRate: '15% per annum (Feather maintenance, calibration, OTA AI updates)'
  },
  marketSize: {
    globalUav: '$18.0 Billion',
    indiaUav: '$1.5 Billion',
    som: '$150 Million (High-altitude stealth & clandestine recon)'
  },
  projections: [
    { year: 'Year 1', phase: 'R&D & MIL-STD Testing', packs: '0 Units', revenue: '₹0', netProfit: '-₹40 Lakhs (R&D)' },
    { year: 'Year 2', phase: 'Paramilitary Pilot Supply', packs: '4 Squad Packs', revenue: '₹12.8 Crore', netProfit: '₹1.80 Crore' },
    { year: 'Year 3', phase: 'Commercial Army Induction', packs: '18 Squad Packs', revenue: '₹57.6 Crore', netProfit: '₹11.20 Crore' }
  ],
  capitalStrategy: {
    totalSeedAsk: '₹1.60 Crore',
    grantFunding: '75% (₹1.20 Crore) non-dilutive via MoD iDEX / ADITI schemes',
    equityAsk: '10% Seed Equity for ₹40 Lakhs',
    postMoneyValuation: '₹4.00 Crore'
  }
};

export const VIDEO_SHOWCASE = [
  {
    id: 'vid-1',
    category: 'PROJECT CHAYA',
    title: 'Project CHAYA — Sovereign Biomimetic Initiative',
    description: 'High-altitude tactical flight demonstration showing silent aerodynamic mechanics and sovereign Indian engineering.',
    duration: '0:45',
    src: `${BASE}assets/project-chaya/videos/chaya-demonstration.mp4`,
    poster: `${BASE}assets/project-chaya/images/chaya-concept.jpg`
  },
  {
    id: 'vid-2',
    category: 'ULUKA-N1',
    title: 'ULUKA-N1 — Silent Flapping Flight Kinematics',
    description: 'Nocturnal test flight capturing inaudible wing-beat acoustics and micro-vortex wind dampening at under 10 decibels.',
    duration: '0:38',
    src: `${BASE}assets/uluka-n1/videos/uluka-nightops-flight.mp4`,
    poster: `${BASE}assets/uluka-n1/images/uluka-stealth-platform.jpg`
  },
  {
    id: 'vid-3',
    category: 'SHYENA-D1',
    title: 'SHYENA-D1 — High-Altitude Mountain Soaring',
    description: 'Himalayan ridgeline flight trial displaying wing-warping stability against 50 km/h gusts and dynamic thermal gliding.',
    duration: '0:52',
    src: `${BASE}assets/shyena-d1/videos/shyena-apex-flight.mp4`,
    poster: `${BASE}assets/shyena-d1/images/shyena-himalayan-soaring.jpg`
  },
  {
    id: 'vid-4',
    category: 'TESTING',
    title: 'SHYENA-D1 — Reconnaissance & Ridge Patrol',
    description: 'Tactical scouting profile over steep terrain showing autonomous NavIC satellite navigation in radio-silent mode.',
    duration: '0:40',
    src: `${BASE}assets/shyena-d1/videos/shyena-mountain-recon.mp4`,
    poster: `${BASE}assets/shyena-d1/images/shyena-perched-mountain.jpg`
  }
];

export const ECOSYSTEM_PARTNERS = [
  { category: 'Defence & Government', name: 'iDEX (Innovations for Defence Excellence)', role: 'Ministry of Defence Startup Grantee' },
  { category: 'Defence & Government', name: 'DIO (Defence Innovation Organisation)', role: 'Strategic Incubation & Defence Challenges' },
  { category: 'Defence & Government', name: 'DPIIT Startup India', role: 'Recognized Deep-Tech Defence Entity' },
  { category: 'Defence & Government', name: 'Make in India Initiative', role: 'DAP 2020 Indigenous Manufacturing Compliance' },
  { category: 'R&D & Testing', name: 'IIT Drone Centre of Excellence', role: 'Aerodynamics & Autonomous Flight R&D' },
  { category: 'R&D & Testing', name: 'NABL Accredited Testing Labs', role: 'MIL-STD-810H & Acoustic Signature Validation' },
  { category: 'Supply Chain', name: 'Tier-1 Indian Defence EMS Vendors', role: 'AS9100 / ISO 9001 SMT PCB & Carbon Composite Fabrication' },
  { category: 'Regulatory', name: 'DGCA DigitalSky & WPC Wing', role: 'Type Certification & Military Spectrum Allocation' }
];

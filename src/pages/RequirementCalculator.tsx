import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Types
interface Variety {
  name: string;
  profile: string;
  price: number;
}

// Data
const varieties: Variety[] = [
  { name: "Moong Beans", profile: "Sweet & Fresh", price: 199 },
  { name: "Peas Shoots", profile: "Sweet & Fresh", price: 199 },
  { name: "Radish Green", profile: "Bold & Peppery", price: 249 },
  { name: "Radish Red", profile: "Bold & Peppery", price: 249 },
  { name: "Knol Knol", profile: "Sweet & Fresh", price: 249 },
  { name: "Sunflower", profile: "Nutty & Aromatic", price: 249 },
  { name: "Broccoli", profile: "Earthy & Vibrant", price: 299 },
  { name: "Amaranthus Red", profile: "Earthy & Vibrant", price: 299 },
  { name: "Swiss Chard", profile: "Earthy & Vibrant", price: 299 },
  { name: "Dill", profile: "Nutty & Aromatic", price: 329 },
  { name: "Arugula", profile: "Bold & Peppery", price: 329 }
];

const MicrogreenSynergy: React.FC = () => {
  // State
  const [mode, setMode] = useState<'b2c' | 'b2b'>('b2c');
  const [b2cPeople, setB2cPeople] = useState(1);
  const [b2cVarietyIndex, setB2cVarietyIndex] = useState(0);
  const [b2bFootfall, setB2bFootfall] = useState(150);
  const [b2bDays, setB2bDays] = useState(7);
  const [b2bGrams, setB2bGrams] = useState(3);
  const [b2bVarietyIndex, setB2bVarietyIndex] = useState(0);

  // Refs for charts
  const nutritionChartRef = useRef<ChartJS | null>(null);
  const b2bChartRef = useRef<ChartJS | null>(null);

  // B2C Calculations
  const b2cPrice = varieties[b2cVarietyIndex].price;
  const b2cBoxes = b2cPeople;
  const b2cCost = b2cBoxes * b2cPrice;

  // B2B Calculations
  const b2bPrice = varieties[b2bVarietyIndex].price;
  const totalGrams = b2bFootfall * b2bDays * b2bGrams;
  const rawBoxes = Math.ceil(totalGrams / 40);
  const billedBoxes = rawBoxes;
  const freeBoxes = billedBoxes >= 25 ? 2 : 0;
  const deliveredBoxes = billedBoxes + freeBoxes;
  const totalCost = billedBoxes * b2bPrice;

  // Handlers
  const handleAdjustPeople = (delta: number) => {
    setB2cPeople(prev => Math.max(1, prev + delta));
  };

  const handleB2cVarietyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setB2cVarietyIndex(parseInt(e.target.value));
  };

  const handleB2bVarietyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setB2bVarietyIndex(parseInt(e.target.value));
  };

  // Wrap footfallPoints in useMemo to prevent unnecessary re-renders
  const footfallPoints = useMemo(() => [25, 50, 100, 150, 250, 400], []);

  // Nutrition Chart Data
  const nutritionChartData = {
    labels: ['Standard Mature Greens', 'Synergy Microgreens'],
    datasets: [
      {
        label: 'Relative Nutrient Concentration Multiplier',
        data: [1, 40],
        backgroundColor: ['#e7e5e4', '#047857'],
        borderRadius: 6,
        borderSkipped: false as const,
      },
    ],
  };

  const nutritionChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#292524',
          font: { family: 'Inter' as const, weight: 'normal' as const }
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            return tooltipItems[0]?.chart?.data?.labels?.[tooltipItems[0]?.dataIndex] || '';
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#f5f5f4' },
        title: {
          display: true,
          text: 'Multiplier (x)',
          color: '#78716c',
          font: { weight: 'normal' as const }
        },
      },
      x: {
        grid: { display: false },
        ticks: { font: { weight: 'normal' as const } },
      },
    },
  };

  // B2B Chart Data - dynamically updated
  const b2bChartData = {
    labels: footfallPoints.map(f => `${f}`),
    datasets: [
      {
        label: `Boxes Req. at ${b2bGrams}g / ${b2bDays} Days`,
        data: footfallPoints.map(f => Math.ceil((f * b2bDays * b2bGrams) / 40)),
        borderColor: '#047857',
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(4, 120, 87, 0.3)');
          gradient.addColorStop(1, 'rgba(4, 120, 87, 0.05)');
          return gradient;
        },
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#047857',
        pointRadius: 4,
      },
    ],
  };

  const b2bChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#292524',
          font: { family: 'Inter' as const, weight: 'normal' as const }
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#e7e5e4' },
        title: {
          display: true,
          text: 'Boxes Required',
          color: '#78716c',
          font: { weight: 'normal' as const }
        },
        ticks: {
          stepSize: 10,
        },
      },
      x: {
        grid: { display: false },
        title: {
          display: true,
          text: 'Daily Footfall',
          color: '#78716c',
          font: { weight: 'normal' as const }
        },
      },
    },
  };

  // Update B2B chart when inputs change
  useEffect(() => {
    if (b2bChartRef.current) {
      b2bChartRef.current.data.datasets[0].data = footfallPoints.map(f =>
        Math.ceil((f * b2bDays * b2bGrams) / 40)
      );
      b2bChartRef.current.data.datasets[0].label = `Boxes Req. at ${b2bGrams}g / ${b2bDays} Days`;
      b2bChartRef.current.update();
    }
  }, [b2bDays, b2bGrams, footfallPoints]);

  // Helper to determine if bulk threshold is reached
  const isBulkReached = billedBoxes >= 25;

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-emerald-700">🌿</span>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] tracking-widest text-stone-500 uppercase font-semibold">Krishankh Biotech</span>
              <span className="text-xl font-serif font-bold text-stone-800 tracking-wide">Microgreen<span className="text-emerald-700">SYNERGY</span></span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#philosophy" className="hover:text-emerald-700 transition-colors">Philosophy</a>
            <a href="#collection" className="hover:text-emerald-700 transition-colors">Collection</a>
            <a href="#calculator" className="text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1">Calculate Needs</a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h2 className="text-xs tracking-[0.2em] text-emerald-700 uppercase font-semibold mb-6">Premium Urban Wellness • Delhi NCR</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight text-stone-900">
          We don't sell greens.<br />
          <span className="italic text-emerald-800 font-normal">We sell better living.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          A modern wellness lifestyle powered by fresh, functional greens. Premium, hydroponically grown microgreens engineered for both urban professionals and elite culinary institutions.
        </p>
        <div className="mt-10">
          <a href="#calculator" className="inline-block bg-emerald-700 text-white font-medium px-8 py-4 rounded-full hover:bg-emerald-800 transition shadow-md shadow-emerald-200">
            Determine Your Supply Requirement
          </a>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="bg-white py-20 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">The Foundations of Freshness</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              This section outlines the non-negotiable operational pillars of the Microgreen Synergy brand. By understanding our commitment to sustainable, controlled hydroponics and our cut-to-order fulfillment model, clients can trust the unparalleled quality and longevity of our product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl text-emerald-700 mb-6">⏰</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Harvested Daily</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Cut to order and delivered fresh across Delhi NCR. Never stored, ensuring maximum vitality upon arrival.</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl text-emerald-700 mb-6">💧</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Hydroponic & Pure</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Cultivated in a clean, controlled environment using water-efficient systems with absolutely zero synthetic pesticides.</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-2xl text-amber-700 mb-6">📦</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Considered Packaging</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Premium presentation featuring minimal labels, transparent harvest dates, and integrated QR codes for culinary inspiration.</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl text-emerald-700 mb-6">♻️</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">Local & Sustainable</h3>
              <p className="text-stone-600 text-sm leading-relaxed">By maintaining operations strictly within the Delhi NCR region, we minimize food miles and support local sustainable agriculture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">The Science of Density</h2>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                This visualization contextualizes the core value proposition of functional greens. Despite their size, microgreens are nutritionally explosive.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Scientific consensus demonstrates that microgreens harvested at the cotyledon stage contain significantly higher concentrations of vitamins, minerals, and antioxidants than the mature leaves of the same plant. This graph illustrates the staggering potential multiplier.
              </p>
              <div className="bg-white border-l-4 border-amber-500 p-6 shadow-sm rounded-r-xl">
                <p className="text-xl font-medium text-stone-800">"Up to <span className="text-amber-600 font-bold text-2xl">40x</span> more nutrients than mature plants."</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <div className="relative w-full h-[300px] md:h-[380px]">
                <Chart type="bar" data={nutritionChartData} options={nutritionChartOptions} ref={nutritionChartRef} />
              </div>
            </div>
          </div>

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">The Synergy Collection</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Explore our portfolio of eleven meticulously cultivated varieties. Organized by their primary culinary matrix, this guide assists chefs and wellness consumers in selecting the perfect botanical profile for their specific dietary or gastronomic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 border-t-4 border-t-red-700 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-4 uppercase tracking-wider">Bold & Peppery</h3>
              <ul className="space-y-4">
                <li><div className="font-bold text-stone-800">Radish Red</div><div className="text-xs text-stone-500 mt-1">Sharp, Crisp punch</div></li>
                <li><div className="font-bold text-stone-800">Radish Green</div><div className="text-xs text-stone-500 mt-1">Classic, Fresh bite</div></li>
                <li><div className="font-bold text-stone-800">Arugula</div><div className="text-xs text-stone-500 mt-1">Nutty, Bold kick</div></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-t-4 border-t-emerald-500 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-4 uppercase tracking-wider">Sweet & Fresh</h3>
              <ul className="space-y-4">
                <li><div className="font-bold text-stone-800">Moong Beans</div><div className="text-xs text-stone-500 mt-1">Hydrating, Tender</div></li>
                <li><div className="font-bold text-stone-800">Peas Shoots</div><div className="text-xs text-stone-500 mt-1">Sweet, Delicate</div></li>
                <li><div className="font-bold text-stone-800">Knol Knol</div><div className="text-xs text-stone-500 mt-1">Mild, Hearty base</div></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-t-4 border-t-purple-700 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-4 uppercase tracking-wider">Earthy & Vibrant</h3>
              <ul className="space-y-4">
                <li><div className="font-bold text-stone-800">Amaranthus Red</div><div className="text-xs text-stone-500 mt-1">Striking Fuchsia</div></li>
                <li><div className="font-bold text-stone-800">Swiss Chard</div><div className="text-xs text-stone-500 mt-1">Vibrant, Sweet earth</div></li>
                <li><div className="font-bold text-stone-800">Broccoli</div><div className="text-xs text-stone-500 mt-1">Dense, Delicate</div></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-t-4 border-t-amber-500 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-4 uppercase tracking-wider">Nutty & Aromatic</h3>
              <ul className="space-y-4">
                <li><div className="font-bold text-stone-800">Sunflower</div><div className="text-xs text-stone-500 mt-1">Thick, Juicy texture</div></li>
                <li><div className="font-bold text-stone-800">Dill</div><div className="text-xs text-stone-500 mt-1">Elegant, Intense finish</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-stone-800 text-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Interactive Procurement Engine</h2>
            <p className="text-stone-300 leading-relaxed text-lg">
              This advanced application translates your unique consumption metrics into exact inventory requirements. Whether managing personal nutrition or commercial kitchen supply chains, use the interface below to calculate box requirements, project weekly costs, and dynamically view wholesale bulk incentives (25+ boxes = 2 extra free).
            </p>
          </div>

          <div className="bg-white text-stone-800 rounded-3xl overflow-hidden shadow-2xl border border-stone-700">
            <div className="flex border-b border-stone-200">
              <button
                onClick={() => setMode('b2c')}
                className={`flex-1 py-5 text-center font-bold text-lg transition ${mode === 'b2c'
                  ? 'bg-emerald-50 text-emerald-800 border-b-2 border-emerald-700'
                  : 'font-semibold text-stone-500 hover:bg-stone-50'
                  }`}
              >
                <span className="block text-2xl mb-1">👪</span>
                Individual & Family
              </button>
              <button
                onClick={() => setMode('b2b')}
                className={`flex-1 py-5 text-center font-bold text-lg transition ${mode === 'b2b'
                  ? 'bg-emerald-50 text-emerald-800 border-b-2 border-emerald-700'
                  : 'font-semibold text-stone-500 hover:bg-stone-50'
                  }`}
              >
                <span className="block text-2xl mb-1">🍽️</span>
                Chef & Restaurant
              </button>
            </div>

            <div className="p-8 md:p-12">
              {/* B2C Panel */}
              {mode === 'b2c' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-2">Household Size</h3>
                      <p className="text-sm text-stone-500 mb-4">One live box is designed to sustain one individual for a week.</p>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleAdjustPeople(-1)}
                          className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-xl hover:bg-stone-100 transition"
                        >
                          -
                        </button>
                        <span className="text-3xl font-bold w-12 text-center">{b2cPeople}</span>
                        <button
                          onClick={() => handleAdjustPeople(1)}
                          className="w-12 h-12 rounded-full border border-emerald-600 bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl hover:bg-emerald-100 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-4">Select Variety</h3>
                      <select
                        value={b2cVarietyIndex}
                        onChange={handleB2cVarietyChange}
                        className="w-full p-4 rounded-xl border border-stone-300 bg-stone-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-lg"
                      >
                        {varieties.map((v, idx) => (
                          <option key={idx} value={idx}>
                            {v.name} (₹{v.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col justify-center text-center">
                    <div className="text-sm uppercase tracking-widest text-stone-500 font-bold mb-2">Weekly Requirement</div>
                    <div className="text-6xl font-black text-emerald-700 mb-2">
                      {b2cBoxes} <span className="text-2xl text-stone-500 font-medium">Boxes</span>
                    </div>
                    <div className="text-sm text-stone-500 mb-8">(40g fresh yield per box)</div>
                    <div className="text-sm uppercase tracking-widest text-stone-500 font-bold mb-2">Estimated Weekly Investment</div>
                    <div className="text-4xl font-bold text-stone-900">₹{b2cCost.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              )}

              {/* B2B Panel */}
              {mode === 'b2b' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-5 space-y-8">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="text-xl font-serif font-bold">Daily Footfall</h3>
                        <span className="text-2xl font-bold text-emerald-700">
                          {b2bFootfall} <span className="text-sm font-normal text-stone-500">patrons/day</span>
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={b2bFootfall}
                        onChange={(e) => setB2bFootfall(parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="text-xl font-serif font-bold">Operational Days</h3>
                        <span className="text-2xl font-bold text-emerald-700">
                          {b2bDays} <span className="text-sm font-normal text-stone-500">days/week</span>
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="7"
                        step="1"
                        value={b2bDays}
                        onChange={(e) => setB2bDays(parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="text-xl font-serif font-bold">Plating Requirement</h3>
                        <span className="text-2xl font-bold text-emerald-700">
                          {b2bGrams}<span className="text-sm font-normal text-stone-500">g / plate</span>
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mb-3">Min: 2g (garnish) | Max: 5g (integration)</p>
                      <input
                        type="range"
                        min="2"
                        max="5"
                        step="0.5"
                        value={b2bGrams}
                        onChange={(e) => setB2bGrams(parseFloat(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-serif font-bold mb-3">Select Variety</h3>
                      <select
                        value={b2bVarietyIndex}
                        onChange={handleB2bVarietyChange}
                        className="w-full p-3 rounded-xl border border-stone-300 bg-stone-50 focus:ring-2 focus:ring-emerald-500 outline-none transition"
                      >
                        {varieties.map((v, idx) => (
                          <option key={idx} value={idx}>
                            {v.name} (₹{v.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-200 h-full flex flex-col">
                      <div className="grid grid-cols-2 gap-4 text-center mb-6">
                        <div className="bg-white p-4 rounded-xl border border-stone-200">
                          <div className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Total Mass/Week</div>
                          <div className="text-2xl font-bold text-stone-900">{totalGrams.toLocaleString('en-IN')}g</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-stone-200">
                          <div className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Weekly Investment</div>
                          <div className="text-2xl font-bold text-stone-900">₹{totalCost.toLocaleString('en-IN')}</div>
                        </div>
                      </div>

                      <div className="flex-1 bg-emerald-900 rounded-xl p-6 text-white text-center flex flex-col justify-center relative overflow-hidden shadow-inner">
                        <div className="relative z-10">
                          <div className="text-sm uppercase tracking-widest text-emerald-300 font-bold mb-2">Billed Inventory</div>
                          <div className="text-6xl font-black mb-2">
                            {billedBoxes} <span className="text-2xl font-medium text-emerald-200">Boxes</span>
                          </div>
                          <div className="text-xs text-emerald-400 mb-6">(Standard 40g Live Boxes)</div>

                          {isBulkReached ? (
                            <div className="transition-all duration-300">
                              <div className="inline-block bg-amber-500 text-amber-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                Wholesale Threshold Reached
                              </div>
                              <div className="text-lg">
                                Total Delivered: <span className="font-bold text-2xl text-amber-400">{deliveredBoxes}</span> Boxes
                              </div>
                              <div className="text-sm text-emerald-300 mt-1">Includes 2 complimentary boxes.</div>
                            </div>
                          ) : (
                            <div className="transition-all duration-300">
                              <div className="text-sm text-emerald-200 border-t border-emerald-700/50 pt-4 mt-4">
                                Increase order by <strong className="text-amber-400">{25 - billedBoxes}</strong> boxes to reach the 25-box wholesale tier and receive 2 boxes free.
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="absolute -right-10 -bottom-10 text-9xl text-emerald-800/50 font-black rotate-12">📦</div>
                      </div>

                      <div className="mt-8">
                        <h4 className="text-sm font-bold text-stone-800 mb-4 text-center uppercase tracking-wider">Dynamic Inventory Scaling</h4>
                        <p className="text-xs text-stone-500 text-center mb-4">
                          Visualizing box requirements against daily footfall based on your selected {b2bGrams}g plating.
                        </p>
                        <div className="relative w-full h-[300px]">
                          <Chart type="line" data={b2bChartData} options={b2bChartOptions} ref={b2bChartRef} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-16 text-center text-stone-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block border border-amber-600/50 bg-amber-900/20 text-amber-500 rounded-full px-6 py-2 text-xs font-bold tracking-widest uppercase mb-8">
            100% Organic Certified
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-8 tracking-wide">KRISHANKH BIOTECH</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10 text-sm">
            <a href="#" className="hover:text-emerald-400 transition flex items-center gap-2">
              <span className="text-lg">🌐</span> krishankhbiotech.com
            </a>
            <div className="flex items-center gap-2">
              <span className="text-lg">📞</span> +91 78210 18001 / 93184 34913
            </div>
            <a href="mailto:microgreensynergy@gmail.com" className="hover:text-emerald-400 transition flex items-center gap-2">
              <span className="text-lg">✉️</span> microgreensynergy@gmail.com
            </a>
          </div>
          <div className="text-emerald-600 font-semibold mb-8 text-lg">@microgreen_synergy</div>
          <p className="text-xs text-stone-600">&copy; 2026 Krishankh Biotech. All rights reserved. Operating in Delhi NCR.</p>
        </div>
      </footer>
    </>
  );
};

export default MicrogreenSynergy;
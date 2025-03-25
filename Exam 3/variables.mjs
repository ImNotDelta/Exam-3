
const DATA = {
	elements: [
		{
			name: "Hydrogen",
			symbol: "H",
			atomicMass: 1.008,
			atomicNumber: 1,
			matterState: "Gas",
			materialType: "Non-metal"
		},
		{
			name: "Helium",
			symbol: "He",
			atomicMass: 4.0026,
			atomicNumber: 2,
			matterState: "Gas",
			materialType: "Noble Gas"
		},
		{
			name: "Lithium",
			symbol: "Li",
			atomicMass: 6.94,
			atomicNumber: 3,
			matterState: "Solid",
			materialType: "Alkali Metal"
		},
		{
			name: "Beryllium",
			symbol: "Be",
			atomicMass: 9.0122,
			atomicNumber: 4,
			matterState: "Solid",
			materialType: "Alkaline Earth Metal"
		},
		{
			name: "Boron",
			symbol: "B",
			atomicMass: 10.81,
			atomicNumber: 5,
			matterState: "Solid",
			materialType: "Metalloid"
		},
		{
			name: "Carbon",
			symbol: "C",
			atomicMass: 12.011,
			atomicNumber: 6,
			matterState: "Solid",
			materialType: "Non-metal"
		},
		{
			name: "Nitrogen",
			symbol: "N",
			atomicMass: 14.007,
			atomicNumber: 7,
			matterState: "Gas",
			materialType: "Non-metal"
		},
		{
			name: "Oxygen",
			symbol: "O",
			atomicMass: 15.999,
			atomicNumber: 8,
			matterState: "Gas",
			materialType: "Non-metal"
		},
		{
			name: "Fluorine",
			symbol: "F",
			atomicMass: 18.998,
			atomicNumber: 9,
			matterState: "Gas",
			materialType: "Halogen"
		},
		{
			name: "Neon",
			symbol: "Ne",
			atomicMass: 20.18,
			atomicNumber: 10,
			matterState: "Gas",
			materialType: "Noble Gas"
		},
		{
			name: "Sodium",
			symbol: "Na",
			atomicMass: 22.99,
			atomicNumber: 11,
			matterState: "Solid",
			materialType: "Alkali Metal"
		},
		{
			name: "Magnesium",
			symbol: "Mg",
			atomicMass: 24.305,
			atomicNumber: 12,
			matterState: "Solid",
			materialType: "Alkaline Earth Metal"
		},
		{
			name: "Aluminum",
			symbol: "Al",
			atomicMass: 26.982,
			atomicNumber: 13,
			matterState: "Solid",
			materialType: "Post-transition Metal"
		},
		{
			name: "Silicon",
			symbol: "Si",
			atomicMass: 28.085,
			atomicNumber: 14,
			matterState: "Solid",
			materialType: "Metalloid"
		},
		{
			name: "Phosphorus",
			symbol: "P",
			atomicMass: 30.974,
			atomicNumber: 15,
			matterState: "Solid",
			materialType: "Non-metal"
		},
		{
			name: "Sulfur",
			symbol: "S",
			atomicMass: 32.06,
			atomicNumber: 16,
			matterState: "Solid",
			materialType: "Non-metal"
		},
		{
			name: "Chlorine",
			symbol: "Cl",
			atomicMass: 35.45,
			atomicNumber: 17,
			matterState: "Gas",
			materialType: "Halogen"
		},
		{
			name: "Argon",
			symbol: "Ar",
			atomicMass: 39.948,
			atomicNumber: 18,
			matterState: "Gas",
			materialType: "Noble Gas"
		},
		{
			name: "Potassium",
			symbol: "K",
			atomicMass: 39.098,
			atomicNumber: 19,
			matterState: "Solid",
			materialType: "Alkali Metal"
		},
		{
			name: "Calcium",
			symbol: "Ca",
			atomicMass: 40.078,
			atomicNumber: 20,
			matterState: "Solid",
			materialType: "Alkaline Earth Metal"
		},
		{
			name: "Scandium",
			symbol: "Sc",
			atomicMass: 44.956,
			atomicNumber: 21,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Titanium",
			symbol: "Ti",
			atomicMass: 47.867,
			atomicNumber: 22,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Vanadium",
			symbol: "V",
			atomicMass: 50.942,
			atomicNumber: 23,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Chromium",
			symbol: "Cr",
			atomicMass: 51.996,
			atomicNumber: 24,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Manganese",
			symbol: "Mn",
			atomicMass: 54.938,
			atomicNumber: 25,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Iron",
			symbol: "Fe",
			atomicMass: 55.845,
			atomicNumber: 26,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Nickel",
			symbol: "Ni",
			atomicMass: 58.693,
			atomicNumber: 28,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Copper",
			symbol: "Cu",
			atomicMass: 63.546,
			atomicNumber: 29,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Zinc",
			symbol: "Zn",
			atomicMass: 65.38,
			atomicNumber: 30,
			matterState: "Solid",
			materialType: "Transition Metal"
		},
		{
			name: "Uranium",
			symbol: "U",
			atomicMass: 238.029,
			atomicNumber: 92,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Neptunium",
			symbol: "Np",
			atomicMass: 237,
			atomicNumber: 93,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Plutonium",
			symbol: "Pu",
			atomicMass: 244,
			atomicNumber: 94,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Americium",
			symbol: "Am",
			atomicMass: 243,
			atomicNumber: 95,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Curium",
			symbol: "Cm",
			atomicMass: 247,
			atomicNumber: 96,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Berkelium",
			symbol: "Bk",
			atomicMass: 247,
			atomicNumber: 97,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Californium",
			symbol: "Cf",
			atomicMass: 251,
			atomicNumber: 98,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Einsteinium",
			symbol: "Es",
			atomicMass: 252,
			atomicNumber: 99,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Fermium",
			symbol: "Fm",
			atomicMass: 257,
			atomicNumber: 100,
			matterState: "Solid",
			materialType: "Actinide"
		},
		{
			name: "Oganesson",
			symbol: "Og",
			atomicMass: 294,
			atomicNumber: 118,
			matterState: "Gas",
			materialType: "Noble Gas"
		}
	]
};

export {DATA};
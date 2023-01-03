export type TemperatureUnit = 'c' | 'k' | 'f';

export interface Setting {
	unit: {
		temperature: TemperatureUnit;
	};
}

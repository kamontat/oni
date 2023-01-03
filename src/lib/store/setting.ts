import type { Setting } from './setting.model';

import { writable } from 'svelte/store';

export const settings = writable<Setting>({
	unit: {
		temperature: 'c'
	}
});

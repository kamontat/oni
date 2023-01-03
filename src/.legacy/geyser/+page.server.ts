import type { PageServerLoad, Actions } from './$types';

import { fail, redirect } from '@sveltejs/kit';
import { encode } from '$lib/server/cdata';

export const load: PageServerLoad = ({ params }) => {
    console.log(params);
	const cdata = params.cdata ?? '';
	console.log(cdata);

	return {
		cdata
	};
};

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();
        // Object.fromEntries() throws away duplicates and
        // only keeps the last one.
        const json = Object.fromEntries(data);
        console.log(json)

        const pin = json.pin as string
        if (!pin) return fail(400, {message: "pin is require to create shared url"})

        delete json["pin"]
        console.log(json)
        const result = await encode(json, pin)
        console.log(result)
        return redirect(301, `/${result}`)
	},
};

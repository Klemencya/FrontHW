const manifest = {
	appDir: "_app",
	appPath: "FrontHW/_app",
	assets: new Set([".nojekyll","me.jpg","me2.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ad143f2f.js","imports":["_app/immutable/entry/start.ad143f2f.js","_app/immutable/chunks/index.0da420e6.js","_app/immutable/chunks/singletons.8215bbc2.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.413e668d.js","imports":["_app/immutable/entry/app.413e668d.js","_app/immutable/chunks/index.0da420e6.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-01f3ce19.js'),
			() => import('./chunks/1-0ac5672b.js'),
			() => import('./chunks/2-92b40fdb.js'),
			() => import('./chunks/3-ebe4cc7b.js'),
			() => import('./chunks/4-c9bacc93.js'),
			() => import('./chunks/5-c6a23a83.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/bio",
				pattern: /^\/bio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/joke",
				pattern: /^\/joke\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

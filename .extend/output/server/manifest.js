export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.143248f7.js","app":"_app/immutable/entry/app.b322b387.js","imports":["_app/immutable/entry/start.143248f7.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/singletons.0e27eaa2.js","_app/immutable/entry/app.b322b387.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.1909f747.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

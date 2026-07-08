globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/fraunces-latin-500-normal-DnGCNyPD.woff2": {
		"type": "font/woff2",
		"etag": "\"4650-OmdRwQqmceebiV0oS6EqzGRM8xg\"",
		"mtime": "2026-07-08T08:58:46.122Z",
		"size": 18e3,
		"path": "../public/assets/fraunces-latin-500-normal-DnGCNyPD.woff2"
	},
	"/assets/fraunces-latin-400-normal-6IfK1voy.woff2": {
		"type": "font/woff2",
		"etag": "\"4630-GhNpLedz7x2m8gfvnn1HuZT45qU\"",
		"mtime": "2026-07-08T08:58:46.121Z",
		"size": 17968,
		"path": "../public/assets/fraunces-latin-400-normal-6IfK1voy.woff2"
	},
	"/assets/fraunces-latin-500-normal-BTR4KCeb.woff": {
		"type": "font/woff",
		"etag": "\"57bc-P3+6CpkGvI/L2ZCLOKJeuwPPWd8\"",
		"mtime": "2026-07-08T08:58:46.122Z",
		"size": 22460,
		"path": "../public/assets/fraunces-latin-500-normal-BTR4KCeb.woff"
	},
	"/assets/fraunces-latin-600-normal-DL5QCzvS.woff": {
		"type": "font/woff",
		"etag": "\"57f0-pCvVnfagOy195pE6aXIOqixoqlo\"",
		"mtime": "2026-07-08T08:58:46.123Z",
		"size": 22512,
		"path": "../public/assets/fraunces-latin-600-normal-DL5QCzvS.woff"
	},
	"/assets/fraunces-latin-600-normal-BFCDtZfi.woff2": {
		"type": "font/woff2",
		"etag": "\"46b0-EWgqBVTgOYn/fs440RNypoA1Eo0\"",
		"mtime": "2026-07-08T08:58:46.122Z",
		"size": 18096,
		"path": "../public/assets/fraunces-latin-600-normal-BFCDtZfi.woff2"
	},
	"/assets/fraunces-latin-400-normal-NUPT2cO8.woff": {
		"type": "font/woff",
		"etag": "\"57d0-1TmJe2c40NCoYEvMZnUtK5oAgWI\"",
		"mtime": "2026-07-08T08:58:46.121Z",
		"size": 22480,
		"path": "../public/assets/fraunces-latin-400-normal-NUPT2cO8.woff"
	},
	"/assets/fraunces-latin-700-normal-CEOla-zY.woff2": {
		"type": "font/woff2",
		"etag": "\"4724-zGE76aw6hSYT0/3WEhq+iqY2QNk\"",
		"mtime": "2026-07-08T08:58:46.123Z",
		"size": 18212,
		"path": "../public/assets/fraunces-latin-700-normal-CEOla-zY.woff2"
	},
	"/assets/fraunces-latin-ext-400-normal-D8gbi3Gu.woff2": {
		"type": "font/woff2",
		"etag": "\"4388-Vi99x8OzvIM5sdPHZ/7lcV2QHgY\"",
		"mtime": "2026-07-08T08:58:46.124Z",
		"size": 17288,
		"path": "../public/assets/fraunces-latin-ext-400-normal-D8gbi3Gu.woff2"
	},
	"/assets/fraunces-latin-700-normal-DTjk5d1Q.woff": {
		"type": "font/woff",
		"etag": "\"57f4-zT/Z8h82owraR+xM3ReajdDgZEI\"",
		"mtime": "2026-07-08T08:58:46.124Z",
		"size": 22516,
		"path": "../public/assets/fraunces-latin-700-normal-DTjk5d1Q.woff"
	},
	"/assets/fraunces-latin-ext-400-normal-UihxqfOe.woff": {
		"type": "font/woff",
		"etag": "\"5760-b2Y4iLsTv0XCt4JnQt6oTEJwYG4\"",
		"mtime": "2026-07-08T08:58:46.125Z",
		"size": 22368,
		"path": "../public/assets/fraunces-latin-ext-400-normal-UihxqfOe.woff"
	},
	"/assets/fraunces-latin-ext-600-normal-B0Dy4lqi.woff": {
		"type": "font/woff",
		"etag": "\"575c-0mtw4Si/GjTdDQmdm45+Wp3d/Rs\"",
		"mtime": "2026-07-08T08:58:46.127Z",
		"size": 22364,
		"path": "../public/assets/fraunces-latin-ext-600-normal-B0Dy4lqi.woff"
	},
	"/assets/fraunces-latin-ext-500-normal-BMcFk1Xs.woff": {
		"type": "font/woff",
		"etag": "\"57a0-iABIQvnxYW7d57Ho05Tk/Y2uAn4\"",
		"mtime": "2026-07-08T08:58:46.125Z",
		"size": 22432,
		"path": "../public/assets/fraunces-latin-ext-500-normal-BMcFk1Xs.woff"
	},
	"/assets/fraunces-latin-ext-600-normal-BtzmzP0X.woff2": {
		"type": "font/woff2",
		"etag": "\"43b8-mb2setCD6mGb34gXAtSmmu4YBck\"",
		"mtime": "2026-07-08T08:58:46.127Z",
		"size": 17336,
		"path": "../public/assets/fraunces-latin-ext-600-normal-BtzmzP0X.woff2"
	},
	"/assets/fraunces-latin-ext-500-normal-Z5DV8IzT.woff2": {
		"type": "font/woff2",
		"etag": "\"4390-G966g4LcswH9hJ6AQX0haU8WdXE\"",
		"mtime": "2026-07-08T08:58:46.126Z",
		"size": 17296,
		"path": "../public/assets/fraunces-latin-ext-500-normal-Z5DV8IzT.woff2"
	},
	"/assets/fraunces-vietnamese-400-normal-B65MOf9T.woff": {
		"type": "font/woff",
		"etag": "\"1f2c-5CLkiGyuNAAUeE8Mo3HVK0uYV4g\"",
		"mtime": "2026-07-08T08:58:46.129Z",
		"size": 7980,
		"path": "../public/assets/fraunces-vietnamese-400-normal-B65MOf9T.woff"
	},
	"/assets/fraunces-latin-ext-700-normal-DuBstVeD.woff": {
		"type": "font/woff",
		"etag": "\"5850-H66b0JWl0BAw4ikF7/Z/AIqRYgU\"",
		"mtime": "2026-07-08T08:58:46.128Z",
		"size": 22608,
		"path": "../public/assets/fraunces-latin-ext-700-normal-DuBstVeD.woff"
	},
	"/assets/fraunces-vietnamese-400-normal-CvGt0Ybw.woff2": {
		"type": "font/woff2",
		"etag": "\"1840-irME2qmPAfBL+Y/ginqg/d+xgno\"",
		"mtime": "2026-07-08T08:58:46.130Z",
		"size": 6208,
		"path": "../public/assets/fraunces-vietnamese-400-normal-CvGt0Ybw.woff2"
	},
	"/assets/fraunces-vietnamese-500-normal-B-KbxExq.woff": {
		"type": "font/woff",
		"etag": "\"1ef0-0uj3wSM+hy8MqrzSSoL1sd05HAQ\"",
		"mtime": "2026-07-08T08:58:46.130Z",
		"size": 7920,
		"path": "../public/assets/fraunces-vietnamese-500-normal-B-KbxExq.woff"
	},
	"/assets/fraunces-latin-ext-700-normal-CanUGppC.woff2": {
		"type": "font/woff2",
		"etag": "\"4500-Kay7/bl+fc0iOsuHj8J4yIyk/K4\"",
		"mtime": "2026-07-08T08:58:46.128Z",
		"size": 17664,
		"path": "../public/assets/fraunces-latin-ext-700-normal-CanUGppC.woff2"
	},
	"/assets/fraunces-vietnamese-500-normal-GOH_-EGq.woff2": {
		"type": "font/woff2",
		"etag": "\"1818-2pgovO066fbqjpOfSvPDyUMLMSU\"",
		"mtime": "2026-07-08T08:58:46.131Z",
		"size": 6168,
		"path": "../public/assets/fraunces-vietnamese-500-normal-GOH_-EGq.woff2"
	},
	"/assets/fraunces-vietnamese-700-normal-DH94m5DZ.woff2": {
		"type": "font/woff2",
		"etag": "\"18cc-n5ZhW5Chenj+oNEj8gMy+cE1518\"",
		"mtime": "2026-07-08T08:58:46.133Z",
		"size": 6348,
		"path": "../public/assets/fraunces-vietnamese-700-normal-DH94m5DZ.woff2"
	},
	"/assets/fraunces-vietnamese-600-normal-DlAl5EAR.woff": {
		"type": "font/woff",
		"etag": "\"1efc-Xea8ESjh61gztYWoOPHCkJUb9Dc\"",
		"mtime": "2026-07-08T08:58:46.132Z",
		"size": 7932,
		"path": "../public/assets/fraunces-vietnamese-600-normal-DlAl5EAR.woff"
	},
	"/assets/fraunces-vietnamese-600-normal-BjlAJixd.woff2": {
		"type": "font/woff2",
		"etag": "\"188c-szonOWk7UwGVWV1mW/2Xf2mx21w\"",
		"mtime": "2026-07-08T08:58:46.132Z",
		"size": 6284,
		"path": "../public/assets/fraunces-vietnamese-600-normal-BjlAJixd.woff2"
	},
	"/assets/fraunces-vietnamese-700-normal-DxawQjq2.woff": {
		"type": "font/woff",
		"etag": "\"1f3c-CAachW3ciPSvgD276+n5/SDTY7E\"",
		"mtime": "2026-07-08T08:58:46.134Z",
		"size": 7996,
		"path": "../public/assets/fraunces-vietnamese-700-normal-DxawQjq2.woff"
	},
	"/assets/inter-tight-cyrillic-ext-wght-normal-okcGN4Nq.woff2": {
		"type": "font/woff2",
		"etag": "\"6824-wA9X5MHZ/uy9ejDa22S6901ESjo\"",
		"mtime": "2026-07-08T08:58:46.135Z",
		"size": 26660,
		"path": "../public/assets/inter-tight-cyrillic-ext-wght-normal-okcGN4Nq.woff2"
	},
	"/assets/inter-tight-cyrillic-wght-normal-BS41q_Tv.woff2": {
		"type": "font/woff2",
		"etag": "\"4264-i+6q0dLxesS0O0UQTfLZU1fuRpI\"",
		"mtime": "2026-07-08T08:58:46.135Z",
		"size": 16996,
		"path": "../public/assets/inter-tight-cyrillic-wght-normal-BS41q_Tv.woff2"
	},
	"/assets/inter-tight-greek-ext-wght-normal-DQgQPNk4.woff2": {
		"type": "font/woff2",
		"etag": "\"2db4-ZngJClxohKLck83lq5+HKyJIsZQ\"",
		"mtime": "2026-07-08T08:58:46.136Z",
		"size": 11700,
		"path": "../public/assets/inter-tight-greek-ext-wght-normal-DQgQPNk4.woff2"
	},
	"/assets/inter-tight-latin-wght-normal-DX-nOvPD.woff2": {
		"type": "font/woff2",
		"etag": "\"af48-QXlEPFNZZX48QFZiN48ZuWESFUw\"",
		"mtime": "2026-07-08T08:58:46.137Z",
		"size": 44872,
		"path": "../public/assets/inter-tight-latin-wght-normal-DX-nOvPD.woff2"
	},
	"/assets/inter-tight-latin-ext-wght-normal-B4u9PlvR.woff2": {
		"type": "font/woff2",
		"etag": "\"15ec8-O9PLw7szhXjT1rgo5fbIfBBYM2M\"",
		"mtime": "2026-07-08T08:58:46.136Z",
		"size": 89800,
		"path": "../public/assets/inter-tight-latin-ext-wght-normal-B4u9PlvR.woff2"
	},
	"/assets/inter-tight-vietnamese-wght-normal-TKKdAiBA.woff2": {
		"type": "font/woff2",
		"etag": "\"28f0-XF7iHL2GjBjlN27KhCl3uOIQM7A\"",
		"mtime": "2026-07-08T08:58:46.139Z",
		"size": 10480,
		"path": "../public/assets/inter-tight-vietnamese-wght-normal-TKKdAiBA.woff2"
	},
	"/assets/inter-tight-greek-wght-normal-sS1B39LI.woff2": {
		"type": "font/woff2",
		"etag": "\"56b0-chtpVRxYEAYN+wZkRmaMSBbTmR8\"",
		"mtime": "2026-07-08T08:58:46.136Z",
		"size": 22192,
		"path": "../public/assets/inter-tight-greek-wght-normal-sS1B39LI.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff": {
		"type": "font/woff",
		"etag": "\"1b70-ULliHx6NDb6WoprjCD9cN6A3H2M\"",
		"mtime": "2026-07-08T08:58:46.140Z",
		"size": 7024,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2": {
		"type": "font/woff2",
		"etag": "\"14d0-wP6+M+HGdr9/ksFVSvTe+I0Y0rI\"",
		"mtime": "2026-07-08T08:58:46.139Z",
		"size": 5328,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2": {
		"type": "font/woff2",
		"etag": "\"14ec-QTcY+/vMX0UPkoTgSddbaoRkEuY\"",
		"mtime": "2026-07-08T08:58:46.140Z",
		"size": 5356,
		"path": "../public/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2"
	},
	"/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff": {
		"type": "font/woff",
		"etag": "\"1620-uF5DPKyxthnzZIfm2hBQUEmcCDI\"",
		"mtime": "2026-07-08T08:58:46.141Z",
		"size": 5664,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff"
	},
	"/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2": {
		"type": "font/woff2",
		"etag": "\"1084-bKcqPuNhRWWCQbsWLqSOoRkxv70\"",
		"mtime": "2026-07-08T08:58:46.141Z",
		"size": 4228,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2"
	},
	"/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff": {
		"type": "font/woff",
		"etag": "\"1658-H/mjwdfS4m1yKQXgRUK+RKkuFfo\"",
		"mtime": "2026-07-08T08:58:46.142Z",
		"size": 5720,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff"
	},
	"/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2": {
		"type": "font/woff2",
		"etag": "\"10bc-KUCG+hIKwoSOUbV7fpNmCS3FLvM\"",
		"mtime": "2026-07-08T08:58:46.142Z",
		"size": 4284,
		"path": "../public/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2"
	},
	"/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2": {
		"type": "font/woff2",
		"etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
		"mtime": "2026-07-08T08:58:46.143Z",
		"size": 21168,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2"
	},
	"/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2": {
		"type": "font/woff2",
		"etag": "\"5548-NcKnK3WfWhmDT/Dd1/lKnL5VeGA\"",
		"mtime": "2026-07-08T08:58:46.144Z",
		"size": 21832,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff": {
		"type": "font/woff",
		"etag": "\"1b40-oGh4jaPe06qJnXZqmnfGfJQP4Ag\"",
		"mtime": "2026-07-08T08:58:46.139Z",
		"size": 6976,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff"
	},
	"/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff": {
		"type": "font/woff",
		"etag": "\"6b68-PjVYVbMXaGEDnHrQQmycVNcGrEA\"",
		"mtime": "2026-07-08T08:58:46.143Z",
		"size": 27496,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2": {
		"type": "font/woff2",
		"etag": "\"1ca8-sBWBn421OuV4ZHOZxHJjafE1huU\"",
		"mtime": "2026-07-08T08:58:46.144Z",
		"size": 7336,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff": {
		"type": "font/woff",
		"etag": "\"2790-MZORDuKd3VMoaYVXmW8yROWL9sY\"",
		"mtime": "2026-07-08T08:58:46.145Z",
		"size": 10128,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff": {
		"type": "font/woff",
		"etag": "\"2860-o0XUF4uBh1xmGSf1BGPgnX+rm+M\"",
		"mtime": "2026-07-08T08:58:46.146Z",
		"size": 10336,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff"
	},
	"/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff": {
		"type": "font/woff",
		"etag": "\"14fc-wa8Pi/SxAFg9ve8x5GbO/sMJWEo\"",
		"mtime": "2026-07-08T08:58:46.146Z",
		"size": 5372,
		"path": "../public/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff"
	},
	"/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff": {
		"type": "font/woff",
		"etag": "\"6e30-1zAcLD7/opfpWjVLFZBVG0EzKds\"",
		"mtime": "2026-07-08T08:58:46.144Z",
		"size": 28208,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff"
	},
	"/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2": {
		"type": "font/woff2",
		"etag": "\"1d68-vgxZ8wbhZM0rlqgWMhUKb0zsbWM\"",
		"mtime": "2026-07-08T08:58:46.146Z",
		"size": 7528,
		"path": "../public/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2"
	},
	"/assets/index-lh9EbIs3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54103-nzzQP0lGy8+NRpk3srU681Mxy7c\"",
		"mtime": "2026-07-08T08:58:46.119Z",
		"size": 344323,
		"path": "../public/assets/index-lh9EbIs3.js"
	},
	"/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff": {
		"type": "font/woff",
		"etag": "\"1564-06JmuoIOvhZDwhIY/WiPtAooaNw\"",
		"mtime": "2026-07-08T08:58:46.147Z",
		"size": 5476,
		"path": "../public/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff"
	},
	"/assets/styles-B7EtlxlW.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"188b4-3OSzMi+YwB0Fwg84jg6G9S/Sf2Y\"",
		"mtime": "2026-07-08T08:58:46.147Z",
		"size": 100532,
		"path": "../public/assets/styles-B7EtlxlW.css"
	},
	"/assets/routes-BMQXba4-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e445-LOOec9RaWX6F2tCw+MPvMqjgSsc\"",
		"mtime": "2026-07-08T08:58:46.119Z",
		"size": 58437,
		"path": "../public/assets/routes-BMQXba4-.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_09ZLMa = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_09ZLMa
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

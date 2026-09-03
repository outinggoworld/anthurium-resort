(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/anthurium-resort/src/components/sections/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === "/";
    // On inner pages there is no full-bleed hero behind the header, so the
    // header should always render solid there (transparent-over-hero is a
    // homepage-only effect).
    const solid = scrolled || !isHome;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-500", solid ? "bg-ivory/90 backdrop-blur-md shadow-[0_4px_24px_rgba(22,74,58,0.08)]" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-500 sm:px-6 lg:px-10", solid ? "py-3" : "py-4 lg:py-6"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex shrink-0 items-center gap-2 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/brand/logo.png",
                                alt: "Anthurium Resort",
                                width: 44,
                                height: 44,
                                className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-display text-base tracking-[0.1em] transition-colors sm:text-xl sm:tracking-[0.15em] lg:text-2xl", solid ? "text-forest" : "text-white"),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].name
                            }, void 0, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 lg:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium tracking-wide transition-colors hover:opacity-70", solid ? "text-charcoal" : "text-white"),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/booking",
                        className: "inline-flex shrink-0 items-center rounded-full bg-forest px-3.5 py-2 text-xs font-semibold text-ivory transition-all duration-300 hover:bg-leaf sm:px-5 sm:py-2.5 sm:text-sm lg:px-6",
                        children: "Book Now"
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t transition-colors duration-500 lg:hidden", solid ? "border-forest/10" : "border-white/15"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "scrollbar-none flex items-center gap-5 overflow-x-auto whitespace-nowrap px-4 py-2.5 sm:gap-7 sm:px-6",
                    style: {
                        scrollbarWidth: "none"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 text-xs font-medium tracking-wide transition-colors hover:opacity-70 sm:text-sm", solid ? "text-charcoal" : "text-white"),
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/anthurium-resort/src/components/sections/Header.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Header, "Rnzc2lxbTbYzbBUM9bmWznZBIMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "about",
    ()=>about,
    "accommodationLinks",
    ()=>accommodationLinks,
    "companyLinks",
    ()=>companyLinks,
    "contact",
    ()=>contact,
    "navigation",
    ()=>navigation,
    "site",
    ()=>site
]);
const site = {
    name: "ANTHURIUM",
    tagline: "Discover the Beauty of Serenity",
    eyebrow: "ANTHURIUM RESORT",
    heroDescription: "If you are looking for a perfect holiday experience with memories to cherish you are at the right place. Let's plan a reasonable outing and stay for you.",
    whatsappUrl: "https://wa.me/919049090500?text=Hello,%20I%20want%20to%20inquire!",
    primaryCta: "Plan Your Getaway",
    secondaryCta: "Chat on WhatsApp",
    copyright: "©2025 All Rights Reserved by Wonder Valley Recreations & Hospitality PVT. LTD.",
    attribution: "Website developed by Nextwebi"
};
const navigation = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Activities",
        href: "/activities"
    },
    {
        label: "Stay",
        href: "/stay"
    },
    {
        label: "Weddings",
        href: "/weddings"
    },
    {
        label: "Packages",
        href: "/packages"
    },
    {
        label: "Corporate",
        href: "/corporate"
    },
    {
        label: "Gallery",
        href: "/gallery"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
const companyLinks = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Hotel Rooms",
        href: "/stay"
    },
    {
        label: "Blogs",
        href: "#"
    },
    {
        label: "Corporate MICE",
        href: "/corporate"
    },
    {
        label: "Our Clients",
        href: "/#testimonials"
    },
    {
        label: "FAQ's",
        href: "#"
    },
    {
        label: "Contact Us",
        href: "/contact"
    }
];
const accommodationLinks = [
    {
        label: "Glamping Pods",
        href: "/stay"
    },
    {
        label: "Standard Rooms",
        href: "/stay"
    },
    {
        label: "Premium Suites",
        href: "/stay"
    },
    {
        label: "Luxurious Villa",
        href: "/stay"
    }
];
const about = {
    heading: "The Anthurium",
    supporting: "Come away for a weekend full of adventures.",
    body: "[CONTENT REQUIRED] — Add the full About Anthurium story here (history, philosophy, location context)."
};
const contact = {
    heading: "Plan Your Visit",
    whatsapp: "+91 90490 90500",
    phone: "+91 90490 90500",
    email: "[CONTENT REQUIRED]",
    address: "Gate no 170, 171, Wagholi, Rahu Rd, behind Pasalkar Lawns, Kesnand, Maharashtra 412207",
    // Used to build the embedded Google Map.
    mapQuery: "Anthurium Resort, Gate no 170 171 Wagholi Rahu Rd Kesnand Maharashtra 412207"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=anthurium-resort_src_0jhu4h9._.js.map
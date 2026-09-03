(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/anthurium-resort/src/components/sections/AmbientParticles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientParticles",
    ()=>AmbientParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AmbientParticles() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmbientParticles.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const isMobile = window.innerWidth < 768;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let width = canvas.width = canvas.offsetWidth;
            let height = canvas.height = canvas.offsetHeight;
            const count = isMobile ? 18 : 42;
            const dust = Array.from({
                length: count
            }, {
                "AmbientParticles.useEffect.dust": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        r: Math.random() * 2.2 + 0.6,
                        vy: -(Math.random() * 0.25 + 0.05),
                        vx: (Math.random() - 0.5) * 0.15,
                        o: Math.random() * 0.5 + 0.15
                    })
            }["AmbientParticles.useEffect.dust"]);
            let raf = 0;
            let mouseX = width / 2;
            const onMove = {
                "AmbientParticles.useEffect.onMove": (e)=>{
                    mouseX = e.clientX;
                }
            }["AmbientParticles.useEffect.onMove"];
            if (!isMobile) window.addEventListener("mousemove", onMove);
            const onResize = {
                "AmbientParticles.useEffect.onResize": ()=>{
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
            }["AmbientParticles.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            const draw = {
                "AmbientParticles.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    const parallax = (mouseX - width / 2) / width * 6;
                    for (const p of dust){
                        p.y += p.vy;
                        p.x += p.vx;
                        if (p.y < -10) {
                            p.y = height + 10;
                            p.x = Math.random() * width;
                        }
                        ctx.beginPath();
                        ctx.arc(p.x + parallax, p.y, p.r, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(201, 168, 106, ${p.o})`;
                        ctx.fill();
                    }
                    if (!reduceMotion) raf = requestAnimationFrame(draw);
                }
            }["AmbientParticles.useEffect.draw"];
            draw();
            return ({
                "AmbientParticles.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener("resize", onResize);
                    if (!isMobile) window.removeEventListener("mousemove", onMove);
                }
            })["AmbientParticles.useEffect"];
        }
    }["AmbientParticles.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "pointer-events-none absolute inset-0 h-full w-full opacity-70",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/anthurium-resort/src/components/sections/AmbientParticles.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(AmbientParticles, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = AmbientParticles;
var _c;
__turbopack_context__.k.register(_c, "AmbientParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$SectionVideoBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/components/ui/SectionVideoBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$sections$2f$AmbientParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/components/sections/AmbientParticles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/data/videos.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-forest",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$SectionVideoBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionVideoBackground"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$videos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videos"].hero,
                poster: "/images/hero/hero-resort.jpg",
                overlayClassName: "bg-gradient-to-b from-forest/35 via-[rgba(20,40,32,0.55)] to-[rgba(15,25,20,0.85)]"
            }, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$sections$2f$AmbientParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientParticles"], {}, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-sand",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].eyebrow
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.1,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "max-w-3xl font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].tagline
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.3
                        },
                        className: "mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].heroDescription
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.45
                        },
                        className: "mt-10 flex flex-wrap items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/activities",
                                variant: "primary",
                                className: "bg-sand text-forest hover:bg-white",
                                children: "Explore the Resort"
                            }, void 0, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].whatsappUrl,
                                variant: "secondary",
                                external: true,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].secondaryCta
                            }, void 0, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/booking",
                                variant: "secondary",
                                children: "Book Now"
                            }, void 0, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1,
                    y: [
                        0,
                        8,
                        0
                    ]
                },
                transition: {
                    opacity: {
                        delay: 1
                    },
                    y: {
                        repeat: Infinity,
                        duration: 1.8
                    }
                },
                className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    size: 26
                }, void 0, false, {
                    fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/anthurium-resort/src/components/sections/Hero.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/components/sections/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/data/gallery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Testimonials() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "testimonials",
            className: "bg-ivory px-6 py-24 lg:px-10 lg:py-32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-3xl text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold uppercase tracking-[0.35em] text-leaf",
                            children: "Testimonials"
                        }, void 0, false, {
                            fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 font-display text-4xl text-forest sm:text-5xl",
                            children: "What Our Guests Say"
                        }, void 0, false, {
                            fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 rounded-2xl border border-dashed border-forest/20 bg-sage/50 px-6 py-8 text-sm text-charcoal/60",
                            children: "[CONTENT REQUIRED] — add real, verified guest reviews here. No reviews have been added yet, so none are shown."
                        }, void 0, false, {
                            fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"][index];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonials",
        className: "bg-ivory px-6 py-24 lg:px-10 lg:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-[0.35em] text-leaf",
                        children: "Testimonials"
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 font-display text-4xl text-forest sm:text-5xl",
                        children: "What Our Guests Say"
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex justify-center gap-1 text-sand",
                        children: Array.from({
                            length: 5
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 16,
                                fill: "currentColor"
                            }, i, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 font-display text-2xl leading-snug text-charcoal/85",
                        children: [
                            "“",
                            t.quote,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-sm font-semibold text-forest",
                        children: [
                            t.name,
                            t.source ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 font-normal text-charcoal/50",
                                children: [
                                    "— ",
                                    t.source
                                ]
                            }, void 0, true, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Previous testimonial",
                                onClick: ()=>setIndex((i)=>(i - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].length),
                                className: "rounded-full border border-forest/20 p-2.5 text-forest hover:bg-sage",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Next testimonial",
                                onClick: ()=>setIndex((i)=>(i + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].length),
                                className: "rounded-full border border-forest/20 p-2.5 text-forest hover:bg-sage",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/anthurium-resort/src/components/sections/Testimonials.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/lib/cn.ts [app-client] (ecmascript)");
;
;
;
function Button({ href, children, variant = "primary", className, external }) {
    const base = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";
    const variants = {
        primary: "bg-forest text-ivory hover:bg-leaf hover:-translate-y-0.5",
        secondary: "bg-transparent border border-white/70 text-white hover:bg-white hover:text-forest hover:-translate-y-0.5",
        ghost: "bg-sage text-forest hover:bg-sand hover:text-white"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/anthurium-resort/src/components/ui/Button.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/src/lib/cn.ts [app-client] (ecmascript)");
;
;
function Reveal({ children, delay = 0, y = 32, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("reveal-onload", className),
        style: {
            "--reveal-delay": `${delay}s`,
            "--reveal-y": `${y}px`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/anthurium-resort/src/components/ui/Reveal.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/components/ui/SectionVideoBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionVideoBackground",
    ()=>SectionVideoBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/anthurium-resort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SectionVideoBackground({ src, poster, overlayClassName, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`,
        "aria-hidden": "true",
        children: [
            src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "h-full w-full object-cover",
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                poster: poster,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: src,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/anthurium-resort/src/components/ui/SectionVideoBackground.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/ui/SectionVideoBackground.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full bg-cover bg-center",
                style: {
                    backgroundImage: `url('${poster}')`
                }
            }, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/ui/SectionVideoBackground.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this) : null,
            overlayClassName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$anthurium$2d$resort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 ${overlayClassName}`
            }, void 0, false, {
                fileName: "[project]/anthurium-resort/src/components/ui/SectionVideoBackground.tsx",
                lineNumber: 48,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/anthurium-resort/src/components/ui/SectionVideoBackground.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = SectionVideoBackground;
var _c;
__turbopack_context__.k.register(_c, "SectionVideoBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/data/gallery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryImages",
    ()=>galleryImages,
    "testimonials",
    ()=>testimonials
]);
const galleryImages = [
    {
        src: "/images/gallery/resort-1.jpg",
        alt: "Anthurium Resort pool grounds",
        category: "Resort"
    },
    {
        src: "/images/gallery/activities-1.jpg",
        alt: "Burma Bridge activity at Anthurium",
        category: "Activities"
    },
    {
        src: "/images/gallery/accommodation-1.jpg",
        alt: "Room interior at Anthurium",
        category: "Accommodation"
    },
    {
        src: "/images/gallery/weddings-1.jpg",
        alt: "Haldi ceremony at Anthurium",
        category: "Weddings"
    },
    {
        src: "/images/gallery/events-1.jpg",
        alt: "Banquet hall set up for an event",
        category: "Events"
    },
    {
        src: "/images/gallery/resort-2.jpg",
        alt: "Anthurium Resort entrance with hanging umbrellas",
        category: "Resort"
    }
];
const testimonials = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/anthurium-resort/src/data/videos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Background video paths, one per themed section.
//
// These files don't exist yet — drop real Anthurium footage into
// /public/videos/ using these exact filenames and each section will pick
// it up automatically. Until then, every section falls back to its
// existing poster image / gradient, so nothing breaks.
//
// Recommended specs: mp4 (H.264), 1080p or less, 6-15s loop, ~3-6 Mbps,
// no audio needed (it's muted anyway).
__turbopack_context__.s([
    "videos",
    ()=>videos
]);
const videos = {
    hero: "/videos/hero.mp4",
    activities: "/videos/activities.mp4",
    accommodation: "/videos/accommodation.mp4",
    weddings: "/videos/weddings.mp4",
    corporate: "/videos/corporate.mp4",
    finalCta: "/videos/sunset.mp4"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=anthurium-resort_src_0h3rm3v._.js.map
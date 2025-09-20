(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/navbar/navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ball": "navbar-module__6qiM_q__ball",
  "container": "navbar-module__6qiM_q__container",
  "darkLinkText": "navbar-module__6qiM_q__darkLinkText",
  "darkTitle": "navbar-module__6qiM_q__darkTitle",
  "linkText": "navbar-module__6qiM_q__linkText",
  "links": "navbar-module__6qiM_q__links",
  "logo": "navbar-module__6qiM_q__logo",
  "logoImage": "navbar-module__6qiM_q__logoImage",
  "themeBtn": "navbar-module__6qiM_q__themeBtn",
  "themeCont": "navbar-module__6qiM_q__themeCont",
  "title": "navbar-module__6qiM_q__title",
});
}),
"[project]/src/components/auth/auth.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "authContainer": "auth-module__cni4Dq__authContainer",
  "burger": "auth-module__cni4Dq__burger",
  "darkLink": "auth-module__cni4Dq__darkLink",
  "darkLinkText": "auth-module__cni4Dq__darkLinkText",
  "darkWriteBtn": "auth-module__cni4Dq__darkWriteBtn",
  "line": "auth-module__cni4Dq__line",
  "link": "auth-module__cni4Dq__link",
  "linkText": "auth-module__cni4Dq__linkText",
  "responsiveMenu": "auth-module__cni4Dq__responsiveMenu",
  "smallDarkLink": "auth-module__cni4Dq__smallDarkLink",
  "smallDarkWriteBtn": "auth-module__cni4Dq__smallDarkWriteBtn",
  "smallLink": "auth-module__cni4Dq__smallLink",
  "smallWriteBtn": "auth-module__cni4Dq__smallWriteBtn",
  "writeBtn": "auth-module__cni4Dq__writeBtn",
});
}),
"[project]/src/components/auth/auth.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/auth/auth.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Auth(param) {
    let { theme } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const status = "notauthenticated";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/write",
                        className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkWriteBtn : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].writeBtn,
                        children: "Write"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkLink : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/auth.jsx",
                lineNumber: 14,
                columnNumber: 17
            }, this),
            "   ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger,
                onClick: ()=>setOpen(!open),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/auth.jsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsiveMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkLinkText : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkText,
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkLinkText : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkText,
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkLinkText : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkText,
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/auth.jsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this),
                    ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/write",
                                className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].smallDarkWriteBtn : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].smallWriteBtn,
                                children: "Write"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/auth.jsx",
                                lineNumber: 33,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].smallDarkLink : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].smallLink,
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/auth.jsx",
                                lineNumber: 34,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/auth.jsx",
                lineNumber: 25,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(Auth, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = Auth;
var _c;
__turbopack_context__.k.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext,
    "ThemeContextProvider",
    ()=>ThemeContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const getFromLocalStorage = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};
const ThemeContextProvider = (param)=>{
    let { children } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThemeContextProvider.useState": ()=>{
            return getFromLocalStorage();
        }
    }["ThemeContextProvider.useState"]);
    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeContextProvider.useEffect": ()=>{
            localStorage.setItem("theme", theme);
        }
    }["ThemeContextProvider.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThemeContext.jsx",
        lineNumber: 28,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeContextProvider, "mX6EOAN1xwSILO0PttgLQIv9K3U=");
_c = ThemeContextProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/navbar/navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/auth.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function NavBar() {
    _s();
    const { toggle, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                        style: theme === "dark" ? {
                            border: "1px solid #b4bdff"
                        } : {
                            border: "1px solid #de642e"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/letter.png",
                            width: 28,
                            height: 28,
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.jsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkTitle : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Better Blog"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/Navbar.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeCont,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeBtn,
                        onClick: toggle,
                        style: theme === "dark" ? {
                            backgroundColor: "white"
                        } : {
                            backgroundColor: "#de642e"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ball,
                            style: theme === "dark" ? {
                                left: 1,
                                background: "#0f172a"
                            } : {
                                right: 1,
                                background: "white"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.jsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkLinkText : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkText,
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/Navbar.jsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkLinkText : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkText,
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/Navbar.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkLinkText : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkText,
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/Navbar.jsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navbar/Navbar.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/Navbar.jsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                theme: theme
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.jsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/Navbar.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(NavBar, "z1CWl1pxBwPzNJ8rUZ1MoGSdKmg=");
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/provider/ThemeProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeProvider = (param)=>{
    let { children } = param;
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeProvider.useEffect"], []);
    if (mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: theme,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/provider/ThemeProvider.jsx",
            lineNumber: 15,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
};
_s(ThemeProvider, "2sAKTzQpS+G87mA0egKVWPO9C7g=");
_c = ThemeProvider;
const __TURBOPACK__default__export__ = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ba40d984._.js.map
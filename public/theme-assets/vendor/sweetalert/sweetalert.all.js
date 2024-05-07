!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t()
}(this, function() {
    "use strict";
    const t = "SweetAlert2:"
      , v = e=>e.charAt(0).toUpperCase() + e.slice(1)
      , r = e=>Array.prototype.slice.call(e)
      , a = e=>{
        console.warn("".concat(t, " ").concat("object" == typeof e ? e.join(" ") : e))
    }
      , y = e=>{
        console.error("".concat(t, " ").concat(e))
    }
      , n = []
      , o = (e,t)=>{
        e = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'),
        n.includes(e) || (n.push(e),
        a(e))
    }
      , w = e=>"function" == typeof e ? e() : e
      , C = e=>e && "function" == typeof e.toPromise
      , k = e=>C(e) ? e.toPromise() : Promise.resolve(e)
      , A = e=>e && Promise.resolve(e) === e
      , i = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
    }
      , s = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
      , c = {}
      , P = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
      , B = e=>Object.prototype.hasOwnProperty.call(i, e)
      , x = e=>-1 !== s.indexOf(e)
      , E = e=>c[e]
      , T = e=>{
        !e.backdrop && e.allowOutsideClick && a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for (const n in e)
            t = n,
            B(t) || a('Unknown parameter "'.concat(t, '"')),
            e.toast && (t = n,
            P.includes(t) && a('The parameter "'.concat(t, '" is incompatible with toasts'))),
            t = n,
            E(t) && o(t, E(t));
        var t
    }
    ;
    var e = e=>{
        const t = {};
        for (const n in e)
            t[e[n]] = "swal2-" + e[n];
        return t
    }
    ;
    const p = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"])
      , S = e(["success", "warning", "info", "question", "error"])
      , m = ()=>document.body.querySelector(".".concat(p.container))
      , L = e=>{
        const t = m();
        return t ? t.querySelector(e) : null
    }
      , O = e=>L(".".concat(e))
      , g = ()=>O(p.popup)
      , j = ()=>O(p.icon)
      , M = ()=>O(p.title)
      , D = ()=>O(p["html-container"])
      , I = ()=>O(p.image)
      , H = ()=>O(p["progress-steps"])
      , q = ()=>O(p["validation-message"])
      , V = ()=>L(".".concat(p.actions, " .").concat(p.confirm))
      , N = ()=>L(".".concat(p.actions, " .").concat(p.deny));
    const R = ()=>L(".".concat(p.loader))
      , F = ()=>L(".".concat(p.actions, " .").concat(p.cancel))
      , U = ()=>O(p.actions)
      , W = ()=>O(p.footer)
      , z = ()=>O(p["timer-progress-bar"])
      , _ = ()=>O(p.close)
      , K = ()=>{
        const e = r(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>{
            e = parseInt(e.getAttribute("tabindex")),
            t = parseInt(t.getAttribute("tabindex"));
            return t < e ? 1 : e < t ? -1 : 0
        }
        );
        var t = r(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1" !== e.getAttribute("tabindex"));
        return (t=>{
            const n = [];
            for (let e = 0; e < t.length; e++)
                -1 === n.indexOf(t[e]) && n.push(t[e]);
            return n
        }
        )(e.concat(t)).filter(e=>se(e))
    }
      , Y = ()=>!$(document.body, p["toast-shown"]) && !$(document.body, p["no-backdrop"])
      , Z = ()=>g() && $(g(), p.toast);
    function J(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        const n = z();
        se(n) && (t && (n.style.transition = "none",
        n.style.width = "100%"),
        setTimeout(()=>{
            n.style.transition = "width ".concat(e / 1e3, "s linear"),
            n.style.width = "0%"
        }
        , 10))
    }
    const X = {
        previousBodyPadding: null
    }
      , l = (t,e)=>{
        if (t.textContent = "",
        e) {
            const n = new DOMParser
              , o = n.parseFromString(e, "text/html");
            r(o.querySelector("head").childNodes).forEach(e=>{
                t.appendChild(e)
            }
            ),
            r(o.querySelector("body").childNodes).forEach(e=>{
                t.appendChild(e)
            }
            )
        }
    }
      , $ = (t,e)=>{
        if (!e)
            return !1;
        var n = e.split(/\s+/);
        for (let e = 0; e < n.length; e++)
            if (!t.classList.contains(n[e]))
                return !1;
        return !0
    }
      , G = (e,t,n)=>{
        var o, i;
        if (o = e,
        i = t,
        r(o.classList).forEach(e=>{
            Object.values(p).includes(e) || Object.values(S).includes(e) || Object.values(i.showClass).includes(e) || o.classList.remove(e)
        }
        ),
        t.customClass && t.customClass[n]) {
            if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach)
                return a("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
            u(e, t.customClass[n])
        }
    }
      , Q = (e,t)=>{
        if (!t)
            return null;
        switch (t) {
        case "select":
        case "textarea":
        case "file":
            return e.querySelector(".".concat(p.popup, " > .").concat(p[t]));
        case "checkbox":
            return e.querySelector(".".concat(p.popup, " > .").concat(p.checkbox, " input"));
        case "radio":
            return e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:checked")) || e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:first-child"));
        case "range":
            return e.querySelector(".".concat(p.popup, " > .").concat(p.range, " input"));
        default:
            return e.querySelector(".".concat(p.popup, " > .").concat(p.input))
        }
    }
      , ee = e=>{
        var t;
        e.focus(),
        "file" !== e.type && (t = e.value,
        e.value = "",
        e.value = t)
    }
      , te = (e,t,n)=>{
        e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(t=>{
            Array.isArray(e) ? e.forEach(e=>{
                n ? e.classList.add(t) : e.classList.remove(t)
            }
            ) : n ? e.classList.add(t) : e.classList.remove(t)
        }
        )
    }
      , u = (e,t)=>{
        te(e, t, !0)
    }
      , ne = (e,t)=>{
        te(e, t, !1)
    }
      , oe = (e,t)=>{
        var n = r(e.childNodes);
        for (let e = 0; e < n.length; e++)
            if ($(n[e], t))
                return n[e]
    }
      , ie = (e,t,n)=>{
        (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t)
    }
      , d = function(e) {
        e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex"
    }
      , h = e=>{
        e.style.display = "none"
    }
      , ae = (e,t,n,o)=>{
        const i = e.querySelector(t);
        i && (i.style[n] = o)
    }
      , re = (e,t,n)=>{
        t ? d(e, n) : h(e)
    }
      , se = e=>!(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length))
      , ce = ()=>!se(V()) && !se(N()) && !se(F())
      , le = e=>!!(e.scrollHeight > e.clientHeight)
      , ue = e=>{
        const t = window.getComputedStyle(e);
        var e = parseFloat(t.getPropertyValue("animation-duration") || "0")
          , n = parseFloat(t.getPropertyValue("transition-duration") || "0");
        return 0 < e || 0 < n
    }
      , de = ()=>"undefined" == typeof window || "undefined" == typeof document
      , pe = 100
      , f = {}
      , me = ()=>{
        f.previousActiveElement && f.previousActiveElement.focus ? (f.previousActiveElement.focus(),
        f.previousActiveElement = null) : document.body && document.body.focus()
    }
      , ge = o=>new Promise(e=>{
        if (!o)
            return e();
        var t = window.scrollX
          , n = window.scrollY;
        f.restoreFocusTimeout = setTimeout(()=>{
            me(),
            e()
        }
        , pe),
        window.scrollTo(t, n)
    }
    )
      , he = '\n <div aria-labelledby="'.concat(p.title, '" aria-describedby="').concat(p["html-container"], '" class="').concat(p.popup, '" tabindex="-1">\n   <button type="button" class="').concat(p.close, '"></button>\n   <ul class="').concat(p["progress-steps"], '"></ul>\n   <div class="').concat(p.icon, '"></div>\n   <img class="').concat(p.image, '" />\n   <h2 class="').concat(p.title, '" id="').concat(p.title, '"></h2>\n   <div class="').concat(p["html-container"], '" id="').concat(p["html-container"], '"></div>\n   <input class="').concat(p.input, '" />\n   <input type="file" class="').concat(p.file, '" />\n   <div class="').concat(p.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select, '"></select>\n   <div class="').concat(p.radio, '"></div>\n   <label for="').concat(p.checkbox, '" class="').concat(p.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(p.label, '"></span>\n   </label>\n   <textarea class="').concat(p.textarea, '"></textarea>\n   <div class="').concat(p["validation-message"], '" id="').concat(p["validation-message"], '"></div>\n   <div class="').concat(p.actions, '">\n     <div class="').concat(p.loader, '"></div>\n     <button type="button" class="').concat(p.confirm, '"></button>\n     <button type="button" class="').concat(p.deny, '"></button>\n     <button type="button" class="').concat(p.cancel, '"></button>\n   </div>\n   <div class="').concat(p.footer, '"></div>\n   <div class="').concat(p["timer-progress-bar-container"], '">\n     <div class="').concat(p["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, "")
      , fe = ()=>{
        const e = m();
        return !!e && (e.remove(),
        ne([document.documentElement, document.body], [p["no-backdrop"], p["toast-shown"], p["has-column"]]),
        !0)
    }
      , be = ()=>{
        f.currentInstance.resetValidationMessage()
    }
      , ve = ()=>{
        const e = g()
          , t = oe(e, p.input)
          , n = oe(e, p.file)
          , o = e.querySelector(".".concat(p.range, " input"))
          , i = e.querySelector(".".concat(p.range, " output"))
          , a = oe(e, p.select)
          , r = e.querySelector(".".concat(p.checkbox, " input"))
          , s = oe(e, p.textarea);
        t.oninput = be,
        n.onchange = be,
        a.onchange = be,
        r.onchange = be,
        s.oninput = be,
        o.oninput = ()=>{
            be(),
            i.value = o.value
        }
        ,
        o.onchange = ()=>{
            be(),
            o.nextSibling.value = o.value
        }
    }
      , ye = e=>"string" == typeof e ? document.querySelector(e) : e
      , we = e=>{
        const t = g();
        t.setAttribute("role", e.toast ? "alert" : "dialog"),
        t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
        e.toast || t.setAttribute("aria-modal", "true")
    }
      , Ce = e=>{
        "rtl" === window.getComputedStyle(e).direction && u(m(), p.rtl)
    }
      , ke = (e,t)=>{
        if (e instanceof HTMLElement)
            t.appendChild(e);
        else if ("object" == typeof e) {
            var n = e
              , o = t;
            if (n.jquery)
                Ae(o, n);
            else
                l(o, n.toString())
        } else
            e && l(t, e)
    }
      , Ae = (t,n)=>{
        if (t.textContent = "",
        0 in n)
            for (let e = 0; e in n; e++)
                t.appendChild(n[e].cloneNode(!0));
        else
            t.appendChild(n.cloneNode(!0))
    }
      , Pe = (()=>{
        if (de())
            return !1;
        var e = document.createElement("div")
          , t = {
            WebkitAnimation: "webkitAnimationEnd",
            animation: "animationend"
        };
        for (const n in t)
            if (Object.prototype.hasOwnProperty.call(t, n) && void 0 !== e.style[n])
                return t[n];
        return !1
    }
    )()
      , Be = (e,t)=>{
        var n, o, i, a, r, s = U(), c = R();
        (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? d : h)(s),
        G(s, t, "actions"),
        s = s,
        n = c,
        o = t,
        i = V(),
        a = N(),
        r = F(),
        xe(i, "confirm", o),
        xe(a, "deny", o),
        xe(r, "cancel", o),
        function(e, t, n, o) {
            if (!o.buttonsStyling)
                return ne([e, t, n], p.styled);
            u([e, t, n], p.styled),
            o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor,
            u(e, p["default-outline"]));
            o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor,
            u(t, p["default-outline"]));
            o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor,
            u(n, p["default-outline"]))
        }(i, a, r, o),
        o.reverseButtons && (o.toast ? (s.insertBefore(r, i),
        s.insertBefore(a, i)) : (s.insertBefore(r, n),
        s.insertBefore(a, n),
        s.insertBefore(i, n))),
        l(c, t.loaderHtml),
        G(c, t, "loader")
    }
    ;
    function xe(e, t, n) {
        re(e, n["show".concat(v(t), "Button")], "inline-block"),
        l(e, n["".concat(t, "ButtonText")]),
        e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]),
        e.className = p[t],
        G(e, n, "".concat(t, "Button")),
        u(e, n["".concat(t, "ButtonClass")])
    }
    const Ee = (e,t)=>{
        var n, o, i = m();
        i && (o = i,
        "string" == typeof (n = t.backdrop) ? o.style.background = n : n || u([document.documentElement, document.body], p["no-backdrop"]),
        o = i,
        (n = t.position)in p ? u(o, p[n]) : (a('The "position" parameter is not valid, defaulting to "center"'),
        u(o, p.center)),
        n = i,
        !(o = t.grow) || "string" != typeof o || (o = "grow-".concat(o))in p && u(n, p[o]),
        G(i, t, "container"))
    }
    ;
    var b = {
        awaitingPromise: new WeakMap,
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    };
    const Te = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
      , Se = (e,r)=>{
        const s = g();
        var t, e = b.innerParams.get(e);
        const c = !e || r.input !== e.input;
        Te.forEach(e=>{
            var t = p[e];
            const n = oe(s, t);
            {
                var o = r.inputAttributes;
                const i = Q(g(), e);
                if (i) {
                    Le(i);
                    for (const a in o)
                        i.setAttribute(a, o[a])
                }
            }
            n.className = t,
            c && h(n)
        }
        ),
        r.input && (c && (e=>{
            if (!De[e.input])
                return y('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
            const t = Me(e.input)
              , n = De[e.input](t, e);
            d(n),
            setTimeout(()=>{
                ee(n)
            }
            )
        }
        )(r),
        e = r,
        t = Me(e.input),
        e.customClass && u(t, e.customClass.input))
    }
      , Le = t=>{
        for (let e = 0; e < t.attributes.length; e++) {
            var n = t.attributes[e].name;
            ["type", "value", "style"].includes(n) || t.removeAttribute(n)
        }
    }
      , Oe = (e,t)=>{
        e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
    }
      , je = (e,t,n)=>{
        if (n.inputLabel) {
            e.id = p.input;
            const i = document.createElement("label");
            var o = p["input-label"];
            i.setAttribute("for", e.id),
            i.className = o,
            u(i, n.customClass.inputLabel),
            i.innerText = n.inputLabel,
            t.insertAdjacentElement("beforebegin", i)
        }
    }
      , Me = e=>{
        e = p[e] || p.input;
        return oe(g(), e)
    }
      , De = {}
      , Ie = (De.text = De.email = De.password = De.number = De.tel = De.url = (e,t)=>("string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : A(t.inputValue) || a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')),
    je(e, e, t),
    Oe(e, t),
    e.type = t.input,
    e),
    De.file = (e,t)=>(je(e, e, t),
    Oe(e, t),
    e),
    De.range = (e,t)=>{
        const n = e.querySelector("input")
          , o = e.querySelector("output");
        return n.value = t.inputValue,
        n.type = t.input,
        o.value = t.inputValue,
        je(n, e, t),
        e
    }
    ,
    De.select = (e,t)=>{
        if (e.textContent = "",
        t.inputPlaceholder) {
            const n = document.createElement("option");
            l(n, t.inputPlaceholder),
            n.value = "",
            n.disabled = !0,
            n.selected = !0,
            e.appendChild(n)
        }
        return je(e, e, t),
        e
    }
    ,
    De.radio = e=>(e.textContent = "",
    e),
    De.checkbox = (e,t)=>{
        const n = Q(g(), "checkbox");
        n.value = "1",
        n.id = p.checkbox,
        n.checked = Boolean(t.inputValue);
        var o = e.querySelector("span");
        return l(o, t.inputPlaceholder),
        e
    }
    ,
    De.textarea = (n,e)=>{
        n.value = e.inputValue,
        Oe(n, e),
        je(n, n, e);
        return setTimeout(()=>{
            if ("MutationObserver"in window) {
                const t = parseInt(window.getComputedStyle(g()).width);
                new MutationObserver(()=>{
                    var e = n.offsetWidth + (e = n,
                    parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
                    e > t ? g().style.width = "".concat(e, "px") : g().style.width = null
                }
                ).observe(n, {
                    attributes: !0,
                    attributeFilter: ["style"]
                })
            }
        }
        ),
        n
    }
    ,
    (e,t)=>{
        const n = D();
        G(n, t, "htmlContainer"),
        t.html ? (ke(t.html, n),
        d(n, "block")) : t.text ? (n.textContent = t.text,
        d(n, "block")) : h(n),
        Se(e, t)
    }
    )
      , He = (e,t)=>{
        var n = W();
        re(n, t.footer),
        t.footer && ke(t.footer, n),
        G(n, t, "footer")
    }
      , qe = (e,t)=>{
        const n = _();
        l(n, t.closeButtonHtml),
        G(n, t, "closeButton"),
        re(n, t.showCloseButton),
        n.setAttribute("aria-label", t.closeButtonAriaLabel)
    }
      , Ve = (e,t)=>{
        var e = b.innerParams.get(e)
          , n = j();
        return e && t.icon === e.icon ? (We(n, t),
        void Ne(n, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(S).indexOf(t.icon) ? (y('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')),
        h(n)) : (d(n),
        We(n, t),
        Ne(n, t),
        void u(n, t.showClass.icon)) : h(n)
    }
      , Ne = (e,t)=>{
        for (const n in S)
            t.icon !== n && ne(e, S[n]);
        u(e, S[t.icon]),
        ze(e, t),
        Re(),
        G(e, t, "icon")
    }
      , Re = ()=>{
        const e = g();
        var t = window.getComputedStyle(e).getPropertyValue("background-color");
        const n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for (let e = 0; e < n.length; e++)
            n[e].style.backgroundColor = t
    }
      , Fe = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'
      , Ue = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n'
      , We = (e,t)=>{
        var n;
        e.textContent = "",
        t.iconHtml ? l(e, _e(t.iconHtml)) : "success" === t.icon ? l(e, Fe) : "error" === t.icon ? l(e, Ue) : (n = {
            question: "?",
            warning: "!",
            info: "i"
        },
        l(e, _e(n[t.icon])))
    }
      , ze = (e,t)=>{
        if (t.iconColor) {
            e.style.color = t.iconColor,
            e.style.borderColor = t.iconColor;
            for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
                ae(e, n, "backgroundColor", t.iconColor);
            ae(e, ".swal2-success-ring", "borderColor", t.iconColor)
        }
    }
      , _e = e=>'<div class="'.concat(p["icon-content"], '">').concat(e, "</div>")
      , Ke = (e,t)=>{
        const n = I();
        if (!t.imageUrl)
            return h(n);
        d(n, ""),
        n.setAttribute("src", t.imageUrl),
        n.setAttribute("alt", t.imageAlt),
        ie(n, "width", t.imageWidth),
        ie(n, "height", t.imageHeight),
        n.className = p.image,
        G(n, t, "image")
    }
      , Ye = (e,o)=>{
        const i = H();
        if (!o.progressSteps || 0 === o.progressSteps.length)
            return h(i);
        d(i),
        i.textContent = "",
        o.currentProgressStep >= o.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
        o.progressSteps.forEach((e,t)=>{
            e = e,
            n = document.createElement("li"),
            u(n, p["progress-step"]),
            l(n, e);
            var n, e = n;
            i.appendChild(e),
            t === o.currentProgressStep && u(e, p["active-progress-step"]),
            t !== o.progressSteps.length - 1 && (n = (e=>{
                const t = document.createElement("li");
                return u(t, p["progress-step-line"]),
                e.progressStepsDistance && (t.style.width = e.progressStepsDistance),
                t
            }
            )(o),
            i.appendChild(n))
        }
        )
    }
      , Ze = (e,t)=>{
        const n = M();
        re(n, t.title || t.titleText, "block"),
        t.title && ke(t.title, n),
        t.titleText && (n.innerText = t.titleText),
        G(n, t, "title")
    }
      , Je = (e,t)=>{
        var n = m();
        const o = g();
        t.toast ? (ie(n, "width", t.width),
        o.style.width = "100%",
        o.insertBefore(R(), j())) : ie(o, "width", t.width),
        ie(o, "padding", t.padding),
        t.color && (o.style.color = t.color),
        t.background && (o.style.background = t.background),
        h(q());
        n = o;
        (n.className = "".concat(p.popup, " ").concat(se(n) ? t.showClass.popup : ""),
        t.toast) ? (u([document.documentElement, document.body], p["toast-shown"]),
        u(n, p.toast)) : u(n, p.modal);
        G(n, t, "popup"),
        "string" == typeof t.customClass && u(n, t.customClass);
        t.icon && u(n, p["icon-".concat(t.icon)])
    }
      , Xe = (e,t)=>{
        Je(e, t),
        Ee(e, t),
        Ye(e, t),
        Ve(e, t),
        Ke(e, t),
        Ze(e, t),
        qe(e, t),
        Ie(e, t),
        Be(e, t),
        He(e, t),
        "function" == typeof t.didRender && t.didRender(g())
    }
      , $e = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    })
      , Ge = ()=>{
        const e = r(document.body.children);
        e.forEach(e=>{
            e === m() || e.contains(m()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")),
            e.setAttribute("aria-hidden", "true"))
        }
        )
    }
      , Qe = ()=>{
        const e = r(document.body.children);
        e.forEach(e=>{
            e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")),
            e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
        }
        )
    }
      , et = ["swal-title", "swal-html", "swal-footer"]
      , tt = e=>{
        const n = {};
        return r(e.querySelectorAll("swal-param")).forEach(e=>{
            ct(e, ["name", "value"]);
            var t = e.getAttribute("name")
              , e = e.getAttribute("value");
            "boolean" == typeof i[t] && "false" === e && (n[t] = !1),
            "object" == typeof i[t] && (n[t] = JSON.parse(e))
        }
        ),
        n
    }
      , nt = e=>{
        const n = {};
        return r(e.querySelectorAll("swal-button")).forEach(e=>{
            ct(e, ["type", "color", "aria-label"]);
            var t = e.getAttribute("type");
            n["".concat(t, "ButtonText")] = e.innerHTML,
            n["show".concat(v(t), "Button")] = !0,
            e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")),
            e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"))
        }
        ),
        n
    }
      , ot = e=>{
        const t = {}
          , n = e.querySelector("swal-image");
        return n && (ct(n, ["src", "width", "height", "alt"]),
        n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")),
        n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")),
        n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")),
        n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))),
        t
    }
      , it = e=>{
        const t = {}
          , n = e.querySelector("swal-icon");
        return n && (ct(n, ["type", "color"]),
        n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
        n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
        t.iconHtml = n.innerHTML),
        t
    }
      , at = e=>{
        const n = {}
          , t = e.querySelector("swal-input");
        t && (ct(t, ["type", "label", "placeholder", "value"]),
        n.input = t.getAttribute("type") || "text",
        t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")),
        t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")),
        t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
        e = e.querySelectorAll("swal-input-option");
        return e.length && (n.inputOptions = {},
        r(e).forEach(e=>{
            ct(e, ["value"]);
            var t = e.getAttribute("value")
              , e = e.innerHTML;
            n.inputOptions[t] = e
        }
        )),
        n
    }
      , rt = (e,t)=>{
        const n = {};
        for (const o in t) {
            const i = t[o]
              , a = e.querySelector(i);
            a && (ct(a, []),
            n[i.replace(/^swal-/, "")] = a.innerHTML.trim())
        }
        return n
    }
      , st = e=>{
        const t = et.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        r(e.children).forEach(e=>{
            e = e.tagName.toLowerCase();
            -1 === t.indexOf(e) && a("Unrecognized element <".concat(e, ">"))
        }
        )
    }
      , ct = (t,n)=>{
        r(t.attributes).forEach(e=>{
            -1 === n.indexOf(e.name) && a(['Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")])
        }
        )
    }
    ;
    var lt = {
        email: (e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
        url: (e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };
    function ut(e) {
        (t = e).inputValidator || Object.keys(lt).forEach(e=>{
            t.input === e && (t.inputValidator = lt[e])
        }
        ),
        e.showLoaderOnConfirm && !e.preConfirm && a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
        (n = e).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (a('Target parameter is not valid, defaulting to "body"'),
        n.target = "body"),
        "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />"));
        var t, n = e, e = fe();
        if (de())
            y("SweetAlert2 requires document to initialize");
        else {
            const o = document.createElement("div")
              , i = (o.className = p.container,
            e && u(o, p["no-transition"]),
            l(o, he),
            ye(n.target));
            i.appendChild(o),
            we(n),
            Ce(i),
            ve()
        }
    }
    class dt {
        constructor(e, t) {
            this.callback = e,
            this.remaining = t,
            this.running = !1,
            this.start()
        }
        start() {
            return this.running || (this.running = !0,
            this.started = new Date,
            this.id = setTimeout(this.callback, this.remaining)),
            this.remaining
        }
        stop() {
            return this.running && (this.running = !1,
            clearTimeout(this.id),
            this.remaining -= (new Date).getTime() - this.started.getTime()),
            this.remaining
        }
        increase(e) {
            var t = this.running;
            return t && this.stop(),
            this.remaining += e,
            t && this.start(),
            this.remaining
        }
        getTimerLeft() {
            return this.running && (this.stop(),
            this.start()),
            this.remaining
        }
        isRunning() {
            return this.running
        }
    }
    const pt = ()=>{
        null === X.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (X.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
        document.body.style.paddingRight = "".concat(X.previousBodyPadding + (()=>{
            const e = document.createElement("div");
            e.className = p["scrollbar-measure"],
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        )(), "px"))
    }
      , mt = ()=>{
        null !== X.previousBodyPadding && (document.body.style.paddingRight = "".concat(X.previousBodyPadding, "px"),
        X.previousBodyPadding = null)
    }
      , gt = ()=>{
        var e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints;
        if (e && !$(document.body, p.iosfix)) {
            var t, e = document.body.scrollTop;
            document.body.style.top = "".concat(-1 * e, "px"),
            u(document.body, p.iosfix);
            {
                const n = m();
                let t;
                n.ontouchstart = e=>{
                    t = ht(e)
                }
                ,
                n.ontouchmove = e=>{
                    t && (e.preventDefault(),
                    e.stopPropagation())
                }
            }
            {
                const o = navigator.userAgent
                  , i = !!o.match(/iPad/i) || !!o.match(/iPhone/i)
                  , a = !!o.match(/WebKit/i)
                  , r = i && a && !o.match(/CriOS/i);
                r && (t = 44,
                g().scrollHeight > window.innerHeight - 44 && (m().style.paddingBottom = "".concat(44, "px")))
            }
        }
    }
      , ht = e=>{
        var t, n = e.target, o = m();
        return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || (t = e).touches && 1 < t.touches.length) && (n === o || !(le(o) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || le(D()) && D().contains(n)))
    }
      , ft = ()=>{
        var e;
        $(document.body, p.iosfix) && (e = parseInt(document.body.style.top, 10),
        ne(document.body, p.iosfix),
        document.body.style.top = "",
        document.body.scrollTop = -1 * e)
    }
      , bt = 10
      , vt = e=>{
        const t = g();
        if (e.target === t) {
            const n = m();
            t.removeEventListener(Pe, vt),
            n.style.overflowY = "auto"
        }
    }
      , yt = (e,t)=>{
        Pe && ue(t) ? (e.style.overflowY = "hidden",
        t.addEventListener(Pe, vt)) : e.style.overflowY = "auto"
    }
      , wt = (e,t,n)=>{
        gt(),
        t && "hidden" !== n && pt(),
        setTimeout(()=>{
            e.scrollTop = 0
        }
        )
    }
      , Ct = (e,t,n)=>{
        u(e, n.showClass.backdrop),
        t.style.setProperty("opacity", "0", "important"),
        d(t, "grid"),
        setTimeout(()=>{
            u(t, n.showClass.popup),
            t.style.removeProperty("opacity")
        }
        , bt),
        u([document.documentElement, document.body], p.shown),
        n.heightAuto && n.backdrop && !n.toast && u([document.documentElement, document.body], p["height-auto"])
    }
      , kt = e=>{
        let t = g();
        t || new vn,
        t = g();
        var n = R();
        if (Z())
            h(j());
        else {
            var o = t;
            const i = U()
              , a = R();
            !e && se(V()) && (e = V());
            d(i),
            e && (h(e),
            a.setAttribute("data-button-to-replace", e.className));
            a.parentNode.insertBefore(a, e),
            u([o, i], p.loading)
        }
        d(n),
        t.setAttribute("data-loading", !0),
        t.setAttribute("aria-busy", !0),
        t.focus()
    }
      , At = (t,n)=>{
        const o = g()
          , i = e=>Bt[n.input](o, xt(e), n);
        C(n.inputOptions) || A(n.inputOptions) ? (kt(V()),
        k(n.inputOptions).then(e=>{
            t.hideLoading(),
            i(e)
        }
        )) : "object" == typeof n.inputOptions ? i(n.inputOptions) : y("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))
    }
      , Pt = (t,n)=>{
        const o = t.getInput();
        h(o),
        k(n.inputValue).then(e=>{
            o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e),
            d(o),
            o.focus(),
            t.hideLoading()
        }
        ).catch(e=>{
            y("Error in inputValue promise: ".concat(e)),
            o.value = "",
            d(o),
            o.focus(),
            t.hideLoading()
        }
        )
    }
      , Bt = {
        select: (e,t,i)=>{
            const a = oe(e, p.select)
              , r = (e,t,n)=>{
                const o = document.createElement("option");
                o.value = n,
                l(o, t),
                o.selected = Et(n, i.inputValue),
                e.appendChild(o)
            }
            ;
            t.forEach(e=>{
                var t = e[0];
                const n = e[1];
                if (Array.isArray(n)) {
                    const o = document.createElement("optgroup");
                    o.label = t,
                    o.disabled = !1,
                    a.appendChild(o),
                    n.forEach(e=>r(o, e[1], e[0]))
                } else
                    r(a, n, t)
            }
            ),
            a.focus()
        }
        ,
        radio: (e,t,a)=>{
            const r = oe(e, p.radio)
              , n = (t.forEach(e=>{
                var t = e[0]
                  , e = e[1];
                const n = document.createElement("input")
                  , o = document.createElement("label")
                  , i = (n.type = "radio",
                n.name = p.radio,
                n.value = t,
                Et(t, a.inputValue) && (n.checked = !0),
                document.createElement("span"));
                l(i, e),
                i.className = p.label,
                o.appendChild(n),
                o.appendChild(i),
                r.appendChild(o)
            }
            ),
            r.querySelectorAll("input"));
            n.length && n[0].focus()
        }
    }
      , xt = n=>{
        const o = [];
        return "undefined" != typeof Map && n instanceof Map ? n.forEach((e,t)=>{
            let n = e;
            "object" == typeof n && (n = xt(n)),
            o.push([t, n])
        }
        ) : Object.keys(n).forEach(e=>{
            let t = n[e];
            "object" == typeof t && (t = xt(t)),
            o.push([e, t])
        }
        ),
        o
    }
      , Et = (e,t)=>t && t.toString() === e.toString()
      , Tt = (e,t)=>{
        var n = b.innerParams.get(e);
        if (!n.input)
            return y('The "input" parameter is needed to be set when using returnInputValueOn'.concat(v(t)));
        var o = ((e,t)=>{
            const n = e.getInput();
            if (!n)
                return null;
            switch (t.input) {
            case "checkbox":
                return n.checked ? 1 : 0;
            case "radio":
                return (o = n).checked ? o.value : null;
            case "file":
                return (o = n).files.length ? null !== o.getAttribute("multiple") ? o.files : o.files[0] : null;
            default:
                return t.inputAutoTrim ? n.value.trim() : n.value
            }
            var o
        }
        )(e, n);
        if (n.inputValidator) {
            var i = e;
            var a = o;
            var r = t;
            const s = b.innerParams.get(i)
              , c = (i.disableInput(),
            Promise.resolve().then(()=>k(s.inputValidator(a, s.validationMessage))));
            c.then(e=>{
                i.enableButtons(),
                i.enableInput(),
                e ? i.showValidationMessage(e) : ("deny" === r ? St : jt)(i, a)
            }
            )
        } else
            e.getInput().checkValidity() ? ("deny" === t ? St : jt)(e, o) : (e.enableButtons(),
            e.showValidationMessage(n.validationMessage))
    }
      , St = (t,n)=>{
        const e = b.innerParams.get(t || void 0);
        if (e.showLoaderOnDeny && kt(N()),
        e.preDeny) {
            b.awaitingPromise.set(t || void 0, !0);
            const o = Promise.resolve().then(()=>k(e.preDeny(n, e.validationMessage)));
            o.then(e=>{
                !1 === e ? t.hideLoading() : t.closePopup({
                    isDenied: !0,
                    value: void 0 === e ? n : e
                })
            }
            ).catch(e=>Ot(t || void 0, e))
        } else
            t.closePopup({
                isDenied: !0,
                value: n
            })
    }
      , Lt = (e,t)=>{
        e.closePopup({
            isConfirmed: !0,
            value: t
        })
    }
      , Ot = (e,t)=>{
        e.rejectPromise(t)
    }
      , jt = (t,n)=>{
        const e = b.innerParams.get(t || void 0);
        if (e.showLoaderOnConfirm && kt(),
        e.preConfirm) {
            t.resetValidationMessage(),
            b.awaitingPromise.set(t || void 0, !0);
            const o = Promise.resolve().then(()=>k(e.preConfirm(n, e.validationMessage)));
            o.then(e=>{
                se(q()) || !1 === e ? t.hideLoading() : Lt(t, void 0 === e ? n : e)
            }
            ).catch(e=>Ot(t || void 0, e))
        } else
            Lt(t, n)
    }
      , Mt = (n,e,o)=>{
        e.popup.onclick = ()=>{
            var e, t = b.innerParams.get(n);
            t && ((e = t).showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || t.timer || t.input) || o($e.close)
        }
    }
    ;
    let Dt = !1;
    const It = t=>{
        t.popup.onmousedown = ()=>{
            t.container.onmouseup = function(e) {
                t.container.onmouseup = void 0,
                e.target === t.container && (Dt = !0)
            }
        }
    }
      , Ht = t=>{
        t.container.onmousedown = ()=>{
            t.popup.onmouseup = function(e) {
                t.popup.onmouseup = void 0,
                e.target !== t.popup && !t.popup.contains(e.target) || (Dt = !0)
            }
        }
    }
      , qt = (n,o,i)=>{
        o.container.onclick = e=>{
            var t = b.innerParams.get(n);
            Dt ? Dt = !1 : e.target === o.container && w(t.allowOutsideClick) && i($e.backdrop)
        }
    }
    ;
    const Vt = ()=>V() && V().click();
    const Nt = (e,t,n)=>{
        const o = K();
        if (o.length)
            return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1),
            o[t].focus();
        g().focus()
    }
      , Rt = ["ArrowRight", "ArrowDown"]
      , Ft = ["ArrowLeft", "ArrowUp"]
      , Ut = (e,n,o)=>{
        var i = b.innerParams.get(e);
        if (i)
            if (i.stopKeydownPropagation && n.stopPropagation(),
            "Enter" === n.key)
                e = e,
                a = n,
                t = i,
                w(t.allowEnterKey) && !a.isComposing && a.target && e.getInput() && a.target.outerHTML === e.getInput().outerHTML && (["textarea", "file"].includes(t.input) || (Vt(),
                a.preventDefault()));
            else if ("Tab" !== n.key) {
                if ([...Rt, ...Ft].includes(n.key)) {
                    e = n.key;
                    const s = V()
                      , c = N()
                      , d = F();
                    if ([s, c, d].includes(document.activeElement)) {
                        var t = Rt.includes(e) ? "nextElementSibling" : "previousElementSibling";
                        const l = document.activeElement[t];
                        l instanceof HTMLElement && l.focus()
                    }
                } else if ("Escape" === n.key) {
                    var a = n
                      , e = i;
                    if (w(e.allowEscapeKey)) {
                        a.preventDefault();
                        o($e.esc)
                    }
                }
            } else {
                e = n;
                o = i;
                var u = e.target
                  , r = K();
                let t = -1;
                for (let e = 0; e < r.length; e++)
                    if (u === r[e]) {
                        t = e;
                        break
                    }
                e.shiftKey ? Nt(o, t, -1) : Nt(o, t, 1);
                e.stopPropagation(),
                e.preventDefault()
            }
    }
      , Wt = e=>"object" == typeof e && e.jquery
      , zt = e=>e instanceof Element || Wt(e);
    const _t = ()=>{
        if (f.timeout) {
            {
                const n = z();
                var e = parseInt(window.getComputedStyle(n).width)
                  , t = (n.style.removeProperty("transition"),
                n.style.width = "100%",
                parseInt(window.getComputedStyle(n).width))
                  , e = e / t * 100;
                n.style.removeProperty("transition"),
                n.style.width = "".concat(e, "%")
            }
            return f.timeout.stop()
        }
    }
      , Kt = ()=>{
        var e;
        if (f.timeout)
            return e = f.timeout.start(),
            J(e),
            e
    }
    ;
    let Yt = !1;
    const Zt = {};
    const Jt = t=>{
        for (let e = t.target; e && e !== document; e = e.parentNode)
            for (const o in Zt) {
                var n = e.getAttribute(o);
                if (n)
                    return void Zt[o].fire({
                        template: n
                    })
            }
    }
    ;
    e = Object.freeze({
        isValidParameter: B,
        isUpdatableParameter: x,
        isDeprecatedParameter: E,
        argsToParams: n=>{
            const o = {};
            return "object" != typeof n[0] || zt(n[0]) ? ["title", "html", "icon"].forEach((e,t)=>{
                t = n[t];
                "string" == typeof t || zt(t) ? o[e] = t : void 0 !== t && y("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(typeof t))
            }
            ) : Object.assign(o, n[0]),
            o
        }
        ,
        isVisible: ()=>se(g()),
        clickConfirm: Vt,
        clickDeny: ()=>N() && N().click(),
        clickCancel: ()=>F() && F().click(),
        getContainer: m,
        getPopup: g,
        getTitle: M,
        getHtmlContainer: D,
        getImage: I,
        getIcon: j,
        getInputLabel: ()=>O(p["input-label"]),
        getCloseButton: _,
        getActions: U,
        getConfirmButton: V,
        getDenyButton: N,
        getCancelButton: F,
        getLoader: R,
        getFooter: W,
        getTimerProgressBar: z,
        getFocusableElements: K,
        getValidationMessage: q,
        isLoading: ()=>g().hasAttribute("data-loading"),
        fire: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return new this(...t)
        },
        mixin: function(n) {
            class e extends this {
                _main(e, t) {
                    return super._main(e, Object.assign({}, n, t))
                }
            }
            return e
        },
        showLoading: kt,
        enableLoading: kt,
        getTimerLeft: ()=>f.timeout && f.timeout.getTimerLeft(),
        stopTimer: _t,
        resumeTimer: Kt,
        toggleTimer: ()=>{
            var e = f.timeout;
            return e && (e.running ? _t : Kt)()
        }
        ,
        increaseTimer: e=>{
            if (f.timeout)
                return e = f.timeout.increase(e),
                J(e, !0),
                e
        }
        ,
        isTimerRunning: ()=>f.timeout && f.timeout.isRunning(),
        bindClickHandler: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
            Zt[e] = this,
            Yt || (document.body.addEventListener("click", Jt),
            Yt = !0)
        }
    });
    function Xt() {
        var e, t = b.innerParams.get(this);
        if (t) {
            const n = b.domCache.get(this);
            h(n.loader),
            Z() ? t.icon && d(j()) : (t = n,
            (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? d(e[0], "inline-block") : ce() && h(t.actions)),
            ne([n.popup, n.actions], p.loading),
            n.popup.removeAttribute("aria-busy"),
            n.popup.removeAttribute("data-loading"),
            n.confirmButton.disabled = !1,
            n.denyButton.disabled = !1,
            n.cancelButton.disabled = !1
        }
    }
    var $t = {
        swalPromiseResolve: new WeakMap,
        swalPromiseReject: new WeakMap
    };
    function Gt(e, t, n, o) {
        Z() ? nn(e, o) : (ge(n).then(()=>nn(e, o)),
        f.keydownTarget.removeEventListener("keydown", f.keydownHandler, {
            capture: f.keydownListenerCapture
        }),
        f.keydownHandlerAdded = !1),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        t.innerHTML = "") : t.remove(),
        Y() && (mt(),
        ft(),
        Qe()),
        ne([document.documentElement, document.body], [p.shown, p["height-auto"], p["no-backdrop"], p["toast-shown"]])
    }
    function Qt(e) {
        e = void 0 !== (n = e) ? Object.assign({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, n) : {
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !0
        };
        const t = $t.swalPromiseResolve.get(this);
        var n = (e=>{
            const t = g();
            if (!t)
                return false;
            const n = b.innerParams.get(e);
            if (!n || $(t, n.hideClass.popup))
                return false;
            ne(t, n.showClass.popup),
            u(t, n.hideClass.popup);
            const o = m();
            return ne(o, n.showClass.backdrop),
            u(o, n.hideClass.backdrop),
            tn(e, t, n),
            true
        }
        )(this);
        this.isAwaitingPromise() ? e.isDismissed || (en(this),
        t(e)) : n && t(e)
    }
    const en = e=>{
        e.isAwaitingPromise() && (b.awaitingPromise.delete(e),
        b.innerParams.get(e) || e._destroy())
    }
      , tn = (e,t,n)=>{
        var o, i, a, r = m(), s = Pe && ue(t);
        "function" == typeof n.willClose && n.willClose(t),
        s ? (s = e,
        o = t,
        t = r,
        i = n.returnFocus,
        a = n.didClose,
        f.swalCloseEventFinishedCallback = Gt.bind(null, s, t, i, a),
        o.addEventListener(Pe, function(e) {
            e.target === o && (f.swalCloseEventFinishedCallback(),
            delete f.swalCloseEventFinishedCallback)
        })) : Gt(e, r, n.returnFocus, n.didClose)
    }
      , nn = (e,t)=>{
        setTimeout(()=>{
            "function" == typeof t && t.bind(e.params)(),
            e._destroy()
        }
        )
    }
    ;
    function on(e, t, n) {
        const o = b.domCache.get(e);
        t.forEach(e=>{
            o[e].disabled = n
        }
        )
    }
    function an(e, t) {
        if (!e)
            return !1;
        if ("radio" === e.type) {
            const n = e.parentNode.parentNode
              , o = n.querySelectorAll("input");
            for (let e = 0; e < o.length; e++)
                o[e].disabled = t
        } else
            e.disabled = t
    }
    const rn = e=>{
        e.isAwaitingPromise() ? (sn(b, e),
        b.awaitingPromise.set(e, !0)) : (sn($t, e),
        sn(b, e))
    }
      , sn = (e,t)=>{
        for (const n in e)
            e[n].delete(t)
    }
    ;
    var cn = Object.freeze({
        hideLoading: Xt,
        disableLoading: Xt,
        getInput: function(e) {
            var t = b.innerParams.get(e || this);
            return (e = b.domCache.get(e || this)) ? Q(e.popup, t.input) : null
        },
        close: Qt,
        isAwaitingPromise: function() {
            return !!b.awaitingPromise.get(this)
        },
        rejectPromise: function(e) {
            const t = $t.swalPromiseReject.get(this);
            en(this),
            t && t(e)
        },
        closePopup: Qt,
        closeModal: Qt,
        closeToast: Qt,
        enableButtons: function() {
            on(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            on(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        },
        enableInput: function() {
            return an(this.getInput(), !1)
        },
        disableInput: function() {
            return an(this.getInput(), !0)
        },
        showValidationMessage: function(e) {
            const t = b.domCache.get(this);
            var n = b.innerParams.get(this);
            l(t.validationMessage, e),
            t.validationMessage.className = p["validation-message"],
            n.customClass && n.customClass.validationMessage && u(t.validationMessage, n.customClass.validationMessage),
            d(t.validationMessage);
            const o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0),
            o.setAttribute("aria-describedby", p["validation-message"]),
            ee(o),
            u(o, p.inputerror))
        },
        resetValidationMessage: function() {
            var e = b.domCache.get(this);
            e.validationMessage && h(e.validationMessage);
            const t = this.getInput();
            t && (t.removeAttribute("aria-invalid"),
            t.removeAttribute("aria-describedby"),
            ne(t, p.inputerror))
        },
        getProgressSteps: function() {
            return b.domCache.get(this).progressSteps
        },
        update: function(e) {
            var t = g()
              , n = b.innerParams.get(this);
            if (!t || $(t, n.hideClass.popup))
                return a("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            t = (t=>{
                const n = {};
                return Object.keys(t).forEach(e=>{
                    if (x(e))
                        n[e] = t[e];
                    else
                        a('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
                }
                ),
                n
            }
            )(e),
            n = Object.assign({}, n, t),
            Xe(this, n),
            b.innerParams.set(this, n),
            Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, e),
                    writable: !1,
                    enumerable: !0
                }
            })
        },
        _destroy: function() {
            var e = b.domCache.get(this);
            const t = b.innerParams.get(this);
            t ? (e.popup && f.swalCloseEventFinishedCallback && (f.swalCloseEventFinishedCallback(),
            delete f.swalCloseEventFinishedCallback),
            f.deferDisposalTimer && (clearTimeout(f.deferDisposalTimer),
            delete f.deferDisposalTimer),
            "function" == typeof t.didDestroy && t.didDestroy(),
            e = this,
            rn(e),
            delete e.params,
            delete f.keydownHandler,
            delete f.keydownTarget,
            delete f.currentInstance) : rn(this)
        }
    });
    let ln;
    class un {
        constructor() {
            if ("undefined" != typeof window) {
                ln = this;
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var o = Object.freeze(this.constructor.argsToParams(t))
                  , o = (Object.defineProperties(this, {
                    params: {
                        value: o,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                }),
                this._main(this.params));
                b.promise.set(this, o)
            }
        }
        _main(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
              , e = (T(Object.assign({}, t, e)),
            f.currentInstance && (f.currentInstance._destroy(),
            Y() && Qe()),
            f.currentInstance = this,
            pn(e, t))
              , t = (ut(e),
            Object.freeze(e),
            f.timeout && (f.timeout.stop(),
            delete f.timeout),
            clearTimeout(f.restoreFocusTimeout),
            mn(this));
            return Xe(this, e),
            b.innerParams.set(this, e),
            dn(this, t, e)
        }
        then(e) {
            const t = b.promise.get(this);
            return t.then(e)
        }
        finally(e) {
            const t = b.promise.get(this);
            return t.finally(e)
        }
    }
    const dn = (l,u,d)=>new Promise((e,t)=>{
        const n = e=>{
            l.closePopup({
                isDismissed: !0,
                dismiss: e
            })
        }
        ;
        var o, i, a;
        $t.swalPromiseResolve.set(l, e),
        $t.swalPromiseReject.set(l, t),
        u.confirmButton.onclick = ()=>{
            var e = l
              , t = b.innerParams.get(e);
            e.disableButtons(),
            t.input ? Tt(e, "confirm") : jt(e, !0)
        }
        ,
        u.denyButton.onclick = ()=>{
            var e = l
              , t = b.innerParams.get(e);
            e.disableButtons(),
            t.returnInputValueOnDeny ? Tt(e, "deny") : St(e, !1)
        }
        ,
        u.cancelButton.onclick = ()=>{
            var e = l
              , t = n;
            e.disableButtons(),
            t($e.cancel)
        }
        ,
        u.closeButton.onclick = ()=>n($e.close),
        e = l,
        t = u,
        a = n,
        b.innerParams.get(e).toast ? Mt(e, t, a) : (It(t),
        Ht(t),
        qt(e, t, a)),
        o = l,
        e = f,
        t = d,
        i = n,
        e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
            capture: e.keydownListenerCapture
        }),
        e.keydownHandlerAdded = !1),
        t.toast || (e.keydownHandler = e=>Ut(o, e, i),
        e.keydownTarget = t.keydownListenerCapture ? window : g(),
        e.keydownListenerCapture = t.keydownListenerCapture,
        e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
            capture: e.keydownListenerCapture
        }),
        e.keydownHandlerAdded = !0),
        a = l,
        "select" === (t = d).input || "radio" === t.input ? At(a, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (C(t.inputValue) || A(t.inputValue)) && (kt(V()),
        Pt(a, t));
        {
            var r = d;
            const s = m()
              , c = g();
            "function" == typeof r.willOpen && r.willOpen(c),
            e = window.getComputedStyle(document.body).overflowY,
            Ct(s, c, r),
            setTimeout(()=>{
                yt(s, c)
            }
            , bt),
            Y() && (wt(s, r.scrollbarPadding, e),
            Ge()),
            Z() || f.previousActiveElement || (f.previousActiveElement = document.activeElement),
            "function" == typeof r.didOpen && setTimeout(()=>r.didOpen(c)),
            ne(s, p["no-transition"])
        }
        gn(f, d, n),
        hn(u, d),
        setTimeout(()=>{
            u.container.scrollTop = 0
        }
        )
    }
    )
      , pn = (e,t)=>{
        var n = (e=>{
            e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
            if (!e)
                return {};
            e = e.content,
            st(e),
            e = Object.assign(tt(e), nt(e), ot(e), it(e), at(e), rt(e, et));
            return e
        }
        )(e);
        const o = Object.assign({}, i, t, n, e);
        return o.showClass = Object.assign({}, i.showClass, o.showClass),
        o.hideClass = Object.assign({}, i.hideClass, o.hideClass),
        o
    }
      , mn = e=>{
        var t = {
            popup: g(),
            container: m(),
            actions: U(),
            confirmButton: V(),
            denyButton: N(),
            cancelButton: F(),
            loader: R(),
            closeButton: _(),
            validationMessage: q(),
            progressSteps: H()
        };
        return b.domCache.set(e, t),
        t
    }
      , gn = (e,t,n)=>{
        var o = z();
        h(o),
        t.timer && (e.timeout = new dt(()=>{
            n("timer"),
            delete e.timeout
        }
        ,t.timer),
        t.timerProgressBar && (d(o),
        setTimeout(()=>{
            e.timeout && e.timeout.running && J(t.timer)
        }
        )))
    }
      , hn = (e,t)=>{
        if (!t.toast)
            return w(t.allowEnterKey) ? void (fn(e, t) || Nt(t, -1, 1)) : bn()
    }
      , fn = (e,t)=>t.focusDeny && se(e.denyButton) ? (e.denyButton.focus(),
    !0) : t.focusCancel && se(e.cancelButton) ? (e.cancelButton.focus(),
    !0) : !(!t.focusConfirm || !se(e.confirmButton)) && (e.confirmButton.focus(),
    !0)
      , bn = ()=>{
        document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
    }
      , vn = (Object.assign(un.prototype, cn),
    Object.assign(un, e),
    Object.keys(cn).forEach(e=>{
        un[e] = function() {
            if (ln)
                return ln[e](...arguments)
        }
    }
    ),
    un.DismissReason = $e,
    un.version = "11.3.10",
    un);
    return vn.default = vn,
    vn
}),
void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n),
    n.styleSheet)
        n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
        try {
            n.innerHTML = t
        } catch (e) {
            n.innerText = t
        }
}(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

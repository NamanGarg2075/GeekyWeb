if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
  
  (function(funcName, baseObj) {
    "use strict";
  
    // The public function name defaults to window.docReady
    // but you can modify the last line of this function to pass in a different object or method name
    // if you want to put them in a different namespace and those will be used instead of 
    // window.docReady(...)
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
    
    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
      if (!readyFired) {
  
        // this must be set to true before we start calling callbacks
        readyFired = true;
        for (var i = 0; i < readyList.length; i++) {
  
          // if a callback here happens to add new ready handlers,
          // the docReady() function will see that it already fired
          // and will schedule the callback to run right after
          // this event loop finishes so all handlers will still execute
          // in order and no new ones will be added to the readyList
          // while we are processing the list
          readyList[i].fn.call(window, readyList[i].ctx);
        }
  
        // allow any closures held by these functions to free
        readyList = [];
      }
    }
    
    function readyStateChange() {
      if ( document.readyState === "complete" ) {
        ready();
      }
    }
    
    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
      if (typeof callback !== "function") {
        throw new TypeError("callback for docReady(fn) must be a function");
      }
  
      // if ready has already fired, then just schedule the callback
      // to fire asynchronously, but right away
      if (readyFired) {
        setTimeout(function() {callback(context);}, 1);
        return;
      } else {
  
        // add the function and context to the list
        readyList.push({fn: callback, ctx: context});
      }
  
      // if document already ready to go, schedule the ready function to run
      // IE only safe when readyState is "complete", others safe when readyState is "interactive"
      if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
        setTimeout(ready, 1);
      } else if (!readyEventHandlersInstalled) {
  
        // otherwise if we don't have event handlers installed, install them
        if (document.addEventListener) {
  
          // first choice is DOMContentLoaded event
          document.addEventListener("DOMContentLoaded", ready, false);
  
          // backup is window load event
          window.addEventListener("load", ready, false);
        } else {
  
          // must be IE
          document.attachEvent("onreadystatechange", readyStateChange);
          window.attachEvent("onload", ready);
        }
        readyEventHandlersInstalled = true;
      }
    }
  })("__sharethis__docReady", window);
  
  // Document.querySelectorAll method
  // http://ajaxian.com/archives/creating-a-queryselector-for-ie-that-runs-at-native-speed
  // Needed for: IE7-
  if (!document.querySelectorAll) {
    document.querySelectorAll = function(selectors) {
      var style = document.createElement('style'), elements = [], element;
      document.documentElement.firstChild.appendChild(style);
      document._qsa = [];
  
      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
      window.scrollBy(0, 0);
      style.parentNode.removeChild(style);
  
      while (document._qsa.length) {
        element = document._qsa.shift();
        element.style.removeAttribute('x-qsa');
        elements.push(element);
      }
      document._qsa = null;
      return elements;
    };
  }
  
  // Document.querySelector method
  // Needed for: IE7-
  if (!document.querySelector) {
      document.querySelector = function(selectors) {
          var elements = document.querySelectorAll(selectors);
          return (elements.length) ? elements[0] : null;
      };
  }
  
  if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }
  
  Array.prototype.indexOf || (Array.prototype.indexOf = function(d, e) {
    var a;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var c = Object(this);
    var b = c.length >>> 0;
    if (0 === b) return -1;
    a = +e || 0;
    Infinity === Math.abs(a) && (a = 0);
    if (a >= b) return -1;
    for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
      if (a in c && c[a] === d) return a;
      a++;
    }
    return -1
  });
  
  (function() {
    var st,
      indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
  
    if (window.__sharethis__ == null) {
      window.__sharethis__ = {
        v: '6.0.0'
      };
    }
  
    st = window.__sharethis__;
  
    st.METRICS = "https://platform-metrics-api.sharethis.com";
  
    st.API = "https://platform-api.sharethis.com";
  
    st.SECOND = 1000;
  
    st.MINUTE = 60 * st.SECOND;
  
    st.HOUR = 60 * st.MINUTE;
  
    st.DAY = 24 * st.HOUR;
  
    st.WEEK = 7 * st.DAY;
  
    st.BORDER_BOX = "-moz-box-sizing: border-box;\n-webkit-box-sizing: border-box;\nbox-sizing: border-box;";
  
    st.BORDER_RADIUS = function(radius) {
      return "-moz-border-radius: " + (st.px(radius)) + ";\n-webkit-border-radius: " + (st.px(radius)) + ";\nborder-radius: " + (st.px(radius)) + ";";
    };
  
    st.BOX_SHADOW = function(value) {
      return "-moz-box-shadow: " + value + ";\n-webkit-box-shadow: " + value + ";\nbox-shadow: " + value + ";";
    };
  
    st.FLEX = "-moz-flex: 1;\n-ms-flex: 1;\n-webkit-flex: 1;\nflex: 1;";
  
    st.FONT_FAMILY = "font-family: \"Helvetica Neue\", Verdana, Helvetica, Arial, sans-serif;";
  
    st.TRANSFORM = function(value) {
      return "-ms-transform: " + value + ";\n-webkit-transform: " + value + ";\ntransform: " + value + ";";
    };
  
    st.TRANSITION = function(properties, duration) {
      var i, len, property, value;
      if (properties == null) {
        properties = ['all'];
      }
      if (duration == null) {
        duration = '0.2s';
      }
      value = [];
      for (i = 0, len = properties.length; i < len; i++) {
        property = properties[i];
        value.push(property + " " + duration + " ease-in");
      }
      value = value.join(', ');
      return "-moz-transition: " + value + "; -ms-transition: " + value + "; -o-transition: " + value + "; -webkit-transition: " + value + "; transition: " + value + ";";
    };
  
    st._uid = 0;
  
    st.uid = function() {
      return ++st._uid;
    };
  
    st.cache = {};
  
    st.get = function(key) {
      return st.cache[key];
    };
  
    st.set = function(key, val) {
      return st.cache[key] = val;
    };
  
    st.has = function(key) {
      return st.cache[key] != null;
    };
  
    st.addClass = function($el, names) {
      var current, i, len, name;
      current = ($el.className || '').split(' ');
      if (typeof names === 'string') {
        names = [names];
      }
      for (i = 0, len = names.length; i < len; i++) {
        name = names[i];
        if ((name != null) && indexOf.call(current, name) < 0) {
          current.push(name);
        }
      }
      return $el.className = current.join(' ');
    };
  
    st.addEventListener = function($el, event, callback) {
      if (!($el && event && callback)) {
        return;
      }
      if ($el.addEventListener) {
        return $el.addEventListener(event, callback, false);
      } else if ($el.attachEvent) {
        return $el.attachEvent("on" + event, callback);
      } else {
        return $el["on" + event] = callback;
      }
    };
  
    st.capitalize = function(str) {
      return "" + (str.charAt(0).toUpperCase()) + (str.substring(1).toLowerCase());
    };
  
    st.copy = function() {
      var selection;
      selection = typeof window.getSelection === "function" ? window.getSelection() : void 0;
      if (!selection || selection.isCollapsed) {
        return;
      }
      selection = selection.toString();
      if (selection.length > 500) {
        selection = selection.slice(0, 497) + "...";
      }
      if (selection.length > 0) {
        return st.log({
          copy_text: selection,
          destinations: "copy",
          event: 'share',
          url: st.href
        });
      }
    };
  
    st.close = function($el) {
      st.removeClass(document.body, 'st-body-no-scroll');
      if (!$el) {
        return;
      }
      st.addClass($el, 'st-hidden');
      return setTimeout((function() {
        return st.remove($el);
      }), 200);
    };
  
    st.css = function(css) {
      var head, s;
      head = document.getElementsByTagName('head')[0];
      s = document.createElement('style');
      s.setAttribute('type', 'text/css');
      if (s.styleSheet) {
        s.styleSheet.cssText = css;
      } else {
        s.appendChild(document.createTextNode(css));
      }
      return head.appendChild(s);
    };
  
    st.ecommerce = function() {
      var ecommerce, has_ldjson, has_og, has_price;
      has_ldjson = st.meta["@type"] === "Product";
      has_og = st.meta["og:type"] === "product";
      has_price = st.getMeta(['og:price:amount', 'price', 'product:price:amount']);
      if (has_ldjson || has_og || has_price) {
        ecommerce = JSON.stringify(st.omit({
          availability: st.getMeta(["og:availability", "product:availability", "availability"]),
          brand: st.getMeta(["brand", "og:site_name"]),
          category: st.getMeta(["category"]),
          currency: st.getMeta(["og:price:currency", "product:price:currency", "priceCurrency"]),
          description: st.getMeta(["og:description", "twitter:description", "description"]),
          image: st.getMeta(["og:image:secure_url", "og:image", "twitter:image"]),
          mpn: st.getMeta(["mpn"]),
          name: st.getMeta(["og:title", "twitter:title", "name"]),
          price: st.getMeta(["og:price:amount", "product:price:amount", "price"]),
          rating: st.getMeta(["og:rating", "ratingValue"]),
          reviews: st.getMeta(["reviewCount", "ratingCount"]),
          sku: st.getMeta(["sku"])
        }));
        st.log({
          event: 'ecommerce_pview',
          ecommerce: ecommerce
        });
        st.addEventListener(document, "click", function(e) {
          var classes, cls, config, event, href, i, len;
          if (!(e != null ? e.target : void 0)) {
            return true;
          }
          if (e.target.tagName === "A") {
            href = e.target.getAttribute('href') || '';
            if (new RegExp("/cart$").test(href)) {
              st.log({
                event: "view_cart",
                ecommerce: ecommerce
              });
              return true;
            }
          }
          config = {
            add_to_cart: ["add_to_cart", "add-to-cart", "addtocart"],
            add_to_wishlist: ["save-for-later", "wishlist"],
            buy: ["payment-button"]
          };
          for (event in config) {
            classes = config[event];
            for (i = 0, len = classes.length; i < len; i++) {
              cls = classes[i];
              if (st.hasClassOrId(e.target, cls)) {
                st.log({
                  event: event,
                  ecommerce: ecommerce
                });
                return true;
              }
            }
          }
          return true;
        });
      }
      return true;
    };
  
    st.emit = function(event, data) {
      var handler, i, len, ref, ref1, results;
      ref1 = ((ref = st.handlers) != null ? ref[event] : void 0) || [];
      results = [];
      for (i = 0, len = ref1.length; i < len; i++) {
        handler = ref1[i];
        results.push(handler(data));
      }
      return results;
    };
  
    st.formatNumber = function(value) {
      if (value > 1000000) {
        return (Math.round(10 * (value / 1000000)) / 10) + "m";
      }
      if (value > 100000) {
        return (Math.round(value / 1000)) + "k";
      }
      if (value > 1000) {
        return (Math.round(10 * (value / 1000)) / 10) + "k";
      }
      return "" + value;
    };
  
    st.getCookie = function(name) {
      var values;
      values = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
      if (values) {
        return values.pop();
      }
      return null;
    };
  
    st.getDescription = function() {
      return st.getMeta(['og:description', 'twitter:description', 'description', 'Description']);
    };
  
    st.getImage = function() {
      return st.getMeta(['og:image:secure_url', 'og:image', 'twitter:image']);
    };
  
    st.getMeta = function(types) {
      var i, len, type;
      for (i = 0, len = types.length; i < len; i++) {
        type = types[i];
        if ((st.meta[type] != null) && typeof st.meta[type] !== 'object') {
          return "" + st.meta[type];
        }
      }
      return '';
    };
  
    st.getScrollbarWidth = function() {
      var inner, outer, scrollbar_width;
      outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.msOverflowStyle = 'scrollbar';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);
      inner = document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);
      scrollbar_width = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      return scrollbar_width;
    };
  
    st.getScrollDepth = function() {
      var body, body_height, de, depth, percentage, window_height;
      de = document.documentElement;
      body = document.body;
      body_height = Math.max.apply(Math, [body.scrollHeight || 0, body.offsetHeight || 0, de.clientHeight || 0, de.scrollHeight || 0, de.offsetHeight || 0]);
      window_height = st.getWindowSize().height;
      depth = window.pageYOffset || (de || body.parentNode || body).scrollTop;
      percentage = Math.floor(100 * (window_height + depth) / body_height);
      return percentage;
    };
  
    st.getShareLabel = function(network, language) {
      var value;
      if (language == null) {
        language = 'en';
      }
      value = '';
      switch (network) {
        case 'blm':
          value = st.i18n['Support BLM'][language];
          break;
        case 'email':
          value = st.i18n['email'][language];
          break;
        case 'gmail':
          value = st.i18n['gmail'][language];
          break;
        case 'flipboard':
          value = st.i18n['flip'][language];
          break;
        case 'googlebookmarks':
          value = st.i18n['bookmark'][language];
          break;
        case 'pinterest':
          value = st.i18n['pin'][language];
          break;
        case 'print':
          value = st.i18n['print'][language];
          break;
        case 'snapchat':
          value = st.i18n['snapchat'][language];
          break;
        case 'twitter':
          value = st.i18n['tweet'][language];
          break;
        case 'yahoomail':
          value = st.i18n['email'][language];
          break;
        default:
          value = st.i18n['share'][language];
      }
      if (network === 'blm') {
        return value;
      }
      return st.capitalize(value);
    };
  
    st.getTitle = function() {
      return st.getMeta(['og:title', 'twitter:title']) || document.title;
    };
  
    st.getQuerystring = function(url) {
      var a;
      a = document.createElement('a');
      a.setAttribute('href', url);
      return a.search;
    };
  
    st.getWindowSize = function() {
      var body, documentElement, innerHeight, innerWidth;
      body = document.body, documentElement = document.documentElement;
      innerHeight = window.innerHeight, innerWidth = window.innerWidth;
      return {
        height: innerHeight || documentElement.clientHeight || body.clientHeight,
        width: innerWidth || documentElement.clientWidth || body.clientWidth
      };
    };
  
    st.hasClass = function($el, name) {
      var re;
      re = new RegExp(name);
      return re.test(($el.className || '').toLowerCase());
    };
  
    st.hasClassOrId = function($el, name) {
      var i, len, re, ref, str;
      re = new RegExp(name);
      ref = [$el.className, $el.id];
      for (i = 0, len = ref.length; i < len; i++) {
        str = ref[i];
        if (typeof str !== 'string') {
          continue;
        }
        if (re.test((str || '').toLowerCase())) {
          return true;
        }
      }
      return false;
    };
  
    st.hasCookies = (function() {
      var has_cookies, key;
      key = '__sharethis_cookie_test__';
      document.cookie = key + "=1;";
      has_cookies = document.cookie.indexOf(key) > -1;
      document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      return has_cookies;
    })();
  
    st.hasLocalStorage = (function() {
      var key;
      key = '__sharethis_local_storage_test__';
      try {
        localStorage.setItem(key, 'hello world');
        localStorage.removeItem(key);
        return true;
      } catch (error1) {
        return false;
      }
    })();
  
    st.hem = function(data) {
      var params;
      st._hem = data;
      if ((data == null) || (data.sha1 == null) || (data.sha256 == null) || (data.md5 == null)) {
        return 'Not valid data input';
      }
      params = {
        hem_sha1: data.sha1,
        hem_sha256: data.sha256,
        hem_md5: data.md5
      };
      st.send("https://sync.sharethis.com/powr/hem?" + st.qs(params));
    };
  
    st.hostname = function(url) {
      var a;
      if (url == null) {
        url = st.href;
      }
      a = document.createElement('a');
      a.setAttribute('href', url);
      return a.hostname;
    };
  
    st.ibl = function() {
      var blacklist, domain, hostname, href, i, len, protocol;
      href = document.referrer;
      if (href) {
        hostname = st.hostname(href) || '';
        protocol = st.protocol(href) || '';
        if (protocol === 'android-app:') {
          return true;
        }
        blacklist = ['aol', 'bing', 'bs.to', 'facebook', 'google', 'yahoo', 'yandex', document.location.hostname];
        for (i = 0, len = blacklist.length; i < len; i++) {
          domain = blacklist[i];
          if (hostname.indexOf(domain) > -1) {
            return true;
          }
        }
        st.log({
          event: 'ibl',
          title: "",
          url: href
        });
      }
      return true;
    };
  
    st.img = function(name) {
      var alt;
      if (!name) {
        return;
      }
      alt = (name.replace('.svg', '').replace('.png', '')) + " sharing button";
      return "<img alt='" + alt + "' src='https://platform-cdn.sharethis.com/img/" + name + "' />";
    };
  
    st.incLocalStorageShares = function(network, count_url) {
      var all_counts, network_count, ref, ref1, ref2, ref3, ref4, ref5, total;
      all_counts = st.storage.get("st_shares_" + count_url);
      if (all_counts) {
        network_count = (((ref = all_counts[network]) != null ? ref.value : void 0) + 1) || 0;
        total = (((ref1 = all_counts["total"]) != null ? ref1.value : void 0) + 1) || 0;
        if ((ref2 = all_counts[network]) != null) {
          ref2.value = network_count;
        }
        if ((ref3 = all_counts[network]) != null) {
          ref3.label = st.formatNumber(network_count);
        }
        if ((ref4 = all_counts["total"]) != null) {
          ref4.value = total;
        }
        if ((ref5 = all_counts["total"]) != null) {
          ref5.label = st.formatNumber(total);
        }
        all_counts["update_time"] = Math.round(new Date() / 1000);
        return st.storage.set("st_shares_" + count_url, all_counts);
      }
    };
  
    st.inc = function($el) {
      var value;
      value = st.parseNumber($el.innerText);
      $el.innerText = st.formatNumber(value + 1);
      st.addClass($el, 'st-grow');
      return setTimeout((function() {
        return st.removeClass($el, 'st-grow');
      }), 400);
    };
  
    st.isEnter = function(e) {
      return e.which === 13 || e.keyCode === 13;
    };
  
    st.isEsc = function(e) {
      var ref;
      return ((ref = e.key) === 'Escape' || ref === 'Esc') || e.keyCode === 27;
    };
  
    st.isValidEmail = function(email) {
      var re;
      re = /[^\.\s@][^\s@]*(?!\.)@[^\.\s@]+(?:\.[^\.\s@]+)*/;
      return re.test(email);
    };
  
    st.js = function(url, id) {
      var $el, first;
      $el = document.createElement('script');
      $el.async = 1;
      $el.src = url;
      if (id) {
        $el.id = id;
      }
      first = document.getElementsByTagName('script')[0];
      return first.parentNode.insertBefore($el, first);
    };
  
    st.ldjson = (function() {
      var el, i, item, len, raw;
      el = document.querySelector('script[type="application/ld+json"]');
      if (el) {
        try {
          raw = JSON.parse(el.innerText);
          if (!Array.isArray(raw)) {
            raw = [raw];
          }
          for (i = 0, len = raw.length; i < len; i++) {
            item = raw[i];
            if (item["@type"] === "Product") {
              if (item.offers && !Array.isArray(item.offers)) {
                item.offers = [item.offers];
              }
              if (item.brand) {
                item.brand = item.brand.name || item.brand;
              }
              if (item.category && Array.isArray(item.category)) {
                item.category = item.category.join(";");
              }
              return item;
            }
          }
          return null;
        } catch (error1) {
  
        }
      }
      return null;
    })();
  
    st.loadPixel = function() {
      var domain, rnd, src;
      domain = window.location.hostname;
      rnd = (new Date()).getTime();
      src = "https://t.sharethis.com/1/d/t.dhj?" + st.qs({
        cid: 'c010',
        cls: 'B',
        dmn: domain,
        gdpr_consent: st.gdpr_consent,
        gdpr_domain: st.gdpr_consent && st.gdpr_domain,
        rnd: rnd
      });
      return st.js(src, 'pxscrpt');
    };
  
    if (st.loader == null) {
      st.loader = {};
    }
  
    st.load = function(product, config) {
      var base;
      return typeof (base = st.loader)[product] === "function" ? base[product](config) : void 0;
    };
  
    if (st.load_counts_cache == null) {
      st.load_counts_cache = {};
    }
  
    st.loadCounts = function(options, next) {
      var base, ourl, ref, ref1, ref2;
      if (!next) {
        ref = [{}, options], options = ref[0], next = ref[1];
      }
      if (options.url == null) {
        options.url = st.href;
      }
      ourl = options.url;
      if ((base = st.load_counts_cache)[ourl] == null) {
        base[ourl] = {
          callbacks: [next],
          response: null,
          status: 'init'
        };
      }
      if (((ref1 = st.load_counts_cache[ourl]) != null ? ref1.status : void 0) === 'complete') {
        return next(st.load_counts_cache[ourl].response);
      }
      if (((ref2 = st.load_counts_cache[ourl]) != null ? ref2.status : void 0) === 'in-progress') {
        return st.load_counts_cache[ourl].callbacks.push(next);
      }
      st.load_counts_cache[ourl].status = 'in-progress';
      return st.js("https://count-server.sharethis.com/v2.0/get_counts?" + st.qs({
        cb: "window.__sharethis__.cb",
        url: ourl
      }));
    };
  
    st.cb = function(resp) {
      var callback, clicks, counts, i, j, len, len1, local_count, network, ourl, reaction, reactions, ref, ref1, shares, total, update_time, value;
      if (resp == null) {
        resp = {};
      }
      clicks = resp.clicks, ourl = resp.ourl, reactions = resp.reactions, shares = resp.shares, total = resp.total, update_time = resp.update_time;
      counts = {};
      for (reaction in st.REACTIONS || {}) {
        value = (reactions != null ? reactions[reaction] : void 0) || 0;
        counts[reaction] = {
          value: value,
          label: st.formatNumber(value)
        };
      }
      ref = st.networks || [];
      for (i = 0, len = ref.length; i < len; i++) {
        network = ref[i];
        value = ((clicks != null ? clicks[network] : void 0) || 0) + ((shares != null ? shares[network] : void 0) || 0);
        counts[network] = {
          value: value,
          label: st.formatNumber(value)
        };
      }
      counts['total'] = {
        value: total,
        label: st.formatNumber(total)
      };
      counts["update_time"] = update_time;
      local_count = st.storage.get("st_shares_" + ourl);
      if (update_time < (local_count != null ? local_count.update_time : void 0)) {
        counts = local_count;
      }
      st.load_counts_cache[ourl].response = counts;
      st.load_counts_cache[ourl].status = 'complete';
      st.storage.set("st_shares_" + ourl, counts);
      ref1 = st.load_counts_cache[ourl].callbacks;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        callback = ref1[j];
        callback(counts);
      }
      return st.load_counts_cache[ourl].callbacks = [];
    };
  
    st.log = function(data, url) {
      var log, ref;
      if (url == null) {
        url = "https://l.sharethis.com/log";
      }
      log = function() {
        data.fcmp = typeof window.__cmp === 'function';
        data.fcmpv2 = typeof window.__tcfapi === 'function';
        data.has_segmentio = typeof (window.analytics && window.analytics.identify) === 'function';
        data.product = st.product;
        data.publisher = st.property;
        data.refDomain = st.hostname(window.document.referrer);
        data.refQuery = st.getQuerystring(window.document.referrer);
        data.source = 'sharethis.js';
        if (data.title == null) {
          data.title = st.getTitle();
        }
        data.ts = Date.now();
        data.sop = true;
        data.cms = st.cms;
        data.gdpr_consent = st.gdpr_consent;
        data.gdpr_domain = st.gdpr_domain;
        data.gdpr_method = st.gdpr_method;
        data.usprivacy = st.usprivacy;
        data.fpestid = st.getCookie("fpestid");
        if (data.description == null) {
          data.description = st.getDescription();
        }
        return st.send(url + "?" + st.qs(data));
      };
      if (st != null ? (ref = st.consent_queue) != null ? ref.initialized : void 0 : void 0) {
        log();
        return;
      }
      if (st.consent_queue == null) {
        st.consent_queue = {
          functions: []
        };
      }
      return st.consent_queue.functions.push(log);
    };
  
    st.logGoogleAnalyticsEvent = function(category, action, label) {
      var _gaq, ga;
      ga = window.ga, _gaq = window._gaq;
      if (ga) {
        return ga('send', 'event', category, action, label);
      } else if (_gaq) {
        return _gaq.push(['_trackEvent', category, action, label]);
      }
    };
  
    st.meta = (function() {
      var el, i, item, j, k, key, len, len1, offer, ref, ref1, ref2, v;
      item = {};
      ref = document.querySelectorAll("meta,[itemprop]");
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        key = el.getAttribute('property') || el.getAttribute('name') || el.getAttribute('itemprop');
        if (key) {
          if (item[key] == null) {
            item[key] = el.getAttribute('content') || el.getAttribute("href") || el.innerText;
          }
        }
      }
      try {
        if (st.ldjson) {
          ref1 = st.ldjson;
          for (k in ref1) {
            v = ref1[k];
            if (item[k] == null) {
              item[k] = v;
            }
          }
          if (st.ldjson.offers) {
            ref2 = st.ldjson.offers;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              offer = ref2[j];
              for (k in offer) {
                v = offer[k];
                if (item[k] == null) {
                  item[k] = v;
                }
              }
            }
          }
        }
      } catch (error1) {
  
      }
      return item;
    })();
  
    st.newElement = function(parent) {
      var $el, id;
      if (parent === void 0) {
        parent = document.body;
      }
      $el = document.createElement('div');
      id = "st-el-" + (st.uid());
      $el.setAttribute('id', id);
      if (parent) {
        parent.appendChild($el);
      }
      return {
        $el: $el,
        id: id
      };
    };
  
    st.obl = function(e) {
      var href, prefix, ref;
      if ((e != null ? (ref = e.target) != null ? ref.tagName : void 0 : void 0) === 'A') {
        href = e.target.getAttribute('href') || '';
        prefix = href.slice(0, href.indexOf(':'));
        if (href.slice(0, 4) === 'http' && e.target.hostname !== document.location.hostname) {
          st.log({
            event: 'obl',
            title: "",
            url: href
          });
        }
      }
      return true;
    };
  
    st.omit = function(obj) {
      var k, res, v;
      res = {};
      for (k in obj) {
        v = obj[k];
        if (v) {
          res[k] = v;
        }
      }
      return res;
    };
  
    st.on = function(event, callback) {
      var base;
      if (st.handlers == null) {
        st.handlers = [];
      }
      if ((base = st.handlers)[event] == null) {
        base[event] = [];
      }
      return st.handlers[event].push(callback);
    };
  
    st.open = function(url) {
      var h, w, wh, ww;
      if (!url) {
        return;
      }
      if (st.mobile) {
        return window.open(url, '_blank');
      } else if (url.indexOf('mailto:') > -1) {
        return document.location = url;
      } else {
        wh = st.getWindowSize().height;
        ww = st.getWindowSize().width;
        h = Math.min(600, .6 * wh);
        w = Math.min(800, .8 * ww);
        return window.open(url, '', ["height=" + h, "left=" + ((ww - w) / 2), "top=" + ((wh - h) / 2), "width=" + w, 'status=1', 'toolbar=0'].join(','));
      }
    };
  
    st.parseNumber = function(value) {
      var multiplier;
      multiplier = 1;
      if (value.indexOf('k') > -1) {
        multiplier = 1000;
      }
      if (value.indexOf('m') > -1) {
        multiplier = 1000000;
      }
      value = value.replace(/[km,]/g, '');
      return multiplier * parseInt(value, 10) || 0;
    };
  
    st.position = function($el, container) {
      var _container, _el;
      if (container == null) {
        container = window;
      }
      _el = $el.getBoundingClientRect();
      if (container === window) {
        return {
          left: _el.left + window.scrollX,
          top: _el.top + window.scrollY
        };
      } else {
        _container = container.getBoundingClientRect();
        return {
          left: _el.left - _container.left + container.scrollLeft,
          top: _el.top - _container.top + container.scrollTop
        };
      }
    };
  
    st.protocol = function(url) {
      var a;
      if (url == null) {
        url = st.href;
      }
      a = document.createElement('a');
      a.setAttribute('href', url);
      return a.protocol;
    };
  
    st.px = function(value) {
      if (typeof value === 'string') {
        return value;
      }
      return (Math.floor(value)) + "px";
    };
  
    st.qs = function(params) {
      var k, v;
      return ((function() {
        var results;
        results = [];
        for (k in params) {
          v = params[k];
          if (v != null) {
            results.push(k + "=" + (encodeURIComponent(v)));
          }
        }
        return results;
      })()).join('&');
    };
  
    st.react = function(arg) {
      var reaction, url;
      reaction = arg.reaction, url = arg.url;
      if (url == null) {
        url = st.href;
      }
      st.logGoogleAnalyticsEvent('ShareThis', reaction, url);
      return st.log({
        event: 'reaction',
        reactionType: reaction,
        url: url
      });
    };
  
    st.remove = function($el) {
      if (!($el != null ? $el.parentNode : void 0)) {
        return;
      }
      return $el.parentNode.removeChild($el);
    };
  
    st.removeClass = function($el, name) {
      return $el.className = $el.className.replace(name, '');
    };
  
    st.removeEventListener = function($el, event, callback) {
      if (!($el && event && callback)) {
        return;
      }
      if ($el.removeEventListener) {
        return $el.removeEventListener(event, callback, false);
      } else if ($el.detachEvent) {
        return $el.detachEvent("on" + event, callback);
      } else {
        return $el["on" + event] = null;
      }
    };
  
    st.send = function(resource, params, next) {
      var img;
      if (params) {
        resource = resource + "?" + (st.qs(params));
      }
      img = new Image(1, 1);
      img.src = resource;
      img.onload = function() {
        return typeof next === "function" ? next(true) : void 0;
      };
      return img.onerror = function() {
        return typeof next === "function" ? next(false) : void 0;
      };
    };
  
    st.setCookie = function(name, value, days) {
      var date, expires;
      if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + (date.toGMTString());
      } else {
        expires = "";
      }
      return document.cookie = name + "=" + value + expires + "; path=/";
    };
  
    st.share = function(config) {
      var count_url, description, hostname, image, is_android, is_ios, message, network, product, redirects, share_url, short_url, subject, title, url, username, wechat;
      if (config == null) {
        config = {};
      }
      count_url = config.count_url, subject = config.subject, share_url = config.share_url, short_url = config.short_url, url = config.url, description = config.description, image = config.image, message = config.message, network = config.network, title = config.title, username = config.username;
      count_url = count_url || url || st.href;
      if (description == null) {
        description = st.getDescription();
      }
      if (image == null) {
        image = st.getImage();
      }
      share_url = share_url || short_url || url || st.href;
      if (title == null) {
        title = st.getTitle();
      }
      if (url == null) {
        url = count_url;
      }
      if (network === 'sharethis') {
        return st.load('share-all', {
          count_url: count_url,
          description: description,
          image: image,
          share_url: share_url,
          short_url: short_url,
          title: title,
          url: url,
          username: username
        });
      }
      st.incLocalStorageShares(network, count_url);
      st.logGoogleAnalyticsEvent('ShareThis', network, count_url);
      st.log({
        destinations: network,
        event: 'share',
        title: title,
        url: count_url
      });
      st.emit('share', {
        count_url: count_url,
        description: description,
        image: image,
        message: message,
        share_url: share_url,
        title: title,
        url: url,
        username: username
      });
      if (network === 'wechat') {
        if (st.mobile) {
          return st.load('share-wechat-mobile', {
            url: share_url
          });
        } else {
          wechat = "https://api.qrserver.com/v1/create-qr-code/?" + st.qs({
            size: "154x154",
            data: share_url
          });
          st.open(wechat);
        }
      }
      if (network === 'print') {
        st.emit('print', {
          count_url: count_url,
          description: description,
          image: image,
          message: message,
          share_url: share_url,
          title: title,
          url: url,
          username: username
        });
        return window.print();
      }
      hostname = document.location.hostname;
      product = st.product;
      is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
      is_android = /Android/i.test(navigator.userAgent);
      redirects = {
        blm: "https://secure.actblue.com/donate/ms_blm_homepage_2019",
        blogger: "https://www.blogger.com/blog-this.g?" + st.qs({
          n: title,
          t: description,
          u: share_url
        }),
        buffer: "https://buffer.com/add?" + st.qs({
          text: title,
          url: share_url
        }),
        diaspora: "https://share.diasporafoundation.org/?" + st.qs({
          title: title,
          url: share_url
        }),
        delicious: "https://del.icio.us/save?" + st.qs({
          provider: 'sharethis',
          title: title,
          url: share_url,
          v: 5
        }),
        digg: "https://digg.com/submit?" + st.qs({
          url: share_url
        }),
        douban: "http://www.douban.com/recommend/?" + st.qs({
          title: title,
          url: share_url
        }),
        email: "mailto:?to=&" + st.qs({
          subject: subject || "I'd like to share a link with you",
          body: message || ("" + url)
        }),
        evernote: "http://www.evernote.com/clip.action?" + st.qs({
          title: title,
          url: share_url
        }),
        facebook: "https://www.facebook.com/sharer.php?" + st.qs({
          t: title,
          u: share_url
        }),
        flipboard: "https://share.flipboard.com/bookmarklet/popout?" + st.qs({
          ext: 'sharethis',
          title: title,
          url: share_url,
          utm_campaign: 'widgets',
          utm_content: hostname,
          utm_source: 'sharethis',
          v: 2
        }),
        getpocket: "https://getpocket.com/edit?" + st.qs({
          url: share_url
        }),
        gmail: "https://mail.google.com/mail/?view=cm&" + st.qs({
          to: '',
          su: title,
          body: share_url,
          bcc: '',
          cc: ''
        }),
        googlebookmarks: "https://www.google.com/bookmarks/mark?" + st.qs({
          op: 'edit',
          bkmk: share_url,
          title: title,
          annotation: description
        }),
        hackernews: "https://news.ycombinator.com/submitlink?" + st.qs({
          u: share_url,
          t: title
        }),
        instapaper: "http://www.instapaper.com/edit?" + st.qs({
          url: share_url,
          title: title,
          description: description
        }),
        line: "https://lineit.line.me/share/ui?" + st.qs({
          url: share_url,
          text: title || description
        }),
        linkedin: "https://www.linkedin.com/shareArticle?" + st.qs({
          title: title,
          url: share_url
        }),
        livejournal: "https://www.livejournal.com/update.bml?" + st.qs({
          event: share_url,
          subject: title
        }),
        mailru: "https://connect.mail.ru/share?" + st.qs({
          share_url: share_url
        }),
        mailru: "https://connect.mail.ru/share?" + st.qs({
          share_url: share_url
        }),
        meneame: "https://meneame.net/submit.php?" + st.qs({
          url: share_url
        }),
        messenger: {
          "true": "fb-messenger://share/?" + st.qs({
            link: share_url,
            app_id: 291494419107518
          }),
          "false": "https://www.facebook.com/dialog/send?" + st.qs({
            link: share_url,
            app_id: 291494419107518,
            redirect_uri: "https://www.sharethis.com"
          })
        }[st.mobile],
        odnoklassniki: "https://connect.ok.ru/dk?" + st.qs({
          'st.cmd': 'WidgetSharePreview',
          'st.shareUrl': share_url
        }),
        pinterest: "https://pinterest.com/pin/create/button/?" + st.qs({
          description: title,
          media: image,
          url: share_url
        }),
        qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + st.qs({
          url: share_url
        }),
        reddit: "https://reddit.com/submit?" + st.qs({
          title: title,
          url: share_url
        }),
        refind: "https://refind.com?" + st.qs({
          url: share_url
        }),
        renren: "http://widget.renren.com/dialog/share?" + st.qs({
          resourceUrl: share_url,
          srcUrl: share_url,
          title: title,
          description: description || title
        }),
        skype: "https://web.skype.com/share?" + st.qs({
          url: share_url,
          text: title
        }),
        sms: "sms:" + (is_ios ? '&' : '?') + "body=" + (encodeURIComponent(share_url)),
        snapchat: "https://snapchat.com/scan?" + st.qs({
          attachmentUrl: share_url,
          utm_source: 'sharethis'
        }),
        surfingbird: "http://surfingbird.ru/share?" + st.qs({
          url: share_url,
          description: description || title,
          title: title
        }),
        telegram: "https://t.me/share/url?" + st.qs({
          url: share_url,
          text: title,
          to: ''
        }),
        threema: "threema://compose?" + st.qs({
          text: share_url,
          id: ''
        }),
        tumblr: "https://www.tumblr.com/share?" + st.qs({
          t: title,
          u: share_url,
          v: 3
        }),
        twitter: "https://twitter.com/intent/tweet?" + st.qs({
          text: title || description,
          url: share_url,
          via: username
        }),
        vk: "https://vk.com/share.php?" + st.qs({
          url: share_url
        }),
        weibo: "http://service.weibo.com/share/share.php?" + st.qs({
          title: title,
          url: share_url,
          pic: image
        }),
        whatsapp: (!st.mobile ? "https://web.whatsapp.com/send?" : "whatsapp://send?") + st.qs({
          text: share_url
        }),
        wordpress: "http://wordpress.com/wp-admin/press-this.php?" + st.qs({
          u: share_url,
          t: title,
          s: description || title,
          i: ''
        }),
        yahoomail: "http://compose.mail.yahoo.com/?" + st.qs({
          to: '',
          subject: title,
          body: share_url
        }),
        xing: "https://www.xing.com/app/user?" + st.qs({
          op: 'share',
          title: title,
          url: share_url
        })
      };
      return st.open(redirects[network]);
    };
  
    st.follow = (function(_this) {
      return function(config) {
        var follow_url, network, url;
        if (config == null) {
          config = {};
        }
        follow_url = config.follow_url, network = config.network, url = config.url;
        if (url == null) {
          url = st.href;
        }
        st.log({
          destinations: network,
          event: 'follow',
          followUrl: follow_url,
          url: url
        });
        return window.open(follow_url, '_blank');
      };
    })(this);
  
    st.storage = {
      get: function(key) {
        if (st.hasLocalStorage) {
          try {
            return JSON.parse(localStorage.getItem(key));
          } catch (error1) {}
        }
        if (st.hasCookies) {
          return st.getCookie(key);
        }
        return st.get(key);
      },
      set: function(key, value) {
        if (st.hasLocalStorage) {
          return localStorage.setItem(key, JSON.stringify(value));
        }
        if (st.hasCookies) {
          return st.setCookie(key, value);
        }
        return st.set(key, value);
      }
    };
  
    st.svg = function(paths, size) {
      var d;
      if (size == null) {
        size = 40;
      }
      if (typeof paths === 'string') {
        paths = [paths];
      }
      return "<svg fill=\"#fff\" preserveAspectRatio=\"xMidYMid meet\" height=\"1em\" width=\"1em\" viewBox=\"0 0 " + size + " " + size + "\">\n  <g>\n    " + (((function() {
        var i, len, results;
        results = [];
        for (i = 0, len = paths.length; i < len; i++) {
          d = paths[i];
          results.push("<path d='" + d + "'></path>");
        }
        return results;
      })()).join('')) + "\n  </g>\n</svg>";
    };
  
    st.toggleClass = function($el, name) {
      if (st.hasClass($el, name)) {
        return st.removeClass($el, name);
      } else {
        return st.addClass($el, name);
      }
    };
  
    st.filterInvalidNetworks = function(networks, valid) {
      var n;
      if (valid == null) {
        valid = st.networks;
      }
      return (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = networks.length; i < len; i++) {
          n = networks[i];
          if (valid.indexOf(n) !== -1) {
            results.push(n);
          }
        }
        return results;
      })();
    };
  
    st.tcfapi_listener = (function() {
      var interval, start;
      start = Date.now();
      return interval = setInterval((function() {
        var e;
        if (window.__tcfapi) {
          try {
            window.__tcfapi("addEventListener", 2, function(data) {
              if ((data != null ? data.eventStatus : void 0) === "useractioncomplete") {
                st.gdpr_consent = data.tcString;
                st.gdpr_domain = data.isServiceSpecific ? document.location.hostname : ".consensu.org";
                st.gdpr_method = "api";
                return st.log({
                  event: "updated_consent",
                  pview_had_consent: st.pview_had_consent
                });
              }
            });
          } catch (error1) {
            e = error1;
          }
          clearInterval(interval);
        }
        if (Date.now() - start > 10000) {
          return clearInterval(interval);
        }
      }), 1000);
    })();
  
    st.floc = function() {
      var error;
      try {
        if (document.interestCohort) {
          return document.interestCohort().then(function(cohort) {
            if (cohort) {
              return st.log({
                event: 'floc',
                floc: JSON.stringify(cohort)
              });
            }
          });
        }
      } catch (error1) {
        error = error1;
      }
    };
  
  
    /*
     * Add Listeners
     */
  
    st.addEventListener(document, "click", st.obl);
  
    st.addEventListener(document, "copy", st.copy);
  
  }).call(this);
  
  (function(){
    st = window.__sharethis__
  
    st.CustomColor = class CustomColor {
      constructor(r, g, b) {
        this.set(r, g, b);
      }
      
      toString() {
        return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
      }
    
      set(r, g, b) {
        this.r = this.clamp(r);
        this.g = this.clamp(g);
        this.b = this.clamp(b);
      }
    
      hueRotate(angle = 0) {
        angle = angle / 180 * Math.PI;
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
    
        this.multiply([
          0.213 + cos * 0.787 - sin * 0.213,
          0.715 - cos * 0.715 - sin * 0.715,
          0.072 - cos * 0.072 + sin * 0.928,
          0.213 - cos * 0.213 + sin * 0.143,
          0.715 + cos * 0.285 + sin * 0.140,
          0.072 - cos * 0.072 - sin * 0.283,
          0.213 - cos * 0.213 - sin * 0.787,
          0.715 - cos * 0.715 + sin * 0.715,
          0.072 + cos * 0.928 + sin * 0.072,
        ]);
      }
    
      grayscale(value = 1) {
        this.multiply([
          0.2126 + 0.7874 * (1 - value),
          0.7152 - 0.7152 * (1 - value),
          0.0722 - 0.0722 * (1 - value),
          0.2126 - 0.2126 * (1 - value),
          0.7152 + 0.2848 * (1 - value),
          0.0722 - 0.0722 * (1 - value),
          0.2126 - 0.2126 * (1 - value),
          0.7152 - 0.7152 * (1 - value),
          0.0722 + 0.9278 * (1 - value),
        ]);
      }
    
      sepia(value = 1) {
        this.multiply([
          0.393 + 0.607 * (1 - value),
          0.769 - 0.769 * (1 - value),
          0.189 - 0.189 * (1 - value),
          0.349 - 0.349 * (1 - value),
          0.686 + 0.314 * (1 - value),
          0.168 - 0.168 * (1 - value),
          0.272 - 0.272 * (1 - value),
          0.534 - 0.534 * (1 - value),
          0.131 + 0.869 * (1 - value),
        ]);
      }
    
      saturate(value = 1) {
        this.multiply([
          0.213 + 0.787 * value,
          0.715 - 0.715 * value,
          0.072 - 0.072 * value,
          0.213 - 0.213 * value,
          0.715 + 0.285 * value,
          0.072 - 0.072 * value,
          0.213 - 0.213 * value,
          0.715 - 0.715 * value,
          0.072 + 0.928 * value,
        ]);
      }
    
      multiply(matrix) {
        const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
        const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
        const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
        this.r = newR;
        this.g = newG;
        this.b = newB;
      }
    
      brightness(value = 1) {
        this.linear(value);
      }
      contrast(value = 1) {
        this.linear(value, -(0.5 * value) + 0.5);
      }
    
      linear(slope = 1, intercept = 0) {
        this.r = this.clamp(this.r * slope + intercept * 255);
        this.g = this.clamp(this.g * slope + intercept * 255);
        this.b = this.clamp(this.b * slope + intercept * 255);
      }
    
      invert(value = 1) {
        this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
        this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
        this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
      }
    
      hsl() {
        // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
    
        if (max === min) {
          h = s = 0;
        } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
    
            case g:
              h = (b - r) / d + 2;
              break;
    
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
    
        return {
          h: h * 100,
          s: s * 100,
          l: l * 100,
        };
      }
    
      clamp(value) {
        if (value > 255) {
          value = 255;
        } else if (value < 0) {
          value = 0;
        }
        return value;
      }
    }
    
    st.Solver = class Solver {
      constructor(target, baseColor) {
        this.target = target;
        this.targetHSL = target.hsl();
        this.reusedColor = new st.CustomColor(0, 0, 0);
      }
    
      solve() {
        const result = this.solveNarrow(this.solveWide());
        return {
          values: result.values,
          loss: result.loss,
          filter: this.css(result.values),
        };
      }
    
      solveWide() {
        const A = 5;
        const c = 15;
        const a = [60, 180, 18000, 600, 1.2, 1.2];
    
        let best = { loss: Infinity };
        for (let i = 0; best.loss > 25 && i < 3; i++) {
          const initial = [50, 20, 3750, 50, 100, 100];
          const result = this.spsa(A, a, c, initial, 1000);
          if (result.loss < best.loss) {
            best = result;
          }
        }
        return best;
      }
    
      solveNarrow(wide) {
        const A = wide.loss;
        const c = 2;
        const A1 = A + 1;
        const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
        return this.spsa(A, a, c, wide.values, 500);
      }
    
      spsa(A, a, c, values, iters) {
        const alpha = 1;
        const gamma = 0.16666666666666666;
    
        let best = null;
        let bestLoss = Infinity;
        const deltas = new Array(6);
        const highArgs = new Array(6);
        const lowArgs = new Array(6);
    
        for (let k = 0; k < iters; k++) {
          const ck = c / Math.pow(k + 1, gamma);
          for (let i = 0; i < 6; i++) {
            deltas[i] = Math.random() > 0.5 ? 1 : -1;
            highArgs[i] = values[i] + ck * deltas[i];
            lowArgs[i] = values[i] - ck * deltas[i];
          }
    
          const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
          for (let i = 0; i < 6; i++) {
            const g = lossDiff / (2 * ck) * deltas[i];
            const ak = a[i] / Math.pow(A + k + 1, alpha);
            values[i] = fix(values[i] - ak * g, i);
          }
    
          const loss = this.loss(values);
          if (loss < bestLoss) {
            best = values.slice(0);
            bestLoss = loss;
          }
        }
        return { values: best, loss: bestLoss };
    
        function fix(value, idx) {
          let max = 100;
          if (idx === 2 /* saturate */) {
            max = 7500;
          } else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
            max = 200;
          }
    
          if (idx === 3 /* hue-rotate */) {
            if (value > max) {
              value %= max;
            } else if (value < 0) {
              value = max + value % max;
            }
          } else if (value < 0) {
            value = 0;
          } else if (value > max) {
            value = max;
          }
          return value;
        }
      }
    
      loss(filters) {
        // Argument is array of percentages.
        const color = this.reusedColor;
        color.set(0, 0, 0);
    
        color.invert(filters[0] / 100);
        color.sepia(filters[1] / 100);
        color.saturate(filters[2] / 100);
        color.hueRotate(filters[3] * 3.6);
        color.brightness(filters[4] / 100);
        color.contrast(filters[5] / 100);
    
        const colorHSL = color.hsl();
        return (
          Math.abs(color.r - this.target.r) +
          Math.abs(color.g - this.target.g) +
          Math.abs(color.b - this.target.b) +
          Math.abs(colorHSL.h - this.targetHSL.h) +
          Math.abs(colorHSL.s - this.targetHSL.s) +
          Math.abs(colorHSL.l - this.targetHSL.l)
        );
      }
    
      css(filters) {
        function fmt(idx, multiplier = 1) {
          if (idx == 0) {
            return Math.round(100 - (filters[idx] * multiplier))
          }
          return Math.round(filters[idx] * multiplier);
        }
        return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`;
      }
    }
    
  })();
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.hexToRgb = function(hex) {
      var result, shorthandRegex;
      if (!hex) {
        return;
      }
      if (typeof hex !== 'string') {
        return 'Wrong type input';
      }
      shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (function(_this) {
        return function(m, r, g, b) {
          return r + r + g + g + b + b;
        };
      })(this));
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (result) {
        return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
      }
    };
  
    st.getFilter = function(rgb_hex) {
      var color, result, rgb, solver;
      rgb = st.hexToRgb(rgb_hex);
      if (!rgb) {
        return 'Invalid hex';
      }
      if (rgb.length !== 3) {
        return 'Invalid hex format!';
      }
      color = new st.CustomColor(rgb[0], rgb[1], rgb[2]);
      solver = new st.Solver(color);
      result = solver.solve();
      return result.filter.split(': ')[1];
    };
  
  }).call(this);
  
  (function(a,b){window.__sharethis__.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
  
  (function(){
    window.__sharethis__.is_ie = /(MSIE|Trident|Edge)/i.test(navigator.userAgent);
    window.__sharethis__.is_ie8 = /MSIE 8/i.test(navigator.userAgent);
  })();
  
  /**
   * none: https://goop.com/wellness/
   * anchor.fm: https://www.podcastinsights.com/podcast-embed-players/
   * consensu.org:
   * embed.ly: https://embed.ly/code?url=http%3A%2F%2Fgoogle.com
   * gfycat: https://developers.gfycat.com/iframe/#gfycat-iframe
   * giphy: https://giphy.com/posts/how-to-embed-giphy-gifs-on-your-website
   * imgur: https://help.imgur.com/hc/en-us/articles/211273743-Embed-Unit
   * instagram: https://www.bbc.com/news/uk-wales-51311320
   * megaphone: https://www.podcastinsights.com/podcast-embed-players/
   * reddit: https://redditblog.com/2017/06/14/why-publishers-should-use-reddit-embeds/
   * redditmedia: https://redditblog.com/2017/06/14/why-publishers-should-use-reddit-embeds/
   * soundcloud: https://en.support.wordpress.com/soundcloud-audio-player/
   * spotify: https://www.usmagazine.com/entertainment/news/kim-kardashian-north-asks-if-she-can-visit-prisons-with-me/
   * tiktok: https://jezebel.com/15-tiktoks-that-deserve-academy-awards-1838371668
   * twitch: https://www.dexerto.com/entertainment/top-10-most-viewed-twitch-clips-of-all-time-2-310900
   * twitter: https://time.com/4128887/kobe-bryant-retirement-celebrities-reaction/
   * vimeo: https://vimeo.zendesk.com/hc/en-us/articles/224969968-Embedding-videos-overview
   * youtube: https://electricbikereview.com/gocycle/gs/
   */
  
  /**
   * anchor.fm
   * tags: iframe
   * format: anchor.fm/{content}/embed
   * suggestions: add requirement for iframe
   */
  
  /**
   * facebook.com
   * tags: iframe
   * format: facebook.com/plugins/{plugin_type}
   * exclude: /plugins/like, /plugins/page, /plugins/comment, /plugins/group, /plugins/follow, /plugins/customerchat, /plugins/messenger_checkbox, /plugins/send_to_messenger
   * require: /plugins/post, /plugins/video, /plugins/share_button
   * even though rhombus collects plugins/share_button i'm not sold we should, doesn't seem to embed to any outside content
   * suggestions: add requirement for iframe and update exclude/require statements
   */
  
  /**
   * gfycat.com
   * tags: iframe
   * format: gfycat.com/ifr
   * suggestions: add requirement for iframe
   */
  
  /**
   * giphy.com
   * tags: iframe
   * format: giphy.com/embed
   * questions: what happens when we remove the requirement for /embed and introduce a requirement for iframe?
   * suggestions: add requirement for iframe
   */
  
  /**
   * imgur.com
   * tags: iframe
   * format: imgur.com/{hash}/embed
   * suggestions: add requirement for iframe
   */
  
  /**
   * instagram.com
   * tags: iframe, blockquote
   * format: www.instagram.com/p
   * questions: what happens when we remove the requirement for /p and introduce a requirement for iframe and blockquote?
   * suggestions: add requirement for either iframe or blockquote
   */
  
  /**
   * megaphone.fm
   * tags: iframe
   * format: player.megaphone.fm
   * questions: what happens when we remove the requirement for player and introduce a requirement for iframe?
   * suggestions: add requirement for iframe
   */
  
  /**
   * redditmedia.com
   * it's difficult to find any records with redditmedia.com embeds
   * we may want to remove the requirment for /r and also look for reddit.com
   * suggestions: add requirement for iframe, remove requirement for /r
   */
  
  /**
   * soundcloud.com
   * tags: iframe
   * format: w.soundcloud.com/player
   * questions: whats happens when we remove the requirement for /player and introduce a requirement for iframe?
   * suggestions: add requirement for iframe
   */
  
  /**
   * spotify.com
   * tags: iframe
   * format: open.spotify.com/{endpoint}
   * exlude: /follow
   * require: /embed
   * suggestions: add requirement for iframe and update exclude/require statements
   */
  
  /**
   * tiktok.com
   * tags: iframe
   * format: tiktok.com/embed/
   * questions: what happens when we remove the requirement for /embed and introduce a requirement for iframe?
   * suggestions: add requirement for iframe
   */
  
  /**
   * twitch.tv
   * tags: iframe
   * format: clips.twitch.tv/embed
   * questions: what happens when we remove the requirement for clips and introduce a requirement for iframe?
   * suggestions: add requirement for iframe
   */
  
  /**
   * twitter.com
   * tags: div, blockquote
   * format: twitter.com/{user}/status
   * questions: this one is difficult because twitter doesn't use iframes (at least in the data we collected)
   * questions: it looks like for every embed we pull identical srcs from a div and blockquote
   * questions: we probably only need to pull just div
   * questions: what happens when we remove the /status requirement?
   * suggestions: add requirement for div
   */
  
  /**
   * vimeo.com
   * tags: iframe
   * format: player.vimeo.com/video
   * questions: what happens when we remove the player requirement and introduce a requirement for iframe?
   * suggestions: add requirement for iframe
   */
  
  /**
   * youtube.com
   * tags: iframe
   * format: youtube.com/embed
   * questions: what happens when we remove the requirement for /embed and introduce a requirement for iframe?
   * suggestions: add requirement for iframe
   */
  
  // service list
  var st = window.__sharethis__ || {};
  st.getEmbeds = function (next) {
  
    var selectors = [
      '.embed-twitter',
      '.embedly-card',
      '.fb-post',
      '.fb-video',
      '.instagram-media',
      '.reddit',
      '.reddit-card',
      '.rm-shortcode',
      '.spotify',
      '.tumblr-embed',
      '.twitter-embed',
      '.twitter-follow',
      '.twitter-tweet',
      '.twitter-video',
      '.twitter-widget',
      'embed',
      'iframe',
      '[class^="PIN"]'
    ];
  
    var config = [
      { type: "audio", url: "anchor.fm" },
      { type: "audio", url: "open.spotify.com/embed" },
      { type: "audio", url: "player.megaphone.fm" },
      { type: "audio", url: "playlist.megaphone.fm" },
      { type: "audio", url: "w.soundcloud.com" },
      { type: "image", url: "gfycat.com" },
      { type: "image", url: "giphy.com/embed" },
      { type: "image", url: "imgur.com" },
      { type: "image", url: /(pinterest.com\/pin\/\d+\/)(?!.\S)/, span: true },
      { type: "post", url: "facebook.com/plugins/post" },
      { type: "post", url: "instagram.com/p", blockquote: true },
      { type: "post", url: "linkedin.com/embed" },
      { type: "post", url: "embed.tumblr.com/embed/post" },
      { type: "post", url: /twitter.com\/.*\/status\/[0-9]+$/, blockquote: true },
      { type: "video", url: /facebook.com\/.[^\/]*\/plugins\/video/ },
      { type: "video", url: "facebook.com/plugins/video" },
      { type: "video", url: /tiktok.com\/.[^\/]*\/video/, blockquote: true },
      { type: "video", url: "player.vimeo.com" },
      { type: "video", url: "youtube.com/embed" },
      { type: "video", url: "clips.twitch.tv" },
      { type: "video", url: "player.twitch.tv" }
    ];
  
    var sources = [
      'cite',
      'data-click-to-open-target',
      'data-href',
      'data-instgrm-permalink',
      'data-lazy-src',
      'data-permalink',
      'data-pin-href',
      'data-src',
      'data-src-2x',
      'href',
      'src'
    ];
  
    // returns false if element is not an embed
    function getEmbedRule(tag, url) {
      // ensure the url has a proper prefix
      if (url.indexOf('http') != 0 && url.indexOf('//') != 0) {
        return false;
      }
      for (var i in config) {
        var rule = config[i];
        var match = url.match(rule.url);
        if (match && match.length) {
          if (tag == 'iframe' || rule[tag]) {
            return rule;
          }
          return false;
        }
      }
      return false;
    }
  
    // find elements
    var embeds = {};
    var embed_els = document.querySelectorAll(selectors.join(','));
    for (var i = 0; i < embed_els.length; i++) {
      var embed_el = embed_els[i];
      try {
        var container = embed_el.shadowRoot || embed_el.parentElement;
        // find a valid url
        for (var j = 0; j < sources.length; j++) {
          var source = sources[j];
          var source_els = container.querySelectorAll("[" + source + "]");
          for (var k = 0; k < source_els.length; k++) {
            var source_el = source_els[k];
            var tag = source_el.tagName.toLowerCase();
            if (tag == 'iframe' || tag == 'blockquote' || tag == 'span') {
              var url = source_el.getAttribute(source);
              var rule = getEmbedRule(tag, url);
              if (rule) {
                if (url[url.length - 1] == '/') {
                  url = url.substring(0, url.length - 1);
                }
                embeds[url] = { el: source_el, type: rule.type };
              }
            }
          }
        }
      }
      catch (err) {
      }
    }
  
    // gather output
    var result = [];
    for (var url in embeds) {
      if (next) {
        next(embeds[url].el, embeds[url].type, url);
      }
      result.push(url);
    }
  
    return result;
  }
  st.embeds = st.getEmbeds();
  
  (function() {
    window.__sharethis__.COLORS = {
      airbnb: '#FF5A5F',
      amazon: '#FFB300',
      blogger: '#ff8000',
      blm: '#000000',
      buffer: '#323B43',
      delicious: '#205cc0',
      diaspora: '#000000',
      discord: "#8c9eff",
      digg: '#262626',
      douban: '#2E963D',
      email: '#7d7d7d',
      evernote: '#5BA525',
      etsy: '#E67E22',
      facebook: '#4267B2',
      flickr: '#ff0084',
      flipboard: '#e12828',
      getpocket: '#ef4056',
      gmail: '#D44638',
      googlebookmarks: '#4285F4',
      github: '#333333',
      hackernews: '#ff4000',
      houzz: '#4DBC15',
      instagram: '#bc2a8d',
      instapaper: '#000000',
      line: '#00c300',
      linkedin: '#0077b5',
      livejournal: '#00b0ea',
      mailru: '#168de2',
      medium: '#333333',
      meneame: '#ff6400',
      messenger: '#448AFF',
      odnoklassniki: '#d7772d',
      patreon: '#F96854',
      pinterest: '#CB2027',
      print: '#222222',
      qzone: '#F1C40F',
      quora: '#a62100',
      refind: '#4286f4',
      reddit: '#ff4500',
      renren: '#005baa',
      sharethis: '#95D03A',
      skype: '#00aff0',
      sms: '#ffbd00',
      snapchat: '#fffc00',
      soundcloud: '#ff8800',
      spotify: '#1ED760',
      surfingbird: '#6dd3ff',
      telegram: '#0088cc',
      threema: '#000000',
      tiktok: '#4c4c4c',
      tripadvisor: '#1ABC9C',
      tumblr: '#32506d',
      twitch: '#6441A4',
      twitter: '#55acee',
      vk: '#4c6c91',
      vimeo: '#29B6F6',
      wechat: '#4EC034',
      weibo: '#ff9933',
      whatsapp: '#25d366',
      wordpress: '#21759b',
      xing: '#1a7576',
      yelp: '#d32323',
      youtube: '#FF0000',
      yahoomail: '#720e9e',
      zillow: '#006aff'
    };
  
  }).call(this);
  
  (function() {
    window.__sharethis__.PRODUCTS = ['custom-share-buttons', 'ecommerce', 'email-list-builder', 'ga', 'gdpr-compliance-tool', 'gdpr-compliance-tool-v2', 'image-share-buttons', 'image-share-buttons-wp', 'inline-follow-buttons', 'inline-reaction-buttons', 'inline-share-buttons', 'inline-share-buttons-wp', 'powr-form-builder', 'powr-popup', 'powr-social-feed', 'privy-share-buttons', 'reviews', 'sop', 'sop-wordpress-plugin', 'sticky-share-buttons', 'sticky-share-buttons-wp', 'top-content', 'unknown', 'video-share-buttons', 'viral-notifications'];
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.i18n = {
      'angry': {
        de: 'wütend',
        en: 'angry',
        es: 'me enoja',
        fr: 'grrr',
        it: 'grrr',
        ja: 'ひどいね',
        ko: '화나요',
        pt: 'ira',
        ru: 'bозмутительно',
        zh: '怒'
      },
      'Support BLM': {
        de: 'Steun BLM',
        en: 'Support BLM',
        es: 'Subtenu BLM',
        fr: 'Soutenir BLM',
        it: 'Supporta BLM',
        ja: 'BLMをサポート',
        ko: 'BLM 지원',
        pt: 'Suporte BLM',
        ru: 'Поддержка BLM',
        zh: '支持BLM',
        nl: 'Steun BLM',
        ar: 'تبرع لصالح BLM',
        bn: 'BLM কে সাপোর্ট করুন',
        hi: 'बीएलएम को सहयोग',
        tr: 'BLM yi Destekle',
        vi: 'Ủng hộ BLM'
      },
      'bookmark': {
        de: 'lesezeichen',
        en: 'mark',
        es: 'marcador',
        fr: 'signet',
        it: 'segnalibro',
        ja: 'しおり',
        ko: '서표',
        pt: 'marca páginas',
        ru: 'закладка',
        zh: '书签',
        nl: 'Markeer',
        ar: 'تثبيت',
        bn: 'মার্ক',
        hi: 'मार्क',
        tr: 'İşaretle',
        vi: 'Đánh dấu'
      },
      'email': {
        de: 'emailen',
        en: 'email',
        es: 'correo electrónico',
        fr: 'email',
        it: 'e-mail',
        ja: 'Eメール',
        ko: '이메일',
        pt: 'o email',
        ru: 'Эл. адрес',
        zh: '电子邮件',
        nl: 'E-mail',
        ar: 'إرسال',
        bn: 'ইমেল',
        hi: 'ईमेल',
        tr: 'E-posta',
        vi: 'Email'
      },
      'flip': {
        de: 'flip',
        en: 'flip',
        es: 'Flipear',
        fr: 'Ajouter',
        it: 'Flip',
        ja: 'フリップ',
        ko: '공유하기',
        pt: 'partilhar',
        ru: 'Флипнуть',
        zh: '翻转',
        nl: 'Flip',
        ar: 'تغيير',
        bn: 'ওল্টান',
        hi: 'फ़्लिप',
        tr: 'Döndür',
        vi: 'Lật'
      },
      'gmail': {
        de: 'emailen',
        en: 'email',
        es: 'correo electrónico',
        fr: 'email',
        it: 'e-mail',
        ja: 'Eメール',
        ko: '이메일',
        pt: 'o email',
        ru: 'Эл. адрес',
        zh: '电子邮件'
      },
      'like': {
        de: 'mögen',
        en: 'like',
        es: 'me gusta',
        fr: "j'aime",
        it: 'mi piace',
        ja: 'いいね！',
        ko: '좋아요',
        pt: 'gosto',
        ru: 'hравится',
        zh: '赞'
      },
      'lol': {
        de: 'lol',
        en: 'lol',
        es: 'me divierte',
        fr: 'haha',
        it: 'ahah',
        ja: 'うけるね',
        ko: '웃겨요',
        pt: 'riso',
        ru: 'xа-ха',
        zh: '笑趴'
      },
      'love': {
        de: 'lieben',
        en: 'love',
        es: 'me encanta',
        fr: "j’adore",
        it: 'love',
        ja: '超いいね！',
        ko: '최고예요',
        pt: 'adoro',
        ru: 'cупер',
        zh: '大爱'
      },
      'pin': {
        de: 'pin',
        en: 'pin',
        es: 'pin',
        fr: 'épingle',
        it: 'pin',
        ja: 'ピン',
        ko: '핀',
        pt: 'pin',
        ru: 'Пин',
        zh: '针',
        nl: 'Pin',
        ar: 'بنترست',
        bn: 'পিন',
        hi: 'पिन',
        tr: 'Pinle',
        vi: 'Ghim'
      },
      'print': {
        de: 'drucken',
        en: 'print',
        es: 'impresión',
        fr: 'mpression',
        it: 'stampa',
        ja: 'プリント',
        ko: '인쇄',
        pt: 'impressão',
        ru: 'Распечатать',
        zh: '打印',
        nl: 'Print',
        ar: 'طباعة',
        bn: 'প্রিন্ট করুন',
        hi: 'प्रिंट',
        tr: 'Yazdır',
        vi: 'In'
      },
      'sad': {
        de: 'traurig',
        en: 'sad',
        es: 'me entristece',
        fr: 'triste',
        it: 'sigh',
        ja: '悲しいね',
        ko: '슬퍼요',
        pt: 'tristeza',
        ru: 'cочувствую',
        zh: '心碎'
      },
      'send message': {
        zh: '发信息'
      },
      'share': {
        de: 'teilen',
        en: 'share',
        es: 'compartir',
        fr: 'partager',
        it: 'condividi',
        ja: 'シェアする',
        ko: '공유하기',
        pt: 'partilhar',
        ru: 'Поделиться',
        zh: '分享',
        nl: 'Deel',
        ar: 'مشاركة',
        bn: 'শেয়ার',
        hi: 'शेयर',
        tr: 'Paylaş',
        vi: 'Chia sẻ'
      },
      'shares': {
        de: 'teilen',
        en: 'shares',
        es: 'veces compartido',
        fr: 'partages',
        it: 'condivisioni',
        ja: 'シェア数',
        ko: '재생회',
        pt: 'partilhas',
        ru: 'Перепосты',
        zh: '次转发',
        nl: 'Deel',
        ar: 'مشاركة',
        bn: 'শেয়ার',
        hi: 'शेयर',
        tr: 'Paylaş',
        vi: 'Chia sẻ'
      },
      'snapchat': {
        de: 'schnappen',
        en: 'snap',
        es: 'quebrar',
        fr: 'se casser',
        it: 'affrettato',
        ja: 'スナップ',
        ko: '스냅',
        pt: 'foto',
        ru: 'щелчок',
        zh: '快照',
        nl: 'snap',
        ar: 'يفرقع، ينفجر',
        bn: 'аснастка',
        hi: 'चटकाना',
        tr: 'patlatmak',
        vi: 'búng tay'
      },
      'sticky-width': {
        de: 120,
        en: 120,
        es: 140,
        fr: 130,
        it: 140,
        ja: 160,
        ko: 120,
        pt: 130,
        ru: 160,
        zh: 120
      },
      'subjects': {
        'en': "I'd like to share a link with you",
        'es': "Me gustaría compartir este enlace contigo",
        'ru': "Я хотел бы поделиться с вами ссылкой",
        'zh': "我想和你分享一个信息"
      },
      'tweet': {
        de: 'tweeten',
        en: 'tweet',
        es: 'twittear',
        fr: 'tweeter',
        it: 'twittare',
        ja: 'ツイートする',
        ko: '트윗하기',
        pt: 'tweetar',
        ru: 'tвитнуть',
        zh: '发推',
        nl: 'Tweet',
        ar: 'تويتر',
        bn: 'টুইট',
        hi: 'ट्वीट',
        tr: 'Tweet',
        vi: 'Tweet'
      },
      'wow': {
        de: 'wow',
        en: 'wow',
        es: 'me asombra',
        fr: 'wouah',
        it: 'wow',
        ja: 'すごいね',
        ko: '멋져요',
        pt: 'surpresa',
        ru: 'yх ты!',
        zh: '哇'
      },
      'yahoomail': {
        de: 'emailen',
        en: 'email',
        es: 'correo electrónico',
        fr: 'email',
        it: 'e-mail',
        ja: 'Eメール',
        ko: '이메일',
        pt: 'o email',
        ru: 'Эл. адрес',
        zh: '电子邮件'
      }
    };
  
  }).call(this);
  
  (function() {
    var img, is_ie8;
  
    img = window.__sharethis__.img;
  
    is_ie8 = /MSIE 8.0/.test(navigator.userAgent);
  
    window.__sharethis__.cdn = 'https://platform-cdn.sharethis.com';
  
    window.__sharethis__.ICONS = {
      airbnb: img('airbnb.svg'),
      amazon: img('amazon.svg'),
      arrow_left: img('arrow_left.svg'),
      arrow_right: img('arrow_right.svg'),
      blogger: img('blogger.svg'),
      blm: img('blm.svg'),
      buffer: img('buffer.svg'),
      close: img('close.svg'),
      delicious: img('delicious.svg'),
      diaspora: img('diaspora.svg'),
      digg: img('digg.svg'),
      discord: img('discord.svg'),
      douban: img('douban.svg'),
      email: img('email.svg'),
      evernote: img('evernote.svg'),
      etsy: img('etsy.svg'),
      facebook: img('facebook.svg'),
      flipboard: img('flipboard.svg'),
      getpocket: img('pocket.svg'),
      github: img('github.svg'),
      gmail: img('gmail.svg'),
      googlebookmarks: img('googlebookmarks.svg'),
      hackernews: img('hackernews.svg'),
      houzz: img('houzz.svg'),
      instagram: img('instagram.svg'),
      instapaper: img('instapaper.svg'),
      line: img('line.svg'),
      linkedin: img('linkedin.svg'),
      livejournal: img('livejournal.svg'),
      mailru: img('mailru.svg'),
      medium: img('medium.svg'),
      meneame: img('meneame.svg'),
      messenger: img('messenger.svg'),
      odnoklassniki: img('odnoklassniki.svg'),
      patreon: img('patreon.svg'),
      pinterest: img('pinterest.svg'),
      print: img('print.svg'),
      quora: img('quora.svg'),
      qzone: img('qzone.svg'),
      reddit: img('reddit.svg'),
      refind: img('refind.svg'),
      renren: img('renren.svg'),
      sharethis: img('sharethis.svg'),
      skype: img('skype.svg'),
      sms: img('sms.svg'),
      snapchat: img('snapchat.svg'),
      soundcloud: img('soundcloud.svg'),
      spotify: img('spotify.svg'),
      surfingbird: img('surfingbird.svg'),
      telegram: img('telegram.svg'),
      tencentqq: img('tencentqq.svg'),
      threema: img('threema.svg'),
      tiktok: img('tiktok.svg'),
      tripadvisor: img('tripadvisor.svg'),
      tumblr: img('tumblr.svg'),
      twitch: img('twitch.svg'),
      twitter: img('twitter.svg'),
      vk: img('vk.svg'),
      vimeo: img('vimeo.svg'),
      wechat: img('wechat.svg'),
      weibo: img('weibo.svg'),
      whatsapp: img('whatsapp.svg'),
      wordpress: img('wordpress.svg'),
      xing: img('xing.svg'),
      yahoomail: img('yahoomail.svg'),
      yelp: img('yelp.svg'),
      youtube: img('youtube.svg'),
      zillow: img('zillow.svg')
    };
  
    window.__sharethis__.ICONS_WHITE = {
      airbnb: img('airbnb-white.svg'),
      amazon: img('amazon-white.svg'),
      blogger: img('blogger-white.svg'),
      blm: img('blm-white.svg'),
      buffer: img('buffer-white.svg'),
      delicious: img('delicious-white.svg'),
      diaspora: img('diaspora-white.svg'),
      digg: img('digg-white.svg'),
      discord: img('discord-white.svg'),
      douban: img('douban-white.svg'),
      email: img('email-white.svg'),
      etsy: img('etsy-white.svg'),
      evernote: img('evernote-white.svg'),
      facebook: img('facebook-white.svg'),
      flipboard: img('flipboard-white.svg'),
      getpocket: img('pocket-white.svg'),
      github: img('github-white.svg'),
      gmail: img('gmail-white.svg'),
      googlebookmarks: img('googlebookmarks-white.svg'),
      hackernews: img('hackernews-white.svg'),
      houzz: img('houzz-white.svg'),
      instagram: img('instagram-white.svg'),
      instapaper: img('instapaper-white.svg'),
      line: img('line-white.svg'),
      linkedin: img('linkedin-white.svg'),
      livejournal: img('livejournal-white.svg'),
      mailru: img('mailru-white.svg'),
      medium: img('medium-white.svg'),
      meneame: img('meneame-white.svg'),
      messenger: img('messenger-white.svg'),
      odnoklassniki: img('odnoklassniki-white.svg'),
      patreon: img('patreon-white.svg'),
      pinterest: img('pinterest-white.svg'),
      print: img('print-white.svg'),
      quora: img('quora-white.svg'),
      qzone: img('qzone-white.svg'),
      reddit: img('reddit-white.svg'),
      refind: img('refind-white.svg'),
      renren: img('renren-white.svg'),
      sharethis: img('sharethis-white.svg'),
      skype: img('skype-white.svg'),
      sms: img('sms-white.svg'),
      snapchat: img('snapchat-white.svg'),
      soundcloud: img('soundcloud-white.svg'),
      spotify: img('spotify-white.svg'),
      surfingbird: img('surfingbird-white.svg'),
      telegram: img('telegram-white.svg'),
      telegram: img('telegram-white.svg'),
      threema: img('threema-white.svg'),
      tiktok: img('tiktok-white.svg'),
      tripadvisor: img('tripadvisor-white.svg'),
      tumblr: img('tumblr-white.svg'),
      twitch: img('twitch-white.svg'),
      twitter: img('twitter-white.svg'),
      vk: img('vk-white.svg'),
      vimeo: img('vimeo-white.svg'),
      wechat: img('wechat-white.svg'),
      weibo: img('weibo-white.svg'),
      whatsapp: img('whatsapp-white.svg'),
      wordpress: img('wordpress-white.svg'),
      xing: img('xing-white.svg'),
      yahoomail: img('yahoomail-white.svg'),
      ycombinator: img('ycombinator-white.svg'),
      yelp: img('yelp-white.svg'),
      youtube: img('youtube-white.svg'),
      zillow: img('zillow-white.svg')
    };
  
    if (is_ie8) {
      window.__sharethis__.ICONS = {
        arrow_left: img('left-arrow.png'),
        arrow_right: img('right-arrow.png'),
        blogger: img('blogger.png'),
        delicious: img('delicious.png'),
        digg: img('digg.png'),
        email: img('email.png'),
        facebook: img('facebook.png'),
        flipboard: img('flipboard.png'),
        linkedin: img('linkedin.png'),
        livejournal: img('livejournal.png'),
        mailru: img('mailru.png'),
        meneame: img('mename.png'),
        odnoklassniki: img('odnoklassniki.png'),
        pinterest: img('pinterest.png'),
        print: img('print.png'),
        reddit: img('reddit.png'),
        sharethis: img('sharethis.png'),
        sms: img('sms.png'),
        tumblr: img('tumblr.png'),
        twitter: img('twitter.png'),
        vk: img('vk.png'),
        weibo: img('weibo.png'),
        whatsapp: img('whatsapp.png'),
        xing: img('xing.png'),
        wechat: img('wechat.png')
      };
    }
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.networks = ['airbnb', 'amazon', 'blogger', 'blm', 'buffer', 'diaspora', 'digg', 'discord', 'douban', 'email', 'evernote', 'etsy', 'facebook', 'flipboard', 'getpocket', 'github', 'gmail', 'googlebookmarks', 'hackernews', 'houzz', 'instapaper', 'line', 'linkedin', 'livejournal', 'mailru', 'meneame', 'messenger', 'odnoklassniki', 'pinterest', 'print', 'qzone', 'reddit', 'refind', 'renren', 'sharethis', 'skype', 'sms', 'snapchat', 'surfingbird', 'telegram', 'threema', 'tiktok', 'tripadvisor', 'tumblr', 'twitter', 'vk', 'vimeo', 'wechat', 'weibo', 'whatsapp', 'wordpress', 'xing', 'yahoomail', 'zillow'];
  
    st.shareNetworks = ['blm', 'blogger', 'buffer', 'diaspora', 'digg', 'douban', 'email', 'evernote', 'facebook', 'flipboard', 'getpocket', 'gmail', 'googlebookmarks', 'hackernews', 'instapaper', 'line', 'linkedin', 'livejournal', 'mailru', 'meneame', 'messenger', 'odnoklassniki', 'pinterest', 'print', 'qzone', 'reddit', 'refind', 'renren', 'sharethis', 'skype', 'sms', 'surfingbird', 'telegram', 'threema', 'tumblr', 'twitter', 'vk', 'wechat', 'weibo', 'whatsapp', 'wordpress', 'xing', 'yahoomail'];
  
    st.followNetworks = ['airbnb', 'amazon', 'blogger', 'digg', 'discord', 'etsy', 'facebook', 'flipboard', 'github', 'houzz', 'instagram', 'linkedin', 'medium', 'messenger', 'odnoklassniki', 'patreon', 'pinterest', 'quora', 'reddit', 'snapchat', 'soundcloud', 'spotify', 'telegram', 'tiktok', 'tripadvisor', 'tumblr', 'twitch', 'twitter', 'vimeo', 'vk', 'wechat', 'weibo', 'yelp', 'youtube', 'zillow'];
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['share-all'] = function(config) {
      var $backdrop, $button, $buttons, $close, $el, common_css, count_url, css, description, html, i, id, image, j, len, len1, logo_link, message, network, network_css, ref, ref1, share_url, src, title, url, username;
      if (config == null) {
        config = {};
      }
      count_url = config.count_url, share_url = config.share_url, url = config.url, description = config.description, image = config.image, message = config.message, network = config.network, title = config.title, username = config.username;
      ref = st.newElement(), $el = ref.$el, id = ref.id;
      st.addClass($el, 'st-hidden');
      common_css = "body.st-body-no-scroll {\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n#" + id + " {\n  " + st.FONT_FAMILY + "\n  " + (st.TRANSITION()) + "\n  height: 100%;\n  left: 0;\n  opacity: 1;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 99999;\n}\n#" + id + ".st-hidden {\n  opacity: 0;\n  top: 100%;\n}\n#" + id + " .st-backdrop {\n  background: rgba(0, 0, 0, 0.8);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n#" + id + " .st-btns {\n  bottom: 56px;\n  left: 0;\n  margin: 100px auto 0;\n  max-width: 90%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 10px;\n  z-index: 20;\n  overflow-y: auto;\n}\n#" + id + " .st-logo {\n  background: #4c4c4c;\n  bottom: 0;\n  cursor: pointer;\n  padding: 20px;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  z-index: 30;\n}\n#" + id + " .st-close {\n  " + (st.BORDER_RADIUS(28)) + "\n  " + st.BORDER_BOX + "\n  background: #999;\n  bottom: 28px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 36px;\n  height: 56px;\n  line-height: 28px;\n  padding: 10px;\n  position: absolute;\n  right: 14px;\n  width: 56px;\n  z-index: 40;\n}\n#" + id + " .st-disclaimer {\n  bottom: 72px;\n  color: white;\n  font-size: 12px;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, 0);\n  z-index: 30;\n}\n#" + id + " .st-close > img {\n  height: 40px;\n  width: 40px;\n}\n#" + id + " .st-btn {\n  " + (st.BORDER_RADIUS(4)) + "\n  " + st.BORDER_BOX + "\n  " + (st.TRANSITION()) + "\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 30px;\n  margin: 4px;\n  opacity: 1;\n  overflow: hidden;\n  padding: 8px 12px;\n  position: relative;\n  text-align: left;\n  top: 0;\n  vertical-align: top;\n  width: 148px;\n}\n#" + id + " .st-btn::before {\n  " + (st.BORDER_RADIUS(4)) + "\n  " + (st.TRANSITION()) + "\n  background: #fff;\n  content: '';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n#" + id + " .st-btn:hover::before {\n  opacity: .2;\n}\n#" + id + " .st-btn > svg {\n  display: inline-block;\n  height: 20px;\n  margin-top: 6px;\n  vertical-align: top;\n  width: 20px;\n}\n#" + id + " .st-btn > img {\n  display: inline-block;\n  height: 20px;\n  margin-top: 6px;\n  vertical-align: top;\n  width: 20px;\n}\n#" + id + " .st-btn > span {\n  display: inline-block;\n  letter-spacing: 0.5px;\n  text-align: center;\n  vertical-align: top;\n  width: 96px;\n}\n@media(max-width: 1200px) {\n  #" + id + " .st-btns {\n    margin-top: 50px;\n  }\n}\n@media(max-width: 800px) {\n  #" + id + " .st-btns {\n    margin: 0 auto;\n    max-width: 100%;\n    padding: 32px 10px 50px;\n  }\n  #" + id + " .st-btn {\n    width: 130px;\n  }\n  #" + id + " .st-btn > span {\n    width: 74px;\n  }\n  #" + id + " .st-disclaimer {\n    background: #000;\n    bottom: 44px;\n    font-size: 10px;\n    padding: 8px;\n    text-align: center;\n    width: 100%\n  }\n}";
      network_css = ((function() {
        var i, len, ref1, results;
        ref1 = st.shareNetworks;
        results = [];
        for (i = 0, len = ref1.length; i < len; i++) {
          network = ref1[i];
          results.push("#" + id + " .st-btn[data-network='" + network + "'] {\n  background-color: " + st.COLORS[network] + ";\n}");
        }
        return results;
      })()).join('\n');
      css = common_css;
      css += network_css;
      st.css(css);
      html = "<div class='st-backdrop'></div>";
      html += "<div class='st-btns'>";
      ref1 = st.shareNetworks;
      for (i = 0, len = ref1.length; i < len; i++) {
        network = ref1[i];
        if (network === 'sharethis') {
          continue;
        }
        if (!st.mobile && (network === 'sms')) {
          continue;
        }
        html += "<div class='st-btn' data-network='" + network + "'>\n  " + st.ICONS[network] + "\n  <span>" + network + "</span>\n</div>";
      }
      html += "</div>";
      src = 'https://platform-cdn.sharethis.com/img/share-this-logo%402x.png';
      logo_link = "https://sharethis.com/platform/share-buttons?" + st.qs({
        utm_source: "share-buttons",
        utm_medium: "referral",
        utm_campaign: "sharethis-button-referral"
      });
      html += "<div class=\"st-logo\">\n  <a href=\"" + logo_link + "\" target=\"_blank\">\n    <img height=\"16\" width=\"96\" src=\"" + src + "\">\n  </a>\n</div>";
      html += "<div class=\"st-close\">\n  " + st.ICONS['close'] + "\n</div>";
      html += "<div class=\"st-disclaimer\">\n  Third-party platform trademarks and logos appearing here are owned by the\n  respective third parties, link to those referenced platforms, and are not\n  affiliated with ShareThis.\n</div>";
      $el.innerHTML = html;
      $backdrop = $el.querySelector('.st-backdrop');
      $buttons = $el.querySelectorAll('.st-btn');
      $close = $el.querySelector('.st-close');
      st.addEventListener($backdrop, 'click', function() {
        return st.close($el);
      });
      st.addEventListener($close, 'click', function() {
        return st.close($el);
      });
      st.addEventListener(document, 'keydown', function(e) {
        if (st.isEsc(e)) {
          return st.close($el);
        }
      });
      for (j = 0, len1 = $buttons.length; j < len1; j++) {
        $button = $buttons[j];
        st.addEventListener($button, 'click', function() {
          st.close($el);
          return st.share({
            description: description,
            image: image,
            network: this.getAttribute('data-network'),
            share_url: share_url,
            title: title,
            url: url,
            username: username
          });
        });
      }
      return setTimeout((function() {
        st.removeClass($el, 'st-hidden');
        return st.addClass(document.body, 'st-body-no-scroll');
      }), 10);
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['share-wechat-mobile'] = function(config) {
      var $backdrop, $close, $copy, $el, $form_input, $open, html, id, mobile_css, ref, src, url;
      if (config == null) {
        config = {};
      }
      url = config.url;
      ref = st.newElement(), $el = ref.$el, id = ref.id;
      st.addClass($el, 'st-hidden');
      mobile_css = "body.st-body-no-scroll {\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n#" + id + " {\n  " + (st.TRANSITION()) + "\n  " + st.FONT_FAMILY + "\n  bottom: 0;\n  left: 0;\n  opacity: 1;\n  overflow-y: auto;\n  padding-bottom: 100px;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 99999;\n}\n\n#" + id + ".st-hidden {\n  opacity: 0;\n  top: 100%;\n}\n#" + id + " .st-backdrop {\n  background: rgba(0, 0, 0, 0.8);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n#" + id + " .st-wechat {\n  margin-top: 120px;\n  height: 64px;\n  width: 220px;\n  display: inline-block;\n  position: relative;\n  z-index: 10;\n}\n#" + id + " .st-form {\n  margin: 20px auto;\n  max-width: 80%;\n  position: relative;\n  width: 320px;\n  z-index: 20;\n}\n#" + id + " .st-form > input {\n  " + st.BORDER_BOX + "\n  " + (st.BORDER_RADIUS(4)) + "\n  background-color: #fff;\n  border: 0;\n  color: #333;\n  display: block;\n  font-size: 16px;\n  height: 48px;\n  margin-bottom: 15px;\n  padding: 12px;\n  width: 100%;\n}\n#" + id + " .st-form > textarea {\n  " + st.BORDER_BOX + "\n  " + (st.BORDER_RADIUS(4)) + "\n  background-color: #fff;\n  border: 0;\n  color: #333;\n  display: block;\n  font-size: 16px;\n  height: 96px;\n  margin-bottom: 15px;\n  padding: 12px;\n  width: 100%;\n}\n#" + id + " .st-copy {\n  " + (st.BORDER_RADIUS(2)) + "\n  background: #4EC034;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  height: 36px;\n  letter-spacing: .5px;\n  line-height: 36px;\n  margin: 15px auto 0 auto;\n  padding: 0 10px;\n  position: relative;\n  text-align: center;\n  min-width: 120px;\n  z-index: 20;\n}\n#" + id + " .st-open {\n  " + (st.BORDER_RADIUS(2)) + "\n  background: #4EC034;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  height: 36px;\n  letter-spacing: .5px;\n  line-height: 36px;\n  margin: 15px auto 0 auto;\n  padding: 0 10px;\n  position: relative;\n  text-align: center;\n  min-width: 120px;\n  z-index: 20;\n}\n#" + id + " .st-logo {\n  background: #4c4c4c;\n  bottom: 0;\n  padding: 20px;\n  position: fixed;\n  text-align: center;\n  width: 100%;\n  z-index: 30;\n}\n#" + id + " .st-close {\n  " + (st.BORDER_RADIUS(28)) + "\n  " + st.BORDER_BOX + "\n  background: #999;\n  bottom: 28px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 36px;\n  height: 56px;\n  line-height: 28px;\n  padding: 10px;\n  position: fixed;\n  right: 14px;\n  width: 56px;\n  z-index: 40;\n}";
      st.css(mobile_css);
      html = "<div class='st-backdrop'></div>";
      html += "<div class='st-wechat'>" + st.ICONS['wechatIcon'] + "</div>";
      html += "<div class='st-form'>\n  <input class=\"st-url\" type=\"text\" value=\"\" />\n</div>";
      html += "<div class=\"st-copy\">Copy URL</div>\n<div class=\"st-open\" style=\"display: none\">Open WeChat</div>";
      src = 'https://platform-cdn.sharethis.com/img/share-this-logo%402x.png';
      html += "<div class=\"st-logo\">\n  <img height=\"16\" width=\"96\" src=\"" + src + "\">\n</div>";
      html += "<div class=\"st-close\">\n  " + st.ICONS['close'] + "\n</div>";
      $el.innerHTML = html;
      $form_input = $el.querySelector('.st-form > input');
      $backdrop = $el.querySelector('.st-backdrop');
      $close = $el.querySelector('.st-close');
      $copy = $el.querySelector('.st-copy');
      $open = $el.querySelector('.st-open');
      $form_input.value = url;
      st.addEventListener($backdrop, 'click', function() {
        return st.close($el);
      });
      st.addEventListener($close, 'click', function() {
        return st.close($el);
      });
      st.addEventListener($copy, 'click', function() {
        var succeed;
        $form_input.setSelectionRange(0, $form_input.value.length);
        succeed = document.execCommand('copy');
        if (succeed) {
          $copy.innerText = 'Copied!';
          $copy.style.background = '#f9a825';
          return $open.style.display = 'inline-block';
        }
      });
      st.addEventListener($open, 'click', function() {
        var onError;
        onError = function(err) {
          $open.innerText = err;
          $open.style.background = '#c62828';
          if (st.__share_email_timeout) {
            clearTimeout(st.__share_email_timeout);
          }
          return st.__share_email_timeout = setTimeout((function() {
            $open.innerText = 'Open';
            return $open.style.background = '#00c853';
          }), 2000);
        };
        $open.innerText = 'Opening...';
        $open.style.background = '#f9a825';
        url = 'weixin://';
        return st.open(url);
      });
      st.addEventListener(document, 'keydown', function(e) {
        if (st.isEsc(e)) {
          return st.close($el);
        }
      });
      return setTimeout((function() {
        st.removeClass($el, 'st-hidden');
        return st.addClass(document.body, 'st-body-no-scroll');
      }), 10);
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.REACTIONS = {
      slight_smile: {
        icon: "<circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#ffdd67\"/><g fill=\"#664e27\"><circle cx=\"20.5\" cy=\"26.6\" r=\"5\"/><circle cx=\"43.5\" cy=\"26.6\" r=\"5\"/><path d=\"m44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0-1-.7-1.8.5-1.2 1.6 2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6\"/></g>",
        label: 'like'
      },
      heart_eyes: {
        icon: "<path d=\"M62,32c0,16.6-13.4,30-30,30C15.4,62,2,48.6,2,32C2,15.4,15.4,2,32,2C48.6,2,62,15.4,62,32z\" fill=\"#ffdd67\"/><g fill=\"#f46767\"><path d=\"m61.8 13.2c-.5-2.7-2-4.9-4.5-5.6-2.7-.7-5.1.3-7.4 2.7-1.3-3.6-3.3-6.3-6.5-7.7-3.2-1.4-6.4-.4-8.4 2.1-2.1 2.6-2.9 6.7-.7 12 2.1 5 11.4 15 11.7 15.3.4-.2 10.8-6.7 13.3-9.9 2.5-3.1 3-6.2 2.5-8.9\"/><path d=\"m29 4.7c-2-2.5-5.2-3.5-8.4-2.1-3.2 1.4-5.2 4.1-6.5 7.7-2.4-2.3-4.8-3.4-7.5-2.6-2.4.7-4 2.9-4.5 5.6-.5 2.6.1 5.8 2.5 8.9 2.6 3.1 13 9.6 13.4 9.8.3-.3 9.6-10.3 11.7-15.3 2.2-5.3 1.4-9.3-.7-12\"/></g><path d=\"m49 38.1c0-.8-.5-1.8-1.8-2.1-3.5-.7-8.6-1.3-15.2-1.3-6.6 0-11.7.7-15.2 1.3-1.4.3-1.8 1.3-1.8 2.1 0 7.3 5.6 14.6 17 14.6 11.4-.1 17-7.4 17-14.6\" fill=\"#664e27\"/><path d=\"m44.7 38.3c-2.2-.4-6.8-1-12.7-1-5.9 0-10.5.6-12.7 1-1.3.2-1.4.7-1.3 1.5.1.4.1 1 .3 1.6.1.6.3.9 1.3.8 1.9-.2 23-.2 24.9 0 1 .1 1.1-.2 1.3-.8.1-.6.2-1.1.3-1.6 0-.8-.1-1.3-1.4-1.5\" fill=\"#fff\"/>",
        label: 'love'
      },
      laughing: {
        icon: "<circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#ffdd67\"/><g fill=\"#664e27\"><path d=\"m51.7 19.4c.6.3.3 1-.2 1.1-2.7.4-5.5.9-8.3 2.4 4 .7 7.2 2.7 9 4.8.4.5-.1 1.1-.5 1-4.8-1.7-9.7-2.7-15.8-2-.5 0-.9-.2-.8-.7 1.6-7.3 10.9-10 16.6-6.6\"/><path d=\"m12.3 19.4c-.6.3-.3 1 .2 1.1 2.7.4 5.5.9 8.3 2.4-4 .7-7.2 2.7-9 4.8-.4.5.1 1.1.5 1 4.8-1.7 9.7-2.7 15.8-2 .5 0 .9-.2.8-.7-1.6-7.3-10.9-10-16.6-6.6\"/><path d=\"m49.7 34.4c-.4-.5-1.1-.4-1.9-.4-15.8 0-15.8 0-31.6 0-.8 0-1.5-.1-1.9.4-3.9 5 .7 19.6 17.7 19.6 17 0 21.6-14.6 17.7-19.6\"/></g><path d=\"m33.8 41.7c-.6 0-1.5.5-1.1 2 .2.7 1.2 1.6 1.2 2.8 0 2.4-3.8 2.4-3.8 0 0-1.2 1-2 1.2-2.8.3-1.4-.6-2-1.1-2-1.6 0-4.1 1.7-4.1 4.6 0 3.2 2.7 5.8 6 5.8s6-2.6 6-5.8c-.1-2.8-2.7-4.5-4.3-4.6\" fill=\"#4c3526\"/><path d=\"m24.3 50.7c2.2 1 4.8 1.5 7.7 1.5s5.5-.6 7.7-1.5c-2.1-1.1-4.7-1.7-7.7-1.7s-5.6.6-7.7 1.7\" fill=\"#ff717f\"/><path d=\"m47 36c-15 0-15 0-29.9 0-2.1 0-2.1 4-.1 4 10.4 0 19.6 0 30 0 2 0 2-4 0-4\" fill=\"#fff\"/>",
        label: 'lol'
      },
      astonished: {
        icon: "<circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#ffdd67\"/><circle cx=\"19\" cy=\"29\" r=\"11\" fill=\"#fff\"/><path d=\"m24 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5\" fill=\"#664e27\"/><path d=\"m56 29c0 6.1-4.9 11-11 11-6.1 0-11-4.9-11-11 0-6.1 4.9-11 11-11 6.1 0 11 4.9 11 11\" fill=\"#fff\"/><path d=\"m50 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5\" fill=\"#664e27\"/><g fill=\"#917524\"><path d=\"m50.2 15.8c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7\"/><path d=\"m25.5 12.5c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2\"/></g><circle cx=\"32\" cy=\"49\" r=\"9\" fill=\"#664e27\"/><path d=\"m26 46c1.2-2.4 3.4-4 6-4 2.6 0 4.8 1.6 6 4h-12\" fill=\"#fff\"/>",
        label: 'wow'
      },
      sob: {
        icon: "<g fill=\"#65b1ef\"><ellipse cx=\"17.5\" cy=\"59.9\" rx=\"12.5\" ry=\"1.5\"/><ellipse cx=\"44\" cy=\"60.2\" rx=\"18\" ry=\"1.8\"/></g><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#ffdd67\"/><path d=\"m44.7 46c-1.4-3.6-4.8-6-12.7-6-8 0-11.3 2.4-12.7 6-.7 1.9.3 5 .3 5 1.3 3.9 1.1 5 12.4 5 11.3 0 11.1-1.1 12.4-5 0 0 1.1-3.1.3-5\" fill=\"#664e27\"/><path d=\"m41 45c.1-.3 0-.6-.2-.8 0 0-2-2.2-8.8-2.2-6.8 0-8.8 2.2-8.8 2.2-.2.1-.2.5-.2.8l.2.6c.1.3.3.5.5.5h16.6c.2 0 .5-.2.5-.5l.2-.6\" fill=\"#fff\"/><g fill=\"#65b1ef\"><path d=\"m44.5 60.5c2.3 0 4.6 0 6.8 0 8.2-9.9-1.5-20 .9-29.8-2.3 0-4.6 2.5-6.8 2.5-3.2 9.5 7.3 17.4-.9 27.3\"/><path d=\"m19.5 60.5c-2.3 0-4.6 0-6.8 0-8.2-9.9 1.5-20-.9-29.8 2.3 0 4.6 2.5 6.8 2.5 3.2 9.5-7.3 17.4.9 27.3\"/></g><g fill=\"#917524\"><path d=\"m40.7 18.3c3 3 7.2 4.5 11.4 4.1.6-.1.9 2.1.2 2.2-4.9.4-9.7-1.3-13.1-4.8-.6-.5 1.1-1.9 1.5-1.5\"/><path d=\"m12 22.4c4.2.4 8.4-1.1 11.4-4.1.4-.4 2.1 1 1.6 1.5-3.4 3.5-8.3 5.2-13.1 4.8-.9 0-.5-2.2.1-2.2\"/></g><g fill=\"#664e27\"><path d=\"m35.9 30.3c4.2 8 12.7 8 16.9 0 .2-.4-.3-.6-1-1-4.2 3.3-11.1 3-14.9 0-.6.4-1.2.6-1 1\"/><path d=\"m11.2 30.3c4.2 8 12.7 8 16.9 0 .2-.4-.3-.6-1-1-4.2 3.3-11.1 3-14.9 0-.7.4-1.2.6-1 1\"/></g>",
        label: 'sad'
      },
      rage: {
        icon: "<circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#ef5350\"/><path d=\"m41 49.7c-5.8-4.8-12.2-4.8-18 0-.7.6-1.3-.4-.8-1.3 1.8-3.4 5.3-6.5 9.8-6.5s8.1 3.1 9.8 6.5c.5.8-.1 1.8-.8 1.3\" fill=\"#302424\"/><path d=\"m10.2 24.9c-1.5 4.7.6 10 5.3 12.1 4.6 2.2 10 .5 12.7-3.7l-6.9-7.7-11.1-.7\" fill=\"#fff\"/><g fill=\"#302424\"><path d=\"m14.2 25.8c-1.4 2.9-.1 6.4 2.8 7.7 2.9 1.4 6.4.1 7.7-2.8 1-1.9-9.6-6.8-10.5-4.9\"/><path d=\"m10.2 24.9c1.6-1 3.5-1.5 5.4-1.5 1.9 0 3.8.5 5.6 1.3 1.7.8 3.3 2 4.6 3.4 1.2 1.5 2.2 3.2 2.4 5.1-1.3-1.3-2.6-2.4-4-3.4-1.4-1-2.8-1.8-4.2-2.4-1.5-.7-3-1.2-4.6-1.7-1.8-.3-3.4-.6-5.2-.8\"/></g><path d=\"m53.8 24.9c1.5 4.7-.6 10-5.3 12.1-4.6 2.2-10 .5-12.7-3.7l6.9-7.7 11.1-.7\" fill=\"#fff\"/><g fill=\"#302424\"><path d=\"m49.8 25.8c1.4 2.9.1 6.4-2.8 7.7-2.9 1.4-6.4.1-7.7-2.8-1-1.9 9.6-6.8 10.5-4.9\"/><path d=\"m53.8 24.9c-1.6-1-3.5-1.5-5.4-1.5-1.9 0-3.8.5-5.6 1.3-1.7.8-3.3 2-4.6 3.4-1.2 1.5-2.2 3.2-2.4 5.1 1.3-1.3 2.6-2.4 4-3.4 1.4-1 2.8-1.8 4.2-2.4 1.5-.7 3-1.2 4.6-1.7 1.8-.3 3.4-.6 5.2-.8\"/></g>",
        label: 'angry'
      }
    };
  
  }).call(this);
  
  (function() {
    var i, len, ref, ref1, ref2, ref3, ref4, script, scripts, src, st,
      indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
  
    st = window.__sharethis__;
  
    if (st.loaded) {
      return;
    }
  
    st.loaded = true;
  
    scripts = document.getElementsByTagName('script') || [];
  
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      src = script.getAttribute('src');
      if (/\/js\/sharethis.js/.test(src)) {
        st.src = src;
        st.cms = (ref = /cms=([a-zA-Z0-9]+)/.exec(src)) != null ? ref[1] : void 0;
        st.product = (ref1 = /product=([a-zA-Z0-9-]+)/.exec(src)) != null ? ref1[1] : void 0;
        st.property = (ref2 = /property=([a-zA-Z0-9]+)/.exec(src)) != null ? ref2[1] : void 0;
        st.source = (ref3 = /source=([a-zA-Z0-9-]+)/.exec(src)) != null ? ref3[1] : void 0;
      }
    }
  
    if (st.cms == null) {
      st.cms = 'unknown';
    }
  
    st.href = document.location.href;
  
    if (st.source == null) {
      st.source = 'sharethis.js';
    }
  
    if (st.property == null) {
      st.property = 'anonymous';
    }
  
    if (st.product == null) {
      st.product = 'unknown';
    }
  
    if (ref4 = st.product, indexOf.call(st.PRODUCTS, ref4) < 0) {
      st.product = 'unknown';
    }
  
    st.initialize = function(options) {
      st.init = function(config) {
        st.config = config;
        return window.__sharethis__docReady(function() {
          var j, len1, product, ref5, results;
          if (typeof window.onShareThisLoaded === "function") {
            window.onShareThisLoaded();
          }
          ref5 = st.PRODUCTS;
          results = [];
          for (j = 0, len1 = ref5.length; j < len1; j++) {
            product = ref5[j];
            results.push(st.load(product, config[product]));
          }
          return results;
        });
      };
      if (st.config) {
        return st.init(st.config);
      }
      if (st.property !== 'anonymous') {
        return st.js("https://buttons-config.sharethis.com/js/" + st.property + ".js");
      } else {
        return setTimeout((function() {
          return st.init({});
        }), 10);
      }
    };
  
    st.initialize();
  
    st.ibl();
  
    st.ecommerce();
  
    st.floc();
  
  }).call(this);
  
  var __stdos__ = __stdos__ || {};
  
  var tpcCookiesEnableCheckingDone = false;
  var tpcCookiesEnabledStatus = true;
  
  if (typeof(__stdos__.data) == "undefined") {
      __stdos__.data = {
          bInit: false,
          pageInfo: {},
          resetPageData: function() {
              __stdos__.data.pageInfo.hostname = "";
              __stdos__.data.pageInfo.location = "";
              __stdos__.data.pageInfo.product = "DOS2"
              __stdos__.data.pageInfo.url = "";
              __stdos__.data.pageInfo.source = ""
  
          },
          init: function() {
              if (!__stdos__.data.bInit) {
                  __stdos__.data.bInit = true;
                  __stdos__.data.resetPageData();
                  var b = document.location.href;
                  var a = "",
                      c = "";
                  __stdos__.data.set("fcmp", typeof(window.__cmp) == 'function', "pageInfo");
                  __stdos__.data.set("fcmpv2", typeof(window.__tcfapi) == 'function', "pageInfo");
                  __stdos__.data.set("has_segmentio", typeof(window.analytics && window.analytics.identify) == 'function', "pageInfo");
                  __stdos__.data.set("url", b, "pageInfo");
                  __stdos__.data.set("title", document.title, "pageInfo");
                  a = (new Date()).getTime().toString();
                  c = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
                  __stdos__.data.validateRefDomain();
                  __stdos__.data.set("hostname", document.location.hostname, "pageInfo");
                  __stdos__.data.set("location", document.location.pathname, "pageInfo")
              }
          },
          validateRefDomain: function() {
              var a = __stdos__.data.get("refDomain", "pageInfo");
              if (!a) {
                  this.setRefDomain(window.document.referrer)
              }
          },
          setRefDomain: function(a) {
              if (a.length == 0) {
                  return
              }
              var b = a.replace("http://", "").replace("https://", "").split("/");
              if (b.length > 0) {
                  a = (typeof(b[0]) != "undefined") ? b[0] : a;
                  var refQuery = (typeof(b[1]) != "undefined") ? b[1] : "";
                  __stdos__.data.set("refQuery", refQuery, "pageInfo");
                  __stdos__.data.set("refDomain", a, "pageInfo")
              }
          },
          set: function(a, c, b) {
              if (typeof(c) == "number" || typeof(c) == "boolean") {
                  __stdos__.data[b][a] = c
              } else {
                  if (typeof(c) == "undefined" || c == null) {} else {
                      __stdos__.data[b][a] = encodeURIComponent(decodeURIComponent(unescape(c.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")));
                      if (a == "url" || a == "location" || a == "image") {
                          try {
                              __stdos__.data[b][a] = encodeURIComponent(decodeURIComponent(decodeURI(c.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")))
                          } catch (d) {
                              __stdos__.data[b][a] = encodeURIComponent(decodeURIComponent(unescape(c.replace(/<[^<>]*>/gi, " ")).replace(/%/gi, "%25")))
                          }
                      }
                  }
              }
          },
          get: function(a, b) {
              try {
                  if (__stdos__.data[b] && __stdos__.data[b][a]) {
                      return decodeURIComponent(__stdos__.data[b][a])
                  } else {
                      return false
                  }
              } catch (c) {
                  return false
              }
          },
          unset: function(a, b) {
              if (__stdos__.data[b] && typeof(__stdos__.data[b][a]) != "undefined") {
                  delete __stdos__.data[b][a]
              }
          },
          bindEvent: function(element, eventName, eventHandler) {
              if (element.addEventListener) {
                  element.addEventListener(eventName, eventHandler, false);
              } else if (element.attachEvent) {
                  element.attachEvent('on' + eventName, eventHandler);
              }
          },
          debug: function(endpoint, event) {
            __stdos__.data.init();
            var a = __stdos__.data.pageInfo;
            var c = "";
            var b;
            for (b in a) {
                c += b + "=" + a[b] + "&"
            }
            c = c.substring(0, c.length - 1);
  
            var loggerUrl = "https://l.sharethis.com/";
            loggerUrl += endpoint;
            loggerUrl += "?event=" + event;
            loggerUrl += "&" + c;
  
            var e = new Image(1, 1);
            e.src = loggerUrl;
            e.onload = function() {
                return
            };
          },
          parseCookie: function(name, cookie) {
              cookie = "; " + cookie
              var parts = cookie.split("; "+name+"=");
              if(parts.length === 2) {
                  return parts.pop().split(';').shift();
              }else {
                  return null;
              }
          },
          writeCookie: function(name, value, max_age)  {
            if (!max_age) {
              max_age = 33696000
            }
            var host = (window && window.location && window.location.hostname) || '';
            var parts = host.split('.');
            var domain = "";
            if (parts.length > 1) {
              domain = "domain=." + parts.slice(-2).join('.');
            }
            var samesite_secure = "";
            try {
              document.cookie = "st_samesite=1;SameSite=None;Secure";
              if (__stdos__.data.parseCookie("st_samesite", document.cookie)) {
                samesite_secure = "SameSite=None;Secure"
                document.cookie = "st_samesite=1;max-age=0;SameSite=None;Secure";
              }
            } catch (e) {}
            document.cookie = name + "=" + value + ";" + domain + ";path=/;max-age=" + max_age + ";" + samesite_secure;
          },
          setConsent: function(consent) {
              for(var consent_key in consent) {
                   __stdos__.data.set(consent_key,consent[consent_key],"pageInfo");
                   window.__sharethis__[consent_key] = consent[consent_key];
              }
          },
          getEUConsent: function(c) {
  
            function once(fn, context) { 
              var result;
              return function() { 
                if(fn) {
                  result = fn.apply(context || this, arguments);
                  fn = null;
                }
                return result;
              };
            }
  
            var done = once(c);
  
            // set usprivacy first if we have it
            var usprivacy = __stdos__.data.parseCookie("usprivacy", document.cookie);
            if (usprivacy) __stdos__.data.setConsent({
              usprivacy: usprivacy
            });
  
            // keep track of how long it takes to get consent
            var start = Date.now();
            
            var useCookie = once(function() {
  
              // check for first party cookies
              var euconsent_v2 = __stdos__.data.parseCookie("euconsent-v2", document.cookie);
              if (euconsent_v2 !== null) {
  
                // use the first party cookie if it exists
                __stdos__.data.setConsent({
                  gdpr_consent: euconsent_v2,
                  gdpr_domain: document.location.hostname,
                  gdpr_method: "cookie"
                });
              }
              done();
            });
  
            if (typeof window.__tcfapi == "function") {
  
              // fallback to cookie in case the tcf api is too slow or unavailable
              var timeout = setTimeout(useCookie, 5000);
  
              // first we try to get the data from the cmp
              // wrap in a try catch since we don't control the tcfapi code on page
              try {
                window.__tcfapi("getTCData", 2, function (data) {
                  if (data && data.tcString) {
                    var gdpr_domain = (data.isServiceSpecific)
                      ? document.location.hostname : ".consensu.org";
                    __stdos__.data.setConsent({
                      consent_duration: Date.now() - start,
                      gdpr_consent: data.tcString,
                      gdpr_domain: gdpr_domain,
                      gdpr_method: "api"
                    });
                    clearTimeout(timeout);
                    done();
                  } else {
  
                    // fallback to cookie if there is no data
                    useCookie();
                  }
                });
              } catch (e) {
  
                // fallback to cookie if there is an error
                useCookie();
              }
            } else {
  
              // fallback to cookie if the tcfapi doesn't exist
              useCookie();
            }
          }
      };
      __stdos__.data.resetPageData()
  }
  __stdos__.logger = {
    loggerUrl: "https://l.sharethis.com/",
      version: "st_sop.js",
      lang: "en",
      constructParamString: function() {
          var a = __stdos__.data.pageInfo;
          var c = "";
          var b;
          for (b in a) {
            if (a[b] == null || a[b] === "") continue;
            c += b + "=" + a[b] + "&"
          }
          return c.substring(0, c.length - 1)
      },
      log: function(a, h, j) {
          __stdos__.data.set("ts" + new Date().getTime(), "", "pageInfo")
          h = __stdos__.logger.loggerUrl
  
          __stdos__.data.getEUConsent(function(consent){
            if (!window.__sharethis__.consent_queue) {
              window.__sharethis__.consent_queue = {} 
            }
            window.__sharethis__.consent_queue.initialized = true;
            if (window.__sharethis__.consent_queue.functions) {
              for (var i = 0; i < window.__sharethis__.consent_queue.functions.length; i++) {
                window.__sharethis__.consent_queue.functions[i]();
              }
              window.__sharethis__.consent_queue.functions = null;
            }
            var g = [
              h,
              a,
              "?event=" + a,
              "&" + __stdos__.logger.constructParamString(),
              "&version=" + __stdos__.logger.version,
              "&lang=" + __stdos__.logger.lang
            ].join('');
            var fpestid = __stdos__.data.parseCookie("fpestid", document.cookie);
            if (fpestid) {
              g += "&fpestid=" + fpestid;
            }
            var description = window.__sharethis__.getDescription();
            if (description) {
              g += "&description=" + encodeURIComponent(description);
            }
            var gdpr_consent = __stdos__.data.get("gdpr_consent", "pageInfo");
            __stdos__.data.setConsent({
              pview_had_consent: (gdpr_consent) ? true : false
            });
            try {
                var c = new XMLHttpRequest();
                c.open("GET", g, true);
                c.withCredentials = true;
                c.onreadystatechange = function() {
                    if (this.readyState == this.DONE) {
                        try {
                          var res = JSON.parse(c.responseText);
                          if (typeof(res) !== "undefined") {
                            __stdos__.data.set("stid", res.stid, "pageInfo");
                            if(res.fpestid) {
                              __stdos__.data.writeCookie("fpestid", res.fpestid, res.fpestid_maxage);
                            }
                            if(res.status === "true") {
                              var product = __stdos__.data.get("product", "pageInfo")
  
                              if ((product === "ecommerce") ||
                                 (product === "privy-share-buttons") ||
                                 (product === "ga")) {
                                return;
                              }
                              window.__sharethis__.loadPixel();
                            }
                            if(res.dmd === "true") {
                              window.__sharethis__.js("https://platform-api.sharethis.com/dmd.js")
                            }
                          }
                          j ? j() : null
                        } catch(e) {
                        }
                    }
                };
                c.send()
            } catch (d) {
                var e = new Image(1, 1);
                e.src = g;
                e.onload = function() {
                    return
                };
                j ? j() : null
            }
  
          })
     }
  };
  
  (function(){
    var _st = window.__sharethis__;
    var st_pview_logged = typeof stlib !== 'undefined' && stlib !== null && stlib.onscriptload;
  
    if (!st_pview_logged && !__stdos__.onscriptload && document.URL.indexOf("edge.sharethis.com") == -1) {
        __stdos__.data.init();
        __stdos__.data.set("cms", _st.cms, "pageInfo");
        __stdos__.data.set("publisher", _st.property, "pageInfo")
        __stdos__.data.set("product", _st.product, "pageInfo")
        __stdos__.data.set("source", _st.source, "pageInfo")
        if (_st.embeds && st.embeds.length > 0 && !_st.is_ie) {
          __stdos__.data.set("embeds_csv", _st.embeds.join(','), "pageInfo")
          /*
          setTimeout(function(){
            //_st.js("https://platform-api.sharethis.com/rhombus.js")
          }, 3000)
          */
        }
        __stdos__.data.set("sop", true, "pageInfo")
        __stdos__.onscriptload = true;
        __stdos__.logger.log("pview");
    }
  })();
  
  
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['custom-share-buttons'] = function() {
      var $button, $buttons, i, j, len, len1, results;
      $buttons = document.querySelectorAll('.st-custom-button');
      if ($buttons.length === 0) {
        return;
      }
      for (i = 0, len = $buttons.length; i < len; i++) {
        $button = $buttons[i];
        st.addEventListener($button, 'click', function() {
          return st.share({
            count_url: this.getAttribute('data-count-url'),
            description: this.getAttribute('data-description'),
            image: this.getAttribute('data-image'),
            message: this.getAttribute('data-message'),
            network: this.getAttribute('data-network'),
            share_url: this.getAttribute('data-share-url'),
            short_url: this.getAttribute('data-short-url'),
            subject: this.getAttribute('data-email-subject'),
            title: this.getAttribute('data-title'),
            url: this.getAttribute('data-url'),
            username: this.getAttribute('data-username')
          });
        });
      }
      results = [];
      for (j = 0, len1 = $buttons.length; j < len1; j++) {
        $button = $buttons[j];
        results.push((function($button) {
          var $count, data_count_url, data_url, network, url;
          network = $button.getAttribute('data-network');
          data_url = $button.getAttribute('data-url');
          data_count_url = $button.getAttribute('data-count-url');
          url = data_count_url || data_url || st.href;
          $count = $button.querySelector('.count');
          if ($count) {
            return st.loadCounts({
              url: url
            }, function(counts) {
              var label, ref, value;
              ref = counts[network] || {}, label = ref.label, value = ref.value;
              if (label && value > 0) {
                if ($count != null) {
                  $count.innerHTML = label;
                }
                return st.removeClass($button, 'st-hide-label');
              } else {
                return st.addClass($button, 'st-hide-label');
              }
            });
          }
        })($button));
      }
      return results;
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['email-list-builder'] = function(config) {
      var $backdrop, $button, $close, $el, $error, $input, $modal, behavior, button_label, color, common_css, container, css, fade_in, headline, hover_css, html, id, message, onClose, onScroll, onSubmit, property, ref, scroll_down, scroll_timeout, send, show, thanks;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      color = config.color, button_label = config.button_label, headline = config.headline, message = config.message, property = config.property, thanks = config.thanks, scroll_down = config.scroll_down;
      behavior = config.behavior, container = config.container, fade_in = config.fade_in, onClose = config.onClose, onSubmit = config.onSubmit;
      if (behavior !== 'show') {
        if (st.storage.get('st_email_list_builder_email_collected')) {
          return;
        }
      }
      if (color == null) {
        color = st.COLORS['sharethis'];
      }
      if (behavior == null) {
        behavior = 'smart';
      }
      if (button_label == null) {
        button_label = 'Join';
      }
      if (fade_in == null) {
        fade_in = true;
      }
      if (headline == null) {
        headline = 'SUBSCRIBE VIA EMAIL';
      }
      if (message == null) {
        message = 'Subscribe to out mailing list to get updates!';
      }
      if (property == null) {
        property = st.property;
      }
      if (scroll_down == null) {
        scroll_down = 0;
      }
      if (thanks == null) {
        thanks = 'Thank you for subscribing!';
      }
      if (container == null) {
        container = document.body;
      }
      if (typeof container === 'string') {
        container = document.getElementById(container);
      }
      ref = st.newElement(null), $el = ref.$el, id = ref.id;
      st.addClass($el, 'st-email-list-builder');
      if (fade_in) {
        st.addClass($el, 'st-hidden');
      }
      common_css = "#" + id + " {\n  " + st.BORDER_BOX + "\n  " + (st.TRANSITION('opacity')) + "\n  bottom: 0;\n  display: block;\n  left: 0;\n  opacity: 1;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: 0;\n  z-index: 9999;\n}\n#" + id + ".st-hidden {\n  opacity: 0;\n}\n#" + id + " .st-backdrop {\n  background: rgba(0, 0, 0, 0.8);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n}\n#" + id + " .st-modal {\n  " + (st.BORDER_RADIUS(6)) + "\n  " + st.BORDER_BOX + "\n  " + (st.TRANSITION('opacity')) + "\n  background: #fff;\n  border-top: 10px solid " + color + ";\n  bottom: 0;\n  color: #333;\n  margin: 100px auto 0;\n  max-width: 90%;\n  opacity: 1;\n  padding: 20px 40px;\n  position: relative;\n  width: 600px;\n  z-index: 20;\n}\n#" + id + " .st-modal.st-hidden {\n  opacity: 0;\n}\n#" + id + " .st-headline {\n  margin-bottom: 5px;\n  font-size: 32px;\n  line-height: 38px;\n}\n#" + id + " .st-message {\n  margin-bottom: 25px;\n  font-size: 18px;\n  line-height: 24px;\n}\n#" + id + " .st-error {\n  color: red;\n  font-size: 14px;\n  line-height: 26px;\n}\n#" + id + " input {\n  " + st.BORDER_BOX + "\n  " + (st.BORDER_RADIUS(4)) + "\n  background-color: #fff;\n  border: 1px solid #aeaeae;\n  color: #333;\n  display: block;\n  font-size: 15px;\n  height: 48px;\n  margin-bottom: 25px;\n  padding: 12px;\n  text-align: center;\n  width: 100%;\n}\n#" + id + " .st-btn {\n  " + st.BORDER_BOX + "\n  " + (st.BORDER_RADIUS(4)) + "\n  " + (st.TRANSITION()) + "\n  background-color: #fff;\n  border: 0;\n  background: " + color + ";\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 18px;\n  height: 48px;\n  line-height: 48px;\n  min-width: 120px;\n  padding: 0 20px;\n}\n#" + id + " .st-close {\n  " + (st.BOX_SHADOW('0 0 20px black')) + "\n  " + (st.BORDER_RADIUS(18)) + "\n  background: #555;\n  border: 3px solid white;\n  cursor: pointer;\n  font-size: 24px;\n  height: 36px;\n  padding-top: 1px;\n  position: absolute;\n  right: -15px;\n  top: -23px;\n  width: 36px;\n}";
      hover_css = "#" + id + " .st-btn:hover {\n}";
      css = common_css;
      if (!st.mobile) {
        css += hover_css;
      }
      st.css(css);
      html = "<div class=\"st-backdrop\"></div>\n<div class=\"st-modal\">\n  <div class=\"st-headline\">" + headline + "</div>\n  <div class=\"st-message\">" + message + "</div>\n  <div class=\"st-error\"></div>\n  <input class=\"st-email\" type=\"text\" placeholder=\"you@domain.com\" />\n  <div class=\"st-btn\">" + button_label + "</div>\n  <div class=\"st-close\">\n    " + st.ICONS['close'] + "\n  </div>\n</div>";
      $el.innerHTML = html;
      $backdrop = $el.querySelector('.st-backdrop');
      $button = $el.querySelector('.st-btn');
      $close = $el.querySelector('.st-close');
      $error = $el.querySelector('.st-error');
      $input = $el.querySelector('input');
      $modal = $el.querySelector('.st-modal');
      show = function() {
        var onScroll, seen_at;
        if (behavior !== 'show') {
          seen_at = st.storage.get('st_email_list_builder_seen_at');
          if (Date.now() - seen_at < st.WEEK) {
            return;
          }
          st.storage.set('st_email_list_builder_seen_at', Date.now());
        }
        if (container != null) {
          container.appendChild($el);
        }
        if (0 === scroll_down) {
          return setTimeout((function() {
            return st.removeClass($el, 'st-hidden');
          }), 10);
        } else {
          onScroll = function(e) {};
          st.addEventListener(document, 'scroll', function(e) {
            var scroll_timeout;
            if (scroll_timeout) {
              clearTimeout(scroll_timeout);
            }
            return scroll_timeout = setTimeout((function() {
              if (st.getScrollDepth() > scroll_down) {
                st.removeEventListener(document, 'scroll', onScroll);
                return st.removeClass($el, 'st-hidden');
              }
            }), 1000);
          });
          return st.addEventListener(document, 'scroll', onScroll);
        }
      };
      st.addEventListener($backdrop, 'click', function() {
        st.close($el);
        return typeof onClose === "function" ? onClose() : void 0;
      });
      st.addEventListener($close, 'click', function() {
        st.close($el);
        return typeof onClose === "function" ? onClose() : void 0;
      });
      st.addEventListener($input, 'keydown', function(e) {
        if (st.isEnter(e)) {
          send();
        }
        return $error.innerHTML = '';
      });
      st.addEventListener($button, 'click', function() {
        return send();
      });
      st.addEventListener(document, 'keydown', function(e) {
        if (st.isEsc(e)) {
          st.close($el);
          return typeof onClose === "function" ? onClose() : void 0;
        }
      });
      send = function() {
        var email, url;
        email = $el.querySelector('.st-email').value;
        url = st.href;
        if (!st.isValidEmail(email)) {
          $error.innerHTML = 'Please enter a valid email';
          return;
        }
        st.send(st.API + "/v1.0/email-list-builder/collect", {
          email: email,
          property: property
        });
        st.log({
          event: 'elb-submit',
          url: url
        });
        st.emit('email-submitted', {
          email: email,
          property: property,
          url: url
        });
        st.storage.set('st_email_list_builder_collected', true);
        st.addClass($modal, 'st-hidden');
        return setTimeout((function() {
          html = "<div class=\"st-headline\">" + thanks + "</div>";
          $modal.innerHTML = html;
          st.removeClass($modal, 'st-hidden');
          return setTimeout((function() {
            st.close($el);
            return typeof onSubmit === "function" ? onSubmit(email) : void 0;
          }), 2500);
        }), 500);
      };
      if (behavior === 'show' || 0 !== scroll_down) {
        return show();
      } else {
        setTimeout((function() {
          return show();
        }), 60 * 1000);
        scroll_timeout = null;
        onScroll = function(e) {
          return st.addEventListener(document, 'scroll', function(e) {
            if (scroll_timeout) {
              clearTimeout(scroll_timeout);
            }
            return scroll_timeout = setTimeout((function() {
              if (st.getScrollDepth() > 60) {
                st.removeEventListener(document, 'scroll', onScroll);
                return show();
              }
            }), 1000);
          });
        };
        return st.addEventListener(document, 'scroll', onScroll);
      }
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['gdpr-compliance-tool'] = function(config) {
      var _xhr, color, commandQueue, display, publisher_name, publisher_purposes, scope;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      if (window.__cmp) {
        return;
      }
      color = config.color, display = config.display, publisher_name = config.publisher_name, publisher_purposes = config.publisher_purposes, scope = config.scope;
      if (color == null) {
        color = '#2e7d32';
      }
      if (publisher_name == null) {
        publisher_name = '';
      }
      if (publisher_purposes == null) {
        publisher_purposes = [];
      }
      commandQueue = [];
      st.addEventListener('message', function(event) {
        return window.__cmp.receiveMessage(event);
      });
      window.__cmp = function(command, parameter, callback) {
        return commandQueue.push({
          command: command,
          paramter: parameter,
          callback: callback
        });
      };
      window.__cmp.commandQueue = commandQueue;
      window.__cmp.receiveMessage = function(event) {
        var data;
        data = event && event.data && event.data.__cmpCall;
        if (data) {
          return commandQueue.push({
            callId: data.callId,
            command: data.command,
            parameter: data.parameter,
            event: event
          });
        }
      };
      window.__cmp.config = {
        storeConsentGlobally: scope === 'global',
        publisherName: publisher_name,
        publisherPurposeList: publisher_purposes,
        color: color
      };
      if (display === "always") {
        __cmp('showConsentTool');
        return st.js("https://c.sharethis.mgr.consensu.org/cmp.js");
      } else if (display === "eu") {
        _xhr = new XMLHttpRequest();
        _xhr.open("GET", "https://c.sharethis.mgr.consensu.org/is_eu");
        _xhr.responseType = "json";
        _xhr.onload = (function(_this) {
          return function() {
            var ref;
            if ((ref = _xhr.response) != null ? ref.is_eu : void 0) {
              __cmp('showConsentTool');
              return st.js("https://c.sharethis.mgr.consensu.org/cmp.js");
            }
          };
        })(this);
        return _xhr.send();
      }
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['gdpr-compliance-tool-v2'] = function(config) {
      var _xhr, background_color, color, display, gear_color, gear_position, language, publisher_name, publisher_purposes, publisher_restrictions, scope, text_color;
      if (config == null) {
        config = {};
      }
  
      /*
      config = { 
        background_color: '#000000' 
        color: '#9900ef'
        display: 'always'
        enabled: true
        gear_color: ''
        gear_position: 'bottom_left'
        language: 'en'
        publisher_name: 'ShareThis'
        scope: 'global'
        text_color: '#ffffff'
      }
       */
      if (!config.enabled) {
        return;
      }
      background_color = config.background_color, color = config.color, display = config.display, gear_color = config.gear_color, gear_position = config.gear_position, language = config.language, publisher_name = config.publisher_name, publisher_purposes = config.publisher_purposes, publisher_restrictions = config.publisher_restrictions, scope = config.scope, text_color = config.text_color;
      if (language == null) {
        language = 'en';
      }
      if (publisher_name == null) {
        publisher_name = '';
      }
      if (publisher_purposes == null) {
        publisher_purposes = [];
      }
      if (publisher_restrictions == null) {
        publisher_restrictions = {};
      }
      window.__cmpconfig = {
        background_color: background_color,
        color: color,
        gear_color: gear_color,
        gear_position: gear_position,
        global: scope !== 'publisher',
        language: language,
        publisher_name: publisher_name,
        publisher_restrictions: publisher_restrictions,
        purposes: publisher_purposes,
        text_color: text_color
      };
      if (display === "always") {
        return st.js("https://c.sharethis.mgr.consensu.org/cmp-v2.js");
      } else if (display === "eu") {
        _xhr = new XMLHttpRequest();
        _xhr.open("GET", "https://c.sharethis.mgr.consensu.org/is_eu");
        _xhr.responseType = "json";
        _xhr.onload = (function(_this) {
          return function() {
            var ref;
            if ((ref = _xhr.response) != null ? ref.is_eu : void 0) {
              return st.js("https://c.sharethis.mgr.consensu.org/cmp-v2.js");
            }
          };
        })(this);
        return _xhr.send();
      }
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['image-share-buttons'] = function(config) {
      var $el, $image, $images, alignment, container, enter, exit, i, id, inline_buttons, len, networks, omit_class, onLoad, over_buttons, over_image, padding, radius, ref, size, spacing, src, timeout;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      alignment = config.alignment, container = config.container, omit_class = config.omit_class, onLoad = config.onLoad, padding = config.padding, networks = config.networks, radius = config.radius, size = config.size, spacing = config.spacing;
      if (networks == null) {
        networks = ['facebook', 'twitter', 'pinterest', 'email'];
      }
      if (omit_class == null) {
        omit_class = '';
      }
      if (padding == null) {
        padding = 10;
      }
      if (radius == null) {
        radius = 0;
      }
      if (size == null) {
        size = 40;
      }
      if (spacing == null) {
        spacing = 8;
      }
      if (typeof container === 'string') {
        container = document.getElementById(container);
      }
      ref = st.newElement(container), $el = ref.$el, id = ref.id;
      st.addClass($el, 'st-image-share-buttons');
      $el.style.position = 'absolute';
      inline_buttons = st.load('inline-share-buttons', {
        alignment: alignment,
        id: id,
        enabled: true,
        networks: networks,
        padding: padding,
        radius: radius,
        size: size,
        spacing: spacing,
        onLoad: function() {
          st.addClass($el, 'st-hidden');
          return typeof onLoad === "function" ? onLoad() : void 0;
        }
      });
      timeout = null;
      over_buttons = false;
      over_image = false;
      enter = function($img) {
        var left, ref1, src, top;
        if (omit_class) {
          if (st.hasClass($img, omit_class)) {
            return;
          }
          if (st.hasClass($img.parentNode.parentNode, omit_class)) {
            return;
          }
          if (st.hasClass($img.parentNode, omit_class)) {
            return;
          }
        }
        ref1 = st.position($img, container), left = ref1.left, top = ref1.top;
        src = $img.getAttribute('src');
        $el.style.width = $img.width + 'px';
        if ($img.height < 200 || $img.width < 200) {
          return;
        }
        if (timeout) {
          clearTimeout(timeout);
        }
        return timeout = setTimeout((function() {
          if (inline_buttons != null) {
            inline_buttons.modify('image', src);
          }
          $el.style.left = st.px(left);
          $el.style.top = st.px(top);
          $el.style.padding = st.px(spacing);
          $el.style.boxSizing = 'border-box';
          st.removeClass($el, 'st-hide');
          st.removeClass($el, 'st-hidden');
          return inline_buttons != null ? inline_buttons.resize() : void 0;
        }), 10);
      };
      exit = function(next) {
        if (timeout) {
          clearTimeout(timeout);
        }
        return timeout = setTimeout((function() {
          if (over_image || over_buttons) {
            return;
          }
          st.addClass($el, 'st-hide');
          return typeof next === "function" ? next() : void 0;
        }), 10);
      };
      $images = document.querySelectorAll('img');
      for (i = 0, len = $images.length; i < len; i++) {
        $image = $images[i];
        src = $image.getAttribute('src');
        if (/\.(gif|jpg|jpeg|png)$/i.test(src)) {
          st.addEventListener($image, 'mouseenter', function() {
            over_image = true;
            return enter(this);
          });
          st.addEventListener($image, 'mouseleave', function() {
            over_image = false;
            return exit();
          });
        }
      }
      st.addEventListener($el, 'mouseenter', function() {
        return over_buttons = true;
      });
      return st.addEventListener($el, 'mouseleave', function() {
        over_buttons = false;
        return exit();
      });
    };
  
  }).call(this);
  
  (function() {
    var DOMAINS, load, st;
  
    st = window.__sharethis__;
  
    DOMAINS = {
      airbnb: 'https://www.airbnb.com/rooms/',
      amazon: 'https://www.amazon.com/gp/profile/',
      blogger: 'https://www.blogger.com/',
      digg: 'https://www.digg.com/',
      discord: ' https://discord.gg/',
      etsy: 'https://www.etsy.com/shop/',
      facebook: 'https://www.facebook.com/',
      flipboard: 'https://flipboard.com/',
      houzz: 'https://www.houzz.com/user/',
      github: 'https://www.github.com/',
      instagram: 'https://www.instagram.com/',
      medium: 'https://www.medium.com/',
      messenger: 'https://www.messenger.com/',
      linkedin: 'https://www.linkedin.com/',
      odnoklassniki: 'https://ok.ru/',
      patreon: 'https://www.patreon.com/',
      pinterest: 'https://www.pinterest.com/',
      quora: 'https://www.quora.com/',
      reddit: 'https://www.reddit.com/',
      snapchat: 'https://www.snapchat.com/',
      soundcloud: 'https://soundcloud.com/',
      spotify: 'https://open.spotify.com/',
      telegram: 'https://t.me/',
      tiktok: 'https://www.tiktok.com/@',
      tripadvisor: 'https://www.tripadvisor.com/Profile/',
      tumblr: 'https://www.tumblr.com/',
      twitch: 'https://www.twitch.tv/',
      twitter: 'https://www.twitter.com/',
      vk: 'https://www.vk.com/',
      vimeo: 'https://vimeo.com/',
      wechat: 'https://web.wechat.com/',
      weibo: 'https://www.weibo.com/',
      yelp: 'https://www.yelp.com/',
      youtube: 'https://www.youtube.com/',
      zillow: 'https://www.zillow.com/profile/'
    };
  
    st.loader['inline-follow-buttons'] = function(config) {
      var $el, $els, i, len, results;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      if (config.id) {
        $el = document.getElementById(config.id);
        if ($el) {
          return load($el, config);
        }
      } else {
        $els = document.querySelectorAll('.sharethis-inline-follow-buttons');
        results = [];
        for (i = 0, len = $els.length; i < len; i++) {
          $el = $els[i];
          results.push(load($el, config));
        }
        return results;
      }
    };
  
    load = function($el, config) {
      var $button, $buttons, action, action_enable, action_pos, alignment, alignment_opposite, background_color, class_names, color, common_css, css, fade_in, fn, hover_css, html, i, id, index, j, language, len, len1, network, network_css, networks, onLoad, padding, profiles, radius, resize, size, spacing, text_color, text_color_filter, url;
      action = config.action, action_enable = config.action_enable, action_pos = config.action_pos, alignment = config.alignment, color = config.color, fade_in = config.fade_in, id = config.id, language = config.language, networks = config.networks, onLoad = config.onLoad, padding = config.padding, profiles = config.profiles, radius = config.radius, size = config.size, spacing = config.spacing, url = config.url, text_color = config.text_color, background_color = config.background_color;
      alignment_opposite = alignment === 'left' ? 'right' : 'left';
      if (action == null) {
        action = 'Follow us:';
      }
      if (action_enable == null) {
        action_enable = true;
      }
      if (action_pos == null) {
        action_pos = 'top';
      }
      if (alignment == null) {
        alignment = 'left';
      }
      if (color == null) {
        color = 'social';
      }
      if (fade_in == null) {
        fade_in = true;
      }
      if (language == null) {
        language = 'en';
      }
      if (networks == null) {
        networks = ['facebook', 'twitter', 'pinterest'];
      }
      if (padding == null) {
        padding = 10;
      }
      if (profiles == null) {
        profiles = {};
      }
      if (radius == null) {
        radius = 0;
      }
      if (size == null) {
        size = 40;
      }
      if (spacing == null) {
        spacing = 8;
      }
      if (id == null) {
        id = "st-" + (st.uid());
      }
      $el.setAttribute('id', id);
      st.addClass($el, 'st-inline-follow-buttons');
      st.addClass($el, 'st-#{action_pos}');
      if (fade_in) {
        st.addClass($el, 'st-hidden');
      }
      common_css = "#" + id + " {\n  " + st.FONT_FAMILY + ";\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: " + alignment + ";\n  z-index: 94034;\n}\n#" + id + ".st-animated {\n  " + (st.TRANSITION('opacity')) + "\n}\n#" + id + " .st-left {\n  display: inline-block;\n  padding-top: " + (st.px(size / 4)) + ";\n  padding-right: 6px;\n}\n#" + id + " .st-top {\n  padding-bottom: " + (st.px(size / 8)) + ";\n}\n#" + id + " .st-right {\n  display: inline-block;\n  padding-top: " + (st.px(size / 4)) + ";\n  padding-left: 4px;\n}\n#" + id + ".st-hidden {\n  opacity: " + (fade_in ? 0 : 1) + ";\n}\n#" + id + " .st-btn {\n  " + st.BORDER_BOX + "\n  " + (st.TRANSITION(['opacity', 'top'])) + "\n  " + (st.BORDER_RADIUS(radius)) + "\n  border: " + (color === 'white' ? 'solid 0.5px #ccc' : 'none') + ";\n  cursor: pointer;\n  display: inline-block;\n  height: " + (st.px(size)) + ";\n  line-height: " + (st.px(size)) + ";\n  margin-right: " + (spacing ? st.px(spacing) : 0) + ";\n  padding: 0 " + (st.px(padding)) + ";\n  position: relative;\n  text-align: center;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n}\n#" + id + " .st-btn:last-child {\n  margin-right: 0;\n}\n#" + id + " .st-btn > svg {\n  height: " + (st.px(size / 2)) + ";\n  width: " + (st.px(size / 2)) + ";\n  position: relative;\n  top: " + (st.px(size / 4)) + ";\n  vertical-align: top;\n}\n#" + id + " .st-btn > img {\n  height: " + (st.px(size / 2)) + ";\n  width: " + (st.px(size / 2)) + ";\n  position: relative;\n  top: " + (st.px(size / 4)) + ";\n  vertical-align: top;\n}\n#" + id + " .st-btn > span {\n  " + (st.TRANSITION()) + "\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: " + (st.px(30 + Math.floor(size * 15 / 16))) + ";\n  opacity: 1;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n}\n#" + id + ".st-justified {\n  display: flex;\n  text-align: center;\n}\n#" + id + ".st-justified .st-btn {\n  " + st.FLEX + "\n}";
      hover_css = "#" + id + " .st-btn:hover {\n  opacity: .8;\n  top: -4px;\n}";
      text_color_filter = st.getFilter(text_color);
      network_css = ((function() {
        var i, len, results;
        results = [];
        for (i = 0, len = networks.length; i < len; i++) {
          network = networks[i];
          results.push("#" + id + " .st-btn[data-network='" + network + "'] {\n  background-color: " + ((function() {
            switch (color) {
              case 'social':
                return st.COLORS[network];
              case 'black':
                return '#000';
              case 'gray':
                return '#eee';
              case 'custom':
                return background_color;
              case 'white':
                return '#fff';
              default:
                return '#fff';
            }
          })()) + "\n}\n#" + id + " .st-btn[data-network='" + network + "'] img {\n  filter: " + ((function() {
            switch (color) {
              case 'black':
                return 'invert(0%) sepia(100%) saturate(22%) hue-rotate(45deg) brightness(107%) contrast(105%)';
              case 'gray':
                return 'invert(100%) sepia(100%) saturate(22%) hue-rotate(45deg) brightness(107%) contrast(105%)';
              case 'custom':
                return text_color_filter;
              default:
                return '';
            }
          })()) + "\n}\n#" + id + " .st-btn[data-network='" + network + "'] > span {\n  color: " + ((function() {
            switch (color) {
              case 'white':
                return st.COLORS[network];
              case 'black':
                return '#fff';
              case 'gray':
                return '#000';
              case 'custom':
                return '#fff';
              case 'social':
                return '#fff';
              default:
                return '#fff';
            }
          })()) + "\n}");
        }
        return results;
      })()).join('\n');
      css = common_css;
      css += hover_css;
      css += network_css;
      st.css(css);
      html = '';
      networks = st.filterInvalidNetworks(networks, Object.keys(DOMAINS));
      if (action_enable && (action != null ? action.length : void 0) > 0 && action_pos !== 'right') {
        html += "<div class='st-" + action_pos + "'>\n  <span>" + action + "</span>\n</div>";
      }
      for (index = i = 0, len = networks.length; i < len; index = ++i) {
        network = networks[index];
        class_names = ['st-btn'];
        if (index === 0) {
          class_names.push('st-first');
        }
        if (index === networks.length - 1) {
          class_names.push('st-last');
        }
        html += "<div class='" + (class_names.join(' ')) + "' data-network='" + network + "'>\n  " + (color === 'white' ? st.ICONS_WHITE[network] : st.ICONS[network]) + "\n</div>";
      }
      if (action_enable && (action != null ? action.length : void 0) > 0 && action_pos === 'right') {
        html += "<div class='st-" + action_pos + "'>\n  <span>" + (st.capitalize(action)) + "</span>\n</div>";
      }
      $el.innerHTML = html;
      $buttons = $el.querySelectorAll('.st-btn');
      resize = function() {
        var $button, actual, available, j, k, len1, results;
        available = $el.offsetWidth;
        actual = function() {
          var $button, j, len1, width;
          width = action_enable ? 70 : 0;
          for (j = 0, len1 = $buttons.length; j < len1; j++) {
            $button = $buttons[j];
            if ($button.style.display === 'none') {
              continue;
            }
            if (alignment === 'justified') {
              width += 160;
            } else {
              width += $button.offsetWidth + spacing;
            }
          }
          return width;
        };
        for (j = 0, len1 = $buttons.length; j < len1; j++) {
          $button = $buttons[j];
          $button.style.display = 'inline-block';
        }
        results = [];
        for (index = k = $buttons.length - 1; k >= 0; index = k += -1) {
          $button = $buttons[index];
          if (actual() > available) {
            results.push($button.style.display = 'none');
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      st.addEventListener(window, 'resize', resize);
      fn = function($button) {
        return st.addEventListener($button, 'click', function() {
          var follow_url;
          network = $button.getAttribute('data-network');
          follow_url = DOMAINS[network] + (profiles[network] || '');
          if (network === 'youtube' && profiles[network]) {
            follow_url += '?sub_confirmation=1';
          }
          if (network === 'tumblr' && profiles[network]) {
            follow_url = DOMAINS[network].replace('www', profiles[network]);
          }
          st.follow({
            follow_url: follow_url,
            network: network,
            url: url || $el.getAttribute('data-url')
          });
          return typeof onLoad === "function" ? onLoad() : void 0;
        });
      };
      for (j = 0, len1 = $buttons.length; j < len1; j++) {
        $button = $buttons[j];
        fn($button);
      }
      resize();
      if (fade_in) {
        st.addClass($el, 'st-animated');
      }
      if (fade_in) {
        st.removeClass($el, 'st-hidden');
      }
      if (typeof onLoad === "function") {
        onLoad();
      }
      return {
        $buttons: $buttons,
        $el: $el,
        id: id,
        resize: resize
      };
    };
  
  }).call(this);
  
  (function() {
    var load, st;
  
    st = window.__sharethis__;
  
    st.loader['inline-reaction-buttons'] = function(config) {
      var $el, $els, i, len, results;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      if (config.id) {
        $el = document.getElementById(config.id);
        return load($el, config);
      } else {
        $els = document.querySelectorAll('.sharethis-inline-reaction-buttons');
        results = [];
        for (i = 0, len = $els.length; i < len; i++) {
          $el = $els[i];
          results.push(load($el, config));
        }
        return results;
      }
    };
  
    load = function($el, config) {
      var $buttons, alignment, class_names, common_css, css, data_url, fade_in, hover_css, html, i, id, index, item, k, label_span, language, len, min_count, onLoad, onReact, padding, reaction, reactions, ref, ref1, resize, selected_reaction, size, url;
      alignment = config.alignment, id = config.id, language = config.language, min_count = config.min_count, padding = config.padding, reactions = config.reactions, size = config.size, url = config.url;
      fade_in = config.fade_in, onLoad = config.onLoad, onReact = config.onReact;
      data_url = $el.getAttribute('data-url');
      if (fade_in == null) {
        fade_in = true;
      }
      if (min_count == null) {
        min_count = 0;
      }
      if (reactions == null) {
        reactions = (function() {
          var results;
          results = [];
          for (k in st.REACTIONS) {
            results.push(k);
          }
          return results;
        })();
      }
      if (padding == null) {
        padding = 10;
      }
      if (language == null) {
        language = 'en';
      }
      if (size == null) {
        size = 48;
      }
      if (url == null) {
        url = data_url || st.href;
      }
      selected_reaction = st.storage.get("st_reaction_" + url);
      if (id == null) {
        id = "st-" + (st.uid());
      }
      $el.setAttribute('id', id);
      st.addClass($el, ["st-inline-reaction-buttons", "st-" + alignment, selected_reaction ? "st-reacted" : void 0, fade_in ? 'st-hidden' : void 0, language ? 'st-has-labels' : void 0, language !== 'en' ? "st-lang-" + language : void 0]);
      common_css = "#" + id + " {\n  " + st.FONT_FAMILY + "\n  " + (st.TRANSITION('opacity')) + "\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: " + alignment + ";\n}\n#" + id + ".st-hidden {\n  opacity: " + (fade_in ? 0 : 1) + ";\n}\n#" + id + " .st-btn {\n  " + st.BORDER_BOX + "\n  " + (st.TRANSITION()) + "\n  display: inline-block;\n  font-size: " + (st.px(size / 2)) + ";\n  line-height: " + (st.px(size / 2)) + ";\n  opacity: 1;\n  padding: " + (st.px(padding)) + ";\n  position: relative;\n  text-align: center;\n  vertical-align: top;\n  white-space: nowrap;\n  width: " + (st.px(size + 2 * padding)) + ";\n}\n#" + id + " .st-btn > svg {\n  display: block;\n  height: " + (st.px(size)) + ";\n  margin: auto;\n  width: " + (st.px(size)) + ";\n  vertical-align: top;\n}\n#" + id + " .st-btn > span {\n  " + (st.TRANSITION('font-size')) + ";\n  color: #555;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  vertical-align: top;\n}\n#" + id + " .st-btn .st-count.st-grow {\n  font-size: 18px;\n}\n#" + id + " .st-btn.st-hide-count .st-count {\n  opacity: 0;\n}\n#" + id + " .st-btn .st-text {\n  display: none;\n  font-weight: bold;\n  line-height: 12px;\n  white-space: normal;\n  word-break: break-all;\n}\n#" + id + ".st-justified {\n  display: flex;\n  text-align: center;\n}\n#" + id + ".st-justified .st-btn {\n  " + st.FLEX + "\n}\n#" + id + " .st-btn.st-selected {\n  " + (st.TRANSFORM("scale(1.2)")) + "\n}\n#" + id + ".st-reacted .st-btn:not(.st-selected) {\n  filter: grayscale(100%);\n}";
      hover_css = "#" + id + ":not(.st-reacted) .st-btn:hover {\n  " + (st.TRANSFORM("scale(1.2)")) + "\n  cursor: pointer;\n}\n#" + id + ":not(.st-reacted) .st-btn:active {\n  " + (st.TRANSFORM("scale(1.4)")) + "\n}\n#" + id + ".st-has-labels:not(.st-reacted) .st-btn:hover .st-count {\n  display: none;\n}\n#" + id + ".st-has-labels:not(.st-reacted) .st-btn:hover .st-text {\n  display: block;\n}\n#" + id + ".st-has-labels:not(.st-reacted) .st-btn:hover span {\n  font-size: 10px;\n}";
      css = common_css;
      if (!st.mobile) {
        css += hover_css;
      }
      st.css(css);
      html = '';
      for (index = i = 0, len = reactions.length; i < len; index = ++i) {
        reaction = reactions[index];
        if (!st.REACTIONS[reaction]) {
          continue;
        }
        item = st.REACTIONS[reaction];
        class_names = ['st-btn'];
        if (reaction === selected_reaction) {
          class_names.push('st-selected');
        }
        if (index === 0) {
          class_names.push('st-first');
        }
        if (index === reactions.length - 1) {
          class_names.push('st-last');
        }
        if (language) {
          label_span = "<span class=\"st-text\">\n  " + ((ref = st.i18n[item.label]) != null ? (ref1 = ref[language]) != null ? ref1.toUpperCase() : void 0 : void 0) + "\n</span>";
        } else {
          label_span = '';
        }
        html += "<div class='" + (class_names.join(' ')) + "' data-reaction='" + reaction + "'>\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 64 64\"\n    enable-background=\"new 0 0 64 64\"\n  >\n    " + item.icon + "\n  </svg>\n  <span class=\"st-count\"></span>\n  " + label_span + "\n</div>";
      }
      $el.innerHTML = html;
      $buttons = $el.querySelectorAll('.st-btn');
      resize = function() {
        var $button, actual, available, j, len1, results, shrink_by;
        available = $el.offsetWidth;
        actual = function() {
          var $button, j, len1, width;
          width = 0;
          for (j = 0, len1 = $buttons.length; j < len1; j++) {
            $button = $buttons[j];
            width += size + 2 * padding;
          }
          return width;
        };
        if (actual() > available) {
          shrink_by = available / actual();
          results = [];
          for (j = 0, len1 = $buttons.length; j < len1; j++) {
            $button = $buttons[j];
            $button.style.padding = st.px(padding * shrink_by);
            $button.style.width = st.px((size + 2 * padding) * shrink_by);
            $button.querySelector('svg').style.width = st.px(size * shrink_by);
            results.push($button.querySelector('svg').style.height = st.px(size * shrink_by));
          }
          return results;
        }
      };
      return st.loadCounts({
        url: url
      }, function(counts) {
        var $button, fn, j, l, label, len1, len2, ref2, ref3, value;
        for (j = 0, len1 = $buttons.length; j < len1; j++) {
          $button = $buttons[j];
          reaction = $button.getAttribute('data-reaction');
          ref2 = counts[reaction] || {}, label = ref2.label, value = ref2.value;
          if ((ref3 = $button.querySelector('.st-count')) != null) {
            ref3.innerHTML = label;
          }
          if (label && value >= min_count) {
            st.removeClass($button, 'st-hide-count');
          } else {
            st.addClass($button, 'st-hide-count');
          }
        }
        resize();
        if (fade_in) {
          st.removeClass($el, 'st-hidden');
        }
        st.addEventListener(window, 'resize', resize);
        fn = function($button) {
          return st.addEventListener($button, 'click', function() {
            if (st.hasClass($el, 'st-reacted')) {
              return;
            }
            reaction = $button.getAttribute('data-reaction');
            st.addClass($el, 'st-reacted');
            st.addClass($button, 'st-selected');
            st.react({
              reaction: reaction,
              url: url
            });
            st.inc($button.querySelector('.st-count'));
            st.storage.set("st_reaction_" + url, reaction);
            return typeof onReact === "function" ? onReact(reaction) : void 0;
          });
        };
        for (l = 0, len2 = $buttons.length; l < len2; l++) {
          $button = $buttons[l];
          fn($button);
        }
        return typeof onLoad === "function" ? onLoad() : void 0;
      });
    };
  
  }).call(this);
  
  (function() {
    var load, st;
  
    st = window.__sharethis__;
  
    st.loader['inline-share-buttons'] = function(config) {
      var $el, $els, i, id, len, ref, results;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      if (config.id) {
        $el = document.getElementById(config.id);
        if ($el) {
          return load($el, config);
        }
      } else if (config.container) {
        if (typeof config.container === 'string') {
          config.container = document.getElementById(config.container);
        }
        ref = st.newElement(config.container), $el = ref.$el, id = ref.id;
        config.id = id;
        if ($el) {
          return load($el, config);
        }
      } else {
        $els = document.querySelectorAll('.sharethis-inline-share-buttons');
        results = [];
        for (i = 0, len = $els.length; i < len; i++) {
          $el = $els[i];
          results.push(load($el, config));
        }
        return results;
      }
    };
  
    load = function($el, config) {
      var $button, $buttons, $total, $total_label, alignment, alignment_opposite, background_color, class_names, color, common_css, css, description, fade_in, fn, font_size, hover_css, html, i, id, image, index, j, k, label, label_span, labels, language, len, len1, len2, message, min_count, mobile_css, modify, network, network_css, networks, onLoad, padding, radius, ref, resize, show_mobile_buttons, show_total, size, spacing, subject, text_color, text_color_filter, title, url, use_native_counts, username;
      color = config.color, fade_in = config.fade_in, onLoad = config.onLoad, alignment = config.alignment, font_size = config.font_size, language = config.language, padding = config.padding, radius = config.radius, size = config.size, spacing = config.spacing, id = config.id, labels = config.labels, min_count = config.min_count, networks = config.networks, show_total = config.show_total, use_native_counts = config.use_native_counts, show_mobile_buttons = config.show_mobile_buttons, url = config.url, title = config.title, image = config.image, description = config.description, username = config.username, message = config.message, subject = config.subject, text_color = config.text_color, background_color = config.background_color;
      alignment_opposite = alignment === 'left' ? 'right' : 'left';
      if (alignment == null) {
        alignment = 'left';
      }
      if (background_color == null) {
        background_color = '#B581A3';
      }
      if (color == null) {
        color = 'social';
      }
      if (fade_in == null) {
        fade_in = true;
      }
      if (font_size == null) {
        font_size = 12;
      }
      if (text_color == null) {
        text_color = '#fff';
      }
      if (language == null) {
        language = 'en';
      }
      if (min_count == null) {
        min_count = 0;
      }
      if (networks == null) {
        networks = ['facebook', 'twitter', 'pinterest', 'email', 'sharethis'];
      }
      if (padding == null) {
        padding = 10;
      }
      if (radius == null) {
        radius = 0;
      }
      if (show_mobile_buttons == null) {
        show_mobile_buttons = st.mobile;
      }
      if (size == null) {
        size = 40;
      }
      if (spacing == null) {
        spacing = 8;
      }
      if (subject == null) {
        subject = st.i18n['subjects'][language];
      }
      if (use_native_counts == null) {
        use_native_counts = true;
      }
      if (id == null) {
        id = "st-" + (st.uid());
      }
      $el.setAttribute('id', id);
      st.addClass($el, ["st-" + alignment, language !== 'en' ? "st-lang-" + language : void 0, labels === 'counts' || labels === 'cta' ? 'st-has-labels' : void 0, fade_in ? 'st-hidden' : void 0, 'st-inline-share-buttons']);
      common_css = "#" + id + " {\n  " + st.FONT_FAMILY + ";\n  direction: ltr;\n  display: block;\n  opacity: 1;\n  text-align: " + alignment + ";\n  z-index: 94034;\n}\n#" + id + ".st-animated {\n  " + (st.TRANSITION('opacity')) + "\n}\n#" + id + ".st-hidden {\n  opacity: " + (fade_in ? 0 : 1) + ";\n}\n#" + id + ".st-hide {\n  display: none;\n}\n#" + id + " .st-btn {\n  " + st.BORDER_BOX + "\n  " + (st.TRANSITION(['opacity', 'top'])) + "\n  " + (st.BORDER_RADIUS(radius)) + "\n  border: " + (color === 'white' ? 'solid 1px #ccc' : 'none') + ";\n  cursor: pointer;\n  display: inline-block;\n  font-size: " + (st.px(font_size)) + ";\n  height: " + (st.px(size)) + ";\n  line-height: " + (st.px(size)) + ";\n  margin-right: " + (spacing ? st.px(spacing) : 0) + ";\n  padding: 0 " + (st.px(padding)) + ";\n  position: relative;\n  text-align: center;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n}\n#" + id + " .st-btn:last-child {\n  margin-right: 0;\n}\n#" + id + " .st-btn > svg {\n  height: " + (st.px(size / 2)) + ";\n  width: " + (st.px(size / 2)) + ";\n  position: relative;\n  top: " + (st.px(size / 4)) + ";\n  vertical-align: top;\n}\n#" + id + " .st-btn > img {\n  display: inline-block;\n  height: " + (st.px(size / 2)) + ";\n  width: " + (st.px(size / 2)) + ";\n  position: relative;\n  top: " + (st.px(size / 4)) + ";\n  vertical-align: top;\n}\n#" + id + " .st-btn > span {\n  " + (st.TRANSITION()) + "\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: " + (st.px(30 + Math.floor(size * 15 / 16))) + ";\n  opacity: 1;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n}\n#" + id + ".st-has-labels .st-btn {\n  min-width: " + (st.px(60 + Math.floor(size * 15 / 8))) + ";\n}\n#" + id + ".st-has-labels .st-btn.st-remove-label {\n  min-width: 50px;\n}\n#" + id + ".st-has-labels .st-btn.st-remove-label > span {\n  display: none;\n}\n#" + id + ".st-has-labels .st-btn.st-hide-label > span {\n  display: none;\n}\n#" + id + " .st-total {\n  color: #555;\n  display: inline-block;\n  font-weight: 500;\n  line-height: " + (st.px(.375 * size)) + ";\n  margin-right: 0;\n  max-width: 80px;\n  padding: 4px 8px;\n  text-align: center;\n}\n#" + id + " .st-total.st-hidden {\n  display: none;\n}\n#" + id + " .st-total > span {\n  font-size: " + (st.px(.5 * size)) + ";\n  line-height: " + (st.px(.55 * size)) + ";\n  display: block;\n  padding: 0;\n}\n#" + id + " .st-total > span.st-shares {\n  font-size: " + (st.px(.3 * size)) + ";\n  line-height: " + (st.px(.3 * size)) + ";\n}\n#" + id + ".st-justified {\n  display: flex;\n  text-align: center;\n}\n#" + id + ".st-justified .st-btn {\n  " + st.FLEX + "\n}";
      hover_css = "#" + id + " .st-btn:hover {\n  opacity: .8;\n  top: -4px;\n}";
      mobile_css = "#" + id + " {\n  bottom: 0;";
      text_color_filter = st.getFilter(text_color);
      network_css = ((function() {
        var i, len, results;
        results = [];
        for (i = 0, len = networks.length; i < len; i++) {
          network = networks[i];
          results.push("#" + id + " .st-btn[data-network='" + network + "'] {\n  background-color: " + ((function() {
            switch (color) {
              case 'social':
                return st.COLORS[network];
              case 'black':
                return '#000';
              case 'gray':
                return '#eee';
              case 'custom':
                return background_color;
              case 'white':
                return '#fff';
              default:
                return '#fff';
            }
          })()) + "\n}\n#" + id + " .st-btn[data-network='" + network + "'] img {\n  filter: " + ((function() {
            switch (color) {
              case 'black':
                return 'invert(0%) sepia(100%) saturate(22%) hue-rotate(45deg) brightness(107%) contrast(105%)';
              case 'gray':
                return 'invert(100%) sepia(100%) saturate(22%) hue-rotate(45deg) brightness(107%) contrast(105%)';
              case 'custom':
                return text_color_filter;
              default:
                return '';
            }
          })()) + "\n}\n#" + id + " .st-btn[data-network='" + network + "'] > span {\n  color: " + ((function() {
            switch (color) {
              case 'white':
                return st.COLORS[network];
              case 'black':
                return '#fff';
              case 'gray':
                return '#000';
              case 'custom':
                return text_color;
              case 'social':
                return '#fff';
              default:
                return '#fff';
            }
          })()) + "\n}");
        }
        return results;
      })()).join('\n');
      network_css += "#" + id + " .st-btn[data-network='snapchat'] > span {\n  color: " + (color === 'black' ? '#fff' : '#333') + "};\n}";
      css = common_css;
      if (!st.mobile) {
        css += hover_css;
      }
      css += network_css;
      st.css(css);
      html = '';
      networks = st.filterInvalidNetworks(networks);
      if (!show_mobile_buttons) {
        ref = ['sms'];
        for (i = 0, len = ref.length; i < len; i++) {
          network = ref[i];
          index = networks.indexOf(network);
          if (index > -1) {
            networks.splice(index, 1);
          }
        }
      }
      if (show_total) {
        html += "<div class='st-total st-hidden'>\n  <span class='st-label'></span>\n  <span class='st-shares'>\n    " + (st.capitalize(st.i18n['shares'][language])) + "\n  </span>\n</div>";
      }
      for (index = j = 0, len1 = networks.length; j < len1; index = ++j) {
        network = networks[index];
        class_names = ['st-btn'];
        if (index === 0) {
          class_names.push('st-first');
        }
        if (index === networks.length - 1) {
          class_names.push('st-last');
        }
        label = st.getShareLabel(network, language);
        if (labels !== 'cta') {
          label = '';
        }
        label_span = "<span class='st-label'>" + label + "</span>";
        html += "<div class='" + (class_names.join(' ')) + "' data-network='" + network + "'>\n  " + (color === 'white' ? st.ICONS_WHITE[network] : st.ICONS[network]) + "\n  " + (labels === 'counts' || labels === 'cta' ? label_span : '') + "\n</div>";
      }
      $el.innerHTML = html;
      $buttons = $el.querySelectorAll('.st-btn');
      $total = $el.querySelector('.st-total');
      $total_label = $el.querySelector('.st-total .st-label');
      modify = function(key, value) {
        if (key === 'url') {
          url = value;
        }
        if (key === 'image') {
          return image = value;
        }
      };
      resize = function() {
        var $button, actual, available, k, l, len2, m, results;
        available = $el.offsetWidth;
        actual = function() {
          var $button, k, len2, width;
          width = 0;
          if (show_total) {
            width += $total.offsetWidth;
          }
          for (k = 0, len2 = $buttons.length; k < len2; k++) {
            $button = $buttons[k];
            if ($button.style.display === 'none') {
              continue;
            }
            if (alignment === 'justified') {
              if (st.hasClass($button, 'st-remove-label')) {
                width += 65;
              } else {
                width += 160;
              }
            } else {
              width += $button.offsetWidth + spacing;
            }
          }
          return width;
        };
        for (k = 0, len2 = $buttons.length; k < len2; k++) {
          $button = $buttons[k];
          $button.style.display = 'inline-block';
          st.removeClass($button, 'st-remove-label');
        }
        for (index = l = $buttons.length - 1; l >= 0; index = l += -1) {
          $button = $buttons[index];
          if (actual() > available) {
            st.addClass($button, 'st-remove-label');
          }
        }
        results = [];
        for (index = m = $buttons.length - 1; m >= 0; index = m += -1) {
          $button = $buttons[index];
          if ($button.getAttribute('data-network') === 'sharethis') {
            continue;
          }
          if (actual() > available) {
            results.push($button.style.display = 'none');
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      st.addEventListener(window, 'resize', resize);
      fn = function($button) {
        return st.addEventListener($button, 'click', function() {
          return st.share({
            count_url: $el.getAttribute('data-count-url'),
            description: description || $el.getAttribute('data-description'),
            image: image || $el.getAttribute('data-image'),
            message: message || ($el != null ? $el.getAttribute('data-message') : void 0),
            network: $button.getAttribute('data-network'),
            share_url: $el.getAttribute('data-share-url'),
            short_url: $el.getAttribute('data-short-url'),
            subject: subject || $el.getAttribute('data-email-subject'),
            title: title || ($el != null ? $el.getAttribute('data-title') : void 0),
            url: url || $el.getAttribute('data-url'),
            username: username || $el.getAttribute('data-username')
          });
        });
      };
      for (k = 0, len2 = $buttons.length; k < len2; k++) {
        $button = $buttons[k];
        fn($button);
      }
      if (show_total || labels === 'counts') {
        st.loadCounts({
          url: url || ($el.getAttribute('data-count-url')) || ($el.getAttribute('data-url')) || st.href
        }, function(counts) {
          var l, len3, ref1, ref2, ref3, ref4, value;
          if (show_total) {
            if (((ref1 = counts['total']) != null ? ref1.value : void 0) > min_count) {
              $total_label.innerHTML = ((ref2 = counts['total']) != null ? ref2.label : void 0) || '';
              st.removeClass($total, 'st-hidden');
            } else {
              st.addClass($total, 'st-hidden');
            }
          }
          if (labels === 'counts') {
            for (l = 0, len3 = $buttons.length; l < len3; l++) {
              $button = $buttons[l];
              network = $button.getAttribute('data-network');
              ref3 = counts[network] || {}, label = ref3.label, value = ref3.value;
              if (label && value > min_count) {
                if ((ref4 = $button.querySelector('.st-label')) != null) {
                  ref4.innerHTML = label;
                }
                st.removeClass($button, 'st-hide-label');
              } else {
                st.addClass($button, 'st-hide-label');
              }
            }
          }
          resize();
          if (fade_in) {
            st.addClass($el, 'st-animated');
          }
          if (fade_in) {
            st.removeClass($el, 'st-hidden');
          }
          return typeof onLoad === "function" ? onLoad() : void 0;
        });
      } else {
        resize();
        if (fade_in) {
          st.addClass($el, 'st-animated');
        }
        if (fade_in) {
          st.removeClass($el, 'st-hidden');
        }
        if (typeof onLoad === "function") {
          onLoad();
        }
      }
      return {
        $buttons: $buttons,
        $el: $el,
        id: id,
        modify: modify,
        resize: resize
      };
    };
  
  }).call(this);
  
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['powr-social-feed'] = function(config) {
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      return st.js("https://platform-api.sharethis.com/powr.js?platform=sharethis");
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['powr-form-builder'] = function(config) {
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      return st.js("https://platform-api.sharethis.com/powr.js?platform=sharethis");
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['powr-popup'] = function(config) {
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      return st.js("https://platform-api.sharethis.com/powr.js?platform=sharethis");
    };
  
  }).call(this);
  
  
  (function() {
    var load, st,
      indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
  
    st = window.__sharethis__;
  
    st.loader['sticky-share-buttons'] = function(config) {
      var $el, $els, i, id, len, ref, ref1, results;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      if (config.id) {
        $el = document.getElementById(config.id);
        if ($el) {
          return load($el, config);
        }
      } else if (config.container) {
        if (typeof config.container === 'string') {
          config.container = document.getElementById(config.container);
        }
        ref = st.newElement(config.container), $el = ref.$el, id = ref.id;
        config.id = id;
        if ($el) {
          return load($el, config);
        }
      } else {
        $els = document.querySelectorAll('.sharethis-sticky-share-buttons');
        if ($els.length === 0) {
          ref1 = st.newElement(), $el = ref1.$el, id = ref1.id;
          return load($el, config);
        } else {
          results = [];
          for (i = 0, len = $els.length; i < len; i++) {
            $el = $els[i];
            results.push(load($el, config));
          }
          return results;
        }
      }
    };
  
    load = function($el, config) {
      var $button, $buttons, $toggle, $total, $total_label, alignment, alignment_opposite, background_color, class_names, color, common_css, container, css, description, fn, font_size, hide_desktop, hover_css, html, i, id, image, index, j, k, label, label_span, labels, language, len, len1, len2, message, min_count, mobile_breakpoint, mobile_css, network, network_css, networks, onLoad, padding, radius, ref, resize, responsive_css, scrollbar_width, show_mobile, show_mobile_buttons, show_toggle, show_total, size, slide_in, spacing, subject, text_color, text_color_filter, title, top, url, use_native_counts, username;
      onLoad = config.onLoad, alignment = config.alignment, color = config.color, container = config.container, font_size = config.font_size, hide_desktop = config.hide_desktop, padding = config.padding, radius = config.radius, size = config.size, spacing = config.spacing, id = config.id, labels = config.labels, language = config.language, min_count = config.min_count, networks = config.networks, show_toggle = config.show_toggle, show_total = config.show_total, mobile_breakpoint = config.mobile_breakpoint, show_mobile = config.show_mobile, slide_in = config.slide_in, top = config.top, use_native_counts = config.use_native_counts, show_mobile_buttons = config.show_mobile_buttons, url = config.url, title = config.title, image = config.image, description = config.description, username = config.username, message = config.message, subject = config.subject, text_color = config.text_color, background_color = config.background_color;
      alignment_opposite = alignment === 'left' ? 'right' : 'left';
      if (alignment == null) {
        alignment = 'left';
      }
      if (background_color == null) {
        background_color = '#B581A3';
      }
      if (color == null) {
        color = 'social';
      }
      if (hide_desktop == null) {
        hide_desktop = false;
      }
      if (text_color == null) {
        text_color = '#fff';
      }
      if (labels == null) {
        labels = 'counts';
      }
      if (language == null) {
        language = 'en';
      }
      if (min_count == null) {
        min_count = 0;
      }
      if (mobile_breakpoint == null) {
        mobile_breakpoint = 0;
      }
      if (networks == null) {
        networks = ['facebook', 'twitter', 'pinterest', 'email', 'sharethis', 'sms'];
      }
      if (padding == null) {
        padding = 12;
      }
      if (radius == null) {
        radius = 0;
      }
      if (show_mobile == null) {
        show_mobile = false;
      }
      if (show_mobile_buttons == null) {
        show_mobile_buttons = st.mobile;
      }
      if (show_toggle == null) {
        show_toggle = true;
      }
      if (show_total == null) {
        show_total = false;
      }
      if (size == null) {
        size = 48;
      }
      if (slide_in == null) {
        slide_in = true;
      }
      if (subject == null) {
        subject = st.i18n['subjects'][language];
      }
      if (top == null) {
        top = 100;
      }
      if (use_native_counts == null) {
        use_native_counts = true;
      }
      if (id == null) {
        id = "st-" + (st.uid());
      }
      $el.setAttribute('id', id);
      scrollbar_width = alignment === 'right' ? st.getScrollbarWidth() : 0;
      scrollbar_width = 0;
      st.addClass($el, ['st-sticky-share-buttons', "st-" + alignment, show_toggle ? 'st-toggleable' : void 0, labels === 'counts' || labels === 'cta' ? 'st-has-labels' : void 0, show_total ? 'st-show-total' : void 0, slide_in ? 'st-hidden' : void 0, language !== 'en' ? "st-lang-" + language : void 0]);
      common_css = "#" + id + " {\n  " + st.FONT_FAMILY + ";\n  " + (st.TRANSITION()) + "\n  backface-visibility: hidden;\n  display: " + (!hide_desktop ? 'block' : 'none') + ";\n  position: fixed;\n  opacity: 1;\n  text-align: left;\n  top: " + (st.px(top)) + ";\n  z-index: 94034;\n}\n#" + id + ".st-" + alignment + " {\n  " + alignment + ": " + (st.px(scrollbar_width)) + ";\n}\n#" + id + ".st-hidden.st-" + alignment + " {\n  " + alignment + ": -" + (st.px(size)) + ";\n}\n#" + id + ".st-hidden {\n  width: " + (st.px(2 * size)) + ";\n}\n#" + id + " > div {\n  clear: " + alignment + ";\n  float: " + alignment + ";\n}\n#" + id + " .st-btn {\n  " + st.BORDER_BOX + "\n  " + (st.TRANSITION()) + "\n  border: " + (color === 'white' ? 'solid 0.5px #ccc' : 'none') + ";\n  cursor: pointer;\n  display: inline-block;\n  font-size: " + (st.px(font_size)) + ";\n  height: " + (st.px(size)) + ";\n  line-height: " + (st.px(size / 2)) + ";\n  margin-bottom: " + (spacing ? st.px(spacing) : 0) + ";\n  opacity: 1;\n  overflow: hidden;\n  padding: " + (st.px(padding)) + ";\n  position: relative;\n  text-align: left;\n  top: 0;\n  vertical-align: top;\n  white-space: nowrap;\n  width: " + (st.px(size)) + ";\n}\n#" + id + " .st-btn.st-first {\n  border-top: " + (color === 'white' ? 'solid 1px #ccc' : 'none') + ";\n  border-top-" + alignment_opposite + "-radius: " + (st.px(radius)) + ";\n}\n#" + id + " .st-btn.st-last {\n  border-bottom: " + (color === 'white' ? 'solid 1px #ccc' : 'none') + ";\n  border-bottom-" + alignment_opposite + "-radius: " + (st.px(radius)) + ";\n}\n#" + id + " .st-btn > svg {\n  " + (st.TRANSITION()) + "\n  height: " + (st.px(size / 2)) + ";\n  margin-left: 0;\n  vertical-align: top;\n  width: " + (st.px(size / 2)) + ";\n}\n#" + id + " .st-btn > img {\n  " + (st.TRANSITION()) + "\n  height: " + (st.px(size / 2)) + ";\n  margin-left: 0;\n  vertical-align: top;\n  width: " + (st.px(size / 2)) + ";\n}\n#" + id + " .st-btn > span {\n  " + (st.TRANSITION()) + "\n  color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  left: -35px;\n  letter-spacing: 0.5px;\n  opacity: 0;\n  padding: 0 6px;\n  position: relative;\n  vertical-align: top;\n  filter: alpha(opacity=0);\n}\n#" + id + " .st-btn.st-hide-label > span {\n  display: none !important;\n}\n#" + id + " .st-total {\n  " + (st.TRANSITION()) + "\n  background: #fff;\n  color: #555;\n  display: inline-block;\n  font-weight: 500;\n  line-height: " + (st.px(.375 * size)) + ";\n  margin-right: 0;\n  min-height: 34px;\n  max-width: 80px;\n  opacity: 1;\n  padding: 4px 0;\n  text-align: center;\n  width: " + (st.px(size)) + ";\n}\n#" + id + " .st-total.st-hidden {\n  display: none;\n}\n#" + id + " .st-total > span {\n  display: block;\n  font-size: " + (st.px(.38 * size)) + ";\n  line-height: " + (st.px(.45 * size)) + ";\n  padding: 0;\n}\n#" + id + " .st-total > span.st-shares {\n  font-size: " + (st.px(.23 * size)) + ";\n  line-height: " + (st.px(.23 * size)) + ";\n}\n#" + id + " .st-toggle {\n  " + alignment + ": -" + (st.px(size + scrollbar_width)) + ";\n  " + (st.TRANSITION()) + "\n  background: #ccc;\n  border-bottom-" + alignment_opposite + "-radius: " + (st.px(radius)) + ";\n  color: white;\n  cursor: pointer;\n  font-size: " + (st.px(.5 * size)) + ";\n  line-height: " + (st.px(.5 * size)) + ";\n  position: relative;\n  text-align: center;\n  width: " + (st.px(size)) + ";\n}\n#" + id + ".st-hidden .st-toggle {\n  border-top-" + alignment_opposite + "-radius: " + (st.px(radius)) + ";\n}\n#" + id + ".st-" + alignment + " .st-toggle .st-" + alignment + " {\n  display: inline-block;\n}\n#" + id + ".st-" + alignment + ".st-hidden .st-toggle .st-" + alignment + " {\n  display: none;\n}\n#" + id + ".st-" + alignment + " .st-toggle .st-" + alignment_opposite + " {\n  display: none;\n}\n#" + id + ".st-" + alignment + ".st-hidden .st-toggle .st-" + alignment_opposite + " {\n  display: inline-block;\n}";
      mobile_css = "#" + id + " {\n  bottom: 0;\n  display: " + (show_mobile ? 'flex' : 'none') + ";\n  left: 0;\n  right: 0;\n  top: auto;\n  width: 100%;\n}\n#" + id + ".st-hidden {\n  bottom: -" + (st.px(size)) + ";\n  width: 100%;\n}\n#" + id + ".st-hidden.st-left {\n  left: 0;\n}\n#" + id + ".st-hidden.st-right {\n  right: 0;\n}\n#" + id + " > div {\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  clear: none;\n  flex: 1;\n  float: none;\n}\n#" + id + " .st-total {\n  background: #fff;\n  padding: 6px 8px;\n}\n#" + id + " .st-btn {\n  " + (st.BORDER_RADIUS('0 !important')) + "\n  text-align: center;\n  width: auto;\n}\n#" + id + " .st-btn > span {\n  display: none;\n}\n#" + id + " .st-toggle {\n  display: none;\n}";
      if (show_mobile && !document.body.style.paddingBottom) {
        mobile_css += "body { padding-bottom: 48px; }";
      }
      responsive_css = "@media (max-width: " + (st.px(mobile_breakpoint)) + ") {\n  " + mobile_css + "\n}";
      hover_css = "#" + id + ":hover .st-toggle {\n  " + alignment + ": 0;\n}\n#" + id + ".st-hidden:hover .st-toggle {\n  " + alignment + ": " + (st.px(size)) + ";\n}\n#" + id + ".st-toggleable:hover .st-btn.st-last {\n  border-bottom-" + alignment_opposite + "-radius: 0;\n}\n#" + id + ".st-toggleable:hover .st-btn.st-last:hover {\n  border-bottom-" + alignment_opposite + "-radius: " + (st.px(radius)) + ";\n}\n#" + id + " .st-btn:hover {\n  border-bottom-" + alignment_opposite + "-radius: " + (st.px(radius)) + ";\n  border-top-" + alignment_opposite + "-radius: " + (st.px(radius)) + ";\n}\n#" + id + ".st-has-labels .st-btn:hover {\n  width: " + (st.px(st.i18n['sticky-width'][language])) + ";\n}\n#" + id + ":not(.st-has-labels) .st-btn:hover {\n  width: " + (st.px(1.3 * size)) + ";\n}\n#" + id + " .st-btn.st-hide-label:hover {\n  width: " + (st.px(1.3 * size)) + ";\n}\n#" + id + " .st-btn:hover > svg {\n  margin-left: 5px;\n}\n#" + id + " .st-btn:hover > img {\n  margin-left: 5px;\n}\n#" + id + " .st-btn:hover > span {\n  opacity: 1;\n  display: inline-block;\n  left: 0;\n  filter: alpha(opacity=100);\n}\n@media (max-width: " + (st.px(mobile_breakpoint)) + ") {\n  #" + id + " .st-btn:hover > svg {\n    margin-left: 0;\n  }\n  #" + id + " .st-btn:hover > span {\n    display: none;\n  }\n}";
      text_color_filter = st.getFilter(text_color);
      network_css = ((function() {
        var i, len, results;
        results = [];
        for (i = 0, len = networks.length; i < len; i++) {
          network = networks[i];
          results.push("#" + id + " .st-btn[data-network='" + network + "'] {\n  background-color: " + ((function() {
            switch (color) {
              case 'social':
                return st.COLORS[network];
              case 'black':
                return '#000';
              case 'gray':
                return '#eee';
              case 'custom':
                return background_color;
              case 'white':
                return '#fff';
              default:
                return '#fff';
            }
          })()) + "\n}\n#" + id + " .st-btn[data-network='" + network + "'] img {\n  filter: " + ((function() {
            switch (color) {
              case 'black':
                return 'invert(0%) sepia(100%) saturate(22%) hue-rotate(45deg) brightness(107%) contrast(105%)';
              case 'gray':
                return 'invert(100%) sepia(100%) saturate(22%) hue-rotate(45deg) brightness(107%) contrast(105%)';
              case 'custom':
                return text_color_filter;
              default:
                return '';
            }
          })()) + "\n}\n#" + id + " .st-btn[data-network='" + network + "'] > span {\n  color: " + ((function() {
            switch (color) {
              case 'white':
                return st.COLORS[network];
              case 'black':
                return '#fff';
              case 'gray':
                return '#000';
              case 'custom':
                return text_color;
              case 'social':
                return '#fff';
              default:
                return '#fff';
            }
          })()) + "\n}");
        }
        return results;
      })()).join('\n');
      network_css += "#" + id + " .st-btn[data-network='snapchat'] > span {\n  color: " + (color === 'black' ? '#fff' : '#333') + "};\n}";
      if (network === 'blm') {
        network_css += "#" + id + " .st-btn[data-network='blm']:hover {\n  width: 165px;\n}";
      }
      css = common_css;
      if (!st.mobile) {
        css += hover_css;
      }
      if (!st.mobile) {
        css += responsive_css;
      }
      if (st.mobile) {
        css += mobile_css;
      }
      css += network_css;
      st.css(css);
      if (!show_mobile_buttons) {
        ref = ['sms'];
        for (i = 0, len = ref.length; i < len; i++) {
          network = ref[i];
          index = networks.indexOf(network);
          if (index > -1) {
            networks.splice(index, 1);
          }
        }
      }
      html = '';
      networks = st.filterInvalidNetworks(networks);
      if (show_total) {
        html += "<div class='st-total st-hidden'>\n  <span class='st-label'></span>\n  <span class='st-shares'>\n    " + (st.capitalize(st.i18n['shares'][language])) + "\n  </span>\n</div>";
      }
      for (index = j = 0, len1 = networks.length; j < len1; index = ++j) {
        network = networks[index];
        class_names = ['st-btn'];
        if (index === 0) {
          class_names.push('st-first');
        }
        if (index === networks.length - 1) {
          class_names.push('st-last');
        }
        label = st.getShareLabel(network, language);
        if (labels !== 'cta') {
          label = '';
        }
        label_span = "<span class='st-label'>" + label + "</span>";
        html += "<div class='" + (class_names.join(' ')) + "' data-network='" + network + "'>\n  " + (color === 'white' ? st.ICONS_WHITE[network] : st.ICONS[network]) + "\n  " + (labels === 'counts' || labels === 'cta' ? label_span : '') + "\n</div>";
      }
      if (show_toggle) {
        html += "<div class=\"st-toggle\">\n  <div class=\"st-left\">\n    " + st.ICONS['arrow_left'] + "\n  </div>\n  <div class=\"st-right\">\n    " + st.ICONS['arrow_right'] + "\n  </div>\n</div>";
      }
      $el.innerHTML = html;
      $buttons = $el.querySelectorAll('.st-btn');
      $toggle = $el.querySelector('.st-toggle');
      $total = $el.querySelector('.st-total');
      $total_label = $el.querySelector('.st-total .st-label');
      st.addEventListener($toggle, 'click', function() {
        return st.toggleClass($el, 'st-hidden');
      });
      resize = function() {
        var $button, k, l, len2, len3, max, ref1, results;
        max = 100;
        if (st.mobile || window.innerWidth < mobile_breakpoint) {
          max = 6;
        }
        if (show_total) {
          max--;
        }
        if (indexOf.call(networks, 'sharethis') >= 0) {
          max--;
        }
        if (indexOf.call(networks, 'sms') >= 0) {
          max--;
        }
        if (indexOf.call(networks, 'whatsapp') >= 0) {
          max--;
        }
        if (indexOf.call(networks, 'messenger') >= 0) {
          max--;
        }
        if (indexOf.call(networks, 'wechat') >= 0) {
          max--;
        }
        for (k = 0, len2 = $buttons.length; k < len2; k++) {
          $button = $buttons[k];
          $button.style.display = 'inline-block';
        }
        results = [];
        for (index = l = 0, len3 = $buttons.length; l < len3; index = ++l) {
          $button = $buttons[index];
          if ((ref1 = $button.getAttribute('data-network')) === 'sharethis' || ref1 === 'sms' || ref1 === 'messenger' || ref1 === 'whatsapp' || ref1 === 'wechat') {
            continue;
          }
          if (max-- > 0) {
            continue;
          }
          results.push($button.style.display = 'none');
        }
        return results;
      };
      st.addEventListener(window, 'resize', resize);
      fn = function($button) {
        return st.addEventListener($button, 'click', function() {
          return st.share({
            count_url: $el != null ? $el.getAttribute('data-count-url') : void 0,
            description: description || ($el != null ? $el.getAttribute('data-description') : void 0),
            image: image || ($el != null ? $el.getAttribute('data-image') : void 0),
            message: message || ($el != null ? $el.getAttribute('data-message') : void 0),
            network: $button.getAttribute('data-network'),
            share_url: $el != null ? $el.getAttribute('data-short-url') : void 0,
            subject: subject || $el.getAttribute('data-email-subject'),
            title: title || ($el != null ? $el.getAttribute('data-title') : void 0),
            url: url || ($el != null ? $el.getAttribute('data-url') : void 0),
            username: username || ($el != null ? $el.getAttribute('data-username') : void 0)
          });
        });
      };
      for (k = 0, len2 = $buttons.length; k < len2; k++) {
        $button = $buttons[k];
        fn($button);
      }
      if (show_total || labels === 'counts') {
        return st.loadCounts({
          url: url || ($el != null ? $el.getAttribute('data-url') : void 0)
        }, function(counts) {
          var l, len3, ref1, ref2, ref3, value;
          if (show_total) {
            if (((ref1 = counts['total']) != null ? ref1.value : void 0) > min_count) {
              $total_label.innerHTML = counts['total'].label;
              st.removeClass($total, 'st-hidden');
            } else {
              st.addClass($total, 'st-hidden');
            }
          }
          if (labels === 'counts') {
            for (l = 0, len3 = $buttons.length; l < len3; l++) {
              $button = $buttons[l];
              network = $button.getAttribute('data-network');
              ref2 = counts[network] || {}, label = ref2.label, value = ref2.value;
              if (label && value > min_count) {
                if ((ref3 = $button.querySelector('.st-label')) != null) {
                  ref3.innerHTML = label;
                }
                st.removeClass($button, 'st-hide-label');
              } else {
                st.addClass($button, 'st-hide-label');
              }
            }
          }
          resize();
          setTimeout((function() {
            return st.removeClass($el, 'st-hidden');
          }), 10);
          return typeof onLoad === "function" ? onLoad() : void 0;
        });
      } else {
        resize();
        setTimeout((function() {
          return st.removeClass($el, 'st-hidden');
        }), 10);
        return typeof onLoad === "function" ? onLoad() : void 0;
      }
    };
  
  }).call(this);
  
  (function() {
    var st;
  
    st = window.__sharethis__;
  
    st.loader['video-share-buttons'] = function(config) {
      var alignment, container, networks, omit_class, onLoad, padding, radius, size, spacing;
      if (config == null) {
        config = {};
      }
      if (!config.enabled) {
        return;
      }
      alignment = config.alignment, container = config.container, omit_class = config.omit_class, onLoad = config.onLoad, padding = config.padding, networks = config.networks, radius = config.radius, size = config.size, spacing = config.spacing;
      if (networks == null) {
        networks = ['facebook', 'twitter', 'pinterest', 'email'];
      }
      if (omit_class == null) {
        omit_class = '';
      }
      if (padding == null) {
        padding = 10;
      }
      if (radius == null) {
        radius = 0;
      }
      if (size == null) {
        size = 40;
      }
      if (spacing == null) {
        spacing = 8;
      }
      st.checkClass = function(checkClass, el) {};
      return st.getEmbeds(function(el, type, url) {
        var $el, contAlign, id, inline_buttons, ref;
        if (type !== 'video') {
          return;
        }
        ref = st.newElement(el), $el = ref.$el, id = ref.id;
        if (omit_class) {
          if (st.hasClass(el.parentNode.parentNode, omit_class)) {
            return;
          }
          if (st.hasClass(el.parentNode, omit_class)) {
            return;
          }
        }
        st.addClass($el, 'st-video-share-buttons');
        $el.style.width = el.offsetWidth.toString() + 'px';
        $el.style.margin = '0';
        $el.style.padding = '0';
        if (el.tagName.toLowerCase() === 'blockquote') {
          $el.style.margin = 'auto';
        }
        $el.setAttribute('data-url', el.src);
        if (!st.is_ie) {
          contAlign = getComputedStyle(el.parentElement).textAlign;
          if ('center' === contAlign) {
            $el.style.margin = 'auto';
          }
        }
        el.parentNode.insertBefore($el, el.nextSibling);
        return inline_buttons = st.load('inline-share-buttons', {
          alignment: alignment,
          id: id,
          enabled: true,
          networks: networks,
          padding: padding,
          radius: radius,
          size: size,
          spacing: spacing,
          onLoad: function() {
            st.addClass($el, '');
            return typeof onLoad === "function" ? onLoad() : void 0;
          }
        });
      });
    };
  
  }).call(this);
  
  (function(){window.__sharethis__.md5="b3225d84b4457bf0268973c97fd18a1f";})();
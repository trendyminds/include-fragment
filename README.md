# 📦 Include Fragment

## 🤔 What is this?

This package is a fork/reconception of [GitHub's _fantastic_ Include Fragment Element package](https://github.com/github/include-fragment-element). **You should nearly _always_ prefer it to this package**.

## 🤷‍♂️ Why this package then?

While Include Fragment Element is much more robust this:

- 0️⃣  &nbsp;Has **zero dependencies**
- 🚀  &nbsp;Is <1kB (**443 bytes gzipped**)
- 🌍  &nbsp;Does not require a custom elements polyfill
- 🧙‍♂️  &nbsp;Still allows you to dynamically insert and defer fragments

## ⚡️ Setup and use
1. Install using `npm i @trendyminds/include-fragment`
2. Add the appropriate HTML and a valid `data-src` for your XHR request:

### Before
```html
<div class="tip">
	<div data-include-fragment data-src="/tip">
		Loading tip...
	</div>
</div>
```

### After
```html
<div class="tip">
	<p>You look nice today</p>
</div>
```

## 💡 Tips

- You can defer the loading of a fragment by leaving out the `data-src`. As soon as it's added the MutationObserver will run the XHR request.
- You can provide a custom fallback/error message if the request fails:

### Before
```html
<div class="tip">
	<div data-include-fragment data-src="/a-404-or-non-200-page" data-error="Uh oh!">
		Loading tip...
	</div>
</div>
```

### After
```html
<div class="tip">
	Uh oh!
</div>
```

## 🤝 Browser Support
- Chrome
- Firefox
- Safari
- IE 11+

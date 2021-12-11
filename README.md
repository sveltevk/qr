<div align="center">

[<img width="150" height="150" src="https://user-images.githubusercontent.com/14944123/145690220-40728a82-55fa-47ba-b3a9-1eb33228d030.png">](https://github.com/sveltevk/qr)

[![NPM][npm]][npm-url]
[![VK chat][chat]][chat-url]
[![svelte-v3][svelte]][svelte-url]

</div>

# Svelte VK-QR

Svelte components for [VK-style QR codes](https://github.com/VKCOM/vk-qr).

## Setup

```sh
npm i @sveltevk/qr
```

## Usage

### Base QR Code

[![REPL][repl]](https://svelte.dev/repl/c9c47222228d42dba7847c0e2ea036ec)

```svelte
<script>
    import { Qr } from '@sveltevk/qr';
</script>

<Qr text="Text to encode" qrSize={256} isShowLogo />
```

- `text` _required_
  String to generate a QR code

### Wi-Fi Network config

[![REPL][repl]](https://svelte.dev/repl/531687b55e14497fbd88bfb151d40769)

```svelte
<script>
    import { QrWiFi } from '@sveltevk/qr';
</script>

<QrWiFi ssid="SSID" password="password" authType="WPA" />
```

- `ssid`: Network SSID. Required. Enclose in double quotes if it is an ASCII
  name, but could be interpreted as hex (i.e. `"ABCD"`)

- `authType`: Authentication type. Can be `WEP` or `WPA` or `WPA2-EAP`, or
  `nopass` for no password. Or, omit for no password

- `password`: Password, ignored if `authType="nopass"` (in which case it may be
  omitted). Enclose in double quotes if it is an ASCII name, but could be
  interpreted as hex (i.e. `"ABCD"`)

- `hide`: Optional. True if the network SSID is hidden. Note this was
  mistakenly also used to specify phase 2 method in releases up to 4.7.8 /
  Barcode Scanner 3.4.0. If not a boolean, it will be interpreted as phase 2
  method (see below) for backwards-compatibility

- `eap`: (WPA2-EAP only) EAP method, like `TTLS` or `PWD`

- `anonIdentity`: (WPA2-EAP only) Anonymous identity

- `identity`: (WPA2-EAP only) Identity

- `phase2`: (WPA2-EAP only) Phase 2 method, like `MSCHAPV2`

## Options

An options object containing any custom settings that you want to apply to the
generated QR code. The possible options are:

- `qrSize`: Size of QR code.
  Default is 128

- `className` or `class`: Class name of root SVG element

- `isShowLogo`: Show VK logo in center of QR code
  Default is false

- `isShowBackground`: Show QR background. Default is false

- `backgroundColor`: QR code background HEX color. Works if `isShowBackground`
  is enabled. Default is "#ffffff"

- `foregroundColor`: QR code HEX color

- `logoColor`: Color of logo. Default is "#4680c2"

- `logoData`: Reference to logo as a reference IRI

- `suffix`: SVG elements id postfix

- `ecc`: ECC level in range [0-3] (0 - low, 3 - high)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/@sveltevk/qr.svg?color=blue
[npm-url]: https://npmjs.com/package/@sveltevk/qr
[build]: https://travis-ci.com/sveltevk/qr.svg?branch=master
[build-badge]: https://travis-ci.com/sveltevk/qr
[chat]: https://img.shields.io/badge/VK%20chat-%234a76a8.svg?logo=VK&logoColor=white
[chat-url]: https://vk.me/join/AJQ1d3IXhxgxghIc5PFNiLCd
[repl]: https://img.shields.io/badge/svelte-REPL-red?logoColor=white&style=flat-square
[svelte]: https://img.shields.io/badge/svelte-v3-blueviolet.svg
[svelte-url]: https://svelte.dev

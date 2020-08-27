<script context="module">
  const meCardSymbol = (parameter, value) => {
    return `${parameter}:${value.replace(/([\\;,:])/g, `\\\$1`)};`;
  };
</script>

<script>
  import Qr from "./Qr.svelte";

  /**
   * Network SSID. Required. Enclose in double quotes if it is an ASCII name,
   * but could be interpreted as hex (i.e. `"ABCD"`)
   * @type {string}
   */
  export let ssid;

  /**
   * Authentication type
   * @type {"WEP"|"WPA"|"WPA2-EAP"|"nopass"|""}
   */
  export let authType = "";

  /**
   * Password, ignored if `authType="nopass"` (in which case it may be
   * omitted). Enclose in double quotes if it is an ASCII name, but could be
   * interpreted as hex (i.e. `"ABCD"`)
   * @type {string}
   */
  export let password = undefined;

  /**
   * Optional. True if the network SSID is hidden. Note this was mistakenly
   * also used to specify phase 2 method in releases up to 4.7.8 / Barcode
   * Scanner 3.4.0. If not a boolean, it will be interpreted as phase 2 method
   * (see below) for backwards-compatibility
   * @type {boolean}
   */
  export let hide = undefined;

  /**
   * (WPA2-EAP only) EAP method, like `TTLS` or `PWD`
   * @type {string}
   */
  export let eap = undefined;

  /**
   * (WPA2-EAP only) Anonymous identity
   * @type {string}
   */
  export let anonIdentity = undefined;

  /**
   * (WPA2-EAP only) Identity
   * @type {string}
   */
  export let identity = undefined;

  /**
   * (WPA2-EAP only) Phase 2 method, like `MSCHAPV2`
   * @type {string}
   */
  export let phase2 = undefined;

  const wifiGenerate = (options) => {
    const params = [];

    authType && params.push(meCardSymbol("T", authType));
    params.push(meCardSymbol("S", ssid));
    authType &&
      authType !== "nopass" &&
      params.push(meCardSymbol("P", password));
    hide && params.push(meCardSymbol("H", "true"));

    if (authType === "WPA2-EAP") {
      eap && params.push(meCardSymbol("E", eap));
      anonIdentity && params.push(meCardSymbol("A", anonIdentity));
      identity && params.push(meCardSymbol("I", identity));
      phase2 && params.push(meCardSymbol("PH2", phase2));
    }

    return `WIFI:${params.join("")};`;
  };

  $: code = wifiGenerate({
    ssid,
    authType,
    password,
    hide,
    eap,
    anonIdentity,
    identity,
    phase2,
  });
</script>

<Qr {...Object.assign({}, $$restProps, { text: code })} />

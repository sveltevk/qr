<script>
  import vkQr from "@vkontakte/vk-qr";

  /**
   * String to generate a QR code
   * @type {string}
   * @requires
   */
  export let text;

  /**
   * String to generate a QR code
   * @default 128
   */
  export let qrSize = 128;

  /**
   * Class name of root SVG element
   * @type {string}
   */
  export let className = $$props.class;

  /**
   * Show VK logo in center of QR code
   * @default false
   * @type {boolean}
   */
  export let isShowLogo = false;

  /**
   * Show QR background
   * @default false
   * @type {boolean}
   */
  export let isShowBackground = false;

  /**
   * QR code background HEX color. Works if `isShowBackground` is enabled
   * @default "#ffffff"
   * @type {string}
   */
  export let backgroundColor = "#ffffff";

  /**
   * QR code HEX color
   * @default "#000000"
   * @type {string}
   */
  export let foregroundColor = "#000000";

  /**
   * Color of logo.
   * @default "#4680c2"
   * @type {string}
   */
  export let logoColor = "#4680c2";

  /**
   * Reference to logo as a reference IRI
   * @type {string|null}
   */
  export let logoData = null;

  /**
   * SVG elements id postfix
   * @default "0"
   * @type {string}
   */
  export let suffix = "0";

  /**
   * ECC level in range [0-3] (0 - low, 3 - high)
   * @type {0|1|2|3}
   * @default 3
   */
  export let ecc = 3;

  $: qrSvg = vkQr.createQR(text, {
    qrSize,
    className,
    isShowLogo,
    isShowBackground,
    backgroundColor,
    foregroundColor,
    logoColor,
    logoData,
    suffix,
    ecc,
  });
</script>

{@html qrSvg}

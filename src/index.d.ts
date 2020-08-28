interface QrOptions {
  /**
   * Size of QR code
   * @default 128
   */
  qrSize?: number;

  /**
   * Class name of root SVG element
   */
  className?: string;

  /**
   * Class name of root SVG element
   */
  class?: string;

  /**
   * Show VK logo in center of QR code
   * @default false
   */
  isShowLogo?: boolean;

  /**
   * Show QR background
   * @default false
   */
  isShowBackground?: boolean;

  /**
   * QR code background HEX color. Works if `isShowBackground` is enabled.
   * @default "#ffffff"
   */
  backgroundColor?: string;

  /**
   * QR code HEX color
   */
  foregroundColor?: string;

  /**
   * Color of logo
   * @default "#4680c2"
   */
  logoColor?: string;

  /**
   * Reference to logo as a reference IRI
   */
  logoData?: string | null;

  /**
   * SVG elements id postfix
   */
  suffix?: string;

  /**
   * ECC Level
   */
  ecc?: number;
}

interface QrProps extends QrOptions {
  /**
   * String to generate a QR code
   * @required
   */
  text: string;
}

export class Qr {
  $$prop_def: QrProps;
  $$slot_def: {};
}

interface WiFiDefault extends QrOptions {
  /**
   * Network SSID. Required. Enclose in double quotes if it is an ASCII name,
   * but could be interpreted as hex (i.e. `"ABCD"`)
   */
  ssid: string;

  /**
   * Optional. True if the network SSID is hidden. Note this was mistakenly
   * also used to specify phase 2 method in releases up to 4.7.8 / Barcode
   * Scanner 3.4.0. If not a boolean, it will be interpreted as phase 2 method
   * (see below) for backwards-compatibility
   */
  hide?: boolean;
}

interface WiFiNoPass extends WiFiDefault {
  /**
   * Authentication type
   */
  authType?: "nopass" | "";
}

interface WiFiPass extends WiFiDefault {
  /**
   * Authentication type
   */
  authType: "WEP" | "WPA";

  /**
   * Password, ignored if `authType="nopass"` (in which case it may be
   * omitted). Enclose in double quotes if it is an ASCII name, but could be
   * interpreted as hex (i.e. `"ABCD"`)
   */
  password?: string;
}

interface WiFiWPA2EAP extends WiFiDefault {
  /**
   * Authentication type
   */
  authType: "WPA2-EAP";

  /**
   * Password, ignored if `authType="nopass"` (in which case it may be
   * omitted). Enclose in double quotes if it is an ASCII name, but could be
   * interpreted as hex (i.e. `"ABCD"`)
   */
  password?: string;

  /**
   * (WPA2-EAP only) EAP method, like `TTLS` or `PWD`
   */
  eap?: string;

  /**
   * (WPA2-EAP only) Anonymous identity
   */
  anonIdentity?: string;

  /**
   * (WPA2-EAP only) Identity
   */
  identity?: string;

  /**
   * (WPA2-EAP only) Phase 2 method, like `MSCHAPV2`
   */
  phase2?: string;
}

type QrWiFiProps = WiFiNoPass | WiFiPass | WiFiWPA2EAP

export class QrWiFi {
  $$prop_def: QrWiFiProps;
  $$slot_def: {};
}
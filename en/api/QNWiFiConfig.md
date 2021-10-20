# QNWiFiConfig

WiFi information

### Attributes

|name|Types of|Explanation|
|:--|:--|:--|
|ssid |String|wifi name (length must be less than 32 bytes)|
|pwd |String|wifi password (when there is a password, the password length must be greater than or equal to 8 bytes and less than 64 bytes<br>(No password, you can pass nil)|
|serveUrl| String| Data transmission address, `WSP device setting is valid`, `Other devices can be set to null`, the format requires http://hostname:port/path/, the maximum length is 128 bytes|

## Method

### checkSSIDVail

Check the validity of the WiFi name

#### return value

Type: Boolean

### checkPWDVail

Check the validity of the WiFi password

#### return value

Type: Boolean

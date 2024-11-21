# Zigbee2MQTT External definition files
Zigbee2MQTT provides a way to extend its support to devices that are not natively supported by creating an external definition file. This file allows you to define the characteristics and attributes of an unsupported device, enabling it to be controlled and monitored through MQTT.
Creating an external definition file for an unsupported device in Zigbee2MQTT offers several benefits:
- Allows you to integrate devices that are not natively supported by the bridge.
- Provides a flexible way to extend support to new devices without modifying the bridge's code.
- Enables you to control and monitor unsupported devices through MQTT, making it easier to automate your smart home or business network.

I bought these devices and Z2M did not support these. 
![image](https://github.com/user-attachments/assets/45dd6da4-caa8-4f94-97aa-a4161d73e6dc)

These definition files make sure you can use these dimmer switches.
- For the 1 gang switch [ZDMS16-1.js](https://github.com/WaarlandIT/Zigbee2MQTT-external_definitions/blob/main/ZDMS16-1.js)
- For the 2 gang switch [ZDMS16-2.js](https://github.com/WaarlandIT/Zigbee2MQTT-external_definitions/blob/main/ZDMS16-2.js)

To add an external definition file you need to add these lines to your configuration.yaml in your Zigbee2MQTT config folder.
```
external_converters:
    - ZDMS16-2.js
```

Then the device will expose these parameters in Zibee2MQTT
![image](https://github.com/user-attachments/assets/5285b7d2-1751-4450-bc70-acf85ceabe59)

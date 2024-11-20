const tuya = require('zigbee-herdsman-converters/lib/tuya');

const definition = {
    fingerprint: [
        {
            modelID: 'TS0601',
            manufacturerName: '_TZE204_jtbgusdc',
        },
    ],

    model: 'TS0601',
    vendor: '_TZE204_jtbgusdc',
    description: 'Zigbee 2 channel Dimmer',
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    configure: tuya.configureMagicPacket,
    exposes: [
            tuya.exposes.lightBrightnessWithMinMax(),
            tuya.exposes.countdown(),
            tuya.exposes.lightType(),
            e.power_on_behavior().withAccess(ea.STATE_SET),
            tuya.exposes.switchType(),
            tuya.exposes.lightBrightnessWithMinMax(),
            tuya.exposes.countdown(),
            tuya.exposes.lightType(),
            e.power_on_behavior().withAccess(ea.STATE_SET),
            tuya.exposes.switchType(),
    ],
    meta: {
        tuyaDatapoints: [
            [1, 'state', tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
            [2, 'brightness', tuya.valueConverter.scale0_254to0_1000],
            [3, 'min_brightness', tuya.valueConverter.scale0_254to0_1000],
            [4, 'switch_type', tuya.valueConverterBasic.lookup({'toggle': tuya.enum(0), 'state': tuya.enum(1), 'momentary': tuya.enum(2)})],
            [5, 'max_brightness', tuya.valueConverter.scale0_254to0_1000],
            [6, 'countdown', tuya.valueConverter.countdown],
            [7, 'state', tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
            [8, 'brightness', tuya.valueConverter.scale0_254to0_1000],
            [9, 'min_brightness', tuya.valueConverter.scale0_254to0_1000],
            [10, 'switch_type', tuya.valueConverterBasic.lookup({'toggle': tuya.enum(0), 'state': tuya.enum(1), 'momentary': tuya.enum(2)})],
            [11, 'max_brightness', tuya.valueConverter.scale0_254to0_1000],
            [12, 'countdown', tuya.valueConverter.countdown],
            [14, 'power_on_behavior', tuya.valueConverter.powerOnBehaviorEnum],
            [13, 'light_type', tuya.valueConverter.lightType],
        ],
    },
};

module.exports = definition;
